import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './img.css'
import tom from './tom.jpg'
import toml from './tom lustro.jpg'


/*<h2><span>Join us!</span></h2>

              <Button
                className="btn"
                size="lg"
                id="submit"
                type="button"
                variant="success"
                onClick={() => window.location.href = "/register"}
              >
                Register

              </Button>*/


const Home = () => {
  return (
    <>
        <div class="row text-center bg-dark py-3">
            <h1 class="display-1 fw-semibold text-white">Welcome to gym app!</h1>

        </div>

        <div class="row">
            <div class="col">
                  <img src={tom} width="100%" alt="Tom" />
            </div>

            <div class="col-7 fs-3 pt-4 text-center">
                <div class="row">
                    <div class="display-2 mb-4">Who are we?</div>
                    <p>

                    We are a professional gym center that provides comprehensive care and support in
                    achieving your fitness goals. Our experienced team consists
                    of highly qualified trainers who are ready to assist
                    you in every aspect of your journey to health and fitness.

                    </p>
                </div>

                <div class="row">
                    <div class="display-2 my-4">What do we do?</div>
                    <p>

                    Our main goal is to provide you with the perfect training environment where you can
                    develop your skills and achieve your goals. We believe that well-designed and diverse training programs are the key to success. Therefore,
                     we offer a wide range of fitness classes, a
                     state-of-the-art gym with modern equipment, and various training programs for people at different levels of fitness.

                    </p>
                </div>

                <div class="row">
                    <div class="display-2 my-4">What do we offer?</div>

                    <p><span class="fw-semibold fs-2">1. </span>
                        Personalized training plan: Our experienced trainers are ready to create a personalized training plan tailored to your goals
                        and preferences. This will allow you to train effectively and efficiently, maximizing your progress.
                    </p>

                    <p><span class="fw-semibold fs-2">2. </span>
                        Gym quiz: We want to help you identify areas where you can focus your efforts. Our interactive gym quiz will help
                        determine your strengths and areas for improvement, so you can concentrate on the right areas during your training.
                    </p>
                    <p><span class="fw-semibold fs-2">3. </span>
                        Collaboration with a trainer: Our team of trainers is here to motivate, advise, and provide support at every stage of your fitness journey.
                        They will inspire you, guide you, and provide the necessary knowledge to help you achieve your goals faster and more effectively.
                    </p>
                </div>

                <div class="row">
                    <div class="display-2 my-4">Why should you partner with us?</div>

                    <h2>
                    Collaborating with us means joining a community that is dedicated to your success.
                     Here are a few reasons why you should choose to work with us:
                     </h2>

                    <p><span class="fw-semibold fs-2">1. </span>
                        Expertise and Professionalism: Our team consists of highly trained and knowledgeable trainers who are passionate
                        about helping you reach your fitness goals. With their expertise,
                        they will guide you through proper techniques, provide valuable advice, and ensure your safety during workouts.
                    </p>

                    <p><span class="fw-semibold fs-2">2. </span>
                        Personalized Approach: We understand that everyone has unique fitness goals and individual
                        needs. That's why we tailor our programs and training plans to suit your specific requirements. We take into account your
                        abilities, preferences, and any limitations to create a personalized fitness journey just for you.
                    </p>
                    <p><span class="fw-semibold fs-2">3. </span>
                        Motivation and Support: We believe in the power of motivation and support in achieving success. Our trainers will be there to inspire
                         and encourage you throughout your fitness journey. They will celebrate your achievements,
                        provide guidance during challenging times, and keep you accountable to stay on track.
                    </p>

                   <p>
                       In addition to helping you achieve your fitness goals, regular gym workouts can have numerous positive health effects.
                       Engaging in physical exercise can improve cardiovascular health, increase muscle strength and endurance, enhance flexibility and mobility,
                       and boost overall energy levels. Moreover, regular gym sessions can also reduce stress, improve mood, and promote better sleep patterns. By incorporating
                       gym workouts into your routine,
                       you can experience a wide range of health benefits that contribute to your overall well-being.
                   </p>
                </div>

                <div class="row">
                    <div class="display-2 my-4 fw-semibold">Join us!</div>
                    <p>
                        Join our community and start achieving your fitness goals today! <span class="text-secondary fs-2"><a class="text-danger" href="/register">Register</a></span> to learn more and schedule a free consultation.
                    </p>
                </div>








            </div>

            <div class="col"><img src={toml} width="100%"  alt="Tom" /></div>

        </div>


        <div class="row">





        </div>


    </>
  );
};

export default Home;
