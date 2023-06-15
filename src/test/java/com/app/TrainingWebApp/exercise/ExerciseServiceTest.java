package com.app.TrainingWebApp.exercise;

import com.app.TrainingWebApp.exercise.requests.ExerciseBlankCreateRequest;
import com.app.TrainingWebApp.exercise.requests.ExerciseForPlanCreateRequest;
import com.app.TrainingWebApp.user.UserRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.never;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;


public class ExerciseServiceTest {
    @Mock
    private ExerciseBlankRepository exerciseBlankRepository;
    AutoCloseable autoCloseable;
    @Mock
    private ExerciseForPlanRepository exerciseForPlanRepository;
    AutoCloseable autoCloseable2;
    @Autowired
    private ExerciseService exerciseService;
    @BeforeEach
        //Runs before each test
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        autoCloseable2 = MockitoAnnotations.openMocks(this);
        exerciseService= new ExerciseService(exerciseBlankRepository,exerciseForPlanRepository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
        autoCloseable2.close();
    }

    @Test
    void createExerciseBlankTest(){
        ExerciseBlankCreateRequest request = ExerciseBlankCreateRequest
                .builder()
                .name("aa")
                .muscleGroup(MuscleGroup.ABS)
                .videoUrl("ss")
                .minReps(1)
                .maxReps(2)
                .minWeight(20)
                .maxWeight(30)
                .build();
        exerciseService.createExerciseBlank(request);
        verify(exerciseBlankRepository).findByName("AA");
        verify(exerciseBlankRepository).save(any());
    }

    @Test
    void createExerciseBlankThrowsRepsTest(){
        ExerciseBlankCreateRequest request = ExerciseBlankCreateRequest
                .builder()
                .name("aa")
                .muscleGroup(MuscleGroup.ABS)
                .videoUrl("ss")
                .minReps(5)
                .maxReps(2)
                .minWeight(20)
                .maxWeight(30)
                .build();
        assertThatThrownBy(()->exerciseService.createExerciseBlank(request))
                .isInstanceOf(IllegalArgumentException.class);

        verify(exerciseBlankRepository,never()).findByName("AA");
        verify(exerciseBlankRepository,never()).save(any());
    }

    @Test
    void createExerciseBlankThrowsRepsNegativeTest(){
        ExerciseBlankCreateRequest request = ExerciseBlankCreateRequest
                .builder()
                .name("aa")
                .muscleGroup(MuscleGroup.ABS)
                .videoUrl("ss")
                .minReps(1)
                .maxReps(-2)
                .minWeight(20)
                .maxWeight(30)
                .build();
        assertThatThrownBy(()->exerciseService.createExerciseBlank(request))
                .isInstanceOf(IllegalArgumentException.class);

        verify(exerciseBlankRepository,never()).findByName("AA");
        verify(exerciseBlankRepository,never()).save(any());
    }



    @Test
    void createExerciseBlankThrowsExerciseAlreadyExistsTest(){
        ExerciseBlankCreateRequest request = ExerciseBlankCreateRequest
                .builder()
                .name("aa")
                .muscleGroup(MuscleGroup.ABS)
                .videoUrl("ss")
                .minReps(1)
                .maxReps(-2)
                .minWeight(20)
                .maxWeight(30)
                .build();
        ExerciseBlank exerciseBlank = new ExerciseBlank();
        exerciseBlank.setName("AA");
        given(exerciseBlankRepository.findByName("AA"))
                .willReturn(Optional.of(exerciseBlank));
        assertThatThrownBy(()->exerciseService.createExerciseBlank(request))
                .isInstanceOf(IllegalArgumentException.class);

        verify(exerciseBlankRepository,never()).save(any());
    }



    @Test
    void createExerciseBlankThrowsWeightTest(){
        ExerciseBlankCreateRequest request = ExerciseBlankCreateRequest
                .builder()
                .name("aa")
                .muscleGroup(MuscleGroup.ABS)
                .videoUrl("ss")
                .minReps(1)
                .maxReps(-2)
                .minWeight(10)
                .maxWeight(30)
                .build();
        assertThatThrownBy(()->exerciseService.createExerciseBlank(request))
                .isInstanceOf(IllegalArgumentException.class);

        verify(exerciseBlankRepository,never()).findByName("AA");
        verify(exerciseBlankRepository,never()).save(any());
    }
//    @Test
//    void createExerciseForPlan(){
//        ExerciseForPlanCreateRequest request = ExerciseForPlanCreateRequest
//                .builder()
//                .exerciseBlankName("AA")
//                .advancement("beginner")
//                .mainTarget("growth")
//                .weight(80F)
//                .build();
////        assertThatThrownBy(()->exerciseService.createExerciseForPlan(request))
////                .isInstanceOf(IllegalArgumentException.class);
//        exerciseService.createExerciseForPlan(request);
//        verify(exerciseBlankRepository).findByName("AA");
//        verify(exerciseForPlanRepository).save(any());
//    }
    @Test
    void createExerciseBlankThrowsWeightNegativeTest(){
        ExerciseBlankCreateRequest request = ExerciseBlankCreateRequest
                .builder()
                .name("aa")
                .muscleGroup(MuscleGroup.ABS)
                .videoUrl("ss")
                .minReps(1)
                .maxReps(2)
                .minWeight(-10)
                .maxWeight(30)
                .build();
        assertThatThrownBy(()->exerciseService.createExerciseBlank(request))
                .isInstanceOf(IllegalArgumentException.class);

        verify(exerciseBlankRepository,never()).findByName("AA");
        verify(exerciseBlankRepository,never()).save(any());
    }



    @Test
    void getAllTest(){
        exerciseService.getAllExercisesBlank();
        verify(exerciseBlankRepository).findAll();
    }
}
