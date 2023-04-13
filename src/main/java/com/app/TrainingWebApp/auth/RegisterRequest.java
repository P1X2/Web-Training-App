package com.app.TrainingWebApp.auth;


import lombok.Data;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Data
public class RegisterRequest {
    private String username;
    private String password;
    private String gender;
}
