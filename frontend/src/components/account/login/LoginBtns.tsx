import React from "react";
import { Button } from "@material-ui/core";
import "./LoginBtns.css";

function LoginBtns(props: any) {
  console.log(props);

  const handleToJoin = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.location.replace("/join");
  };

  return (
    <div className="loginBtns">
      <div className="loginBtnsLeft">
        <Button onClick={handleToJoin}>회원가입</Button>
      </div>
      <div className="loginBtnsRight">
        <Button color="primary">로그인</Button>
        <Button onClick={props.handleClose} color="secondary">
          취소
        </Button>
      </div>
    </div>
  );
}

export default LoginBtns;
