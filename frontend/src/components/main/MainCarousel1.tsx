import React from "react";

import "./MainCarousel.css";

function MainCarousel1(): JSX.Element {
  return (
    <div className="wrapper">
      <input type="checkbox" />
      <div className="video">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/v7bnOxV4jAc?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text">
        <span data-text="IU" />
      </div>
    </div>
  );
}

export default MainCarousel1;
