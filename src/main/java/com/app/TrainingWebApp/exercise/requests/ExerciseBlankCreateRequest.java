package com.app.TrainingWebApp.exercise.requests;


import com.app.TrainingWebApp.exercise.MuscleGroup;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@AllArgsConstructor
@Data
@Builder
public class ExerciseBlankCreateRequest {
    private String name;
    private Integer minReps;
    private Integer maxReps;
    private Integer maxWeight;
    private Integer minWeight;
    private String videoUrl;
    private MuscleGroup muscleGroup;
}
