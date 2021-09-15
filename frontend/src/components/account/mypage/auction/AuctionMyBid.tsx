import React, { useState } from "react";
import AuctionCard from "./AuctionCard";

const tempCard: Array<tempCard> = [
  {
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    price: 1,
  },
  {
    imgUrl:
    "https://img4.yna.co.kr/photo/cms/2019/05/02/02/PCM20190502000402370_P2.jpg",
    title: "연합뉴스",
    price: 1,
  },
  {
    imgUrl:
      "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/XG2MW2H3ZRW5FHDVSOMF6FDT3E.jpg",
    title: "아이유꽃",
    price: 1,
  },
  {
    imgUrl:
      "http://www.polinews.co.kr/data/photos/20200834/art_15980031118376_e6a761.jpg",
    title: "정장",
    price: 1,
  },
  {
    imgUrl:
      "http://image.kmib.co.kr/online_image/2020/1008/611811110015088768_1.jpg",
    title: "똥머리",
    price: 1,
  },
  {
    imgUrl:
      "https://cdn.dailyimpact.co.kr/news/photo/201901/50650_10024_2221.jpg",
    title: "흑백",
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

function AuctionMyBid() {
  const [productTemp, setProductTemp] = useState(tempCard);

  return (
    <div>
      <div className="mypageBodyRightHeader">
        <h1>경매 내역</h1>
        <hr />
        {productTemp.map((tempCard) => {
          return <AuctionCard tempCard={tempCard} />;
        })}
      </div>
    </div>
  );
}

export default AuctionMyBid;
