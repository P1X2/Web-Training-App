package com.app.TrainingWebApp.exceptions;



import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;



@RestControllerAdvice
public class ApiExceptionHandler {
    @ExceptionHandler(UsernameAlreadyExistsException.class)
    public ResponseEntity<Object> handleUsernameNotFound(UsernameAlreadyExistsException exception){
        HttpStatus status = HttpStatus.BAD_REQUEST;
        ApiException apiException = new ApiException(exception.getMessage(),status);
        return new ResponseEntity<>(apiException,status);
    }


//    @ExceptionHandler(UsernameAlreadyExistsException.class)
//    public ResponseEntity<?> handleException(UsernameAlreadyExistsException e){
//        return ResponseEntity
//                .badRequest()
//                .body(e.getMessage());
//}
}
