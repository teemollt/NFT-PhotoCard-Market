import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import Snackbar, { SnackbarOrigin } from "@material-ui/core/Snackbar";
import axios from "axios";
import "./JoinTable.css";

export interface State {
  userId: string;
  userIdDupl: boolean,
  password1: string;
  password2: string;
  nickname: string;
  nicknameDupl: boolean;
  email: string;
  checkEmail: boolean;
  snackId: boolean;
  snackNick: boolean;
  celeb: number;
}

function JoinTable() {
  const [userId, setUserId] = useState("");
  const [userIdDupl, setUserIdDupl] = useState(false);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [nickname, setNickname] = useState("");
  const [nicknameDupl, setNicknameDupl] = useState(false);
  const [email, setEmail] = useState("");
  const [emailDupl, setEmailDupl] = useState(false);
  const [checkEmail, setCheckEmail] = useState(true);
  const [snackId, setSnackId] = useState(false);
  const [snackNick, setSnackNick] = useState(false);
  const [snackEmail, setSnackEmail] = useState(false);

  const handleUserId = (e: any) => {
    setUserId(e.target.value);
  };

  const handleUserIdDupl = (newSnack: SnackbarOrigin) => (e: any) => {
    axios.post('/api/member/checkId', {memberId: userId})
    .then( res => {
      if (res.data.success) {
        setSnackId(true)
        setUserIdDupl(false)
      } else {
        setUserIdDupl(true)
      }
    })
  }

  const handleSnackIdClose = (e: any) => {
    setSnackId(false);
  };

  const handlePassword1 = (e: any) => {
    setPassword1(e.target.value);
  };

  const handlePassword2 = (e: any) => {
    setPassword2(e.target.value);
  };

  const handleNick = (e: any) => {
    setNickname(e.target.value);
  };

  const handleNickDupl = (newSnack: SnackbarOrigin) => (e: any) => {
    axios.post('/api/member/checkNick', {memberNick: nickname})
    .then( res => {
      if (res.data.success) {
        setSnackNick(true)
        setNicknameDupl(false)
      } else {
        setNicknameDupl(true)
      }
    })
  };

  const handleSnackNickClose = (e: any) => {
    setSnackNick(false);
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
    if (
      e.target.value.match(
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
      )
    ) {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }
  };

  const handleEmailDupl = (newSnack: SnackbarOrigin) => (e: any) => {
    axios.post('/api/member/checkEmail', {memberEmail: email})
    .then( res => {
      if (res.data.success) {
        setSnackEmail(true)
        setEmailDupl(false)
      } else {
        setEmailDupl(true)
      }
    })
  };

  const handleSnackEmailClose = (e: any) => {
    setSnackEmail(false);
  };

  return (
    <table className="joinTable">
      <h1>JOIN</h1>
      <tbody>
        <tr id="joinId">
          <th>
            <span className="require">●</span>
            <span>아이디</span>
          </th>
          <td>
            <TextField 
              id="standard-basic" 
              onChange={handleUserId} 
              helperText={
                userIdDupl ? "이미 존재하는 아이디입니다" : ""
              }
              error={ userIdDupl ? true : false}
              />
            <Button
              className="joinDuplBtn"
              variant="outlined"
              size="small"
              onClick={handleUserIdDupl({
                vertical: "top",
                horizontal: "right",
              })}
            >
              중복 확인
            </Button>
            <Snackbar
              className="joinSnack"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              open={snackId}
              onClose={handleSnackIdClose}
              message="사용 가능한 아이디입니다"
            />
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
              onChange={handlePassword1}
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
                password1 !== password2 ? "비밀번호가 일치하지 않습니다" : ""
              }
              error={password1 !== password2 ? true : false}
            />
          </td>
        </tr>
        <tr id="joinNick">
          <th>
            <span className="require">●</span>
            <span>닉네임</span>
          </th>
          <td>
            <TextField 
              id="standard-basic" 
              onChange={handleNick} 
              helperText={
                nicknameDupl ? "이미 존재하는 닉네임입니다" : ""
              }
              error={ nicknameDupl ? true : false}
            />
            <Button
              className="joinDuplBtn"
              variant="outlined"
              size="small"
              onClick={handleNickDupl({ vertical: "top", horizontal: "right" })}
            >
              중복 확인
            </Button>
            <Snackbar
              className="joinSnack"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              open={snackNick}
              onClose={handleSnackNickClose}
              message="사용 가능한 닉네임입니다"
            />
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
              onChange={handleEmail}
              autoComplete="email"
              helperText={checkEmail ? emailDupl ? "이미 존재하는 이메일입니다" : "" : "유효하지 않은 메일입니다"}
              error={checkEmail ? emailDupl ? true : false : true}
            />
            <Button
              className="joinDuplBtn"
              variant="outlined"
              size="small"
              onClick={handleEmailDupl({ vertical: "top", horizontal: "right" })}
            >
              중복 확인
            </Button>
            <Snackbar
              className="joinSnack"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              open={snackEmail}
              onClose={handleSnackEmailClose}
              message="사용 가능한 이메일입니다"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default JoinTable;
