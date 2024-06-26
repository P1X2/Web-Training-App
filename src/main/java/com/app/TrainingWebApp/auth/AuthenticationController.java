package com.app.TrainingWebApp.auth;

import com.app.TrainingWebApp.config.JwtService;
import com.app.TrainingWebApp.exceptions.ApiException;
import com.app.TrainingWebApp.exceptions.UsernameAlreadyExistsException;
import com.app.TrainingWebApp.user.Role;
import com.app.TrainingWebApp.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
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
        try {
            return ResponseEntity.ok(authenticationService.register(registerRequest).getUsername());
        }catch (UsernameAlreadyExistsException exception){
            return new ResponseEntity(HttpStatus.CONFLICT);
        }
        }

    @PostMapping("/login")
    public ResponseEntity<?> login(

            @RequestBody LoginRequest request
    ) {
        try {
            return ResponseEntity.ok(authenticationService.loginUser(request));
        } catch (Throwable e) {
            System.out.println(e.toString());
        }
        return null;
    }


    @GetMapping("/get")
    public User getUser(
            @RequestParam String username
    ){
        return authenticationService.getUser(username);
    }

    @GetMapping("/validate")
    public ResponseEntity<Boolean> validateJwt(
            @RequestParam String token, @AuthenticationPrincipal User user
    ){
        try {
            return ResponseEntity.ok(jwtService.isTokenValid(user, token));
        }catch (Exception e){
            return ResponseEntity.ok(false);
        }
    }

    @GetMapping("/role")
    public RoleResponse getRole(
            @AuthenticationPrincipal User user
    ){
        return new RoleResponse(user.getRole().name());
    }

}
