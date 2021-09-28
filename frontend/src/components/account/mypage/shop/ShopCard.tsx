import React from "react";
import "./ShopCard.css";

interface ShopCardProps {
  card: {
    buyDate: string;
    price: number;
    sales: string;
    salesImg: string;
  };
}

function ShopCard(props: ShopCardProps) {
  const { buyDate, price, sales, salesImg } = props.card;
  return (
    <div className="shopCard">
      <div className="shopCardImg">
        <img src={salesImg} alt="" />
      </div>
      <div>
        <div className="shopCardInfo">
          <span className="shopCardDate">{buyDate.slice(2, 10)}</span>
          <span className="shopCardPriceTitle">상품 가격</span>
        </div>
        <span className="shopCardTitle">{sales}</span>
        <span className="shopCardPrice">{price}BTC</span>
      </div>
    </div>
  );
}

export default ShopCard;
