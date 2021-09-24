import React from "react";
import "./AuctionMyBidTable.css";

interface AuctionMyBidTableProps {
  card: {
    auctionNo: number;
    nick: string;
    imgUrl: string;
    title: string;
    myPrice: number;
    end: string;
  };
}

function AuctionMyBidTable(props: AuctionMyBidTableProps) {
  const { auctionNo, nick, imgUrl, title, myPrice,  end } = props.card;
  return (
    <tr className="auctionMyBidTable">
      <th className="myBidNo">{auctionNo}</th>
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

export default AuctionMyBidTable;
