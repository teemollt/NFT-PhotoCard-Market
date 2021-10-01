import React from "react";
import Tooltip from "@mui/material/Tooltip";
import "./MainCarousel.css";

function MainCarousel1(): JSX.Element {
  return (
    <div className="wrapper">
      <Tooltip title="IU click">
        <input type="checkbox" className="maincirclevideo" />
      </Tooltip>
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
