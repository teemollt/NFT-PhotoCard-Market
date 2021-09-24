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

  return (
    <div className={"card " + ("view"+view)}>
      <div className={"front " + ("view"+view)}>
        <figure>
        <img src={temp.imgUrl} className={"view"+view} alt=""/>
        </figure>
      </div>
      <div className={"back " + ("view"+view)} >
        <figure>
          <img
          className={"view"+view} 
            src="https://mblogthumb-phinf.pstatic.net/20160710_178/wkao9489_1468119896640mjFMx_JPEG/NaverBlog_20160710_120456_08.jpg?type=w2"
            alt=""
          />
          <figcaption>
            <h3>{temp.title}</h3>
            <p>{temp.level}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default GalleryImg;
