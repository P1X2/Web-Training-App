package com.app.TrainingWebApp.auth;

import com.app.TrainingWebApp.config.JwtService;
import com.app.TrainingWebApp.exceptions.ApiException;
import com.app.TrainingWebApp.exceptions.UsernameAlreadyExistsException;
import com.app.TrainingWebApp.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RequiredArgsConstructor
@RestController
@RequestMapping("rest/auth")
public class AuthenticationController {
    @Autowired
    public final AuthenticationService authenticationService;
    @Autowired
    public final JwtService jwtService;


    @PostMapping("/register")
    public ResponseEntity<?> registerUser(
        @RequestBody RegisterRequest registerRequest
    ) {

        return ResponseEntity.ok(authenticationService.register(registerRequest).getUsername());
    }


    @GetMapping("/get")
    public User getUser(
            @RequestParam String username
    ){
        return authenticationService.getUser(username);
    }

}
