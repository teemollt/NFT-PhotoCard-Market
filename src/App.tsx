import React from 'react';
import { GlobalStyle } from './App.style';
import './App.css'
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

function App() {
  return (
    <div>
      <GlobalStyle />
      <h1 className="signupTitle">JOIN</h1>
      <div className="signupBox">
        <div className="signupLeft">
          <span>기본정보</span>
          <span className="signupRequired"><span>*</span> 필수 입력 사항</span>
          <hr style={{ height: "1px", backgroundColor:"black"}}/>
          <div className="signupInfo">
            {/* <div className="signupInfoLeft">
              <span className="require">*</span>
              <span>본인인증</span>
            </div>
            <div className="signupInfoRight">
              <span>휴대폰 인증</span>
              <Button className="signupInfoBtn" variant="outlined" size="small">인증하기</Button>
              <p className="phoneInfo">본인 명의의 휴대폰으로 본인인증을 진행합니다</p>
            </div>
            <div className="signupInfoLeft" style={{marginTop:"50px"}}>
              <span className="require">*</span>
              <span>이름</span>
            </div>
            <div className="signupInfoRight">
              <TextField id="standard-basic" />
            </div> */}
            <table className="signupTable">
              <tbody>
                <tr id="signupMobile">
                  <th>
                    <span className="require">*</span>
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
                    <span className="require">*</span>
                    <span>이름</span>
                  </th>
                  <td>
                    <TextField id="standard-basic" />
                  </td>
                </tr>

                <tr id="signupName">
                  <th>
                    <span className="require">*</span>
                    <span>생년월일</span>
                  </th>
                  <td>
                    <TextField id="standard-basic" />
                  </td>
                </tr>
              </tbody>
            </table>
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
