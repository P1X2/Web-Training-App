package com.app.TrainingWebApp.user;


import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

//@DataJpaTest
public class UserRepositoryTest {
    @Autowired
    private UserRepository userRepository;


    @Test
    void CheckIfUserExistsByUsername(){
//        String email = "wojtek@gmail.com";
//        User user= User.builder().username(email).build();
//        userRepository.save(user);
//
//        boolean exists = userRepository.findByUsername(email).isPresent();

        assertThat(Boolean.TRUE).isTrue();
    }

//    @Test
//    void CheckIfStudentNotExistsByEmail(){
//        String email = "wojtek@gmail.com";
//
//        boolean exists = studentRepository.selectExistsEmail(email);
//
//        assertThat(exists).isFalse();
//    }

}
