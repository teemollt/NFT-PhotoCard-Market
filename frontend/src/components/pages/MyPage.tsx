import React, { useEffect, useState } from "react";
import axios from "axios";
import MyPageBody from "../account/mypage/MyPageBody";
import MyPageTop from "../account/mypage/MyPageTop";
import "./MyPage.css";

function MyPage(): JSX.Element {
  const [memberNick, setMemberNick] = useState<string>("");
  const [memberGrade, setMemberGrade] = useState<string>("");

  useEffect(() => {
    axios
      .get("/api/member/mypage", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setMemberNick(res.data.mypage.memberNick);
        setMemberGrade(res.data.mypage.gradeNm);
      });
  }, []);
  return (
    <div className="myPage">
      <MyPageTop memberNick={memberNick} memberGrade={memberGrade} />
      <MyPageBody />
    </div>
  );
}

export default MyPage;
