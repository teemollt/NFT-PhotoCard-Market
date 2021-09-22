import React, { useState } from "react";
import { Pagination } from "@mui/material";
import AuctionMyBidTable from "./AuctionMyBidTable";
import "./AuctionMyBid.css";

const tempCard: Array<tempCard> = [
  {
    auctionNo: 1,
    nick: "sss",
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    myPrice: 1,
    current: 5,
    end: "종료"
  },
  {
    auctionNo: 2,
    nick: "sss",
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    myPrice: 1,
    current: 5,
    end: "21-10-04"
  },
  {
    auctionNo: 3,
    nick: "sss",
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    myPrice: 1,
    current: 5,
    end: "종료"
  },
  {
    auctionNo: 4,
    nick: "sss",
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    myPrice: 1,
    current: 5,
    end: "종료"
  },
  {
    auctionNo: 5,
    nick: "sss",
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    myPrice: 1,
    current: 5,
    end: "종료"
  },
  {
    auctionNo: 6,
    nick: "sss",
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    myPrice: 1,
    current: 5,
    end: "종료"
  },
  {
    auctionNo: 7,
    nick: "sss",
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    myPrice: 1,
    current: 5,
    end: "종료"
  },
  
];

export type tempCard = {
  auctionNo: number
  nick: string
  imgUrl: string;
  title: string;
  myPrice: number;
  current: number
  end: string
};

export interface State {
  productTemp: Array<tempCard>;
}

function AuctionMyBid() {
  const [cards, setCards] = useState<Array<tempCard>>(tempCard.slice(0, 5));

  const handlePage = (e: any) => {
    const page = Number(e.target.innerText);
    setCards(tempCard.slice(page * 5 - 5, page * 5));
  };

  return (
    <div className="mypageBodyRightHeader">
      <h1>경매 내역</h1>
      <hr />
      <table className="myBidTable">
        <tbody>
          <tr>
            <th className="myBidNo">경매 번호</th>
            <th className="myBidNick">판매자</th>
            <th className="myBidCard">경매카드</th>
            <th className="myBidProduct">경매상품</th>
            <th className="myBidMyPrice">입찰</th>
            <th className="myBidCurrent">최고가</th>
            <th className="myBidEnd">경매 종료</th>
          </tr>
          {cards.map((card, index) => {
            return <AuctionMyBidTable card={card} key={index}/>
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
  );
}

export default AuctionMyBid;
