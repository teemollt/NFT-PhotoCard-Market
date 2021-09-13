import React, { useState } from "react";
import "./ShopBuy.css";
import ShopCard from "./ShopCard";

const tempCard: Array<tempCard> = [
  {
    imgUrl:
      "http://m.tcgbox.co.kr/web/product/big/201909/995d394ab4fa78479732c5cd72d65ee2.jpg",
    title: "카드1",
    price: 1,
  },
  {
    imgUrl:
      "http://m.tcgbox.co.kr/web/product/big/201909/995d394ab4fa78479732c5cd72d65ee2.jpg",
    title: "카드2",
    price: 1,
  },
  {
    imgUrl:
      "http://m.tcgbox.co.kr/web/product/big/201909/995d394ab4fa78479732c5cd72d65ee2.jpg",
    title: "카드3",
    price: 1,
  },
  {
    imgUrl:
      "http://m.tcgbox.co.kr/web/product/big/201909/995d394ab4fa78479732c5cd72d65ee2.jpg",
    title: "카드4",
    price: 1,
  },
  {
    imgUrl:
      "http://m.tcgbox.co.kr/web/product/big/201909/995d394ab4fa78479732c5cd72d65ee2.jpg",
    title: "카드5",
    price: 1,
  },
  {
    imgUrl:
      "http://m.tcgbox.co.kr/web/product/big/201909/995d394ab4fa78479732c5cd72d65ee2.jpg",
    title: "카드6",
    price: 1,
  },
];

export type tempCard = {
  imgUrl: string;
  title: string;
  price: number;
};

export interface State {
  productTemp: Array<tempCard>;
}

function ShopBuy() {
  const [productTemp, setProductTemp] = useState(tempCard);

  return (
    <div className="shopBuy">
      <h1>구매 내역</h1>
      <hr />
      {productTemp.map((tempCard) => {
        return <ShopCard tempCard={tempCard} />;
      })}
    </div>
  );
}

export default ShopBuy;
