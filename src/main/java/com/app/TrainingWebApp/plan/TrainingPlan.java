package com.app.TrainingWebApp.plan;

import com.app.TrainingWebApp.exercise.ExerciseForPlan;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TrainingPlan {
    @Id
    @GeneratedValue
    private Long id;
    private Integer breakTime;
    @OneToMany
    private List<ExerciseForPlan> exercises;

}
