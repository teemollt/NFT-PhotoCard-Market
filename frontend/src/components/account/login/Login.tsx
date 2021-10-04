import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import JoinAlert from "../join/JoinAlert";
import DialogContent from "@material-ui/core/DialogContent";
import axios from "axios";
import "./Login.css";

function Login() {
  const [openDia, setOpenDia] = React.useState<boolean>(false);
  const handleToJoin = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.location.replace("/join");
  };
  const [loginId, setLoginId] = useState<string>("");
  const [loginPw, setLoginPw] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const login = () => {
    axios
      .post("api/member/login", { memberId: loginId, memberPw: loginPw })
      .then((res) => {
        localStorage.setItem("token", "Bearer " + res.data.token.accessToken);
        window.location.replace("/");
      })
      .catch(() => {
        setOpen(true);
      });
  };

  const handleClickOpen = () => {
    setOpenDia(true);
  };

  const handleCloseDia = () => {
    setOpenDia(false);
  };

  return (
    <div>
      <text
        className="loginText"
        onClick={handleClickOpen}
        style={{ cursor: "poin" }}
      >
        Login
      </text>
      <Dialog
        open={openDia}
        onClose={handleCloseDia}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <div>
            {open ? (
              <JoinAlert
                message="아이디 또는 비밀번호를 확인해 주세요"
                handleClose={handleClose}
                open={open}
              />
            ) : null}
            <table className="loginTable">
              <h1>LOGIN</h1>
              <tbody>
                <tr id="loginId">
                  <th>아이디</th>
                  <td>
                    <TextField
                      id="standard-basic"
                      onChange={(e) => {
                        setLoginId(e.target.value);
                      }}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          login();
                        }
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
                        setLoginPw(e.target.value);
                      }}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          login();
                        }
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
                <Button onClick={handleCloseDia} color="secondary">
                  취소
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Login;
