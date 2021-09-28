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
  console.log(cardImgUrl);

  return (
    <div className={"galleryCard " + ("view" + view)}>
      <div className={"front " + ("view" + view)}>
        <figure>
          <img
            src={"/" + cardImgUrl + ".jpg"}
            className={"view" + view}
            alt=""
          />
        </figure>
      </div>
      <div className={"back " + ("view" + view)}>
        <figure>
          {cardGradeNM === "C" ? (
            <img
              className={"view" + view}
              src="https://image.freepik.com/free-photo/close-up-of-gray-glitter-textured-background_53876-63518.jpg"
              alt=""
            />
          ) : cardGradeNM === "B" ? (
            <img
              className={"view" + view}
              src="https://thumbs.dreamstime.com/b/gradient-glitter-background-rough-texture-81753121.jpg"
              alt=""
            />
          ) : cardGradeNM === "A" ? (
            <img
              className={"view" + view}
              src="https://thumbs.dreamstime.com/b/gradient-glitter-background-rough-texture-81753238.jpg"
              alt=""
            />
          ) : cardGradeNM === "SS" ? (
            <img
              className={"view" + view}
              src="https://previews.123rf.com/images/macmackyky/macmackyky1606/macmackyky160600041/58041353-%EB%AC%B4%EC%A7%80%EA%B0%9C%EC%99%80-%ED%8C%8C%EC%8A%A4%ED%85%94-%EB%B0%98%EC%A7%9D%EC%9D%B4-%EC%A7%88%EA%B0%90-%EC%B6%94%EC%83%81%EC%A0%81-%EC%9D%B8-%EB%B0%B0%EA%B2%BD.jpg"
              alt=""
            />
          ) : cardGradeNM === "ROYAL-C" ? (
            <img
              className={"view" + view}
              src="https://previews.123rf.com/images/macmackyky/macmackyky1606/macmackyky160600043/58041356-%EB%AC%B4%EC%A7%80%EA%B0%9C%EC%99%80-%ED%8C%8C%EC%8A%A4%ED%85%94-%EB%B0%98%EC%A7%9D%EC%9D%B4-%EC%A7%88%EA%B0%90-%EC%B6%94%EC%83%81%EC%A0%81-%EC%9D%B8-%EB%B0%B0%EA%B2%BD.jpg"
              alt=""
            />
          ) : cardGradeNM === "ROYAL-B" ? (
            <img
              className={"view" + view}
              src="https://previews.123rf.com/images/macmackyky/macmackyky1606/macmackyky160600039/58041352-%EB%AC%B4%EC%A7%80%EA%B0%9C%EC%99%80-%ED%8C%8C%EC%8A%A4%ED%85%94-%EB%B0%98%EC%A7%9D%EC%9D%B4-%EC%A7%88%EA%B0%90-%EC%B6%94%EC%83%81%EC%A0%81-%EC%9D%B8-%EB%B0%B0%EA%B2%BD.jpg"
              alt=""
            />
          ) : cardGradeNM === "ROYAL-A" ? (
            <img
              className={"view" + view}
              src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm105-ning-20-glitter.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=9b53de49fbc8a029743259f645261145"
              alt=""
            />
          ) : (
            <img
              className={"view" + view}
              src="https://mblogthumb-phinf.pstatic.net/20160710_178/wkao9489_1468119896640mjFMx_JPEG/NaverBlog_20160710_120456_08.jpg?type=w2"
              alt=""
            />
          )}

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
