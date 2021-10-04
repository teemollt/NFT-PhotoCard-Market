import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyPageBodyRight from "./MyPageBodyRight";
import "./MyPageBody.css";

function MyPageBody() {
  const [menu, setMenu] = useState<number>(0);
  return (
    <div className="mypageBody">
      <div className="mypageBodyLeft">
        <h1>쇼핑 정보</h1>
        <hr />
        <p onClick={() => setMenu(0)}>구매 내역</p>
        <p onClick={() => setMenu(1)}>관심 상품</p>

        <br />

        <h1>마켓 정보</h1>
        <hr />
        <p onClick={() => setMenu(2)}>내가 등록한 마켓</p>
        <p onClick={() => setMenu(3)}>마켓 구매 내역</p>
        <p onClick={() => setMenu(4)}>관심 마켓</p>

        <br />

        <h1>고객센터</h1>
        <hr />

        <Link
          to={{
            pathname: "/service/id",
            state: {
              index: 1,
            },
          }}
          style={{ textDecoration: "none" }}
        >
          <p className="menuService">고객센터</p>
        </Link>
      </div>
      <MyPageBodyRight menu={menu} />
    </div>
  );
}

export default MyPageBody;
