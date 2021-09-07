import React from "react";
import "./CardPackDetail.css";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import CardPackInside from "../cardpack/CardPackInside";
import Review from "../cardpack/Review";

function CardPackDetail(): JSX.Element {
  // function buy() {
  //   return;
  // }
  return (
    <div className="cardpackdetail">
      <div className="cardpackdetail">
        <Grid container spacing={3}>
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
            <div className="cardpackimage">
              <img
                src="https://contents.lotteon.com/itemimage/_v102419/LO/15/50/54/78/79/_1/55/05/47/88/0/LO1550547879_1550547880_1.jpg/dims/resizemc/400x400"
                alt=""
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <div className="cardpackinfo">
                <h2>iu의 2021년 카드팩</h2>
                <p>설명중</p>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    console.log("구매");
                  }}
                >
                  구매하기
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>
      <CardPackInside />
      <Review />
    </div>
  );
}

export default CardPackDetail;
