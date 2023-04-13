package com.app.TrainingWebApp.exceptions;

public class UsernameAlreadyExistsException extends RuntimeException{
    public UsernameAlreadyExistsException(String msg){
        super(msg);
    }
}
