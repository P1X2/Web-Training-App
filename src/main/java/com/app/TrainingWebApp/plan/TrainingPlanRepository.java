package com.app.TrainingWebApp.plan;

import com.app.TrainingWebApp.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface TrainingPlanRepository extends JpaRepository<TrainingPlan,Long> {}
