import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSpring, useSprings } from "react-spring";
import "./CardPackShop.css";
import axios from "axios";

function Stack(props: any): JSX.Element {
  const [open, setOpen] = useState(false);
  const { f, r } = useSpring({ f: open ? 0 : 1, r: open ? -3 : 3 });
  const cards = useSprings(
    5,
    [0, 1, 2, 3, 4].map((i) => ({
      opacity: 0.2 + i / 5,
      z: open ? (i / 5) * 80 : 0,
    }))
  );
  let history = useHistory();
  function buycardpack(data: any) {
    history.push({
      pathname: `/cardpackdetail/${data.salesNo}`,
      state: { data: data },
    });
  }
  return (
    <div
      className="containercardpack"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => {
        buycardpack(props.cardpackinfo);
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h3>{props.cardpackinfo.salesNM}</h3>
      </div>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <img src={props.image} alt="" />
      </div>
    </div>
  );
}

function CardPackShop(): JSX.Element {
  const [cardpack, setcardpack] = useState<any[]>([]);
  useEffect(() => {
    axios.get("/api/saleCard").then((res) => {
      setcardpack(res.data.res);
    });
  }, []);
  return (
    <div className="main">
      {cardpack.map((pack, i) => (
        <Stack
          image={pack.salesImg}
          background="#52649e"
          cardpackinfo={pack}
          key={i}
        />
      ))}
    </div>
  );
}

export default CardPackShop;
