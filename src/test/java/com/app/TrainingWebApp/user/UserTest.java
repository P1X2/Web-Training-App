package com.app.TrainingWebApp.user;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

public class UserTest {
    @Test
    void creatingUserTest(){

        User user = new User();
        user.setId(2L);
        user.setRole(Role.USER);
        user.setGender("Male");
        user.setUsername("AA");
        assertThat(user.getUsername().equals("AA")).isTrue();
        assertThat(user.getGender().equals("Male")).isTrue();
        assertThat(user.getId()==2L).isTrue();
        assertThat(user.getRole().equals(Role.TRAINER)).isFalse();
        assertThat(user.getRole().equals(Role.USER)).isTrue();
    }

    @Test
    void creatingTrainerTest(){
        User user = new User();
        user.setId(2L);
        user.setRole(Role.TRAINER);
        user.setGender("Male");
        user.setUsername("AA");
        assertThat(user.getUsername().equals("AA")).isTrue();
        assertThat(user.getGender().equals("Male")).isTrue();
        assertThat(user.getId()==2L).isTrue();
        assertThat(user.getRole().equals(Role.USER)).isFalse();
        assertThat(user.getRole().equals(Role.TRAINER)).isTrue();
    }
}
