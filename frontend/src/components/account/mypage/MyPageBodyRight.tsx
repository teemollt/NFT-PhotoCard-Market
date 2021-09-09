import React from 'react';
import './MyPageBodyRight.css';
import ShopBuy from './shop/ShopBuy';
import ShopKeep from './shop/ShopKeep';

function MyPageBodyRight(prop: any) {
  return (
    <div className="mypageBodyRight">
      {prop.myPageMenu === 0 ? <ShopBuy /> : 
        prop.myPageMenu === 1 ? <ShopKeep /> : null
      }
    </div>
  )
}

export default MyPageBodyRight
