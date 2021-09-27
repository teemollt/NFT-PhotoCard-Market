import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"
import "./MyPageTop.css"
import Web3 from 'web3'

interface MyPageTopProps {
  memberNick: string
  memberGrade: string
}

function MyPageTop(props: MyPageTopProps): JSX.Element {
  const { memberNick, memberGrade } = props
  const web3 = new Web3('http://127.0.0.1:7545')
  // 로그인 하면 바로 지갑 주소가 있는지 확인 => 있으면 글로벌로 관리
  // 주소가 없으면 여기서 만들 수 있게
  // getAccount는 지갑 주소가 없는 경우에만 버튼 활성화
  const getAccount = async () => {
    const newAccount = await web3.eth.accounts.create()
    // 계정생성 한번 생성을 했으면 DB에 주소와 암호화된 프라이빗키를 저장해두고
    // 로그인할때 api로 계정이 있는지 확인.
    console.log(newAccount.address)

  }
  return (
    <div className="mypageTop">
      <div className="mypageUserInfo">
        <div className="mypageUserNick">
          <h1>{memberNick} 님</h1>
        </div>
        <div className="mypageUserInfos">
          <p className="mypageGrade">{memberGrade}</p>
          <Button className="mypageUpdateBtn" variant="outlined" size="medium" onClick={getAccount}>지갑 생성</Button>
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
