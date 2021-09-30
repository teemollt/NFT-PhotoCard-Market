import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./MainCarousel.css";

function MainCarousel2(): JSX.Element {
  return (
    <div className="wrapper">
      <input type="checkbox" />
      <div className="video">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/v7bnOxV4jAc?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text">
        <span data-text="Watch the video" />
      </div>
    </div>
  );
}

export default MainCarousel2;
