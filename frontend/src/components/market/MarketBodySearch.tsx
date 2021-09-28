import React from "react";
import MarketItemSearch from "./MarketItemSearch";

function MarketBodySearch(props: any) {
  return (
    <div>
      {props.searchresult.map((card: any, i: number) => (
        <MarketItemSearch item={card} />
      ))}
    </div>
  );
}

export default MarketBodySearch;
