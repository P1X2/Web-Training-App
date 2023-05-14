package com.app.TrainingWebApp.plan;


import com.app.TrainingWebApp.auth.AuthenticationService;
import com.app.TrainingWebApp.user.User;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/rest/plan")
public class TrainingPlanController {
    @Autowired
    TrainingPlanService trainingPlanService;


    @PostMapping("/create")
    public Long createTrainingPlan(
        @RequestBody TrainingPlanCreateRequest request,
        @AuthenticationPrincipal User user
    ){
        return trainingPlanService.createTrainingPlan(request,user).getId();
    }



    @GetMapping("/get")
    public TrainingPlan getTrainingPlan(
            @AuthenticationPrincipal User user
    ){
        return trainingPlanService.getTrainingPlan(user);
    }

}
