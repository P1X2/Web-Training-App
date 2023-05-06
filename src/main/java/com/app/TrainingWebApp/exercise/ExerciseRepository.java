package com.app.TrainingWebApp.exercise;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface ExerciseRepository {
    Optional<Exercise> findByName(String name);
    List<Exercise> findByMuscleGroup(MuscleGroup group);
}
