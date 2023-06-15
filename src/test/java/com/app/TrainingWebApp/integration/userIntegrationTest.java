package com.app.TrainingWebApp.integration;

import com.app.TrainingWebApp.user.User;
import com.app.TrainingWebApp.user.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.jws.soap.SOAPBinding;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

//@SpringBootTest
////@TestPropertySource(
////        locations = "classpath:application-it.properties"
////)
////@AutoConfigureMockMvc
//public class userIntegrationTest {
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    @Autowired
//    private ObjectMapper objectMapper;
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Test
//    void registerUserTest() throws Exception{
////        User user =new User();
////        user.setUsername("aaa");
////        ResultActions resultActions = mockMvc
////                .perform(post("/rest/auth/register")
////                        .contentType(MediaType.APPLICATION_JSON)
////                        .content(objectMapper.writeValueAsString(user)));
////        resultActions.andExpect(status().isOk());
////        List<User> students = userRepository.findAll();
////        assertThat(students)
////                .usingElementComparatorIgnoringFields("id")
////                .contains(user);
//    }
//
//}
