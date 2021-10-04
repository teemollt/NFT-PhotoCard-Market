import React from "react"
import { useHistory } from "react-router-dom"
import "./MarketCard.css"

interface MarketCardProps {
  card: {
    auctionNo: number
    auctionTitle: string
    price: number
    auctionImg: string
  }
}

function MarketCard(props: MarketCardProps) {
  let history = useHistory()

  const { auctionNo, auctionTitle, price, auctionImg } = props.card

  return (
    <div className="marketCard">
      <div className="marketCardImg">
        <img src={auctionImg} alt="" />
      </div>
      <div>
        <span className="marketCardTitle">{auctionTitle}</span>
        <span className="marketCardPrice">{price}BTC</span>
      </div>
    </div>
  )
}

export default MarketCard
