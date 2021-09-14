import React, { useState, useEffect } from "react"
import { TextField, Button } from "@material-ui/core"
import Snackbar, { SnackbarOrigin } from "@material-ui/core/Snackbar"
import axios from "axios"
import "./JoinTable.css"

export interface State {
  userId: string
  password1: string
  password2: string
  nickname: string
  email: string
  checkEmail: boolean
  snackId: boolean
  snackNick: boolean
  celeb: number
}

function JoinTable() {
  const [userId, setUserId] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const [nickname, setNickname] = useState("")
  const [email, setEmail] = useState("")
  const [checkEmail, setCheckEmail] = useState(true)
  const [snackId, setSnackId] = useState(false)
  const [snackNick, setSnackNick] = useState(false)

  const handleUserId = (e: any) => {
    setUserId(e.target.value)
  }

  const handleUserIdDupl = (newSnack: SnackbarOrigin) => (e: any) => {
    axios
      .post("http://j5d102.p.ssafy.io:8080/api/member/checkId", {
        memberId: userId,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    setSnackId(true)
  }

  const handleSnackIdClose = (e: any) => {
    setSnackId(false)
  }

  const handlePassword1 = (e: any) => {
    setPassword1(e.target.value)
  }

  const handlePassword2 = (e: any) => {
    setPassword2(e.target.value)
  }

  const handleNick = (e: any) => {
    setNickname(e.target.value)
  }

  const handleNickDupl = (newSnack: SnackbarOrigin) => (e: any) => {
    setSnackNick(true)
  }

  const handleSnackNickClose = (e: any) => {
    setSnackNick(false)
  }

  const handleEmail = (e: any) => {
    setEmail(e.target.value)
    if (
      e.target.value.match(
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
      )
    ) {
      setCheckEmail(true)
    } else {
      setCheckEmail(false)
    }
  }

  return (
    <table className="joinTable">
      <h1>JOIN</h1>
      <tbody>
        <tr id="joinId">
          <th>
            <span className="require">●</span>
            <span>아이디</span>
          </th>
          <td>
            <TextField id="standard-basic" onChange={handleUserId} />
            <Button
              className="joinDuplBtn"
              variant="outlined"
              size="small"
              onClick={handleUserIdDupl({
                vertical: "top",
                horizontal: "right",
              })}
            >
              중복 확인
            </Button>
            <Snackbar
              className="joinSnack"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              open={snackId}
              onClose={handleSnackIdClose}
              message="사용 가능한 아이디입니다"
            />
          </td>
        </tr>
        <tr id="joinPw1">
          <th>
            <span className="require">●</span>
            <span>비밀번호</span>
          </th>
          <td>
            <TextField
              id="standard-basic"
              type="password"
              onChange={handlePassword1}
            />
          </td>
        </tr>
        <tr id="joinPw2">
          <th>
            <span className="require">●</span>
            <span>비밀번호 확인</span>
          </th>
          <td>
            <TextField
              id="standard-basic"
              type="password"
              onChange={handlePassword2}
              helperText={
                password1 !== password2 ? "비밀번호가 일치하지 않습니다" : ""
              }
              error={password1 !== password2 ? true : false}
            />
          </td>
        </tr>
        <tr id="joinNick">
          <th>
            <span className="require">●</span>
            <span>닉네임</span>
          </th>
          <td>
            <TextField id="standard-basic" onChange={handleNick} />
            <Button
              className="joinDuplBtn"
              variant="outlined"
              size="small"
              onClick={handleNickDupl({ vertical: "top", horizontal: "right" })}
            >
              중복 확인
            </Button>
            <Snackbar
              className="joinSnack"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              open={snackNick}
              onClose={handleSnackNickClose}
              message="사용 가능한 닉네임입니다"
            />
          </td>
        </tr>
        <tr id="joinNick">
          <th>
            <span className="require">●</span>
            <span>이메일</span>
          </th>
          <td>
            <TextField
              id="standard-basic"
              type="email"
              onChange={handleEmail}
              autoComplete="email"
              helperText={checkEmail ? "" : "유효하지 않은 메일입니다"}
              error={checkEmail ? false : true}
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default JoinTable
