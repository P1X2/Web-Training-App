import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './img.css'

import tom from './img/tom.jpg'
import toml from './img/tom lustro.jpg'
import ronnie2 from './img/ronnie2.jpg'
import ronnie3 from './img/ronie3.jpg'
import arnold1 from './img/arnold1.jpg'
import arnold2 from './img/arnold2.jpg'
import arnold3 from './img/arnold3.jpg'
import arnold4 from './img/arnold4.jpg'
import chris1 from './img/chris1.jpg'
import chris2 from './img/chris2.jpg'
import bobby1 from './img/boooooooby1.jpg'
import miro1 from './img/miro1.jpg'
import zane1 from './img/zane1.jpg'
import zane2 from './img/zane2.jpg'
import phil1 from './img/phil1.jpg'





const Home = () => {
  return (
    <>
        <div class="row text-center bg-dark py-3">
            <h1 class="display-1 fw-semibold text-white">Welcome to gym app!</h1>

        </div>

        <div class="row ml-1">

            <div class="col-2">
                  <img src={tom} class="img" width="100%" alt="Tom" />
                  <img src={ronnie2} class="img" width="100%" alt="Tom" />
                  <img src={arnold1} class="img" width="100%" alt="Tom" />
                  <img src={zane2} class="img" width="100%" alt="Tom" />
                  <img src={arnold4} class="img" width="100%" alt="Tom" />
                  <img src={chris2} class="img" width="100%" alt="Tom" />


            </div>

            <div class="col-1"></div>

            <div class="col-6 fs-3 text-center">
                <div class="row">
                    <div class="display-2 mt-5 mb-3">Who are we?</div>
                    <p>

                    We are a professional gym app that provides comprehensive care and support in
                    achieving your fitness goals. Our experienced team consists
                    of highly qualified trainers who are ready to assist
                    you in every aspect of your journey to health and fitness.

                    </p>
                </div>

                <div class="row">
                    <div class="display-2 mt-5 mb-3">What do we do?</div>
                    <p>

                    Our main goal is to provide you with the perfect training environment where you can
                    develop your skills and achieve your goals. We believe that well-designed and diverse training programs are the key to success. Therefore,
                     we offer various training programs for people at different levels of fitness.

                    </p>
                </div>

                <div class="row">
                    <div class="display-2 mt-3 mb-3">What do we offer?</div>

                    <p><span class="fw-semibold fs-2">1. </span>
                        Personalized training plan: Our app ready to create a personalized training plan tailored to your goals
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
                    <div class="display-2 mt-5 mb-3">Why should you partner with us?</div>

                    <h2 class="my-2">
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

                </div>
            </div>
            <div class="col-1"></div>
            <div class="col-2 float-right">

                  <img src={bobby1} class="img" width="100%" alt="Tom" />
                  <img src={chris2} class="img" width="100%" alt="Tom" />

                  <img src={miro1} class="img" width="100%" alt="Tom" />
                  <img src={arnold2} class="img" width="100%" alt="Tom" />
                  <img src={ronnie3} class="img" width="100%" alt="Tom" />
                  <img src={zane1} class="img" width="100%" alt="Tom"/>
                  <img src={phil1} class="img" width="100%" alt="Tom"/>


            </div>

        </div>




        <div class="row">
            <div class="display-2 text-center fw-semibold mt-5 mb-3">Opinions about our work</div>
          <div class="col-2"></div>

          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Anna K.</h5>
                <p class="card-text">
                    "I wholeheartedly recommend this app! Thanks to their personalized approach to training, I
                    achieved my fitness goals faster than I expected. The trainers are professional and always ready to help.
                 </p>
              </div>
            </div>
          </div>

          <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Michał S.</h5>
                  <p class="card-text">
                  "After many unsuccessful attempts, I finally found the perfect place to start training. This is a app where I feel comfortable and see
                   real progress. The trainers are highly qualified and always approach each client individually. I highly recommend it!"
                   </p>

                </div>
              </div>
            </div>

          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Katarzyna B.</h5>
                <p class="card-text">
                    "I am very satisfied with the services of this app and trainers. They developed a
                    training plan for me that they tailored to my goals and limitations. Thanks to their support and motivation, I feel more confident a
                    nd stronger than ever before. I highly recommend it!"
                </p>

              </div>
            </div>
          </div>

          <div class="col-2"></div>

        </div>
        <div class="row mt-5">
            <div class="col-2"></div>
            <div class="col fs-3 text-center">

            <div class="display-2 mt-5 mb-3 fw-semibold " ><span class="text-secondary"><a class="text-danger" href="/register">Join our community!</a></span></div>

            <div class="card">
                          <div class="card-body">
                             Start achieving your fitness goals today! <span class="text-secondary fs-2"><a class="text-danger" href="/register">Register</a></span> to learn more and schedule a free consultation.

                          </div>
                        </div>

            </div>

        <div class="col-2"></div>



        </div>










    </>
  );
};

export default Home;
