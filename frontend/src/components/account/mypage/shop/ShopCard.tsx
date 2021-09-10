import React from 'react';
import './ShopCard.css'


function ShopCard(props: any) {
  return (
    <div className="shopCard">
      <img src={props.tempCard.imgUrl} alt="" />
      <span>{props.tempCard.title}</span>
      <p className="shopPrice">{props.tempCard.price}원</p>
    </div>
  )
}

export default ShopCard
