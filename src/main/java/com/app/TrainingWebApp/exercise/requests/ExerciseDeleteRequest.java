package com.app.TrainingWebApp.exercise.requests;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;


@Data
@Builder
public class ExerciseDeleteRequest {
    private Long id;

    public ExerciseDeleteRequest(@JsonProperty("exerciseId") Long exerciseId) {
        this.id = exerciseId;
    }
}