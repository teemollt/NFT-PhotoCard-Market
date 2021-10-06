import React from "react";
import ShopBuy from "./shop/ShopBuy";
import ShopKeep from "./shop/ShopKeep";
import MarketMy from "./market/MarketMy";
import MarketMyBid from "./market/MarketMyBid";
import MarketLike from "./market/MarketLike";
import "./MyPageBodyRight.css";

interface MyPageBodyRightProps {
  menu: number;
}

function MyPageBodyRight(props: MyPageBodyRightProps): JSX.Element {
  const { menu } = props;
  return (
    <div className="mypageBodyRight">
      {menu === 0 ? (
        <ShopBuy />
      ) : menu === 1 ? (
        <ShopKeep />
      ) : menu === 2 ? (
        <MarketMy />
      ) : menu === 3 ? (
        <MarketMyBid />
      ) : menu === 4 ? (
        <MarketLike />
      ) : null}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    myPageMenu: state.myPageMenu,
  };
};

export default MyPageBodyRight;
