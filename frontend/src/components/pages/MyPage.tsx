import React, { useEffect, useState } from "react";
import axios from "axios";
import MyPageBody from "../account/mypage/MyPageBody";
import MyPageTop from "../account/mypage/MyPageTop";
import "./MyPage.css";

function MyPage(): JSX.Element {
  const [memberNick, setMemberNick] = useState<string>("");
  const [memberGrade, setMemberGrade] = useState<string>("");
  const [countAuctionRegist, setCountAuctionRegist] = useState<number>(0);
  const [countSalesLike, setCountSalesLike] = useState<number>(0);
  const [countSalesOrder, setCountSalesOrder] = useState<number>(0);

  useEffect(() => {
    axios
      .get("/api/member/mypage", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setMemberNick(res.data.mypage.memberNick);
        setMemberGrade(res.data.mypage.gradeNm);
        setCountAuctionRegist(res.data.countAuctionRegist);
        setCountSalesLike(res.data.countSalesLike);
        setCountSalesOrder(res.data.countSalesLike);
      });
  }, []);
  return (
    <div className="myPage">
      <MyPageTop
        memberNick={memberNick}
        memberGrade={memberGrade}
        countAuctionRegist={countAuctionRegist}
        countSalesLike={countSalesLike}
        countSalesOrder={countSalesOrder}
      />
      <MyPageBody />
    </div>
  );
}

export default MyPage;
