import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./ShopEmpty.css";

export type Recommend = {
  salesDetail: string;
  salesDiv: string;
  salesImg: string;
  salesNM: string;
  salesNo: number;
  salesPrice: number;
};
function ShopEmpty() {
  let history = useHistory();

  const [recommend, setRecommend] = useState<Array<Recommend>>([]);
  const [celeb, setCeleb] = useState<string>("");

  useEffect(() => {
    axios
      .get("/api/saleCard")
      .then((res) =>
        setRecommend(res.data.res.sort(() => Math.random() - 0.5).slice(0, 3))
      );
  }, []);
  useEffect(() => {
    axios
      .get("/api/member/mypage", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        let celebNo = res.data.mypage.celebNo;
        if (celebNo === 0) {
          setCeleb("태 연");
        } else if (celebNo === 1) {
          setCeleb("티파니");
        } else if (celebNo === 2) {
          setCeleb("서 현");
        } else if (celebNo === 3) {
          setCeleb("현 아");
        } else if (celebNo === 4) {
          setCeleb("G-DRAGON");
        } else if (celebNo === 5) {
          setCeleb("아이유");
        }
      });
  }, []);

  const handleToShop = (data: any) => {
    history.push({
      pathname: `/cardpackdetail/${data.salesNo}`,
      state: { data: data },
    });
  };

  return (
    <div className="ShopEmpty">
      <div className="shopEmptyText">
        <h1>
          <span>
            " <span style={{ color: "#356CFB" }}>{celeb}</span> "
          </span>
          <span> 데리러 가기</span>
        </h1>
      </div>

      {recommend.map((card, index) => {
        return (
          <div
            className="shopCard"
            onClick={() => handleToShop(card)}
            key={index}
          >
            <div className="shopCardImg">
              <img src="/image/cardpack.png" alt="" />
            </div>
            <div>
              <div className="shopCardInfo">
                <span className="shopCardPriceTitle">상품 가격</span>
              </div>
              <span className="shopCardTitle">{card.salesNM}</span>
              <span className="shopCardPrice">{card.salesPrice} coin</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShopEmpty;
