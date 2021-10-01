import React from "react";
import Tooltip from "@mui/material/Tooltip";
import "./MainCarousel.css";

function MainCarousel4(): JSX.Element {
  return (
    <div className="wrapper">
      <Tooltip title="TTS click">
        <input type="checkbox" className="maincirclevideo" />
      </Tooltip>
      <div className="video">
        <video src="/videos/main_tts.mp4" loop muted autoPlay playsInline />
      </div>
      <div className="text">
        <span data-text="TTS" />
      </div>
    </div>
  );
}

export default MainCarousel4;
