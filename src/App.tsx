import React from 'react';
import { GlobalStyle } from './App.style';
import './App.css'
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useState } from 'react';

interface State {
  password: string;
  showPassword: boolean;
}



function App() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (props: keyof State) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div>
      <GlobalStyle />
      <h1 className="signupTitle">JOIN</h1>
      <div className="signupBox">
        <div className="signupLeft">
          <span>기본정보</span>
          <span className="signupRequired"><span>●</span> 필수 입력 사항</span>
          <hr style={{ height: "1px", backgroundColor:"black"}}/>
          <div className="signupInfo">
            <table className="signupTable">
              <tbody>
                <tr id="signupMobile">
                  <th>
                    <span className="require">●</span>
                    <span>본인인증</span>
                  </th>
                  <td>
                    <p>
                      <span>휴대폰 인증</span>
                      <Button className="signupInfoBtn" variant="outlined" size="small">인증하기</Button>
                      <p className="phoneInfo">본인 명의의 휴대폰으로 본인인증을 진행합니다</p>
                    </p>
                  </td>
                </tr>

                <tr id="signupName">
                  <th>
                    <span className="require">●</span>
                    <span>이름</span>
                  </th>
                  <td>
                    <TextField id="standard-basic" />
                  </td>
                </tr>

                <tr id="signupName">
                  <th>
                    <span className="require">●</span>
                    <span>생년월일</span>
                  </th>
                  <td>
                    <TextField style={{width: 80}}/><span style={{marginRight: 7}}>년</span>
                    <TextField style={{width: 50}}/><span style={{marginRight: 7}}>월</span>
                    <TextField style={{width: 50}}/><span>일</span>
                  </td>
                </tr>

                <tr id="signupMobile">
                  <th>
                    <span className="require">●</span>
                    <span>휴대폰</span>
                  </th>
                  <td>
                    <TextField style={{width: 50}} defaultValue="010"/><span style={{marginRight: 7, marginLeft: 7}}>-</span>
                    <TextField style={{width: 60}}/><span style={{marginRight: 7, marginLeft: 7}}>-</span>
                    <TextField style={{width: 60}}/>
                  </td>
                </tr>

                <tr id="signupId">
                  <th>
                    <span className="require">●</span>
                    <span>아이디</span>
                  </th>
                  <td>
                    <TextField id="standard-basic"/>
                    <p className="phoneInfo" style={{marginTop: 5}}>영문소문자/숫자를 포함 6~16자 이내</p>
                  </td>
                </tr>

                <tr id="signupPw">
                  <th>
                    <span className="require">●</span>
                    <span>비밀번호</span>
                  </th>
                  <td>
                    <Input
                      id="standard-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <p className="phoneInfo" style={{marginTop: 5}}>영문/숫자/ 특수문자 조합 10~16자</p>
                  </td>
                </tr>

                <tr id="signupPwCheck">
                  <th>
                    <span className="require">●</span>
                    <span>비밀번호 확인</span>
                  </th>
                  <td>
                    <Input
                      id="standard-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </td>
                </tr>

                <tr id="signupNickname">
                  <th>
                    <span className="require">●</span>
                    <span>닉네임</span>
                  </th>
                  <td>
                    <TextField id="standard-basic"/>
                    <Button className="signupInfoBtn" variant="outlined" size="small">중복 확인</Button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="signupSelectCeleb">
              <span className="require">●</span>
              <span>CELEB 선택</span>
              <span className="phoneInfo" style={{marginLeft: 15}}>좋아하는 CELEB을 선택해 주세요</span>
              <div>
                <p className="signupCelebBox">ds</p>
                <p className="signupCelebBox"></p>
              </div>
              
            </div>
          </div>
        </div>

        <div className="signupRight">
          <span>약관정보</span>
        </div>
      </div>
    </div>
  );
}

export default App;
