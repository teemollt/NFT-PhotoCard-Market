import React, { useState } from "react";
import "./MarketMyBidTable.css";

interface MarketMyBidTableProps {
  card: {
    auctionNo: number;
    cardNm: string;
    cardImg: string;
    price: number;
    memberNo: number;
    memberNick: string;
    buyDate: string;
  };
}

function MarketMyBidTable(props: MarketMyBidTableProps) {
  const { auctionNo, memberNick, cardImg, cardNm, price, buyDate } = props.card;

  const [hover, setHover] = useState<boolean>(false);

  return (
    <tr
      className="marketMyBidTable"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <td className="myBidNo">{auctionNo}</td>
      <td className="myBidNick">{memberNick}</td>
      <td className="myBidCard">
        <img className="myBidImg" src={cardImg} alt="" />
        {hover ? (
          <img
            className="myBidImgHover"
            src={cardImg}
            alt=""
            style={{ zIndex: 100, position: "absolute", visibility: "visible" }}
          />
        ) : (
          <img
            className="myBidImgHover"
            src={cardImg}
            alt=""
            style={{ zIndex: 100, position: "absolute", visibility: "hidden" }}
          />
        )}
      </td>
      <td className="myBidProduct">{cardNm}</td>
      <td className="myBidMyPrice">{price} coin</td>
      <td className="myBidEnd">{buyDate.slice(2, 10)}</td>
    </tr>
  );
}

export default MarketMyBidTable;
