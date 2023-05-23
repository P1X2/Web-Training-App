package com.app.TrainingWebApp.plan;

import com.app.TrainingWebApp.exercise.ExerciseForPlan;
import jakarta.persistence.*;
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
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true , fetch = FetchType.EAGER)
    private List<ExerciseForPlan> exercises;

}
