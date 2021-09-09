import React from 'react'
import './MyPageBodyLeft.css'

function MyPageBodyLeft(prop: any) {
  return (
    <div className="mypageBodyLeft">
      <h1>쇼핑 정보</h1>
      <hr />
      <p 
        onClick={() => prop.handleMyPageMenu(0)}
      >구매 내역</p>
      <p 
        onClick={() => prop.handleMyPageMenu(1)}
      >관심 상품</p>

      <br />

      <h1>경매 정보</h1>
      <hr />
      <p 
        onClick={() => prop.handleMyPageMenu(2)}
      >내가 등록한 경매</p>
      <p 
        onClick={() => prop.handleMyPageMenu(3)}
      >경매 내역</p>
      <p 
        onClick={() => prop.handleMyPageMenu(4)}
      >관심 경매</p>

      <br />

      <h1>고객센터</h1>
      <hr />
      <p 
        onClick={() => prop.handleMyPageMenu(5)}
      >1:1 문의</p>
    </div>
  )
}

export default MyPageBodyLeft
