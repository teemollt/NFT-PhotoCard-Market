import React from "react";
import { connect } from "react-redux";
import ShopBuy from "./shop/ShopBuy";
import ShopKeep from "./shop/ShopKeep";
import "./MyPageBodyRight.css";
import AuctionMy from "./auction/AuctionMy";
import AuctionMyBid from "./auction/AuctionMyBid";
import AuctionLike from "./auction/AuctionLike";
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
        <AuctionMy />
      ) : myPageMenu === 3 ? (
        <AuctionMyBid />
      ) : myPageMenu === 4 ? (
        <AuctionLike />
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
