import React from "react";
import "./AuctionCard.css";

function AuctionCard(props: any) {
  return (
    <div className="auctionCard">
      <div className="auctionCardImg">
        <img src={props.tempCard.imgUrl} alt="" />
      </div>
      <div>
        <span className="auctionCardTitle">{props.tempCard.title}</span>
        <span className="auctionCardPrice">{props.tempCard.price}BTC</span>
      </div>
    </div>
  );
}

export default AuctionCard;
