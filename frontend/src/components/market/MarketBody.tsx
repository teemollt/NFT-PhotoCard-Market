import React, { useState, useEffect } from "react";
import "./MarketBody.css";
import MarketItem from "./MarketItem";
import axios from "axios";

function MarketBody(props: any): JSX.Element {
  const [items, setitems] = useState<any[]>([]);
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
  });
  return (
    <div className="main">
      {items.map((item, i) => (
        <MarketItem
          image={item.card.cardImgUrl}
          background="#52649e"
          item={item}
        />
      ))}
    </div>
  );
}

export default MarketBody;
