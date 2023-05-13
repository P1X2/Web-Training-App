package com.app.TrainingWebApp.exercise.requests;


import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class ExerciseForPlanCreateRequest {
    private String exerciseBlankName;
    private Float weight;
    private String advancement;
    private String mainTarget;
}
