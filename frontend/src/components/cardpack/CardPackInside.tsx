import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "30%",
      margin: "auto",
    },
  })
);

function CardPackInside(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>획득 가능한 카드등급 개수</h1>
      <br />
      <List>
        <ListItem button>
          <Grid item xs={6}>
            <div style={{ textAlign: "center" }}>S</div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ textAlign: "center" }}>test</div>
          </Grid>
        </ListItem>
        <ListItem button>
          <Grid item xs={6}>
            <div style={{ textAlign: "center" }}>A</div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ textAlign: "center" }}>test</div>
          </Grid>
        </ListItem>
        <ListItem button>
          <Grid item xs={6}>
            <div style={{ textAlign: "center" }}>B</div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ textAlign: "center" }}>test</div>
          </Grid>
        </ListItem>
        <ListItem button>
          <Grid item xs={6}>
            <div style={{ textAlign: "center" }}>C</div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ textAlign: "center" }}>test</div>
          </Grid>
        </ListItem>
      </List>
    </div>
  );
}

export default CardPackInside;
