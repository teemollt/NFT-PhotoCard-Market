import React from "react";

import "./MainCarousel.css";

function MainCarousel3(): JSX.Element {
  return (
    <div className="wrapper">
      <input type="checkbox" />
      <div className="video">
        <video src="/videos/main_hyuna.mp4" loop muted autoPlay playsInline />
      </div>
      <div className="text">
        <span data-text="HYUN-A" />
      </div>
    </div>
  );
}

export default MainCarousel3;
