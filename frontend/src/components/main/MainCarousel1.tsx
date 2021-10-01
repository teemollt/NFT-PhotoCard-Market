import React from "react";

import "./MainCarousel.css";

function MainCarousel1(): JSX.Element {
  return (
    <div className="wrapper">
      <input type="checkbox" />
      <div className="video">
        <video src="/videos/main_iu.mp4" loop muted autoPlay playsInline />
      </div>
      <div className="text">
        <span data-text="IU" />
      </div>
    </div>
  );
}

export default MainCarousel1;
