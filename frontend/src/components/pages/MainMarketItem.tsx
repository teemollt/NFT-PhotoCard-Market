import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "./MainMarketItem.css";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import MarketBuyItem from "../market/MarketBuyItem";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";

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
function MainMarketItem(): JSX.Element {
  const [islike, setislike] = useState(false);
  const [likepeople, setlikepeople] = useState(0);
  // like, unlike
  const changelike = () => {
    console.log(islike);
    if (islike) {
      axios
        .post(
          "/api/auction/like",
          {
            auctionNo: location.state.data.auction.auctionNo,
          },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          setislike(false);
        });
    } else {
      axios
        .post(
          "/api/auction/like",
          {
            auctionNo: location.state.data.auction.auctionNo,
          },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          setislike(true);
        });
    }
  }; 
  useEffect(() => {
    axios
      .get(`/api/auction/likecheck/${location.state.data.auction.auctionNo}`, {
        auctionNo: location.state.data.auction.auctionNo,
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res);
        setlikepeople(res.data.peoplelike);
        if (res.data.islike === true) {
          setislike(true);
        } else {
          setislike(false);
        }
      })
      .catch();
  });
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
                  src={"/" + location.state.data.card.cardImgUrl + ".jpg"}
                  alt=""
                  width="100%"
                  height="100%"
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              {/* 좋아요 */}
              <Tooltip title={likepeople} placement="right-start">
                {islike ? (
                  <ShoppingCartIcon
                    onClick={changelike}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <AddShoppingCartIcon
                    onClick={changelike}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </Tooltip>
              <div className={classes.iteminfo}>
                <h1>{location.state.data.auction.auctionTitle}</h1>
              </div>
              <div className={classes.iteminfo}>
                {location.state.data.auction.auctionDetail}
              </div>
              <div className={classes.paper2}>
                <div className="buybtn">
                  <MarketBuyItem price={location.state.data.auction.price} />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default MainMarketItem;
