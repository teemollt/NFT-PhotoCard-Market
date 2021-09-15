import React from "react";
import "./GalleryTop.css";

function GalleryTop(prop: any) {
  return (
    <div className="galleryTop">
      <div className="galleryTopMenu">
        <div className="galleryTopMenuGroup">
          <span
            className={prop.topMenu === 0 ? "underline" : undefined}
            onClick={() => prop.handleTopMenuGroup(0)}
          >
            전체
          </span>
          <span
            className={prop.topMenu === 1 ? "underline" : undefined}
            onClick={() => prop.handleTopMenuGroup(1)}
          >
            김도형
          </span>
          <span
            className={prop.topMenu === 2 ? "underline" : undefined}
            onClick={() => prop.handleTopMenuGroup(2)}
          >
            나비
          </span>
          <span
            className={prop.topMenu === 3 ? "underline" : undefined}
            onClick={() => prop.handleTopMenuGroup(3)}
          >
            신지현
          </span>
          <span
            className={prop.topMenu === 4 ? "underline" : undefined}
            onClick={() => prop.handleTopMenuGroup(4)}
          >
            이태희와 아이들
          </span>
        </div>

        <div className="galleryTopMenuView">
          <span>VIEW</span>
          <span
            className={prop.view === 0 ? "underline" : "undefined"}
            onClick={() => prop.handleTopMenuView(0)}
          >
            S
          </span>
          <span
            className={prop.view === 1 ? "underline" : "undefined"}
            onClick={() => prop.handleTopMenuView(1)}
          >
            M
          </span>
          <span
            className={prop.view === 2 ? "underline" : "undefined"}
            onClick={() => prop.handleTopMenuView(2)}
          >
            L
          </span>
          <span
            className={prop.view === 3 ? "underline" : "undefined"}
            onClick={() => prop.handleTopMenuView(3)}
          >
            XL
          </span>
        </div>
      </div>

      <hr />

      <div className="gallerySubMenu">
        <div className="galleryTopSub">
          <div className={prop.sub ? "galleryTopSubMem" : "hidden"}>
            <span
              className={prop.subMem === 0 ? "underline" : undefined}
              onClick={() => prop.handleSubMem(0)}
            >
              전체
            </span>
            <span
              className={prop.subMem === 1 ? "underline" : undefined}
              onClick={() => prop.handleSubMem(1)}
            >
              남근형
            </span>
            <span
              className={prop.subMem === 2 ? "underline" : undefined}
              onClick={() => prop.handleSubMem(2)}
            >
              조영우
            </span>
            <span
              className={prop.subMem === 3 ? "underline" : undefined}
              onClick={() => prop.handleSubMem(3)}
            >
              하지훈
            </span>
          </div>

          <div className="galleryTopSubImgArray">
            <span
              className={prop.imgArray === 0 ? "underline" : undefined}
              onClick={() => prop.handleImgArray(0)}
            >
              최신순
            </span>
            <span
              className={prop.imgArray === 1 ? "underline" : undefined}
              onClick={() => prop.handleImgArray(1)}
            >
              등급순
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryTop;
