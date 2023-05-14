package com.app.TrainingWebApp.plan;


import com.app.TrainingWebApp.user.User;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class TrainingPlanService {
    @Autowired
    private final TrainingPlanRepository repository;

    public TrainingPlan createTrainingPlan(TrainingPlanCreateRequest request, User user){
        return null;
    }

    public TrainingPlan getTrainingPlan(User user){
        return user.getTrainingPlan();
    }


}
