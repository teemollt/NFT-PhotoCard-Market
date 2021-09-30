import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"
import "./MyPageTop.css"
import Web3 from "web3"
import { ConstructionRounded } from "@mui/icons-material"

interface MyPageTopProps {
  memberNick: string
  memberGrade: string
}

function MyPageTop(props: MyPageTopProps): JSX.Element {
  const { memberNick, memberGrade } = props
  const Web3 = require("web3")
  const web3 = new Web3("http://13.125.37.55:8545")
  // 관리자 계정(이더 많은거)
  const admin = "0x39dce082172253d8d816b0e9aa48345a72a2179a"
  // api 통해 불러온 유저 계정
  const [userAddress, setAddress] = useState<string>("")
  // 잔액
  const [userBalance, setBalance] = useState<string>("0")

  const walletCheck = async () => {
    try {
      const res = await axios.get("/api/wallet/", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      console.log(res.data)
      if (res.data.success == true) {
        setAddress(res.data.address)
        setBalance(res.data.walletBal)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    // api로 지갑 유무 파악
    walletCheck()
  })
  // getAccount는 지갑 주소가 없는 경우에만 버튼 활성화
  const getAccount = async () => {
    // 계정 생성 - 추후에 비밀번호 직접 입력 가능하게
    const newAccount = await web3.eth.personal.newAccount('123')
    console.log(newAccount)
    setAddress(newAccount)
    // 생성된 주소 서버로 넘겨서 저장하기
    const res = await axios.post('/api/wallet/', { walletAdd: newAccount }, { headers: { Authorization: localStorage.getItem("token") } })
    console.log(res.data)
  }
  // 이더 충전 횟수 제한 혹은 일정 잔액 이하일때만 충전 가능하게 api로 변경
  const chargeEth = async () => {
    console.log(userAddress)
    const tx = {
      from: admin,
      gasPrice: "20000000000",
      gas: "21000",
      to: userAddress,
      value: "10000000000000000000",
      data: "",
    }
    try {
      const adminUnlock = await web3.eth.personal.unlockAccount(admin, '1234', 6000)
      console.log(adminUnlock)
      const unlock = await web3.eth.personal.unlockAccount(userAddress, '123', 6000)
      console.log(unlock)
    } catch (err) { console.log(err) }
    try {
      const charge = await web3.eth.sendTransaction(tx, '1234')
      console.log(charge)
    } catch (err) { console.log(err) }
    walletCheck()
  }
  return (
    <div className="mypageTop">
      <div className="mypageUserInfo">
        <div className="mypageUserNick">
          <h1>{memberNick} 님</h1>
        </div>
        <div className="mypageUserInfos">
          <p className="mypageGrade">{memberGrade}</p>
          {userAddress !== "" ? (
            <div className="mypageAccount">
              <p>지갑주소: {userAddress}</p>
              <p>잔액: {userBalance} </p>
            </div>
          ) : (
            <Button
              className="mypageUpdateBtn"
              variant="outlined"
              size="medium"
              onClick={getAccount}
            >
              지갑 생성
            </Button>
          )}
          <br />
        </div>
        <div className="mypageUserUpdate">
          <Link className="tablinkMyPage" to="/update">
            <Button className="mypageUpdateBtn" variant="outlined" size="large">
              정보 수정
            </Button>
          </Link>
          <div>
            <Button
              className="mypageAccountBtn"
              variant="outlined"
              size="medium"
              onClick={getBalance}
            >
              잔액 조회
            </Button>
            <Button
              className="mypageAccountBtn"
              variant="outlined"
              size="medium"
              onClick={chargeEth}
            >
              이더 충전
            </Button>
          </div>
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