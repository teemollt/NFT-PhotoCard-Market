import React from "react";
import JoinTable from "../account/join/JoinTable";
import JoinCeleb from "../account/join/JoinCeleb";
import JoinBtns from "../account/join/JoinBtns";

function Join() {
  return (
    <div className="Join">
      <JoinTable />
      <JoinCeleb />
      <JoinBtns />
    </div>
  );
}

export default Join;
