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
}
