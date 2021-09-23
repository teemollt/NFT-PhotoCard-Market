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
    end: "21-10-04"
  },
  {
    auctionNo: 2,
    nick: "sss",
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    myPrice: 1,
    end: "21-10-04"
  },
  {
    auctionNo: 3,
    nick: "sss",
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    myPrice: 1,
    end: "21-10-04"
  },
  {
    auctionNo: 4,
    nick: "sss",
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    myPrice: 1,
    end: "21-10-04"
  },
  {
    auctionNo: 5,
    nick: "sss",
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    myPrice: 1,
    end: "21-10-04"
  },
  {
    auctionNo: 6,
    nick: "sss",
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    myPrice: 1,
    end: "21-10-04"
  },
  {
    auctionNo: 7,
    nick: "sss",
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    myPrice: 1,
    end: "21-10-04"
  },
  
];

export type tempCard = {
  auctionNo: number
  nick: string
  imgUrl: string;
  title: string;
  myPrice: number;
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
      <h1>장터 내역</h1>
      <hr />
      <table className="myBidTable">
        <tbody>
          <tr>
            <th className="myBidNo">장터 번호</th>
            <th className="myBidNick">판매자</th>
            <th className="myBidCard">장터카드</th>
            <th className="myBidProduct">장터상품</th>
            <th className="myBidMyPrice">구매가</th>
            <th className="myBidEnd">구매일</th>
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
