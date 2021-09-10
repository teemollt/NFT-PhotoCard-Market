import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function UpdateBtns() {

  return (
    <div className="joinBtns">
      <Link className="tablink" to="/mypage">
        <Button className="joinCancelBtn" variant="contained">취소</Button>
      </Link>
      <Button className="joinBtn" variant="contained" color="primary">수정</Button>
    </div>
  )
}

export default UpdateBtns
