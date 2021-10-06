import React from "react";
import "./SiteIntroduction.css";

function SiteIntroduction(): JSX.Element {
  return (
    <div className="cardvideo">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/3iM_06QeZi8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default SiteIntroduction;
