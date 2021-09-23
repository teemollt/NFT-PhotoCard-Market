import React, { useState } from "react";
import { Pagination } from "@mui/material";
import AuctionMyTable from "./AuctionMyTable";
import './AuctionMy.css'

const tempCard: Array<tempCard> = [
  {
    auctionNo: 1,
    imgUrl:
      "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/XG2MW2H3ZRW5FHDVSOMF6FDT3E.jpg",
    title: "아이유꽃",
    current: 1,
    end: "aaa"
  },
  {
    auctionNo: 1,
    imgUrl:
      "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/XG2MW2H3ZRW5FHDVSOMF6FDT3E.jpg",
    title: "아이유꽃",
    current: 1,
    end: "aaa"
  },
  {
    auctionNo: 1,
    imgUrl:
      "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/XG2MW2H3ZRW5FHDVSOMF6FDT3E.jpg",
    title: "아이유꽃",
    current: 1,
    end: "aaa"
  },
  {
    auctionNo: 1,
    imgUrl:
      "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/XG2MW2H3ZRW5FHDVSOMF6FDT3E.jpg",
    title: "아이유꽃",
    current: 1,
    end: "aaa"
  },
  {
    auctionNo: 1,
    imgUrl:
      "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/XG2MW2H3ZRW5FHDVSOMF6FDT3E.jpg",
    title: "아이유꽃",
    current: 1,
    end: "aaa"
  },
  {
    auctionNo: 1,
    imgUrl:
      "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/XG2MW2H3ZRW5FHDVSOMF6FDT3E.jpg",
    title: "아이유꽃",
    current: 1,
    end: "aaa"
  },
  {
    auctionNo: 1,
    imgUrl:
      "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/XG2MW2H3ZRW5FHDVSOMF6FDT3E.jpg",
    title: "아이유꽃",
    current: 1,
    end: "aaa"
  },
];

export type tempCard = {
  auctionNo: number
  imgUrl: string;
  title: string;
  current: number
  end: string
};

export interface State {
  productTemp: Array<tempCard>;
}

function AuctionMy() {
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
        <table className="myAuctionTable">
        <tbody>
          <tr>
            <th className="myAuctionNo">장터 번호</th>
            <th className="myAuctionCard">장터카드</th>
            <th className="myAuctionProduct">장터상품</th>
            <th className="myAuctionCurrent">판매가</th>
            <th className="myAuctionEnd">구매자</th>
          </tr>
          {cards.map((card, index) => {
            return <AuctionMyTable card={card} key={index}/>
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

export default AuctionMy;
