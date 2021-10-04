import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import MarketMyTable from "./MarketMyTable";
import "./MarketMy.css";
import axios from "axios";

export type market = {
  auctionNo: number;
  cardNm: string;
  cardImg: string;
  price: number;
  state: string;
  memberNo: number;
  memberNick: string;
  soldDate: string;
};

function MarketMy() {
  const [market, setMarket] = useState<Array<market>>([]);
  const [page, setPage] = useState<Array<market>>([]);

  useEffect(() => {
    axios
      .get("/api/member/registedAuctionList", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setPage(res.data.res.slice(0, 5))
        setMarket(res.data.res)
      });
  }, []);

  const handlePage = (e: any) => {
    const page = Number(e.target.innerText);
    setPage(market.slice(page * 5 - 5, page * 5));
  };

  return (
    <div>
      <div className="mypageBodyRightHeader">
        <h1>내가 등록한 마켓</h1>
        <hr />
        <table className="myMarketTable">
          <tbody>
            <tr>
              <th className="myMarketNo">마켓 번호</th>
              <th className="myMarketCard">등록 카드</th>
              <th className="myMarketProduct">등록 상품</th>
              <th className="myMarketCurrent">판매가</th>
              <th className="myMarketEnd">구매자</th>
            </tr>
            {page.map((card, index) => {
              return <MarketMyTable card={card} key={index} />;
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
    </div>
  );
}

export default MarketMy;
