import React from "react";
import "./MarketCard.css";

function MarketCard(props: any) {
  return (
    <div className="marketCard">
      <div className="marketCardImg">
        <img src={props.card.imgUrl} alt="" />
      </div>
      <div>
        <span className="marketCardTitle">{props.card.title}</span>
        <span className="marketCardPrice">{props.card.price}BTC</span>
      </div>
    </div>
  );
}

export default MarketCard;
