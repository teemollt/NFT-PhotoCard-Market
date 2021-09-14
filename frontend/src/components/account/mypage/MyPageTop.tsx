import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"
import "./MyPageTop.css"
import Web3 from 'web3'
import axios from "axios"

function MyPageTop() {
  const web3 = new Web3('http://127.0.0.1:7545')

  useEffect(() => {
    console.log(web3)
    web3.eth.getBlock(0)
      .then(console.log)
    axios.get("http://localhost/posts").then((res) => console.log(res.data))
  })

  const getAccount = async () => {
    const accountCreate = await web3.eth.accounts.create()
    // 계정생성 한번 생성을 했으면 DB에 주소와 암호화된 프라이빗키를 저장해두고
    // 로그인할때 api로 계정이 있는지 확인.
    console.log(accountCreate.address)
    const privateKey = web3.eth.accounts.encrypt(accountCreate.privateKey, "123")
    axios.post("http://localhost/posts", {
      "id": 2,
      "address": accountCreate.address,
      "privatekey": privateKey
    }).then((res) => console.log(res.data)).catch((err) => console.log(err))

    // 프라이빗키 암호화 => 이걸 db에 저장해서 서명 필요할때 암호를 이용해 복호화해서 사용하면 될듯
  }
  let myAccountData: any
  const getBalnace = async () => {
    const myAddress = await axios.get("http://localhost/posts")
    const myAccountData = myAddress.data[1]
    console.log(myAccountData.address)
    web3.eth.getBalance(myAccountData.address)
      .then(console.log) // 잔액 조회 성공
  }
  const getPrivatekey = async () => {
    const myAddress = await axios.get("http://localhost/posts")
    const myAccountData = myAddress.data[1]
    const myKey = myAccountData.privatekey
    const myPrivateKey = await web3.eth.accounts.decrypt(myKey, "123") // 실제론 유저가 입력한 비밀번호로
    console.log(myPrivateKey.privateKey)
  }
  const chargeEth = async () => {
    const myAddress = await axios.get("http://localhost/posts")
    const myAccountData = myAddress.data[1]
    const tx = { from: "0x275b402F266c3a0005E8631FFF378F47501043F9", to: myAccountData.address, value: "2000000000000000" }
    const sendTx = await web3.eth.sendTransaction(tx)
    console.log(sendTx)
  }
  return (
    <div className="mypageTop">
      <div className="mypageUserInfo">
        <div className="mypageUserNick">
          <h1>아무개 님</h1>
        </div>
        <div className="mypageUserInfos">
          <p className="mypageLevel">회원등급</p>
          <Button className="mypageUpdateBtn" variant="outlined" size="medium" onClick={getAccount}>지갑 생성</Button>
          <Button className="mypageUpdateBtn" variant="outlined" size="medium" onClick={chargeEth}>이더 충전</Button>
          <Button className="mypageUpdateBtn" variant="outlined" size="medium" onClick={getBalnace}>잔액 확인</Button>
          <Button className="mypageUpdateBtn" variant="outlined" size="medium" onClick={getPrivatekey}>개인키 불러오기</Button>
          {/* <input type="text" /> */}
          {/* <p className="mypageAccount">0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B</p> */}
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
