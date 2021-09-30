import React from "react";

import "./MainCarousel.css";

function MainCarousel2(): JSX.Element {
  return (
    <div className="wrapper">
      <input type="checkbox" />
      <div className="video">
        <video src="/videos/main_gd.mp4" loop muted autoPlay playsInline />
      </div>
      <div className="text">
        <span data-text="G-Dragon" />
      </div>
    </div>
  );
}

export default MainCarousel2;
