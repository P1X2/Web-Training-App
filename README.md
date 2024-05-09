# Web Training App

This project is a gym application designed for both trainers and regular users. The app includes features such as user authentication, exercise and workout plan management, quizzes, and fitness calculators.

## Project Overview

### Key Features
- **User Roles**: Divide users into two roles:
  - **Trainers**: Can create exercises and group them into workout plans.
  - **Regular Users**: Can access workout plans created and shared with them by trainers.
  
- **Authentication**: User login and registration with user data stored in a database.

- **Exercise Management**:
  - Trainers can add exercises through the application.
  - Each exercise has attributes like:
    - Number of repetitions
    - Number of sets
    - Weight
    - Rest period between sets
    - Link to a video demonstrating the exercise
  
- **Workout Plans**:
  - Trainers can group exercises into workout plans.
  - Regular users have access to the training plan created and shared by their trainers.

- **Quizzes**:
  - Free quizzes are available to help regular users collaborate with trainers.
  - Regular users can access the quizzes through the training plan page after logging in.

- **Calculators**:
  - Fitness calculators like BMI and max bench press.

### Application Pages
- **Home Page**: Contains a link to the login page.
- **Login Page**: Allows users to log in.
- **Registration Page**: Allows new users to register.
- **User Page**: Displays the training plan for regular users with a link to the quiz page.
- **Quiz Page**: Provides quizzes for users.
- **Trainer's Workout Plans Page**: Displays all workout plans created by the trainer.
- **Add Exercises and Plans Page**: Allows trainers to add exercises and workout plans.
- **Workout Plan Page**: Displays a specific workout plan.
- **Calculators Pages**: Various fitness calculators like BMI and max bench press.

### Starting the Application

1. Navigate to the folder `src/main/java/com/app/TrainingWebApp` and run the `main` method of the `TrainingWebAppApplication` class from the `TrainingWebAppApplication.java` file.

2. In the terminal, navigate to the `frontend` folder and then run the command `npm start`.

The database is remote, so there's no need to configure it.

