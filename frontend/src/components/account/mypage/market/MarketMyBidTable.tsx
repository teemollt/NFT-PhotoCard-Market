import React from "react";
import "./MarketMyBidTable.css";

interface MarketMyBidTableProps {
  card: {
    marketNo: number;
    nick: string;
    imgUrl: string;
    title: string;
    myPrice: number;
    end: string;
  };
}

function MarketMyBidTable(props: MarketMyBidTableProps) {
  const { marketNo, nick, imgUrl, title, myPrice,  end } = props.card;
  return (
    <tr className="marketMyBidTable">
      <th className="myBidNo">{marketNo}</th>
      <th className="myBidNick">{nick}</th>
      <th className="myBidCard">
        <img src={imgUrl} alt="" />
      </th>
      <th className="myBidProduct">{title}</th>
      <th className="myBidMyPrice">{myPrice}</th>
      <th className="myBidEnd">{end}</th>
    </tr>
  );
}

export default MarketMyBidTable;
