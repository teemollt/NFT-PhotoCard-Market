import React, { useState } from "react";
import "./MarketMyTable.css";

interface MarketMyTableProps {
  card: {
    auctionNo: number;
    cardNm: string;
    cardImg: string;
    price: number;
    state: string;
    memberNo: number;
    memberNick: string;
    soldDate: string;
  };
}

function MarketMyTable(props: MarketMyTableProps) {
  const { auctionNo, cardImg, cardNm, price, state, memberNick } = props.card;
  const [hover, setHover] = useState<boolean>(false);

  return (
    <tr
      className="marketMyTable"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <td className="myMarketNo">{auctionNo}</td>
      <td>
        <img className="myMarketImg" src={"/" + cardImg + ".jpg"} alt="" />
        {hover ? (
          <img
            className="myMarketImgHover"
            src={"/" + cardImg + ".jpg"}
            alt=""
            style={{ zIndex: 100, position: "absolute", visibility: "visible" }}
          />
        ) : (
          <img
            className="myMarketImgHover"
            src={"/" + cardImg + ".jpg"}
            alt=""
            style={{ zIndex: 100, position: "absolute", visibility: "hidden" }}
          />
        )}
      </td>
      <td className="myMarketProduct">{cardNm}</td>
      <td className="myMarketCurrent">{price}</td>
      {state === "SOLD" ? <td className="myMarketEnd">{memberNick}</td> : <td className="myMarketEnd">판매중</td>}
    </tr>
  );
}

export default MarketMyTable;
