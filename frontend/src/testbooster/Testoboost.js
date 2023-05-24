import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import 'bootstrap/dist/css/bootstrap.min.css';
import './thermometer.css';



const Testoboost = () => {
  const opts = {
      height: '790',
      width: '1040',
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
        prevTemperature >= 150 ? 0 : prevTemperature + 5

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
    <div class="container-fluid bg-secondary">
        <div class="row fs-1 bg-danger">
            <div class="col">
            <h1 class="text-center">Goals </h1>
            </div>

            <div class="col">
            <h1 class="text-center">Motivation </h1>
            </div>

            <div class="col">
            <h1 class="text-center">Success </h1>
            </div>
        </div>

        <p class="bg-warning"> </p>
        <p class="bg-warning"> </p>

        <div class="row text-center text-decoration-underline ">
            <h1>TOM PLATZ</h1>
        </div>

       <p></p>

        <div class="row ">
            <div class="col text-center">
               <YouTube videoId={getVideoId("https://www.youtube.com/watch?v=JA5ASP4vOZg&ab_channel=Overload")} opts={opts} />
            </div>

            <div class=" col text-center">
                <p>Brak motywacji</p>
                <p>Brak czasu</p>
                <p>Ból</p>

                <div className="container">
                      <div className="thermometer">
                        <div
                          className="thermometer-mercury"
                          style={{ height: `${temperature}%` }}
                        ></div>
                      </div>
                      <div className="temperature fn-2"> Czujesz jak rośnie twoja motywacja?</div>
                    </div>
                </div>
        </div>



        <p></p>

        <div class="row fs-2 text-right">

            <div class="col">
            </div>

            <div class="col-9">
                 <p class="lh-sm fs-2 text-right">
                            Tom Platz, ikona kulturystyki, jest prawdziwym przykładem determinacji, pasji i poświęcenia. Jego legendarne treningi i
                            niesamowite osiągnięcia sprawiają, że jest inspiracją dla wielu osób na świecie.
                 </p>

                <p class="lh-sm">
                Nieodłącznym elementem sylwetki Toma Plazza są jego niesamowite nogi. Ich rozwinięcie i definicja są bezprecedensowe w świecie kulturystyki.
                Tom poświęcał wiele godzin na ciężkie treningi nóg, niezależnie od tego, jak wymagające były. To jest prawdziwy dowód na to, że sukces nie przychodzi łatwo - wymaga wysiłku,
                wytrwałości i poświęcenia.
                </p>


                <p class="lh-sm">
                    Przygotuj się na wyzwania i idź za swoimi celami, tak jak Tom Platz. Wielka siła rodzi się z determinacji i nieustannej pracy. Niech Tom Platz będzie Twoją inspiracją,
                     aby pokonywać własne ograniczenia i osiągać nieosiągalne cele.
                </p>
            </div>

            <div class="col">
            </div>

        </div>

        <div class="row">

      </div>

    </div>
  );
};

export default Testoboost;