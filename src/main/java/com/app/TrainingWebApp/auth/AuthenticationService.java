package com.app.TrainingWebApp.auth;


import com.app.TrainingWebApp.user.User;
import com.app.TrainingWebApp.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AuthenticationService {
    private final UserRepository userRepository;

    public User register(RegisterRequest request){
        User user = User.builder()
                .username(request.getUsername())
                .password(request.getPassword())
                .gender(request.getGender())
                .build();
        return userRepository.save(user);
    }

}
