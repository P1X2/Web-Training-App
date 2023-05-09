package com.app.TrainingWebApp.auth;


import com.app.TrainingWebApp.config.JwtService;
import com.app.TrainingWebApp.exceptions.UsernameAlreadyExistsException;
import com.app.TrainingWebApp.user.Role;
import com.app.TrainingWebApp.user.User;
import com.app.TrainingWebApp.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@RequiredArgsConstructor
@Service
public class AuthenticationService {
    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final JwtService jwtService;
    @Autowired
    private final AuthenticationManager authenticationManager;

    public User register(RegisterRequest request){
        userRepository.findByUsername(request.getUsername())
                .ifPresent(foundUser -> {
                    throw new UsernameAlreadyExistsException(
                            "The username "+foundUser.getUsername()+" has been taken"
                    );
                });
        User user = User.builder()
                .username(request.getUsername())
                .password(new BCryptPasswordEncoder().encode(request.getPassword()))
                .gender(request.getGender())
                .role(Role.USER)
                .build();
        return userRepository.save(user);
    }

    public LoginResponse loginUser(LoginRequest request){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(),request.getPassword()));
        User user = userRepository.findByUsername(request.getUsername()).orElseThrow();
        String jwtToken = jwtService.GenerateJwtToken(new HashMap<String,Object>(),user);
        return new LoginResponse(jwtToken);
    }

    public User getUser(String username){
        return userRepository.findByUsername(username).orElseThrow();
    }
}
