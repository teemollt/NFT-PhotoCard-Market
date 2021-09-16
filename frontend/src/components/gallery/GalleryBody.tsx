import React, { useState } from "react";
import "./GalleryBody.css";

interface GalleryImgProps {
  view: number;
  temp: temp;
}

export type temp = {
  imgUrl: string;
  title: string;
  level: string;
  celeb: string;
};

function GalleryImg(props: GalleryImgProps): JSX.Element {
  const { view, temp } = props;
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="galleryImg"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <p className={isHover ? "galleryImgLevel" + view : "hidden"}>
        {temp.level}
      </p>
      <p className={isHover ? "galleryImgTitle" + view : "hidden"}>
        {temp.title}
      </p>
      <img className={"GalleryGridImg" + view} src={temp.imgUrl} alt="" />
    </div>
  );
}

export default GalleryImg;
