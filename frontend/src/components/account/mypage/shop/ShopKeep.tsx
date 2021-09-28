import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import axios from "axios";
import ShopCard from "./ShopCard";

interface Buy {
  sales: string;
  salesImg: string;
  buyDate: string;
  price: number;
}

function ShopKeep() {
  const [buy, setBuy] = useState<Array<Buy>>([]);
  const [cards, setCards] = useState<Array<Buy>>([]);

  useEffect(() => {
    axios
      .get("/api/member/order", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setCards(res.data.res.slice(0, 8));
        setBuy(res.data.res);
      });
  }, []);

  const handlePage = (e: any) => {
    const page = Number(e.target.innerText);
    setCards(buy.slice(page * 8 - 8, page * 8));
  };

  return (
    <div className="mypageBodyRightHeader">
      <h1>관심 상품</h1>
      <hr />
      {cards.map((card, index) => {
        return <ShopCard card={card} key={index} />;
      })}
      <Pagination
        className="GalleryBoardPage"
        count={Math.ceil(buy.length / 8)}
        shape="rounded"
        onChange={handlePage}
        hidePrevButton
        hideNextButton
      />
    </div>
  );
}

export default ShopKeep;
