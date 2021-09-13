import React from "react";
import MainAuctionBody from "../auction/MainAuctionBody";
import MainAuctionTab from "../auction/MainAuctionTab";
function MainAuction() {
  return (
    <div>
      <div style={{width:"200px"}}>
        <MainAuctionTab />
      </div>
      <div>
        <MainAuctionBody />
      </div>
    </div>
  );
}

export default MainAuction;
