package com.app.TrainingWebApp.exercise;

import com.app.TrainingWebApp.exercise.requests.ExerciseBlankCreateRequest;
import com.app.TrainingWebApp.exercise.requests.ExerciseForPlanCreateRequest;
import lombok.AllArgsConstructor;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ExerciseService {
    private final Integer AVERAGE_WEIGHT = 75;
    @Autowired
    private final ExerciseBlankRepository exerciseBlankRepository;
    private final ExerciseForPlanRepository exerciseForPlanRepository;

    public List<ExerciseBlank> getAllExercisesBlank(){
        return exerciseBlankRepository.findAll();
    }

    public List<ExerciseBlank> getExercisesBlankByMuscleGroup(MuscleGroup muscleGroup){
        List<ExerciseBlank> exercises = exerciseBlankRepository.findByMuscleGroup(muscleGroup);
        if (exercises.isEmpty()){
            throw new ObjectNotFoundException(ExerciseBlank.class,"Invalid muscle group "+muscleGroup);
        }
        return exercises;
    }

    public ExerciseBlank createExerciseBlank(ExerciseBlankCreateRequest request){
        if (request.getName().isEmpty() ||
                request.getMinReps()<1 ||
                request.getMaxReps()< request.getMinReps() ||
                request.getMinWeight() < 0 ||
                request.getMaxWeight() <request.getMinWeight()
        ){
            throw new IllegalArgumentException("request is wrong");
        }
        exerciseBlankRepository.findByName(request.getName()).ifPresent(exercise->{
            throw new IllegalArgumentException("exercise already exists");
        });

        ExerciseBlank exerciseBlank = ExerciseBlank
                .builder()
                .name(request.getName())
                .maxReps(request.getMaxReps())
                .minReps(request.getMinReps())
                .maxWeight(request.getMaxWeight())
                .minWeight(request.getMinWeight())
                .muscleGroup(request.getMuscleGroup())
                .videoUrl(request.getVideoUrl())
                .build();
        return exerciseBlankRepository.save(exerciseBlank);
    }

    public ExerciseForPlan createExerciseForPlan(ExerciseForPlanCreateRequest request)
    {
            ExerciseBlank exerciseBlank = exerciseBlankRepository
                    .findByName(request.getExerciseBlankName())
                    .orElseThrow(() -> new ObjectNotFoundException(ExerciseBlank.class,"Exercise not found"));
            Integer reps;
            Float weight;
            if (request.getMainTarget().equals("growth")) {
                reps = (exerciseBlank.getMaxReps() + exerciseBlank.getMinReps()) / 2;
            } else if (request.getMainTarget().equals("strength")) {
                reps = exerciseBlank.getMinReps();
            } else if (request.getMainTarget().equals("stamina")) {
                reps = exerciseBlank.getMaxReps();
            } else {
                throw new IllegalArgumentException("Invalid Main target given: "+ request.getMainTarget());
            }

            if (request.getAdvancement().equals("beginner")){
                weight= Float.valueOf(exerciseBlank.getMinWeight());
            } else if (request.getAdvancement().equals("intermediate")) {
                weight= (float) ((exerciseBlank.getMinWeight()+exerciseBlank.getMaxWeight())/2);
            } else if (request.getAdvancement().equals("expert")){
                weight= Float.valueOf(exerciseBlank.getMaxWeight());
            } else {
                throw new IllegalArgumentException("Invalid advancement given: "+ request.getAdvancement());
            }
            weight *= request.getWeight()/AVERAGE_WEIGHT;
        ExerciseForPlan exerciseForPlan = ExerciseForPlan.builder()
                .name(exerciseBlank.getName())
                .videoUrl(exerciseBlank.getVideoUrl())
                .muscleGroup(exerciseBlank.getMuscleGroup())
                .weight(weight)
                .reps(reps)
                .build();
        return exerciseForPlanRepository.save(exerciseForPlan);
    }

}
