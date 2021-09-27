import React from "react";
import { connect } from "react-redux";
import ShopBuy from "./shop/ShopBuy";
import ShopKeep from "./shop/ShopKeep";
import "./MyPageBodyRight.css";
import MarketMy from "./market/MarketMy";
import MarketMyBid from "./market/MarketMyBid";
import MarketLike from "./market/MarketLike";
import { myPageMenu } from "../../../redux/actions";

interface MyPageBodyRightProps {
  myPageMenu: number;
}

function MyPageBodyRight(props: MyPageBodyRightProps): JSX.Element {
  const { myPageMenu } = props;
  return (
    <div className="mypageBodyRight">
      {myPageMenu === 0 ? (
        <ShopBuy />
      ) : myPageMenu === 1 ? (
        <ShopKeep />
      ) : myPageMenu === 2 ? (
        <MarketMy />
      ) : myPageMenu === 3 ? (
        <MarketMyBid />
      ) : myPageMenu === 4 ? (
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

export default connect(mapStateToProps)(MyPageBodyRight);
