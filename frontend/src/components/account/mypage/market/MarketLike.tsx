import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import MarketCard from "./MarketCard";
import axios from "axios";

interface MarketLike {
  auctionNo: number;
  auctionTitle: string;
  price: number;
  auctionImg: string;
}

function MarketLike(): JSX.Element {
  const [cards, setCards] = useState<Array<MarketLike>>([]);
  const [page, setPage] = useState<Array<MarketLike>>([]);

  useEffect(() => {
    axios
      .get("/api/member/auctionLike", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setPage(res.data.res);
        setCards(res.data.res.slice(0, 6));
      });
  }, []);

  const handlePage = (e: any) => {
    const page = Number(e.target.innerText);
    setPage(cards.slice(page * 6 - 6, page * 6));
  };

  return (
    <div>
      <div className="mypageBodyRightHeader">
        <h1>관심 마켓</h1>
        <hr />
        {page.map((card, index) => {
          return <MarketCard card={card} key={index} />;
        })}
        <Pagination
          className="GalleryBoardPage"
          count={Math.ceil(cards.length / 6)}
          shape="rounded"
          onChange={handlePage}
          hidePrevButton
          hideNextButton
        />
      </div>
    </div>
  );
}

export default MarketLike;
