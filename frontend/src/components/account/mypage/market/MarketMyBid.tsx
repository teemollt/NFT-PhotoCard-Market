import React, { useState } from "react";
import { Pagination } from "@mui/material";
import MarketMyBidTable from "./MarketMyBidTable";
import "./MarketMyBid.css";

const tempCard: Array<tempCard> = [
  {
    marketNo: 1,
    nick: "sss",
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    myPrice: 1,
    end: "21-10-04"
  },
  {
    marketNo: 2,
    nick: "sss",
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    myPrice: 1,
    end: "21-10-04"
  },
  {
    marketNo: 3,
    nick: "sss",
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    myPrice: 1,
    end: "21-10-04"
  },
  {
    marketNo: 4,
    nick: "sss",
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    myPrice: 1,
    end: "21-10-04"
  },
  {
    marketNo: 5,
    nick: "sss",
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    myPrice: 1,
    end: "21-10-04"
  },
  {
    marketNo: 6,
    nick: "sss",
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    myPrice: 1,
    end: "21-10-04"
  },
  {
    marketNo: 7,
    nick: "sss",
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    myPrice: 1,
    end: "21-10-04"
  },
  
];

export type tempCard = {
  marketNo: number
  nick: string
  imgUrl: string;
  title: string;
  myPrice: number;
  end: string
};

export interface State {
  productTemp: Array<tempCard>;
}

function MarketMyBid() {
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
            return <MarketMyBidTable card={card} key={index}/>
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

export default MarketMyBid;
