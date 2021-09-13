import React from "react";
import MainAuctionBody from "../auction/MainAuctionBody";
import MainAuctionTab from "../auction/MainAuctionTab";
import Grid from "@material-ui/core/Grid";
function MainAuction() {
  return (
    <div>
      <div></div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={1}>
          <MainAuctionTab />
        </Grid>
        <Grid item xs={12} sm={11}>
          <MainAuctionBody />
        </Grid>
      </Grid>
    </div>
  );
}

export default MainAuction;
