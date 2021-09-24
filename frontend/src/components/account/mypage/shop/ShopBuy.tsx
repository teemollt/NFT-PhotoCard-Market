import React, { useState } from "react";
import { Pagination } from "@mui/material";
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
  {
    imgUrl:
      "http://m.tcgbox.co.kr/web/product/big/201909/995d394ab4fa78479732c5cd72d65ee2.jpg",
    title: "카드7",
    price: 1,
  },
  {
    imgUrl:
      "http://m.tcgbox.co.kr/web/product/big/201909/995d394ab4fa78479732c5cd72d65ee2.jpg",
    title: "카드8",
    price: 1,
  },
  {
    imgUrl:
      "http://m.tcgbox.co.kr/web/product/big/201909/995d394ab4fa78479732c5cd72d65ee2.jpg",
    title: "카드9",
    price: 1,
  },
  {
    imgUrl:
      "http://m.tcgbox.co.kr/web/product/big/201909/995d394ab4fa78479732c5cd72d65ee2.jpg",
    title: "카드10",
    price: 1,
  },
  {
    imgUrl:
      "http://m.tcgbox.co.kr/web/product/big/201909/995d394ab4fa78479732c5cd72d65ee2.jpg",
    title: "카드11",
    price: 1,
  },
  {
    imgUrl:
      "http://m.tcgbox.co.kr/web/product/big/201909/995d394ab4fa78479732c5cd72d65ee2.jpg",
    title: "카드12",
    price: 1,
  },
  {
    imgUrl:
      "http://m.tcgbox.co.kr/web/product/big/201909/995d394ab4fa78479732c5cd72d65ee2.jpg",
    title: "카드13",
    price: 1,
  },
  {
    imgUrl:
      "http://m.tcgbox.co.kr/web/product/big/201909/995d394ab4fa78479732c5cd72d65ee2.jpg",
    title: "카드14",
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
  const [cards, setCards] = useState<Array<tempCard>>(tempCard.slice(0, 8));

  const handlePage = (e: any) => {
    const page = Number(e.target.innerText);
    setCards(tempCard.slice(page * 8 - 8, page * 8));
  };

  return (
    <div className="mypageBodyRightHeader">
      <h1>구매 내역</h1>
      <hr />
      {cards.map((card, index) => {
        return <ShopCard cards={card} key={index} />;
      })}
      <Pagination
        className="GalleryBoardPage"
        count={Math.ceil(productTemp.length / 8)}
        shape="rounded"
        onChange={handlePage}
        hidePrevButton
        hideNextButton
      />
    </div>
  );
}

export default ShopBuy;
