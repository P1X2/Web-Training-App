package com.app.TrainingWebApp.plan;


import com.app.TrainingWebApp.exercise.MuscleGroup;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
public class TrainingPlanCreateRequest {
    private String mainTarget;
    private String advancement;
    private Float weight;
    private MuscleGroup mainMuscleGroup;
}
