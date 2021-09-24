import React from "react";
import './MarketMyTable.css'

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
  return (
      <tr className="marketMyTable">
        <th className="myMarketNo">{marketNo}</th>
        <th className="myMarketCard"><img src={imgUrl} alt="" /></th>
        <th className="myMarketProduct">{title}</th>
        <th className="myMarketCurrent">{current}</th>
        <th className="myMarketEnd">{end}</th>
      </tr>
  );
}

export default MarketMyTable;
