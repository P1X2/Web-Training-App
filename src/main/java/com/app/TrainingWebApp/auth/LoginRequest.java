package com.app.TrainingWebApp.auth;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@Data
public class LoginRequest {
    private String username;
    private String password;
}
