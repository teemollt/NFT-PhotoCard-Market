import React, { useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"
import "./MyPageTop.css"
import Web3 from 'web3'
import { contractAbi } from './abi'
import { ConstructionRounded } from '@mui/icons-material'

interface MyPageTopProps {
  memberNick: string
  memberGrade: string
}

function MyPageTop(props: MyPageTopProps): JSX.Element {
  const { memberNick, memberGrade } = props
  const Web3 = require('web3')
  const web3 = new Web3('http://localhost:7545' || 'ws://localhost:7545')
  // 관리자 계정(이더 많은거)
  const admin = '0x04E7A2382461090Da3D113557fda04596F93d7C5'
  // api 통해 불러온 유저 계정 전역으로 관리하자
  let user = ''
  // useEffect( () => {
  //   // api로 지갑 유무 파악
  //   const walletCheck = async () => {
  //     const res = await axios.get('http://j5d102.p.ssafy.io:8080/wallet/' + 여기에 유저넘버)
  //     console.log(res.data)
  //     // 있으면 user에 할당
  //     user = res.data
  //   }
  // })
  // 컨트랙트 abi
  // const tokenAbi = contractAbi
  // // 컨트랙트 주소
  // const myContractAddress = '0xBbD536eA98bDE36E345A89b47032AdC2bF1d217c'
  // 컨트랙트 객체 생성(주체는 유저로)
  // const tokenContract = new web3.eth.Contract(tokenAbi, myContractAddress, {
  //   from: user,
  //   gasPrice: '20000000000',
  // })
  // getAccount는 지갑 주소가 없는 경우에만 버튼 활성화
  const getAccount = async () => {
    // 지갑생성
    // const newAccount = await web3.eth.accounts.create()
    // const newAccount = web3.eth.getAccounts()
    // 계정 생성 - 추후에 비밀번호 직접 입력 가능하게
    const newAccount = await web3.eth.personal.newAccount('123')
    console.log(newAccount)
    user = newAccount
    // 계정 언락
    await web3.eth.personal.unlockAccount(user, "123", 60000)
    // 생성된 주소 서버로 넘겨서 저장하기
    // const res = await axios.post('http://j5d102.p.ssafy.io:8080/wallet/', {body에 뭐더라})
    // console.log(res.data)
  }
  // 내 잔액 조회 => api로 바꿀듯
  const getBalance = async () => {
    // 이더 잔액
    const ethBalance = await web3.eth.getBalance(user)
    console.log(ethBalance)
    // 토큰 잔액
    // const getTokenBalance = await tokenContract.methods.balanceOf(user).call()
    // console.log(getTokenBalance)
    // const adminBalance = await tokenContract.methods.balanceOf(admin).call()
    // console.log(`admin balance : ${adminBalance}`)
    // const adminEth = await web3.eth.getBalance(admin)
    // console.log(`admin eth: ${adminEth}`)
  }
  // 이더 충전 횟수 제한 혹은 일정 잔액 이하일때만 충전 가능하게
  const chargeEth = async () => {
    const tx = {
      from: admin,
      to: user,
      value: '1000000000000000000'
    }
    try {
      const charge = await web3.eth.sendTransaction(tx)
      console.log(charge)
    } catch (err) {
      console.log(err)
    }
  }
  // .send({ from: admin, gas: 3000000 })
  // 토큰 전송
  // const sendToken = async () => {
  //   // const tx = { from: user, to: admin, tokens: 100000 }
  //   try {
  //     const sendT = await tokenContract.methods.transfer(admin, 100).send()
  //     console.log(sendT)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // sender 확인
  // const senderCheck = async () => {
  //   try {
  //     const check = await tokenContract.methods.check().call()
  //     console.log(check)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <div className="mypageTop">
      <div className="mypageUserInfo">
        <div className="mypageUserNick">
          <h1>{memberNick} 님</h1>
        </div>
        <div className="mypageUserInfos">
          <p className="mypageGrade">{memberGrade}</p>
          <Button className="mypageUpdateBtn" variant="outlined" size="medium" onClick={getAccount}>지갑 생성</Button>
          <Button className="mypageUpdateBtn" variant="outlined" size="medium" onClick={getBalance}>잔액 조회</Button>
          <Button className="mypageUpdateBtn" variant="outlined" size="medium" onClick={chargeEth}>이더 충전</Button>
          {/* <Button className="mypageUpdateBtn" variant="outlined" size="medium" onClick={sendToken}>토큰 전송</Button> */}
          {/* <Button className="mypageUpdateBtn" variant="outlined" size="medium" onClick={senderCheck}>센더체크</Button> */}
        </div>
        <div className="mypageUserUpdate">
          <Link className="tablink" to="/update">
            <Button className="mypageUpdateBtn" variant="outlined" size="large">
              정보 수정
            </Button>
          </Link>
        </div>
      </div>

      <div className="mypageShop">
        <div className="mypageOrder">
          <p>구매 내역</p>
          <span>0</span>
        </div>
        <div className="mypageOrder">
          <p>관심 상품</p>
          <span>0</span>
        </div>
        <div className="mypageOrder">
          <p>경매 등록</p>
          <span>0</span>
        </div>
      </div>
    </div>
  )
}

export default MyPageTop
