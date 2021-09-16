import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";

function JoinTable() {
  const [memberId, setMemberId] = useState<string>("");
  const [memberPw, setMemberPw] = useState<string | null>(null);
  const [password2, setPassword2] = useState<string | null>(null);
  const [memberPwCheck, setMemberPwCheck] = useState<number>(0);
  const [memberNick, setMemberNick] = useState<string>("");
  const [memberEmail, setMemberEmail] = useState<string>("");
  const [likeCeleb, setLikeCeleb] = useState<number>(999);

  useEffect(() => {
    axios
      .get("/api/member/mypage", {
        headers: { Authorization:  localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res)
        setMemberId(res.data.mypage.memberId);
        setMemberNick(res.data.mypage.memberNick);
        setMemberEmail(res.data.mypage.memberEmail);
        setLikeCeleb(res.data.mypage.celebNo);
      });
  }, []);

  const handleMemberPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberPw(e.target.value.trim());
    if (
      memberPw !== null &&
      memberPw
        .trim()
        .match(
          /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{1,50}).{8,16}$/
        )
    ) {
      setMemberPwCheck(1);
    } else {
      setMemberPwCheck(2);
    }
  };

  const handleMemberEmail = (e: any) => {
    setMemberEmail(e.target.value)
  }

  const handlePassword2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword2(e.target.value);
  };

  const handleLikeCeleb = (id: number) => {
    setLikeCeleb(id);
  };

  return (
    <div>
      <table className="joinTable">
        <h1>UPDATE</h1>
        <tbody>
          <tr id="joinId">
            <th>
              <span className="require">●</span>
              <span>아이디</span>
            </th>
            <td>
              <p>{memberId}</p>
            </td>
          </tr>
          <tr id="joinPw1">
            <th>
              <span className="require">●</span>
              <span>비밀번호</span>
            </th>
            <td>
              <TextField
                id="standard-basic"
                type="password"
                helperText="영문/숫자/특수문자, 8~16자"
                error={memberPwCheck === 2 ? true : false}
                onChange={handleMemberPw}
              />
            </td>
          </tr>
          <tr id="joinPw2">
            <th>
              <span className="require">●</span>
              <span>비밀번호 확인</span>
            </th>
            <td>
              <TextField
                id="standard-basic"
                type="password"
                onChange={handlePassword2}
                helperText={
                  memberPw !== password2 ? "비밀번호가 일치하지 않습니다" : ""
                }
                error={memberPw !== password2 ? true : false}
              />
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
                value={memberEmail}
                onChange={handleMemberEmail}
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
                likeCeleb === 0 ? "rgba(95, 0, 247, 0.329)" : undefined,
            }}
          >
            태연
          </div>
          <div
            className="joinCelebBox joinTi"
            onClick={() => handleLikeCeleb(1)}
            style={{
              backgroundColor:
                likeCeleb === 1 ? "rgba(248, 10, 248, 0.329)" : undefined,
            }}
          >
            티파니
          </div>
          <div
            className="joinCelebBox joinSeo"
            onClick={() => handleLikeCeleb(2)}
            style={{
              backgroundColor:
                likeCeleb === 2 ? "rgb(241, 162, 13, 0.329)" : undefined,
            }}
          >
            서현
          </div>
          <div
            className="joinCelebBox joinHyun"
            onClick={() => handleLikeCeleb(3)}
            style={{
              backgroundColor:
                likeCeleb === 3 ? "rgba(235, 12, 49, 0.329)" : undefined,
            }}
          >
            현아
          </div>
          <div
            className="joinCelebBox joinGd"
            onClick={() => handleLikeCeleb(4)}
            style={{
              backgroundColor:
                likeCeleb === 4 ? "rgba(235, 231, 12, 0.329)" : undefined,
            }}
          >
            G-DRAGON
          </div>
          <div
            className="joinCelebBox joinIu"
            onClick={() => handleLikeCeleb(5)}
            style={{
              backgroundColor:
                likeCeleb === 5 ? "rgba(176, 235, 12, 0.329)" : undefined,
            }}
          >
            아이유
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
