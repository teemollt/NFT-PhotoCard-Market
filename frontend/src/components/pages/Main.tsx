import React from "react";
import "./Main.css";
import MainCarousel from "../main/MainCarousel";
import MainCarousel1 from "../main/MainCarousel1";
import MainCarousel2 from "../main/MainCarousel2";
import MainCelebList from "../main/MainCelebList";
import MainCarousel3 from "../main/MainCarousel3";
import MainCarousel4 from "../main/MainCarousel4";
import MainCarousel5 from "../main/MainCarousel5";
import MainCarousel6 from "../main/MainCarousel6";

function Main(): JSX.Element {
  return (
    <div>
      <div className="mainitem">
        <MainCelebList />
      </div>
      <div className="mainitem">
        <MainCarousel />
      </div>
      <div className="mainitem">
        <MainCarousel1 />
      </div>
      <div className="mainitem">
        <MainCarousel2 />
      </div>
      <div className="mainitem">
        <MainCarousel3 />
      </div>
      <div className="mainitem">
        <MainCarousel4 />
      </div>
      <div className="mainitem">
        <MainCarousel5 />
      </div>
      <div className="mainitem">
        <MainCarousel6 />
      </div>
    </div>
  );
}

export default Main;
