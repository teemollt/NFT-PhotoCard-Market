import React from "react";
import { useHistory } from "react-router-dom";
import "./ShopCard.css";

interface ShopCardProps {
  card: {
    buyDate: string;
    price?: number;
    salesPrice?: number;
    sales?: string;
    salesNM?: string;
    salesImg: string;
    salseNo: number;
  };
}

function ShopCard(props: ShopCardProps) {
  let history = useHistory();
  const { buyDate, price, sales, salesImg, salesNM, salesPrice } = props.card;

  const handleToShop = (data: any) => {
    history.push({
      pathname: `/cardpackdetail/${data.salesNo}`,
      state: { data: data },
    });
  };

  return (
    <div className="shopCard" onClick={() => handleToShop(props.card)}>
      <div className="shopCardImg">
        <img src="/image/cardpack.png" alt="" />
      </div>
      <div>
        <div className="shopCardInfo">
          {buyDate ? (
            <span className="shopCardDate">{buyDate.slice(2, 10)}</span>
          ) : null}
          <span className="shopCardPriceTitle">상품 가격</span>
        </div>
        {sales ? (
          <span className="shopCardTitle">{sales}</span>
        ) : (
          <span className="shopCardTitle">{salesNM}</span>
        )}

        {price ? (
          <span className="shopCardPrice">{price} coin</span>
        ) : (
          <span className="shopCardPrice">{salesPrice} coin</span>
        )}
      </div>
    </div>
  );
}

export default ShopCard;
