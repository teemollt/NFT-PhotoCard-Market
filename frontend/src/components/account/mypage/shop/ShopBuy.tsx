import React, { useEffect, useState } from "react"
import { Pagination } from "@mui/material"
import ShopCard from "./ShopCard"
import ShopEmpty from "./ShopEmpty"
import axios from "axios"

interface Buy {
  buyDate: string
  price: number
  sales: string
  salesImg: string
  salseNo: number
}

function ShopBuy() {
  const [buy, setBuy] = useState<Array<Buy>>([])
  const [cards, setCards] = useState<Array<Buy>>([])

  useEffect(() => {
    axios
      .get("/api/member/order", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setCards(res.data.res.slice(0, 8))
        setBuy(res.data.res)
      })
  }, [])

  const handlePage = (e: any) => {
    const page = Number(e.target.innerText)
    setCards(buy.slice(page * 8 - 8, page * 8))
  }

  return (
    <div className="mypageBodyRightHeader">
      <h1>구매 내역</h1>
      <hr />
      {cards.length !== 0 ? (
        cards.map((card, index) => {
          return <ShopCard card={card} key={index} />
        })
      ) : (
        <ShopEmpty />
      )}
      <Pagination
        className="GalleryBoardPage"
        count={Math.ceil(buy.length / 8)}
        shape="rounded"
        onChange={handlePage}
        hidePrevButton
        hideNextButton
      />
    </div>
  )
}

export default ShopBuy
