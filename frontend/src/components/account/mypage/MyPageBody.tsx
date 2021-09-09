import React, { useState } from 'react'
import MyPageBodyLeft from './MyPageBodyLeft'
import MyPageBodyRight from './MyPageBodyRight'
import './MyPageBody.css'


export interface State {
  myPageMenu: number
}

function MyPageBody() {
  const [ myPageMenu, setMypageMenu ] = useState(0)

  const handleMyPageMenu = (id: number) => {
    setMypageMenu(id)
  }

  return (
    <div className="mypageBody">
      <MyPageBodyLeft 
        handleMyPageMenu={handleMyPageMenu}
      />
      <MyPageBodyRight 
        myPageMenu={myPageMenu}
      />
    </div>
  )
}

export default MyPageBody
