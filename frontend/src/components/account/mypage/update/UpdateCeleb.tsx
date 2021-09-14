import React, { useState } from "react";

export interface State {
  celeb: number;
}

function UpdateCeleb() {
  const [celeb, setCeleb] = useState(0);

  const handleCeleb = (id: number) => {
    if (id === 0) {
      setCeleb(0);
    } else if (id === 1) {
      setCeleb(1);
    } else if (id === 2) {
      setCeleb(2);
    } else if (id === 3) {
      setCeleb(3);
    } else if (id === 4) {
      setCeleb(4);
    } else if (id === 5) {
      setCeleb(5);
    }
  };

  return (
    <div className="joinSelectCeleb">
      <div className="joinCelebInfo">
        <span className="require">●</span>
        <span>CELEB 선택</span>
        <span className="joinCelebSubInfo">좋아하는 CELEB을 선택해 주세요</span>
      </div>
      <div className="joinCelebBoxs">
        <div
          className="joinCelebBox joinKim"
          onClick={() => handleCeleb(0)}
          style={{
            backgroundColor:
              celeb === 0 ? "rgba(16, 0, 247, 0.329)" : undefined,
          }}
        >
          김도형
        </div>
        <div
          className="joinCelebBox joinNa"
          onClick={() => handleCeleb(1)}
          style={{
            backgroundColor:
              celeb === 1 ? "rgb(232, 248, 10, 0.329)" : undefined,
          }}
        >
          나비
        </div>
        <div
          className="joinCelebBox joinNam"
          onClick={() => handleCeleb(2)}
          style={{
            backgroundColor:
              celeb === 2 ? "rgb(241, 162, 13, 0.329)" : undefined,
          }}
        >
          남근형
        </div>
        <div
          className="joinCelebBox joinShin"
          onClick={() => handleCeleb(3)}
          style={{
            backgroundColor:
              celeb === 3 ? "rgba(127, 12, 235, 0.329)" : undefined,
          }}
        >
          신지현
        </div>
        <div
          className="joinCelebBox joinCho"
          onClick={() => handleCeleb(4)}
          style={{
            backgroundColor:
              celeb === 4 ? "rgba(24, 248, 4, 0.329)" : undefined,
          }}
        >
          조영우
        </div>
        <div
          className="joinCelebBox joinHa"
          onClick={() => handleCeleb(5)}
          style={{
            backgroundColor:
              celeb === 5 ? "rgb(7, 182, 252, 0.329)" : undefined,
          }}
        >
          하지훈
        </div>
      </div>
    </div>
  );
}

export default UpdateCeleb;
