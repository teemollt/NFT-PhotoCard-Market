import React from "react";
import MainCarousel from "../main/MainCarousel";
import MainCarousel1 from "../main/MainCarousel1";
import MainCarousel2 from "../main/MainCarousel2";

function Main(): JSX.Element {
  return (
    <div>
      <MainCarousel />
      <br />
      <MainCarousel1 />
      <br />
      <MainCarousel2 />
    </div>
  );
}

export default Main;
