package com.app.TrainingWebApp.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
public class controller {
    @GetMapping("/test")
    public ResponseEntity<String> testResponse() {return ResponseEntity.ok("Everything works.");}
}
