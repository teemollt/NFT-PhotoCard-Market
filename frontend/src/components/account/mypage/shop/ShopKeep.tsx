import React, { useState } from "react";
import ShopCard from "./ShopCard";

const tempCard: Array<tempCard> = [
  {
    imgUrl:
      "http://m.tcgbox.co.kr/web/product/big/20191206/585b242c2158a94a993c5fb8a916e6e2.jpg",
    title: "카드1",
    price: 1,
  },
  {
    imgUrl:
      "http://m.tcgbox.co.kr/web/product/big/20191206/585b242c2158a94a993c5fb8a916e6e2.jpg",
    title: "카드2",
    price: 1,
  },
  {
    imgUrl:
      "http://m.tcgbox.co.kr/web/product/big/20191206/585b242c2158a94a993c5fb8a916e6e2.jpg",
    title: "카드3",
    price: 1,
  },
  {
    imgUrl:
      "http://m.tcgbox.co.kr/web/product/big/20191206/585b242c2158a94a993c5fb8a916e6e2.jpg",
    title: "카드4",
    price: 1,
  },
  {
    imgUrl:
      "http://m.tcgbox.co.kr/web/product/big/20191206/585b242c2158a94a993c5fb8a916e6e2.jpg",
    title: "카드5",
    price: 1,
  },
  {
    imgUrl:
      "http://m.tcgbox.co.kr/web/product/big/20191206/585b242c2158a94a993c5fb8a916e6e2.jpg",
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

function ShopKeep() {
  const [productTemp, setProductTemp] = useState(tempCard);

  return (
    <div className="shopBuy">
      <h1>관심 상품</h1>
      <hr />
      {productTemp.map((tempCard) => {
        return <ShopCard tempCard={tempCard} />;
      })}
    </div>
  );
}

export default ShopKeep;
