import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import "./LoginTable.css";
import { Button } from "@material-ui/core";
import "./LoginBtns.css";
import axios from "axios";

function LoginTable(props: any) {
  const handleToJoin = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.location.replace("/join");
  };
  const [loginid, setloginid] = useState<string>("");
  const [loginpw, setloginpw] = useState<string>("");
  const login = () => {
    console.log(loginid);
    console.log(loginpw);
    axios
      .post("api/member/login", { memberId: loginid, memberPw: loginpw })
      .then(() => {
        alert("로그인성공");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <table className="loginTable">
        <h1>LOGIN</h1>
        <tbody>
          <tr id="loginId">
            <th>아이디</th>
            <td>
              <TextField
                id="standard-basic"
                onChange={(e) => {
                  setloginid(e.target.value);
                }}
              />
            </td>
          </tr>

          <tr id="loginPW">
            <th>비밀번호</th>
            <td>
              <TextField
                id="standard-basic"
                type="password"
                onChange={(e) => {
                  setloginpw(e.target.value);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="loginBtns">
        <div className="loginBtnsLeft">
          <Button onClick={handleToJoin}>회원가입</Button>
        </div>
        <div className="loginBtnsRight">
          <Button color="primary" onClick={login}>
            로그인
          </Button>
          <Button onClick={props.handleClose} color="secondary">
            취소
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginTable;
