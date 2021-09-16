import React, { useState } from "react";
import GalleryBody from "../gallery/GalleryBody";
import "./GalleryTop.css";

const tempGallery: Array<temp> = [
  {
    imgUrl:
      "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/XG2MW2H3ZRW5FHDVSOMF6FDT3E.jpg",
    title: "아이유꽃",
    level: "S",
    celeb: "1",
  },
  {
    imgUrl:
      "https://file.mk.co.kr/meet/neds/2021/04/image_readtop_2021_330747_16177500644599916.jpg",
    title: "여신",
    level: "A",
    celeb: "1",
  },
  {
    imgUrl:
      "https://img4.yna.co.kr/photo/cms/2019/05/02/02/PCM20190502000402370_P2.jpg",
    title: "연합뉴스",
    level: "A",
    celeb: "1",
  },
  {
    imgUrl:
      "http://image.kmib.co.kr/online_image/2020/1008/611811110015088768_1.jpg",
    title: "똥머리",
    level: "B",
    celeb: "1",
  },
  {
    imgUrl:
      "https://cdn.dailyimpact.co.kr/news/photo/201901/50650_10024_2221.jpg",
    title: "흑백",
    level: "B",
    celeb: "1",
  },
  {
    imgUrl:
      "http://www.polinews.co.kr/data/photos/20200834/art_15980031118376_e6a761.jpg",
    title: "정장",
    level: "B",
    celeb: "1",
  },
  {
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    level: "B",
    celeb: "1",
  },
  {
    imgUrl: "https://pbs.twimg.com/media/E9jOv0aUYAw6SIA.jpg",
    title: "하얀색",
    level: "C",
    celeb: "1",
  },
  {
    imgUrl: "https://cdn.baccro.com/news/photo/202103/25534_57525_3959.jpeg",
    title: "라일락",
    level: "C",
    celeb: "1",
  },
  {
    imgUrl:
      "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/7mo5/image/RhMj77_UZ1G9smD_INrbLKRVVoc.jpg",
    title: "블루밍",
    level: "C",
    celeb: "1",
  },
  {
    imgUrl:
      "https://newsimg.hankookilbo.com/cms/articlerelease/2021/06/01/373cd776-11e3-4bc3-8e60-0963e82e938a.jpg",
    title: "아이유",
    level: "B",
    celeb: "1",
  },
  {
    imgUrl:
      "https://image.msscdn.net/data/curating/16948/16948_1_org.jpg",
    title: "선글라스",
    level: "C",
    celeb: "1",
  },
];

export type temp = {
  imgUrl: string;
  title: string;
  level: string;
  celeb: string;
};

export interface State {
  topMenu: number;
  view: number;
  sub: boolean;
  subMem: number;
  imgArray: number;
  galleryImg: Array<temp>;
}

function GalleryTop() {
  const [topMenu, setTopMenu] = useState(0);
  const [view, setView] = useState(1);
  const [sub, setSub] = useState(false);
  const [subMem, setSubMem] = useState(99);
  const [imgArray, setImgArray] = useState(0);
  const [galleryImg, setGalleryImg] = useState(tempGallery);

  const handleTopMenuGroup = (id: number) => {
    if (id === 0) {
      setTopMenu(0);
      setSub(false);
    } else if (id === 1) {
      setTopMenu(1);
      setSub(false);
    } else if (id === 2) {
      setTopMenu(2);
      setSub(false);
    } else if (id === 3) {
      setTopMenu(3);
      setSub(false);
    } else if (id === 4) {
      setTopMenu(4);
      setSub(true);
    }
  };


  return (
    <div>
      <div className="galleryTop">
        <div className="galleryTopMenu">
          <div className="galleryTopMenuGroup">
            <span
              className={topMenu === 0 ? "underline" : undefined}
              onClick={() => handleTopMenuGroup(0)}
            >
              전체
            </span>
            <span
              className={topMenu === 1 ? "underline" : undefined}
              onClick={() => handleTopMenuGroup(1)}
            >
              현아
            </span>
            <span
              className={topMenu === 2 ? "underline" : undefined}
              onClick={() => handleTopMenuGroup(2)}
            >
              G-DRAGON
            </span>
            <span
              className={topMenu === 3 ? "underline" : undefined}
              onClick={() => handleTopMenuGroup(3)}
            >
              아이유
            </span>
            <span
              className={topMenu === 4 ? "underline" : undefined}
              onClick={() => handleTopMenuGroup(4)}
            >
              태티서
            </span>
          </div>

          <div className="galleryTopMenuView">
            <span>VIEW</span>
            <span
              className={view === 0 ? "underline" : "undefined"}
              onClick={() => setView(0)}
            >
              S
            </span>
            <span
              className={view === 1 ? "underline" : "undefined"}
              onClick={() => setView(1)}
            >
              M
            </span>
            <span
              className={view === 2 ? "underline" : "undefined"}
              onClick={() => setView(2)}
            >
              L
            </span>
            <span
              className={view === 3 ? "underline" : "undefined"}
              onClick={() => setView(3)}
            >
              XL
            </span>
          </div>
        </div>

        <hr />

        <div className="gallerySubMenu">
          <div className="galleryTopSub">
            <div className={sub ? "galleryTopSubMem" : "hidden"}>
              <span
                className={subMem === 99 ? "underline" : undefined}
                onClick={() => setSubMem(99)}
              >
                전체
              </span>
              <span
                className={subMem === 0 ? "underline" : undefined}
                onClick={() => setSubMem(0)}
              >
                태연
              </span>
              <span
                className={subMem === 1 ? "underline" : undefined}
                onClick={() => setSubMem(1)}
              >
                티파니
              </span>
              <span
                className={subMem === 2 ? "underline" : undefined}
                onClick={() => setSubMem(2)}
              >
                서현
              </span>
            </div>

            <div className="galleryTopSubImgArray">
              <span
                className={imgArray === 0 ? "underline" : undefined}
                onClick={() => setImgArray(0)}
              >
                최신순
              </span>
              <span
                className={imgArray === 1 ? "underline" : undefined}
                onClick={() => setImgArray(1)}
              >
                등급순
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="galleryBody">
        {galleryImg.map((temp) => {
          return <GalleryBody view={view} temp={temp} key={temp.title} />;
        })}
      </div>
    </div>
  );
}

export default GalleryTop;
