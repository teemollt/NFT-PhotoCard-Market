import React, { useState } from 'react'
import './gallery-img.css'

export type temp = {
  imgUrl: string,
  title: string,
  level: string,
  celeb: string
}

function GalleryImg (props: any) {
  const [isHover, setIsHover] = useState(false)

  return (
    <div 
      className="galleryImg" 
      onMouseEnter={() => setIsHover(true)} 
      onMouseLeave={() => setIsHover(false)} 
    >
      <p 
        className={ isHover ? "galleryImgLevel"+props.view : "hidden"}
      >{props.temp.level}</p>
      <p 
        className={ isHover ? "galleryImgTitle"+props.view : "hidden"}
      >{props.temp.title}</p>
      <img className={"GalleryGridImg"+props.view} src={props.temp.imgUrl} alt="" />
    </div>
  )
}

export default GalleryImg
