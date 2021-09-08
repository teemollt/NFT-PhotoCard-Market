import React, { useState } from "react";
import { TextField, Button } from '@material-ui/core';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import "./join.css"

export interface State {
  userId: string,
  password1: string,
  password2: string,
  nickname: string,
  email: string,
  checkEmail: boolean,
  snackId: boolean,
  snackNick: boolean,
  celeb: number
}

function Join () {
  const [userId, setUserId] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [checkEmail, setCheckEmail] = useState(true)
  const [snackId, setSnackId] = useState(false)
  const [snackNick, setSnackNick] = useState(false)
  const [celeb, setCeleb] = useState(999)

  const handleUserId = (e: any) => {
    setUserId(e.target.value)
  }

  const handleUserIdDupl = (newSnack: SnackbarOrigin) => (e: any) => {
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
    if (e.target.value.match(/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i)){
      setCheckEmail(true)
    } else {
      setCheckEmail(false)
    }
  }

  const handleCeleb = (id: number) => {
    if (id === 0) {
      setCeleb(0)
    } else if (id === 1) {
      setCeleb(1)
    }else if (id === 2) {
      setCeleb(2)
    }else if (id === 3) {
      setCeleb(3)
    }else if (id === 4) {
      setCeleb(4)
    }else if (id === 5) {
      setCeleb(5)
    }
  }


  const handleBackToMain = (e: any) => {
    window.location.replace("/")
  }

  return (
    <div className="join">
      <table className="joinTable">
        <h1>JOIN</h1>
        <tbody>
          <tr id="joinId">
            <th>
              <span className="require">●</span>
              <span>아이디</span>
            </th>
            <td>
              <TextField id="standard-basic" onChange={handleUserId}/>
              <Button 
                className="joinDuplBtn" 
                variant="outlined" 
                size="small" 
                onClick={handleUserIdDupl({vertical: 'top', horizontal: 'right'})}
              >
                중복 확인
              </Button>
              <Snackbar
                className="joinSnack"
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
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
              <TextField id="standard-basic" type="password" onChange={handlePassword1}/>
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
                helperText={ password1 !== password2 ? "비밀번호가 일치하지 않습니다" : ''}
                error={ password1 !== password2 ? true : false}/>
            </td>
          </tr>

          <tr id="joinNick">
            <th>
              <span className="require">●</span>
              <span>닉네임</span>
            </th>
            <td>
              <TextField id="standard-basic" onChange={handleNick}/>
              <Button 
                className="joinDuplBtn" 
                variant="outlined" 
                size="small" 
                onClick={handleNickDupl({vertical: 'top', horizontal: 'right'})}
              >
              중복 확인</Button>
              <Snackbar
                className="joinSnack"
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
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
                helperText={ checkEmail ? '' :"유효하지 않은 메일입니다"}
                error={ checkEmail ? false : true }
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="joinSelectCeleb">
        <div className="joinCelebInfo">
          <span className="require">●</span>
          <span>CELEB 선택</span>
          <span className="joinCelebSubInfo">좋아하는 CELEB을 선택해 주세요</span>
        </div>
        <div className="joinCelebBoxs">
          <div 
            className="joinCelebBox joinKim" 
            onClick={() => handleCeleb(0)} 
            style={{ backgroundColor: celeb === 0 ? "rgba(16, 0, 247, 0.329)" : undefined }}
          >
            김도형
          </div>
          <div 
            className="joinCelebBox joinNa" 
            onClick={() => handleCeleb(1)} 
            style={{ backgroundColor: celeb === 1 ? "rgb(232, 248, 10, 0.329)" : undefined }}
          >
            나비
          </div>
          <div 
            className="joinCelebBox joinNam" 
            onClick={() => handleCeleb(2)}
            style={{ backgroundColor: celeb === 2 ? "rgb(241, 162, 13, 0.329)" : undefined }}
          >
            남근형
          </div>
          <div 
            className="joinCelebBox joinShin"
            onClick={() => handleCeleb(3)}
            style={{ backgroundColor: celeb === 3 ? "rgba(127, 12, 235, 0.329)" : undefined }}
          >
            신지현
          </div>
          <div 
            className="joinCelebBox joinCho"
            onClick={() => handleCeleb(4)}
            style={{ backgroundColor: celeb === 4 ? "rgba(24, 248, 4, 0.329)" : undefined }}
          >
            조영우
          </div>
          <div 
            className="joinCelebBox joinHa"
            onClick={() => handleCeleb(5)}
            style={{ backgroundColor: celeb === 5 ? "rgb(7, 182, 252, 0.329)" : undefined }}
          >
            하지훈
          </div>
        </div>
      </div>

      <br /><br /><br />

      <div className="joinBtns">
        <Button className="joinCancelBtn" variant="contained" onClick={handleBackToMain}>취소</Button>
        <Button className="joinBtn" variant="contained" color="primary">회원가입</Button>
      </div>
    </div>
  )
}

export default Join;