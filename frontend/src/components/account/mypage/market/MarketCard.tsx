import React from "react";
import "./MarketCard.css";

interface MarketCardProps {
  card: {
    auctionNo: number;
    auctionTitle: string;
    price: number;
    auctionImg: string;
  };
}

function MarketCard(props: MarketCardProps) {
  const { auctionTitle, price, auctionImg } = props.card;

  return (
    <div className="marketCard">
      <div className="marketCardImg">
        <img src={auctionImg} alt="" />
      </div>
      <div>
        <span className="marketCardTitle">{auctionTitle}</span>
        <span className="marketCardPrice">{price} coin</span>
      </div>
    </div>
  );
}

export default MarketCard;
