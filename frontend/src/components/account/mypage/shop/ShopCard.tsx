import React from "react";
import "./ShopCard.css";

function ShopCard(props: any) {
  return (
    <div className="shopCard">
      <div className="shopCardImg">
        <img src={props.tempCard.imgUrl} alt="" />
      </div>
      <div>
        <div className="shopCardInfo">
          <span className="shopCardCeleb">상품 celeb</span>
          <span className="shopCardPriceTitle">가격</span>
        </div>
        <span className="shopCardTitle">{props.tempCard.title}</span>
        <span className="shopCardPrice">{props.tempCard.price}BTC</span>
      </div>
    </div>
  );
}

export default ShopCard;
