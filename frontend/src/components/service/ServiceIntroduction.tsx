import React from "react";
import "./ServiceIntroduction.css";

function ServiceIntroduction(): JSX.Element {
  return (
    <div className="cardvideo">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/SSo_EIwHSd4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default ServiceIntroduction;
