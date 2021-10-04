import React, { useState, useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { ResetTvTwoTone } from "@mui/icons-material";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      margin: "auto",
    },
  })
);

function CardPackInside(props: any): JSX.Element {
  const classes = useStyles();
  const [cards, setcards] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get(`/api/cardPack/cardList/${props.cardpackNo}`, {
        cardpackId: props.cardpackNo,
      })
      .then((res) => {
        setcards(res.data.res);
      })
      .catch();
  }, []);
  // }
  return (
    <div className={classes.root}>
      <h1>Cards List</h1>
      <br />

      <ListItem button>
        <Grid item xs={6}>
          <div style={{ textAlign: "center" }}>Card</div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ textAlign: "center" }}>Card Grade</div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ textAlign: "center" }}>Rest</div>
        </Grid>
      </ListItem>

      <List
        sx={{
          width: "100%",
          position: "relative",
          overflow: "auto",
          maxHeight: 400,
          "& ul": { padding: 0 },
        }}
      >
        {cards.map((card, i) => {
          return (
            <div key={i}>
              <ListItem button>
                <Grid item xs={6}>
                  <div style={{ textAlign: "center" }}>{card.cardNM}</div>
                </Grid>
                <Grid item xs={6}>
                  <div style={{ textAlign: "center" }}>{card.cardGradeNM}</div>
                </Grid>
                <Grid item xs={6}>
                  <div style={{ textAlign: "center" }}>{card.cardCount}</div>
                </Grid>
              </ListItem>
            </div>
          );
        })}
      </List>
      <h6>* 이미 뽑힌 카드는 목록에 표시되지 않을 수 있습니다.</h6>
      <h6>
        * 남은 카드개수가 5장 미만일 경우, 5장 미만의 카드를 획득할 수 있습니다.
      </h6>
    </div>
  );
}

export default CardPackInside;
