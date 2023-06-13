package com.app.TrainingWebApp.plan;


import com.app.TrainingWebApp.exercise.*;
import com.app.TrainingWebApp.exercise.requests.ExerciseForPlanCreateRequest;
import com.app.TrainingWebApp.user.User;
import com.app.TrainingWebApp.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TrainingPlanService {
    @Autowired
    private final TrainingPlanRepository trainingPlanRepository;
    @Autowired
    private final ExerciseService exerciseService;
    @Autowired
    private final ExerciseBlankRepository exerciseBlankRepository;
    private final UserRepository userRepository;

    public TrainingPlan createTrainingPlan(TrainingPlanCreateRequest request, User user){
        Random random = new Random();
        List<String> exerciseBlankList = new ArrayList<>();
        List<ExerciseBlank> absExercises=exerciseBlankRepository.findByMuscleGroup(MuscleGroup.ABS).stream()
                .filter(exerciseBlank -> !exerciseBlank.getVideoUrl().equals("1"))
                .collect(Collectors.toList());
        List<ExerciseBlank> legsExercises=exerciseBlankRepository.findByMuscleGroup(MuscleGroup.LEGS).stream()
                .filter(exerciseBlank -> !exerciseBlank.getVideoUrl().equals("1"))
                .collect(Collectors.toList());
        List<ExerciseBlank> backExercises=exerciseBlankRepository.findByMuscleGroup(MuscleGroup.BACK).stream()
                .filter(exerciseBlank -> !exerciseBlank.getVideoUrl().equals("1"))
                .collect(Collectors.toList());
        List<ExerciseBlank> armsExercises=exerciseBlankRepository.findByMuscleGroup(MuscleGroup.ARMS).stream()
                .filter(exerciseBlank -> !exerciseBlank.getVideoUrl().equals("1"))
                .collect(Collectors.toList());
        List<ExerciseBlank> chestExercises=exerciseBlankRepository.findByMuscleGroup(MuscleGroup.CHEST).stream()
                .filter(exerciseBlank -> !exerciseBlank.getVideoUrl().equals("1"))
                .collect(Collectors.toList());

        exerciseBlankList.add(absExercises
                .get(random.nextInt(absExercises.size())).getName());
        exerciseBlankList.add(legsExercises
                .get(random.nextInt(legsExercises.size())).getName());
        exerciseBlankList.add(backExercises
                .get(random.nextInt(backExercises.size())).getName());
        exerciseBlankList.add(chestExercises
                .get(random.nextInt(chestExercises.size())).getName());
        exerciseBlankList.add(armsExercises
                .get(random.nextInt(armsExercises.size())).getName());
        List<ExerciseBlank> targetMuscleGroupExercises = exerciseBlankRepository.findByMuscleGroup(request.getMainMuscleGroup());
        String targetMuscleGroupExercise = targetMuscleGroupExercises.get(random.nextInt(targetMuscleGroupExercises.size())).getName();
        while (exerciseBlankList.contains(targetMuscleGroupExercise)){
            targetMuscleGroupExercise=targetMuscleGroupExercises.get(random.nextInt(targetMuscleGroupExercises.size())).getName();
        }
        exerciseBlankList.add(targetMuscleGroupExercise);
        List<ExerciseForPlan> exerciseForPlanList = new ArrayList<>();
        ExerciseForPlanCreateRequest exerciseForPlanCreateRequest = ExerciseForPlanCreateRequest
                .builder()
                .advancement(request.getAdvancement())
                .mainTarget(request.getMainTarget())
                .weight(request.getWeight())
                .build();
        for (String exerciseName : exerciseBlankList){
            exerciseForPlanCreateRequest.setExerciseBlankName(exerciseName);
            exerciseForPlanList.add(exerciseService.createExerciseForPlan(exerciseForPlanCreateRequest));
        }
        Integer timeBreak=2;

        if (request.getMainTarget().equals("strength")){
            timeBreak = 5;
        } else if (request.getMainTarget().equals("stamina")) {
            timeBreak=3;
        }

        TrainingPlan trainingPlan = TrainingPlan
                .builder()
                .exercises(exerciseForPlanList)
                .breakTime(timeBreak)
                .build();
        user.setTrainingPlan(trainingPlan);
        trainingPlanRepository.save(trainingPlan);
        userRepository.save(user);
        return trainingPlan;
    }

    public TrainingPlan getTrainingPlan(User user){
        return user.getTrainingPlan();
    }


}
