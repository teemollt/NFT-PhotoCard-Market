import React from "react";
import { TextField } from "@material-ui/core";
import "./LoginTable.css";

function LoginTable() {
  return (
    <table className="loginTable">
      <h1>LOGIN</h1>
      <tbody>
        <tr id="loginId">
          <th>아이디</th>
          <td>
            <TextField id="standard-basic" />
          </td>
        </tr>

        <tr id="loginPW">
          <th>비밀번호</th>
          <td>
            <TextField id="standard-basic" type="password" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default LoginTable;
