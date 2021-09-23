import React, { useState } from "react";
import { useLocation } from "react-router";
import "./MarketItem.css";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AuctionBuyItem from "../market/MarketBuyItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      height: "400px",
    },
    container: {
      width: "400px",
    },
    paper2: {
      padding: theme.spacing(1),
      textAlign: "center",
    },
    iteminfos: {
      padding: 0,
    },
    iteminfo: {},
  })
);
function MarketItem(): JSX.Element {
  const classes = useStyles();

  const location: any = useLocation();
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <Container className={classes.container}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <img
                  src={location.state.data.imgUrl}
                  alt=""
                  width="100%"
                  height="100%"
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.iteminfo}>
                <h1>{location.state.data.auction.auctionTitle}</h1>
              </div>
              <div className={classes.iteminfo}>
                {location.state.data.auction.auctionDetil}
              </div>
              <div className={classes.paper2}>
                <div className="buybtn">
                  <AuctionBuyItem price={location.state.data.auction.price} />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default MarketItem;
