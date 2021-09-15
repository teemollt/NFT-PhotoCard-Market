import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./JoinSuccess.css";

function JoinSuccess() {
  return (
    <div className="JoinSuccess">
      <CheckCircleIcon className="joinSuccessIcon" />
      <p>회원가입이 완료되었습니다</p>
      <span>환영합니다</span>
    </div>
  );
}

export default JoinSuccess;
