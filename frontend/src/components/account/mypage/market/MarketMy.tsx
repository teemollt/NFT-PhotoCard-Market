import React, { useState } from "react";
import { Pagination } from "@mui/material";
import MarketMyTable from "./MarketMyTable";
import './MarketMy.css'

const tempCard: Array<tempCard> = [
  {
    marketNo: 1,
    imgUrl:
      "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/XG2MW2H3ZRW5FHDVSOMF6FDT3E.jpg",
    title: "아이유꽃",
    current: 1,
    end: "aaa"
  },
  {
    marketNo: 1,
    imgUrl:
      "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/XG2MW2H3ZRW5FHDVSOMF6FDT3E.jpg",
    title: "아이유꽃",
    current: 1,
    end: "aaa"
  },
  {
    marketNo: 1,
    imgUrl:
      "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/XG2MW2H3ZRW5FHDVSOMF6FDT3E.jpg",
    title: "아이유꽃",
    current: 1,
    end: "aaa"
  },
  {
    marketNo: 1,
    imgUrl:
      "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/XG2MW2H3ZRW5FHDVSOMF6FDT3E.jpg",
    title: "아이유꽃",
    current: 1,
    end: "aaa"
  },
  {
    marketNo: 1,
    imgUrl:
      "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/XG2MW2H3ZRW5FHDVSOMF6FDT3E.jpg",
    title: "아이유꽃",
    current: 1,
    end: "aaa"
  },
  {
    marketNo: 1,
    imgUrl:
      "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/XG2MW2H3ZRW5FHDVSOMF6FDT3E.jpg",
    title: "아이유꽃",
    current: 1,
    end: "aaa"
  },
  {
    marketNo: 1,
    imgUrl:
      "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/XG2MW2H3ZRW5FHDVSOMF6FDT3E.jpg",
    title: "아이유꽃",
    current: 1,
    end: "aaa"
  },
];

export type tempCard = {
  marketNo: number
  imgUrl: string;
  title: string;
  current: number
  end: string
};

export interface State {
  productTemp: Array<tempCard>;
}

function MarketMy() {
  const [cards, setCards] = useState<Array<tempCard>>(tempCard.slice(0, 5));

  const handlePage = (e: any) => {
    const page = Number(e.target.innerText);
    setCards(tempCard.slice(page * 5 - 5, page * 5));
  };

  return (
    <div>
      <div className="mypageBodyRightHeader">
        <h1>내가 등록한 장터</h1>
        <hr />
        <table className="myMarketTable">
        <tbody>
          <tr>
            <th className="myMarketNo">장터 번호</th>
            <th className="myMarketCard">장터카드</th>
            <th className="myMarketProduct">장터상품</th>
            <th className="myMarketCurrent">판매가</th>
            <th className="myMarketEnd">구매자</th>
          </tr>
          {cards.map((card, index) => {
            return <MarketMyTable card={card} key={index}/>
          })}
        </tbody>
      </table>
        <Pagination
          className="GalleryBoardPage"
          count={Math.ceil(tempCard.length / 5)}
          shape="rounded"
          onChange={handlePage}
          hidePrevButton
          hideNextButton
        />
      </div>
    </div>
  );
}

export default MarketMy;
