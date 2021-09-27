import React, { useState } from "react";
import "./MarketBody.css";
import MarketItem from "./MarketItem";

function MarketBodySearch(props: any): JSX.Element {
  return (
    <div className="main">
      {/* {props.searchresult[0].cardNo} */}
      {/* {props.searchresult.map((card, i) => (
        <MarketItem background="#52649e" card={card} />
      ))} */}
    </div>
  );
}

export default MarketBodySearch;
