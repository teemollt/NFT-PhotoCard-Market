import React from "react";

import "./MainCarousel.css";

function MainCarousel5(): JSX.Element {
  return (
    <div className="wrapper">
      <input type="checkbox" />
      <div className="video">
        <video src="/videos/main_cha.mp4" loop muted autoPlay playsInline />
      </div>
      <div className="text">
        <span data-text="Cha_Eunwoo" />
      </div>
    </div>
  );
}

export default MainCarousel5;
