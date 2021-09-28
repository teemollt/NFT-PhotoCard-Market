import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSpring, useSprings, animated, to } from "react-spring";
import { useLocation } from "react-router";
import "./MainSearchAll.css";
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
      <div style={{ textAlign: "center" }}>
        <h3>{props.cardpackinfo.salesNM}</h3>
      </div>
      {cards.map(({ z, opacity }, index) => (
        <animated.div
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
                transform: f.to([1, 0], ["scale(1)", "scale(1.3)"]),
                width: "70%",
              }}
              src={props.image}
            />
          )}
        </animated.div>
      ))}
    </div>
  );
}

function MainSearchAll() {
  const location: any = useLocation();
  const [resultauction, setresultauction] = useState<any[]>([]);
  const [resultcardpack, setresultcardpack] = useState<any[]>([]);
  const [resultcards, setresultcards] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get(`/api/search/all/${location.state.paramskeyword}`, {
        keyword: location.state.paramskeyword,
      })
      .then((res) => {
        setresultauction(res.data.auctionList);
        setresultcards(res.data.cardList);
        setresultcardpack(res.data.cardPackList);
        console.log(res.data);
      });
  }, []);
  return (
    <div>
      <div className="resultcardpack">
        {resultcardpack.map((pack, i) => (
          <Stack
            image="/image/cardpack.png"
            background="#52649e"
            cardpackinfo={pack}
          />
        ))}
      </div>
      {/* <div>{resultauction.map(card,i)=>(card.cardImgUrl)}</div> */}
      <div>{resultcards.map((card, i) => card.cardNM)}</div>
    </div>
  );
}

export default MainSearchAll;
