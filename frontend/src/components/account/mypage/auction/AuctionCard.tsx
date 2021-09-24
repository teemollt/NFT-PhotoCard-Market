import React from "react";
import "./AuctionCard.css";

function AuctionCard(props: any) {
  return (
    <div className="auctionCard">
      <div className="auctionCardImg">
        <img src={props.card.imgUrl} alt="" />
      </div>
      <div>
        <span className="auctionCardTitle">{props.card.title}</span>
        <span className="auctionCardPrice">{props.card.price}BTC</span>
      </div>
    </div>
  );
}

export default AuctionCard;
