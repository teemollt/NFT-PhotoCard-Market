import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSpring, useSprings, animated, to } from "react-spring";
import { useLocation } from "react-router";
import "./MainSearchAll.css";
import ResultCardsList from "../main/ResultCardsList";
import ResultMarketList from "../main/ResultMarketList";

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
      className="container"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => {
        buycardpack(props.cardpackinfo);
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "0" }}>
        <h3>{props.cardpackinfo.salesNM}</h3>
      </div>
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
                transform: f.to([1, 0], ["scale(1.3)", "scale(1.5)"]),
                width: "150px",
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
      });
  }, []);
  return (
    <div>
      {/* 카드팩 */}
      <div>
        {resultcardpack.length > 0 ? (
          <div className="result1">
            {resultcardpack.map((pack, i) => (
              <Stack
                image="/image/cardpack.png"
                background="#52649e"
                cardpackinfo={pack}
                key={i}
              />
            ))}
          </div>
        ) : (
          <h3 className="noresult">관련 카드팩 상품이 없습니다</h3>
        )}
      </div>
      <hr style={{ width: "50%" }} />
      <div style={{ textAlign: "center" }}>
        <h3>마켓에 등록된 제목 검색 결과</h3>
        {resultauction.length > 0 ? (
          <div className="result3">
            {resultauction.map((card, i) => (
              <ResultMarketList
                image={card.card.cardImgUrl}
                background="#52649e"
                item={card}
                key={i}
              />
            ))}
          </div>
        ) : (
          <h5 className="noresult">
            현재 마켓에 해당 키워드로 등록된 물품이 없습니다
          </h5>
        )}
      </div>
      <div></div>
      <hr style={{ width: "50%" }} />
      <div style={{ textAlign: "center" }}>
        <h3>존재하는 카드</h3>
        {resultcards.length > 0 ? (
          <div className="result3">
            {resultcards.map((card, i) => (
              <ResultCardsList
                image={card.cardImgUrl}
                background="#52649e"
                item={card}
                key={i}
              />
            ))}
          </div>
        ) : (
          <h5 className="noresult">해당 키워드로 조회된 카드가 없습니다</h5>
        )}
      </div>
    </div>
  );
}

export default MainSearchAll;
