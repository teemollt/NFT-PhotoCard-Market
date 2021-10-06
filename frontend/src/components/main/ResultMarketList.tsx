import React, { useState } from "react";
import { useSpring, useSprings, animated, to } from "react-spring";
import { useHistory } from "react-router-dom";

function ResultMarketList(props: any) {
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
  const handleToMarket = (data: number) => {
    history.push({
      pathname: `/marketitem/${data}`,
      state: { auctionNo: data },
    });
  };
  return (
    <div
      className="container"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => {
        handleToMarket(props.item.auction.auctionNo);
      }}
    >
      <div style={{ textAlign: "center" }}>{props.item.card.cardNM}</div>
      <div style={{ textAlign: "center" }}>{props.item.card.cardGradeNM}</div>
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
                  transform: f.to([1, 0], ["scale(0.7)", "scale(0.9)"]),
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

export default ResultMarketList;
