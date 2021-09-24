import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import "./MarketBody.css";
import MarketItem from "./MarketItem";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      height: "300px",
    },
  })
);

function MarketBody(props: any): JSX.Element {
  const [items, setitems] = useState<any[]>([]);
  const classes = useStyles();
  useEffect(() => {
    axios
      .get(`/api/auction/${props.celebNo}/list`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data.res);
        setitems(res.data.res);
      })
      .catch();
  }, []);
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={2}>
          {items.map((item, i) => (
            <MarketItem item={item} key={i} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default MarketBody;
