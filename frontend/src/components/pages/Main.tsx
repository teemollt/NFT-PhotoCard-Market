import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Main.css";
import MainCarousel from "../main/MainCarousel";
import MainCarousel1 from "../main/MainCarousel1";
import MainCarousel2 from "../main/MainCarousel2";
import MainCarousel3 from "../main/MainCarousel3";
import MainCarousel4 from "../main/MainCarousel4";
import MainCarousel5 from "../main/MainCarousel5";

function Main(): JSX.Element {
  const [keyword, setkeyword] = useState("");
  let history = useHistory();
  function searchkeyword(paramskeyword: string) {
    history.push({
      pathname: `/searchall/${paramskeyword}`,
      state: { paramskeyword: paramskeyword },
    });
  }

  return (
    <div>
      <div className="mainitem1">
        <div className="mainitem">
          <MainCarousel1 />
        </div>
        <div className="mainitem">
          <MainCarousel2 />
        </div>
        <div className="mainitem">
          <MainCarousel3 />
        </div>
        <div className="mainitem">
          <MainCarousel4 />
        </div>
        <div className="mainitem">
          <MainCarousel5 />
        </div>
      </div>
      <div className="mainitem2">
        <MainCarousel />
      </div>
      <br />
      <div className="search">
        <div>
          <form className="search-form">
            <input
              type="search"
              placeholder="찾고싶은 셀럽의 이름을 입력해주세요"
              className="search-input"
              onChange={(e) => {
                setkeyword(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  searchkeyword(keyword);
                }
              }}
            />
            <button type="submit" className="search-button" disabled>
              <svg className="submit-button">
                <use xlinkHref="#search" />
              </svg>
            </button>
          </form>
          <svg xmlns="" width={0} height={0} display="none">
            <symbol id="search" viewBox="0 0 32 32">
              <path d="M 19.5 3 C 14.26514 3 10 7.2651394 10 12.5 C 10 14.749977 10.810825 16.807458 12.125 18.4375 L 3.28125 27.28125 L 4.71875 28.71875 L 13.5625 19.875 C 15.192542 21.189175 17.250023 22 19.5 22 C 24.73486 22 29 17.73486 29 12.5 C 29 7.2651394 24.73486 3 19.5 3 z M 19.5 5 C 23.65398 5 27 8.3460198 27 12.5 C 27 16.65398 23.65398 20 19.5 20 C 15.34602 20 12 16.65398 12 12.5 C 12 8.3460198 15.34602 5 19.5 5 z" />
            </symbol>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Main;
