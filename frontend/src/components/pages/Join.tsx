import React, { useState } from "react";
import JoinSuccess from "../account/join/JoinSuccess";
import JoinTable from "../account/join/JoinTable";

export interface State {
  join: boolean;
}

function Join() {
  const [join, setJoin] = useState(false);

  const handleJoinRes = (e: any) => {
    setJoin(true);
  };

  return (
    <div className="Join">
      {join ? <JoinSuccess /> : <JoinTable handleJoinRes={handleJoinRes} />}
    </div>
  );
}

export default Join;
