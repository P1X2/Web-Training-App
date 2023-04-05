package com.app.TrainingWebApp.auth;


import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@NoArgsConstructor
@Data
public class RegisterRequest {
    private String username;
    private String password;
    private String gender;

}
