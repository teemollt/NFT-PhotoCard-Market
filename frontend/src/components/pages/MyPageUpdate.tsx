import React from "react";
import UpdateCeleb from "../account/mypage/update/UpdateCeleb";
import UpdateTable from "../account/mypage/update/UpdateTable";
import UpdateBtns from "../account/mypage/update/UpdateBtns";

function MyPageUpdate() {
  return (
    <div>
      <UpdateTable />
      <UpdateCeleb />
      <UpdateBtns />
    </div>
  );
}

export default MyPageUpdate;
