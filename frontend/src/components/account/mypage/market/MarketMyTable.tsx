import React, { useState } from "react";
import "./MarketMyTable.css";

interface MarketMyTableProps {
  card: {
    marketNo: number;
    imgUrl: string;
    title: string;
    current: number;
    end: string;
  };
}

function MarketMyTable(props: MarketMyTableProps) {
  const { marketNo, imgUrl, title, current, end } = props.card;
  const [hover, setHover] = useState<boolean>(false);

  return (
    <tr
      className="marketMyTable"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <td className="myMarketNo">{marketNo}</td>
      <td ><img className="myMarketImg" src={imgUrl} alt=""/>
      {hover ? (
          <img
            className="myMarketImgHover"
            src={imgUrl}
            alt=""
            style={{ zIndex: 100, position: "absolute", visibility: "visible" }}
          />
        ) : (
          <img
            className="myMarketImgHover"
            src={imgUrl}
            alt=""
            style={{ zIndex: 100, position: "absolute", visibility: "hidden" }}
          />
        )}</td>
      <td className="myMarketProduct">
        {title}
        
      </td>
      <td className="myMarketCurrent">{current}</td>
      <td className="myMarketEnd">{end}</td>
    </tr>
  );
}

export default MarketMyTable;
