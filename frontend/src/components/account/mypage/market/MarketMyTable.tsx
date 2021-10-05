import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
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
  let history = useHistory();

  const handleToMarket = (data: any) => {
    history.push({
      pathname: `/marketitem/${auctionNo}`,
      state: { auctionNo: auctionNo },
    });
  };

  return (
    <tr
      className="marketMyTable"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <td className="myMarketNo">{auctionNo}</td>
      <td>
        <img className="myMarketImg" src={cardImg} alt="" />
        {hover ? (
          <img
            className="myMarketImgHover"
            src={cardImg}
            alt=""
            style={{ zIndex: 100, position: "absolute", visibility: "visible" }}
          />
        ) : (
          <img
            className="myMarketImgHover"
            src={cardImg}
            alt=""
            style={{ zIndex: 100, position: "absolute", visibility: "hidden" }}
          />
        )}
      </td>
      <td className="myMarketProduct">{cardNm}</td>
      <td className="myMarketCurrent">{price} coin</td>
      {state === "SOLD" ? (
        <td className="myMarketEnd">{memberNick}</td>
      ) : (
        <td className="myMarketEnd">
          <Button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={handleToMarket}
          >
            판매중
          </Button>
        </td>
      )}
    </tr>
  );
}

export default MarketMyTable;
