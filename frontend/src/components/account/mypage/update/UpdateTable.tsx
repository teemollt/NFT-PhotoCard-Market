import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";

export interface State {
  likeCeleb: number;
}

function JoinTable(props: any) {
  const [likeCeleb, setLikeCeleb] = useState(0);

  const handleLikeCeleb = (id: number) => {
    setLikeCeleb(id);
  };

  return (
    <div>
      <table className="joinTable">
        <h1>JOIN</h1>
        <tbody>
          <tr id="joinId">
            <th>
              <span className="require">●</span>
              <span>아이디</span>
            </th>
            <td>
              <p>ssafy</p>
            </td>
          </tr>
          <tr id="joinPw1">
            <th>
              <span className="require">●</span>
              <span>비밀번호</span>
            </th>
            <td>
              <TextField id="standard-basic" type="password" />
            </td>
          </tr>
          <tr id="joinPw2">
            <th>
              <span className="require">●</span>
              <span>비밀번호 확인</span>
            </th>
            <td>
              <TextField id="standard-basic" type="password" />
            </td>
          </tr>
          <tr id="joinNick">
            <th>
              <span className="require">●</span>
              <span>닉네임</span>
            </th>
            <td>
              <TextField id="standard-basic" />
              <Button className="joinCheckBtn" variant="outlined" size="small">
                중복 확인
              </Button>
            </td>
          </tr>
          <tr id="joinNick">
            <th>
              <span className="require">●</span>
              <span>이메일</span>
            </th>
            <td>
              <TextField
                id="standard-basic"
                type="email"
                autoComplete="email"
              />
              <Button className="joinCheckBtn" variant="outlined" size="small">
                중복 확인
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="joinSelectCeleb">
        <div className="joinCelebInfo">
          <span className="require">●</span>
          <span>CELEB 선택</span>
          <span className="joinCelebSubInfo">
            좋아하는 CELEB을 선택해 주세요
          </span>
        </div>
        <div className="joinCelebBoxs">
          <div
            className="joinCelebBox joinKim"
            onClick={() => handleLikeCeleb(0)}
            style={{
              backgroundColor:
                likeCeleb === 0 ? "rgba(16, 0, 247, 0.329)" : undefined,
            }}
          >
            김도형
          </div>
          <div
            className="joinCelebBox joinNa"
            onClick={() => handleLikeCeleb(1)}
            style={{
              backgroundColor:
                likeCeleb === 1 ? "rgb(232, 248, 10, 0.329)" : undefined,
            }}
          >
            나비
          </div>
          <div
            className="joinCelebBox joinNam"
            onClick={() => handleLikeCeleb(2)}
            style={{
              backgroundColor:
                likeCeleb === 2 ? "rgb(241, 162, 13, 0.329)" : undefined,
            }}
          >
            남근형
          </div>
          <div
            className="joinCelebBox joinShin"
            onClick={() => handleLikeCeleb(3)}
            style={{
              backgroundColor:
                likeCeleb === 3 ? "rgba(127, 12, 235, 0.329)" : undefined,
            }}
          >
            신지현
          </div>
          <div
            className="joinCelebBox joinCho"
            onClick={() => handleLikeCeleb(4)}
            style={{
              backgroundColor:
                likeCeleb === 4 ? "rgba(24, 248, 4, 0.329)" : undefined,
            }}
          >
            조영우
          </div>
          <div
            className="joinCelebBox joinHa"
            onClick={() => handleLikeCeleb(5)}
            style={{
              backgroundColor:
                likeCeleb === 5 ? "rgb(7, 182, 252, 0.329)" : undefined,
            }}
          >
            하지훈
          </div>
        </div>
      </div>
      <div className="joinBtns">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button className="joinCancelBtn" variant="contained">
            취소
          </Button>
        </Link>
        <Button className="joinBtn" variant="contained" color="primary">
          수정
        </Button>
      </div>
    </div>
  );
}

export default JoinTable;
