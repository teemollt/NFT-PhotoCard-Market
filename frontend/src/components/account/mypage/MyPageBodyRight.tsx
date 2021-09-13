import React from "react";
import { connect } from "react-redux";
import ShopBuy from "./shop/ShopBuy";
import ShopKeep from "./shop/ShopKeep";
import "./MyPageBodyRight.css";

function MyPageBodyRight(prop: any) {
  return (
    <div className="mypageBodyRight">
      {prop.myPageMenu === 0 ? (
        <ShopBuy />
      ) : prop.myPageMenu === 1 ? (
        <ShopKeep />
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
