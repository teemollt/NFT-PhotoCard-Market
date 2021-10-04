import React from "react";
import MarketItemSearch from "./MarketItemSearch";

function MarketBodySearch(props: any) {
  return (
    <div className="main">
      {props.searchresult.map((card: any, i: number) => (
        <MarketItemSearch item={card} key={i} />
      ))}
    </div>
  );
}

export default MarketBodySearch;
