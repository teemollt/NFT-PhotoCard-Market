import React from 'react'
import './GalleryTopSub.css'


function GalleryTopSub(prop: any) {

  return (
    <div className="galleryTopSub">
      <div className={prop.sub ? "galleryTopSubMem" : "hidden"}>
        <span
          className={prop.subMem === 0 ? "underline" : undefined}
          onClick={() => prop.handleSubMem(0)}
        >전체</span>
        <span
          className={prop.subMem === 1 ? "underline" : undefined}
          onClick={() => prop.handleSubMem(1)}
        >이태희</span>
        <span
          className={prop.subMem === 2 ? "underline" : undefined}
          onClick={() => prop.handleSubMem(2)}
        >남근형</span>
        <span
          className={prop.subMem === 3 ? "underline" : undefined}
          onClick={() => prop.handleSubMem(3)}
        >조영우</span>
        <span
          className={prop.subMem === 4 ? "underline" : undefined}
          onClick={() => prop.handleSubMem(4)}
        >하지훈</span>
      </div>

      <div className="galleryTopSubImgArray">
        <span
          className={prop.imgArray === 0 ? "underline" : undefined}
          onClick={() => prop.handleImgArray(0)}
        >최신순</span>
        <span
          className={prop.imgArray === 1 ? "underline" : undefined}
          onClick={() => prop.handleImgArray(1)}
        >등급순</span>
      </div>
    </div>
  )
}

export default GalleryTopSub
