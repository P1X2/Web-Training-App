import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import 'bootstrap/dist/css/bootstrap.min.css';
import './thermometer.css';




const Testoboost = () => {
  const opts = {
      height: '790',
      width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

////////// <- mativationmeter->
////////////
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature((prevTemperature) =>
        prevTemperature >= 150 ? 0 : prevTemperature + 7

      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

//////////
//////////

  const getVideoId = (videoUrl) => {
    const urlParams = new URLSearchParams(new URL(videoUrl).search);
    return urlParams.get('v');
  };

///////////
/////////////


  return (
    <div class="container-fluid bg-secondary pb-5">


        <div class="row text-center text-decoration-underline py-3">
            <h1 class="display-2 fw-semibold pt-2">TOM PLATZ - THE LEGEND</h1>
        </div>

       <p></p>

        <div class="row ">
            <div class="col-8 text-center ml-2">
               <YouTube videoId={getVideoId("https://www.youtube.com/watch?v=JA5ASP4vOZg&ab_channel=Overload")} opts={opts} />
            </div>

            <div class="col text-center">
                <p>Lack of motivation</p>
                <p>Lack of time</p>
                <p>Pain </p>


                <div className="container">
                      <div className="thermometer">
                        <div
                          className="thermometer-mercury"
                          style={{ height: `${temperature}%` }}
                        ></div>
                      </div>
                      <div className="temperature" class="fs-2 fw-bold"> Can you fell your motivation increasing?</div>
                    </div>
                </div>
        </div>



        <p></p>

        <div class="row fs-2 text-right mb-2">

            <div class="col-2">
            </div>

            <div class="col-9 fs-2">
                 <p class="lh-sm text-right">
                    Tom Platz, a bodybuilding legend, is a true
                    embodiment of determination, passion, and dedication. His legendary workouts and incredible achievements make him an inspiration to many around the world...
                 </p>

                <p class="lh-sm">
                    An inseparable part of Tom Platz's physique is his awe-inspiring legs. Their development and definition are unparalleled in the world of bodybuilding. Tom dedicated countless hours to grueling leg workouts,
                    no matter how tough they were. This serves as a testament that success doesn't come easy – it requires effort, perseverance, and sacrifice.
                </p>


                <p class="lh-sm">
                     Prepare yourself for the challenge and pursue your goals, just like Tom Platz. Great strength is born out of determination and unwavering effort.
                      Let Tom Platz be your inspiration to surpass your own limitations and achieve the seemingly impossible.
                </p>
            </div>
        </div>

        <div class="row pt-3">
            <div class="col">
                <h1 class=" text-center text-danger pb-2 display-1 fw-semibold"> Still not convinced? </h1>

                <p class="lh-sm fs-2 text-center" >
                <span><a class="" href="/register" class="text-danger">Register</a></span>  and achieve it all by yourself!
                </p>
                <p class="lh-sm fs-3 text-center pb-2">Our team of coaches make miracles on daily basis - give yourself a chance to have better life</p>
            </div>
        </div>



    </div>
  );
};

export default Testoboost;