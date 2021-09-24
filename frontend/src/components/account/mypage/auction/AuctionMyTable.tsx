import React from "react";
import './AuctionMyTable.css'

interface AuctionMyTableProps {
  card: {
    auctionNo: number;
    imgUrl: string;
    title: string;
    current: number;
    end: string;
  };
}

function AuctionMyTable(props: AuctionMyTableProps) {
  const { auctionNo, imgUrl, title, current, end } = props.card;
  return (
      <tr className="auctionMyTable">
        <th className="myAuctionNo">{auctionNo}</th>
        <th className="myAuctionCard"><img src={imgUrl} alt="" /></th>
        <th className="myAuctionProduct">{title}</th>
        <th className="myAuctionCurrent">{current}</th>
        <th className="myAuctionEnd">{end}</th>
      </tr>
  );
}

export default AuctionMyTable;
