import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
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
    <div className="main">
      {items.map((item, i) => (
        <MarketItem
          // image={item.card.cardImgUrl}
          image="/images/cardshop.png"
          background="#52649e"
          item={item}
        />
      ))}
    </div>
  );
}

export default MarketBody;
