import React from "react";
import "./AuctionItem.css";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      height: 370,
    },
  })
);

function AuctionItem(props: any) {
  let history = useHistory();
  function getitem(data: any) {
    console.log(data);

    history.push({
      pathname: `/biditem/${data.auction.auctionNo}`,
      state: { data: data },
    });
  }
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={3}>
      <Paper
        className={classes.paper}
        onClick={() => {
          getitem(props.item);
        }}
        style={{ cursor: "pointer" }}
      >
        <img
          src={props.item.card.cardImageUrl}
          alt=""
          width="100%"
          height="300px"
        />
        <div className="itemcardinfo">
          <span className="producttitle">
            {props.item.auction.auctionTitle}
          </span>
          <span className="productprice">{props.item.auction.price}</span>
        </div>
      </Paper>
    </Grid>
  );
}

export default AuctionItem;
