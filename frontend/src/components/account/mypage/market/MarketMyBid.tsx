import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import MarketMyBidTable from "./MarketMyBidTable";
import "./MarketMyBid.css";
import axios from "axios";

export type market = {
  auctionNo: number;
  cardNm: string;
  cardImg: string;
  price: number;
  memberNo: number;
  memberNick: string;
  buyDate: string;
};

function MarketMyBid() {
  const [market, setMarket] = useState<Array<market>>([]);
  const [page, setPage] = useState<Array<market>>([]);

  useEffect(() => {
    axios
      .get("/api/member/auctionOrderList", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setPage(res.data.res.slice(0, 5))
        setMarket(res.data.res)
      })
  }, [])

  const handlePage = (e: any) => {
    const page = Number(e.target.innerText)
    setPage(market.slice(page * 5 - 5, page * 5))
  }

  return (
    <div className="mypageBodyRightHeader">
      <h1>마켓 구매 내역</h1>
      <hr />
      <table className="myBidTable">
        <tbody>
          <tr>
            <th className="myBidNo">마켓 번호</th>
            <th className="myBidNick">판매자</th>
            <th className="myBidCard">마켓카드</th>
            <th className="myBidProduct">마켓상품</th>
            <th className="myBidMyPrice">구매가</th>
            <th className="myBidEnd">구매일</th>
          </tr>
          {page.map((card, index) => {
            return <MarketMyBidTable card={card} key={index} />;
          })}
        </tbody>
      </table>
      <Pagination
        className="GalleryBoardPage"
        count={Math.ceil(market.length / 5)}
        shape="rounded"
        onChange={handlePage}
        hidePrevButton
        hideNextButton
      />
    </div>
  );
}

export default MarketMyBid;
