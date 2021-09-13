import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./UpdateBtns.css";

function UpdateBtns() {
  return (
    <div className="updateBtns">
      <Link
        className="updateCanclelink"
        to="/mypage"
        style={{ textDecoration: "none" }}
      >
        <Button className="updateCancelBtn" variant="contained">
          취소
        </Button>
      </Link>
      <Button className="updateBtn" variant="contained" color="primary">
        수정
      </Button>
    </div>
  );
}

export default UpdateBtns;
