import React from 'react'
import MainCarousel from '../main/MainCarousel'
import MainCelebList from '../main/MainCelebList'

function Main() {
    return (
      <div>
        <MainCarousel />
        <br />
        <MainCelebList />
        <br />
        <MainCarousel />
        <br />
        <MainCarousel />
      </div>
    );
}

export default Main
