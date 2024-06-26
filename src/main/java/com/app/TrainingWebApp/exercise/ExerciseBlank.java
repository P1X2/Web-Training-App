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
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ExerciseBlank {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private Integer minReps;
    private Integer maxReps;
    private Integer minWeight;
    private Integer maxWeight;
    private String videoUrl;
    private MuscleGroup muscleGroup;
}
