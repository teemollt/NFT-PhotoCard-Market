import React, { useState } from 'react'
import GalleryImage from './gallery-img'
import './gallery.css'

export type temp = {
  imgUrl: string,
  title: string,
  level: string,
  celeb: string
}
export interface State {
  topMenu: number,
  view: number,
  topLi: boolean,
  topLiMem: number,
  imgArray: number,
  galleryImg: Array<temp>
}

const tempGallery: Array<temp> = [
  {imgUrl: "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/XG2MW2H3ZRW5FHDVSOMF6FDT3E.jpg", title: "아이유꽃", level: "S", celeb: "1"},
  {imgUrl: "https://file.mk.co.kr/meet/neds/2021/04/image_readtop_2021_330747_16177500644599916.jpg", title: "여신", level: "A", celeb: "1"},
  {imgUrl: "https://img4.yna.co.kr/photo/cms/2019/05/02/02/PCM20190502000402370_P2.jpg", title: "연합뉴스", level: "A", celeb: "1"},
  {imgUrl: "http://image.kmib.co.kr/online_image/2020/1008/611811110015088768_1.jpg", title: "똥머리", level: "B", celeb: "1"},
  {imgUrl: "https://cdn.dailyimpact.co.kr/news/photo/201901/50650_10024_2221.jpg", title: "흑백", level: "B", celeb: "1"},
  {imgUrl: "http://www.polinews.co.kr/data/photos/20200834/art_15980031118376_e6a761.jpg", title: "정장", level: "B", celeb: "1"},
  {imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg", title: "블랙야크", level: "B", celeb: "1"},
  {imgUrl: "https://pbs.twimg.com/media/E9jOv0aUYAw6SIA.jpg", title: "하얀색", level: "C", celeb: "1"},
  {imgUrl: "https://cdn.baccro.com/news/photo/202103/25534_57525_3959.jpeg", title: "라일락", level: "C", celeb: "1"},
  {imgUrl: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/7mo5/image/RhMj77_UZ1G9smD_INrbLKRVVoc.jpg", title: "블루밍", level: "C", celeb: "1"},
]

function Gallery () {
  const [topMenu, setTopMenu] = useState(0)
  const [view, setView] = useState(2)
  const [topLi, setTopLi] = useState(false)
  const [topLiMem, setTopLiMem] = useState(0)
  const [imgArray, setImgArray] = useState(0)
  const [galleryImg, setGalleryImg] = useState(tempGallery)

  const handleTopMenuGroup = (id: number) => {
    if (id === 0) {
      setTopMenu(0)
      setTopLi(false)
    } else if (id === 1) {
      setTopMenu(1)
      setTopLi(false)
    } else if (id === 2) {
      setTopMenu(2)
      setTopLi(false)
    } else if (id === 3) {
      setTopMenu(3)
      setTopLi(false)
    } else if (id === 4) {
      setTopMenu(4)
      setTopLi(true)
    }
  }

  const handleTopMenuView = (id: number) => {
    if (id === 0) {
      setView(0)
    } else if (id === 1) {
      setView(1)
    } else if (id === 2) {
      setView(2)
    } else if (id === 3) {
      setView(3)
    }
  }

  const handleTopLiMem = (id: number) => {
    if (id === 0) {
      setTopLiMem(0)
    } else if (id === 1) {
      setTopLiMem(1)
    } else if (id === 2) {
      setTopLiMem(2)
    } else if (id === 3) {
      setTopLiMem(3)
    } else if (id === 4) {
      setTopLiMem(4)
    }
  }

  const handleImgArray = (id: number) => {
    if (id === 0) {
      setImgArray(0)
    } else {
      setImgArray(1)
    }
  }

  return (
    <div className="gallery">
      <div className="galleryTop">
        <div className="galleryTopMenu">
          <div className="galleryTopMenuGroup">
            <span 
              className={topMenu === 0 ? "underline" : undefined}
              onClick={() => handleTopMenuGroup(0)}
            >전체</span>
            <span 
              className={topMenu === 1 ? "underline" : undefined}
              onClick={() => handleTopMenuGroup(1)}
            >김도형</span>
            <span 
              className={topMenu === 2 ? "underline" : undefined}
              onClick={() => handleTopMenuGroup(2)}
            >나비</span>
            <span 
              className={topMenu === 3 ? "underline" : undefined}
              onClick={() => handleTopMenuGroup(3)}
            >신지현</span>
            <span 
              className={topMenu === 4 ? "underline" : undefined}
              onClick={() => handleTopMenuGroup(4)}
            >이태희와 아이들</span>
          </div>

          <div className="galleryTopMenuView">
            <span>VIEW</span>
            <span 
              className={view === 0 ? "underline" : "undefined"}
              onClick={() => handleTopMenuView(0)}
            >S</span>
            <span 
              className={view === 1 ? "underline" : "undefined"}
              onClick={() => handleTopMenuView(1)}
            >M</span>
            <span 
              className={view === 2 ? "underline" : "undefined"}
              onClick={() => handleTopMenuView(2)}
            >L</span>
            <span 
              className={view === 3 ? "underline" : "undefined"}
              onClick={() => handleTopMenuView(3)}
            >XL</span>
          </div>
        </div>
        <div className="galleryTopLi">
          <div className={topLi ? "galleryBodyLeft" : "hidden"}>
            <span
              className={topLiMem === 0 ? "underline" : undefined}
              onClick={()=>handleTopLiMem(0)}
            >전체</span>
            <span
              className={topLiMem === 1 ? "underline" : undefined}
              onClick={()=>handleTopLiMem(1)}
            >이태희</span>
            <span
              className={topLiMem === 2 ? "underline" : undefined}
              onClick={()=>handleTopLiMem(2)}
            >남근형</span>
            <span
              className={topLiMem === 3 ? "underline" : undefined}
              onClick={()=>handleTopLiMem(3)}
            >조영우</span>
            <span
              className={topLiMem === 4 ? "underline" : undefined}
              onClick={()=>handleTopLiMem(4)}
            >하지훈</span>
          </div>
          <div className="galleryBodyRight">
            <span
              className={imgArray === 0 ? "underline" : undefined}
              onClick={() => handleImgArray(0)}
            >최신순</span>
            <span
              className={imgArray === 1 ? "underline" : undefined}
              onClick={() => handleImgArray(1)}
            >등급순</span>
          </div>
        </div>
      </div>

      <div className="galleryBody">
        {/* <GalleryImage view={view} galleryImg={galleryImg}/> */}
        {galleryImg.map(temp => {
          return <GalleryImage view={view} temp={temp} key={temp.title}/>
        })}
      </div>
    </div>
  )
}

export default Gallery
