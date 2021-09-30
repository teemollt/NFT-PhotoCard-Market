import React from "react";

import "./MainCarousel.css";

function MainCarousel2(): JSX.Element {
  return (
    <div className="wrapper">
      <input type="checkbox" />
      <div className="video">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/t3ULhmadHkg?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text">
        <span data-text="G-Dragon" />
      </div>
    </div>
  );
}

export default MainCarousel2;
