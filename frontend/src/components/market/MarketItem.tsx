import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSpring, useSprings, animated, to } from "react-spring";
import "./MarketItem.css";

function MarketItem(props: any) {
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
  function itemdetail(data: any) {
    history.push({
      pathname: `/marketitem/${data.auction.auctionNo}`,
      state: { auctionNo: data.auction.auctionNo },
    });
  }
  return (
    <div
      className="container"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => {
        itemdetail(props.item);
      }}
    >
      <div style={{ textAlign: "center" }}>
        <strong>{props.item.auction.auctionTitle}</strong>
      </div>
      <div style={{ textAlign: "center" }}>{props.item.auction.price} coin</div>
      <div style={{ textAlign: "center" }}>
        [{props.item.card.cardNM}({props.item.card.cardGradeNM})]
      </div>
      <div style={{ textAlign: "center" }}>
        {cards.map(({ z, opacity }, index) => (
          <animated.div
            key={index}
            style={{
              opacity,
              transform: to(
                [z, f.to([0, 0.2, 0.6, 1], [0, index, index, 0]), r],
                (z, f, r) => `translate3d(0,0,0px) rotateX(0deg)`
              ),
            }}
          >
            {index === 4 && (
              <animated.img
                style={{
                  transform: f.to([1, 0], ["scale(0.9)", "scale(1)"]),
                  width: "100%",
                  height: "300px",
                  borderRadius: "20px",
                }}
                src={props.image}
              />
            )}
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default MarketItem;
