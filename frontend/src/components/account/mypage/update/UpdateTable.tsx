import React, { useState } from "react";
import Snackbar, { SnackbarOrigin } from "@material-ui/core/Snackbar";
import { TextField, Button } from "@material-ui/core";

export interface State {
  password1: string;
  password2: string;
  nickname: string;
  email: string;
  checkEmail: boolean;
  snackNick: boolean;
  celeb: number;
}

function UpdateTable() {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState(true);
  const [snackNick, setSnackNick] = useState(false);

  const handleNickDupl = (newSnack: SnackbarOrigin) => (e: any) => {
    setSnackNick(true);
  };

  const handleSnackNickClose = (e: any) => {
    setSnackNick(false);
  };

  return (
    <table className="joinTable">
      <h1>UPDATE</h1>
      <tbody>
        <tr id="updateId">
          <th>
            <span className="require">●</span>
            <span>아이디</span>
          </th>
          <td>
            <p>ssafy</p>
          </td>
        </tr>

        <tr id="updatePw1">
          <th>
            <span className="require">●</span>
            <span>비밀번호</span>
          </th>
          <td>
            <TextField id="standard-basic" type="password" />
          </td>
        </tr>
        <tr id="updatePw2">
          <th>
            <span className="require">●</span>
            <span>비밀번호 확인</span>
          </th>
          <td>
            <TextField
              id="standard-basic"
              type="password"
              helperText={
                password1 !== password2 ? "비밀번호가 일치하지 않습니다" : ""
              }
              error={password1 !== password2 ? true : false}
            />
          </td>
        </tr>
        <tr id="updateNick">
          <th>
            <span className="require">●</span>
            <span>닉네임</span>
          </th>
          <td>
            <TextField id="standard-basic" />
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
        <tr id="updateNick">
          <th>
            <span className="require">●</span>
            <span>이메일</span>
          </th>
          <td>
            <TextField
              id="standard-basic"
              type="email"
              autoComplete="email"
              helperText={checkEmail ? "" : "유효하지 않은 메일입니다"}
              error={checkEmail ? false : true}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default UpdateTable;
