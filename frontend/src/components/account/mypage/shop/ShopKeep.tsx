import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import ShopCard from "./ShopCard";
import ShopEmpty from "./ShopEmpty"
import axios from "axios";

interface BuyLike {
  buyDate: string;
  salesPrice: number;
  salesNM: string;
  salesImg: string;
  salseNo: number;
}

function ShopKeep() {
  const [buyLike, setBuyLike] = useState<Array<BuyLike>>([]);
  const [cards, setCards] = useState<Array<BuyLike>>([]);

  useEffect(() => {
    axios
      .get("/api/member/salesLike", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setCards(res.data.res.slice(0, 8));
        setBuyLike(res.data.res);
      });
  }, []);

  const handlePage = (e: any) => {
    const page = Number(e.target.innerText);
    setCards(buyLike.slice(page * 8 - 8, page * 8));
  };

  return (
    <div className="mypageBodyRightHeader">
      <h1>관심 상품</h1>
      <hr />
      { cards.length !== 0 ? cards.map((card, index) => {
        return <ShopCard card={card} key={index} />;
      })
      : <ShopEmpty />}
      <Pagination
        className="GalleryBoardPage"
        count={Math.ceil(buyLike.length / 8)}
        shape="rounded"
        onChange={handlePage}
        hidePrevButton
        hideNextButton
      />
    </div>
  );
}

export default ShopKeep;
