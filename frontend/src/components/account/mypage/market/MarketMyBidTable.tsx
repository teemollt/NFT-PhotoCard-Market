import React, { useState } from "react";
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
  const { marketNo, nick, imgUrl, title, myPrice, end } = props.card;

  const [hover, setHover] = useState<boolean>(false);

  return (
    <tr
      className="marketMyBidTable"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <td className="myBidNo">{marketNo}</td>
      <td className="myBidNick">{nick}</td>
      <td className="myBidCard">
        <img className="myBidImg" src={imgUrl} alt="" />
        {hover ? (
          <img
            className="myBidImgHover"
            src={imgUrl}
            alt=""
            style={{ zIndex: 100, position: "absolute", visibility: "visible" }}
          />
        ) : (
          <img
            className="myBidImgHover"
            src={imgUrl}
            alt=""
            style={{ zIndex: 100, position: "absolute", visibility: "hidden" }}
          />
        )}
      </td>
      <td className="myBidProduct">{title}</td>
      <td className="myBidMyPrice">{myPrice}</td>
      <td className="myBidEnd">{end}</td>
    </tr>
  );
}

export default MarketMyBidTable;
