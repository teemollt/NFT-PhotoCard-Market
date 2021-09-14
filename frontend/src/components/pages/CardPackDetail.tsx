import React from "react";
import { useLocation } from "react-router";
import "./CardPackDetail.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import CardPackInside from "../cardpack/CardPackInside";
import Review from "../cardpack/Review";
import BuyCardPack from "../cardpack/BuyCardPack";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: "center",
    },
    container: {
      width: "60%",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
    paper2: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
    footer: {},
  })
);

function CardPackDetail(): JSX.Element {
  const classes = useStyles();

  const location: any = useLocation();
  console.log(location.state.data);
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>
              <img
                src="https://contents.lotteon.com/itemimage/_v102419/LO/15/50/54/78/79/_1/55/05/47/88/0/LO1550547879_1550547880_1.jpg/dims/resizemc/400x400"
                alt=""
              />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className={classes.paper2}>
              <h2>{location.state.data.salesNM}</h2>
              <hr />
              <div>
                <CardPackInside />
              </div>
            </div>
            <div className={classes.footer}>
              <BuyCardPack />
            </div>
          </Grid>
        </Grid>
      </Container>
      <Review cardpackNo={location.state.data.salesNo} />
    </div>
  );
}

export default CardPackDetail;
