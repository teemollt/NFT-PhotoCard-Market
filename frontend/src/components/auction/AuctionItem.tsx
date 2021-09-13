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
  function getitem(data: number) {
    history.push(`/biditem/${data}`);
  }
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={3}>
      <Paper
        className={classes.paper}
        onClick={() => {
          getitem(props.image.id);
          console.log(props.image.id);
        }}
        style={{ cursor: "pointer" }}
      >
        <img src={props.image.imgUrl} alt="" width="100%" height="300px" />
        <div className="itemcardinfo">
          <span className="producttitle">{props.image.title}</span>
          <span className="productprice">{props.image.price}</span>
        </div>
      </Paper>
    </Grid>
  );
}

export default AuctionItem;
