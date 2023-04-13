package com.app.TrainingWebApp.auth;


import com.app.TrainingWebApp.exceptions.UsernameAlreadyExistsException;
import com.app.TrainingWebApp.user.User;
import com.app.TrainingWebApp.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AuthenticationService {
    private final UserRepository userRepository;

    public User register(RegisterRequest request){
        userRepository.findByUsername(request.getUsername())
                .ifPresent(foundUser -> {
                    throw new UsernameAlreadyExistsException(
                            "The username "+foundUser.getUsername()+" has been taken"
                    );
                });
        User user = User.builder()
                .username(request.getUsername())
                .password(request.getPassword())
                .gender(request.getGender())
                .build();
        return userRepository.save(user);
    }

    public User getUser(String username){
        return userRepository.findByUsername(username).orElseThrow();
    }
}
