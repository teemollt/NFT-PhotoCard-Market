import React from "react";

import "./MainCarousel.css";

function MainCarousel3(): JSX.Element {
  return (
    <div className="wrapper">
      <input type="checkbox" />
      <div className="video">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/vcqImqOVE2U?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text">
        <span data-text="HYUN-A" />
      </div>
    </div>
  );
}

export default MainCarousel3;
