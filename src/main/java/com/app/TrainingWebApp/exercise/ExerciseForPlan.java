package com.app.TrainingWebApp.exercise;


import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExerciseForPlan extends ExerciseBlank {
    private Integer reps;
    private Float weight;
}
