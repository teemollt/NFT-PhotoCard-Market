import React, { useEffect, useState } from "react";
import axios from "axios";
import MyPageBody from "../account/mypage/MyPageBody";
import MyPageTop from "../account/mypage/MyPageTop";
import "./MyPage.css";

function MyPage(): JSX.Element {
 const [memberNick, setMemberNick] = useState<string>("")

  useEffect(() => {
    axios.get ('/api/member/mypage', {
      headers:{'Authorization': 'Bearer '+localStorage.getItem('token')},
    }).then((res)=> {setMemberNick(res.data.mypage.memberNick)} )
  })
  return (
    <div className="myPage">
      <MyPageTop memberNick={memberNick}/>
      <MyPageBody />
    </div>
  );
}

export default MyPage;
