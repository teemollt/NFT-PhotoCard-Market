import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./MyPageTop.css";

interface MyPageTopProps {
  memberNick: string;
  memberGrade: string;
}

function MyPageTop(props: MyPageTopProps): JSX.Element {
  const { memberNick, memberGrade } = props;

  return (
    <div className="mypageTop">
      <div className="mypageUserInfo">
        <div className="mypageUserNick">
          <h1>{memberNick} 님</h1>
        </div>
        <div className="mypageUserInfos">
          <p className="mypageGrade">{memberGrade}</p>
          {/* <p className="mypageAccount">0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B</p> */}
        </div>
        <div className="mypageUserUpdate">
          <Link className="tablink" to="/update">
            <Button className="mypageUpdateBtn" variant="outlined" size="large">
              정보 수정
            </Button>
          </Link>
        </div>
      </div>

      <div className="mypageShop">
        <div className="mypageOrder">
          <p>구매 내역</p>
          <span>0</span>
        </div>
        <div className="mypageOrder">
          <p>관심 상품</p>
          <span>0</span>
        </div>
        <div className="mypageOrder">
          <p>경매 등록</p>
          <span>0</span>
        </div>
      </div>
    </div>
  );
}

export default MyPageTop;
