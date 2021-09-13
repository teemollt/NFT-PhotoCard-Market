import React from "react";
import MyPageBody from "../account/mypage/MyPageBody";
import MyPageTop from "../account/mypage/MyPageTop";
import "./MyPage.css";

function Profile(): JSX.Element {
  return (
    <div className="myPage">
      <MyPageTop />
      <MyPageBody />
    </div>
  );
}

export default Profile;
