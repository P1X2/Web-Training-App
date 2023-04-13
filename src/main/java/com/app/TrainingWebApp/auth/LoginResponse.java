package com.app.TrainingWebApp.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@Data
public class LoginResponse {

    private String jwtToken;
}
