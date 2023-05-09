package com.app.TrainingWebApp.exercise;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ExerciseForPlan {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private Integer reps;
    private Float weight;
    private String videoUrl;
    private MuscleGroup muscleGroup;


//    ExerciseForPlan(
//            String name, Integer minReps, Integer maxReps, Integer minWeight,
//            Integer maxWeight, String videoUrl, MuscleGroup muscleGroup,
//            Integer reps, Float weight
//                    ){
//        name=name;
//        minReps=minReps;
//        maxReps=maxReps;
//        minWeight=minWeight;
//        maxWeight=maxWeight;
//        videoUrl=videoUrl;
//        muscleGroup=muscleGroup;
//        reps=reps;
//        weight=weight;
//    }
//
//    ExerciseForPlan(ExerciseBlank exerciseBlank, Integer reps, Float weight){
//        setName(exerciseBlank.getName());
//        setReps(reps);
//        setWeight(weight);
//        setMaxReps(exerciseBlank.getMaxReps());
//        setMinReps(exerciseBlank.getMinReps());
//        setMinWeight(exerciseBlank.getMinWeight());
//        setMaxWeight(exerciseBlank.getMaxWeight());
//        setVideoUrl(exerciseBlank.getVideoUrl());
//    }
}
