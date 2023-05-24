import React from 'react';
import YouTube from 'react-youtube';
import 'bootstrap/dist/css/bootstrap.min.css';

const Testoboost = () => {
  const opts = {
      height: '790',
      width: '1240',
    playerVars: {
      autoplay: 1,
    },
  };

  const getVideoId = (videoUrl) => {
    const urlParams = new URLSearchParams(new URL("https://www.youtube.com/watch?v=JA5ASP4vOZg&ab_channel=Overload").search);
    return urlParams.get('v');
  };

  return (
    <div className="container" class="align-middle">

      <YouTube videoId={getVideoId("https://www.youtube.com/watch?v=JA5ASP4vOZg&ab_channel=Overload")} opts={opts} />
    </div>
  );
};

export default Testoboost;