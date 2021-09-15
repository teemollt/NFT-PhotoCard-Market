import React from "react";
import MyPageBodyLeft from "./MyPageBodyLeft";
import MyPageBodyRight from "./MyPageBodyRight";
import "./MyPageBody.css";

function MyPageBody() {
  return (
    <div className="mypageBody">
      <MyPageBodyLeft />
      <MyPageBodyRight />
    </div>
  );
}

export default MyPageBody;
