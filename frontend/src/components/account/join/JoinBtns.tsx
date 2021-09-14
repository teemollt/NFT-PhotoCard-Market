import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./JoinBtns.css";

function JoinBtns() {
  return (
    <div className="joinBtns">
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button className="joinCancelBtn" variant="contained">
          취소
        </Button>
      </Link>
      <Button className="joinBtn" variant="contained" color="primary">
        회원가입
      </Button>
    </div>
  );
}

export default JoinBtns;
