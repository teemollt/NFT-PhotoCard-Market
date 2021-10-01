import React from "react";

import "./MainCarousel.css";

function MainCarousel4(): JSX.Element {
  return (
    <div className="wrapper">
      <input type="checkbox" />
      <div className="video">
        <video src="/videos/main_tts.mp4" loop muted autoPlay playsInline />
      </div>
      <div className="text">
        <span data-text="태티서" />
      </div>
    </div>
  );
}

export default MainCarousel4;
