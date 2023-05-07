package com.app.TrainingWebApp.exercise;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;



public interface ExerciseBlankRepository extends JpaRepository<ExerciseBlank,Long> {
    Optional<ExerciseBlank> findByName(String name);
    List<ExerciseBlank> findByMuscleGroup(MuscleGroup group);
}
