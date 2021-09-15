import React from "react";
import { connect } from "react-redux";
import ShopBuy from "./shop/ShopBuy";
import ShopKeep from "./shop/ShopKeep";
import "./MyPageBodyRight.css";
import AuctionMy from "./auction/AuctionMy";
import AuctionMyBid from "./auction/AuctionMyBid";

function MyPageBodyRight(prop: any) {
  return (
    <div className="mypageBodyRight">
      {prop.myPageMenu === 0 ? (
        <ShopBuy />
      ) : prop.myPageMenu === 1 ? (
        <ShopKeep />
      ) : prop.myPageMenu === 2 ? (
        <AuctionMy />
      ) : prop.myPageMenu === 3 ? (
        <AuctionMyBid />
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
