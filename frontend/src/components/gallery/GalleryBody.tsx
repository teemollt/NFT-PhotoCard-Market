import React from "react";
import "./GalleryBody.css";

interface GalleryBodyProps {
  view: number;
  card: {
    cardGradeNM: string;
    cardGradeNo: number;
    cardImgUrl: string;
    cardNM: string;
    cardNo: number;
    token: {
      ownDate: string;
      tokenNo: number;
      tokenSeriarlizeNo: string;
    };
  };
}

function GalleryBody(props: GalleryBodyProps) {
  const { view } = props;
  const { cardGradeNM, cardImgUrl, cardNM } = props.card;

  return (
    <div className={"card " + ("view" + view)}>
      <div className={"front " + ("view" + view)}>
        <figure>
          <img src={cardImgUrl} className={"view" + view} alt="" />
        </figure>
      </div>
      <div className={"back " + ("view" + view)}>
        <figure>
          <img
            className={"view" + view}
            src="https://mblogthumb-phinf.pstatic.net/20160710_178/wkao9489_1468119896640mjFMx_JPEG/NaverBlog_20160710_120456_08.jpg?type=w2"
            alt=""
          />
          <figcaption>
            <h3>{cardNM}</h3>
            <p>{cardGradeNM}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default GalleryBody;
