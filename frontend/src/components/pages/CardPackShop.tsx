import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSpring, useSprings, animated, interpolate } from "react-spring";
import "./CardPackShop.css";
import axios from "axios";

function Stack(props: any) {
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
    console.log(data);
    history.push({
      pathname: `/cardpackdetail/${data.salesNo}`,
      state: { data: data },
    });
  }
  return (
    <div
      className="container"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => {
        console.log(props.cardpackinfo);
        buycardpack(props.cardpackinfo);
      }}
    >
      {props.cardpackinfo.salesNM}
      {cards.map(({ z, opacity }, index) => (
        <animated.div
          style={{
            opacity,
            transform: interpolate(
              [z, f.interpolate([0, 0.2, 0.6, 1], [0, index, index, 0]), r],
              (z, f, r) => `translate3d(0,0,0px) rotateX(0deg)`
            ),
          }}
        >
          {index === 4 && (
            <animated.img
              style={{
                transform: f.interpolate([1, 0], ["scale(1.2)", "scale(1.5)"]),
              }}
              src={props.image}
            />
          )}
        </animated.div>
      ))}
    </div>
  );
}

function CardPackShop() {
  const [cardpack, setcardpack] = useState<any[]>([]);
  useEffect(() => {
    axios.get("/api/saleCard").then((res) => {
      console.log(res.data.res);
      setcardpack(res.data.res);
    });
  }, []);
  return (
    <div className="main">
      {cardpack.map((pack, i) => (
        <Stack
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgSoBsV0_uEb8pqRg4lHQ9DTiPqwot2rEZmg&usqp=CAU"
          background="#52649e"
          cardpackinfo={pack}
        />
      ))}
    </div>
  );
}

export default CardPackShop;
