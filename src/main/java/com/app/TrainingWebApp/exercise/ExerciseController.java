package com.app.TrainingWebApp.exercise;


import com.app.TrainingWebApp.exercise.requests.ExerciseBlankCreateRequest;
import com.app.TrainingWebApp.exercise.requests.ExerciseForPlanCreateRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("rest/exercise")
@RequiredArgsConstructor
public class ExerciseController {
    @Autowired
    ExerciseService service;


    @GetMapping("/blank/get/all")
    public List<ExerciseBlank> getAllExercisesBlank(){
        return service.getAllExercisesBlank();
    }

    @GetMapping("/blank/get/group")
    public List<ExerciseBlank> getExercisesBlankGroup(
            @RequestParam MuscleGroup muscleGroup
    ){
        return service.getExercisesBlankByMuscleGroup(muscleGroup);
    }

    @PostMapping("/blank/create")
    public String createExerciseBlank(
            @RequestBody ExerciseBlankCreateRequest request
            ){
        try {
            return service.createExerciseBlank(request).getName();
        }catch (Throwable e){
            System.out.println(e.toString());
        }
        return null;
    }

    @PostMapping("/for_plan/create")
    public String createExerciseForPlan(
            @RequestBody ExerciseForPlanCreateRequest request
    ){
        return service.createExerciseForPlan(request).getName();
    }
}
