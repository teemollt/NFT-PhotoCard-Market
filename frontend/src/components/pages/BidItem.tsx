import React, { useState } from "react";
import { useLocation } from "react-router";
import "./BidItem.css";
import Countdown from "react-countdown";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
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
function BidItem(): JSX.Element {
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

export default BidItem;
