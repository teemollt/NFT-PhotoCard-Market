import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import GalleryBody from "../gallery/GalleryBody";
import GalleryEmpty from "./GalleryEmpty";
import axios from "axios";
import { useLocation, useParams } from "react-router";
import "./GalleryTop.css";

export type card = {
  cardGradeNM: string;
  cardGradeNo: number;
  cardImgUrl: string;
  cardNM: string;
  cardNo: number;
  token: [
    {
      ownDate: string;
      tokenNo: number;
      tokenSeriarlizeNo: string;
    }
  ];
};

function GalleryTop() {
  let location: any = useLocation();
  const pk = location.state.pk;

  const [topMenu, setTopMenu] = useState<number>(0);
  const [view, setView] = useState<number>(1);
  const [sub, setSub] = useState<boolean>(false);
  const [subMem, setSubMem] = useState<number>(0);
  const [galleryCard, setGalleryCard] = useState<Array<card>>([]);
  const [page, setPage] = useState<Array<card>>([]);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [like, setLike] = useState<boolean>(false);

  useEffect(() => {
    axios.get("/api/gallery/" + pk + "/0/0/0").then((res) => {
      setPage(res.data.res.slice(0, 12));
      setGalleryCard(res.data.res);
    });
  }, []);

  useEffect(() => {
    axios
      .get("/api/gallery/likecheck/" + pk, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setLikeCount(res.data.peoplelike);
        if (res.data.islike) {
          setLike(true);
        }
      });
  }, []);

  const handleTopMenuGroup = (id: number) => {
    setTopMenu(id);
    if (id === 0) {
      axios.get("/api/gallery/" + pk + "/0/0/0").then((res) => {
        setPage(res.data.res.slice(0, 12));
        setGalleryCard(res.data.res);
        setSub(false);
      });
    } else if (id === 1) {
      axios.get("/api/gallery/" + pk + "/2/3/0").then((res) => {
        setPage(res.data.res.slice(0, 12));
        setGalleryCard(res.data.res);
        setSub(false);
      });
    } else if (id === 2) {
      axios.get("/api/gallery/" + pk + "/2/4/0").then((res) => {
        setPage(res.data.res.slice(0, 12));
        setGalleryCard(res.data.res);
        setSub(false);
      });
    } else if (id === 3) {
      axios.get("/api/gallery/" + pk + "/2/5/0").then((res) => {
        setPage(res.data.res.slice(0, 12));
        setGalleryCard(res.data.res);
        setSub(false);
      });
    } else if (id === 4) {
      axios.get("/api/gallery/" + pk + "/1/4/0").then((res) => {
        setPage(res.data.res.slice(0, 12));
        setGalleryCard(res.data.res);
        setSub(true);
      });
    }
  };

  const handleLike = () => {
    if (localStorage.getItem("token")) {
      axios
        .post(
          "/api/gallery/like",
          {
            galleryNo: Number(pk),
          },
          {
            headers: { Authorization: localStorage.getItem("token") },
          }
        )
        .then(() => {
          setLike(!like);
          axios
            .get("/api/gallery/likecheck/" + pk, {
              headers: { Authorization: localStorage.getItem("token") },
            })
            .then((res) => {
              setLikeCount(res.data.peoplelike);
            });
        });
    }
  };

  const handleSubMem = (id: number) => {
    setSubMem(id);
    if (id === 0) {
      axios.get("/api/gallery/" + pk + "/1/4/0").then((res) => {
        setPage(res.data.res.slice(0, 12));
        setGalleryCard(res.data.res);
        setSub(true);
      });
    } else if (id === 1) {
      axios.get("/api/gallery/" + pk + "/2/0/0").then((res) => {
        setPage(res.data.res.slice(0, 12));
        setGalleryCard(res.data.res);
        setSub(true);
      });
    } else if (id === 2) {
      axios.get("/api/gallery/" + pk + "/2/1/0").then((res) => {
        setPage(res.data.res.slice(0, 12));
        setGalleryCard(res.data.res);
        setSub(true);
      });
    } else if (id === 3) {
      axios.get("/api/gallery/" + pk + "/2/2/0").then((res) => {
        setPage(res.data.res.slice(0, 12));
        setGalleryCard(res.data.res);
        setSub(true);
      });
    }
  };

  const handlePage = (e: any) => {
    const page = Number(e.target.innerText);
    setPage(galleryCard.slice(page * 12 - 12, page * 12));
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

          <div className="galleryLike">
            <div>
              {like ? (
                <Favorite onClick={handleLike} />
              ) : (
                <FavoriteBorder onClick={handleLike} />
              )}

              <span>{likeCount}</span>
            </div>
          </div>
        </div>

        <hr />

        <div className="gallerySubMenu">
          <div className="galleryTopSub">
            <div className={sub ? "galleryTopSubMem" : "hidden"}>
              <span
                className={subMem === 0 ? "underline" : undefined}
                onClick={(id) => handleSubMem(0)}
              >
                전체
              </span>
              <span
                className={subMem === 1 ? "underline" : undefined}
                onClick={(id) => handleSubMem(1)}
              >
                태연
              </span>
              <span
                className={subMem === 2 ? "underline" : undefined}
                onClick={(id) => handleSubMem(2)}
              >
                티파니
              </span>
              <span
                className={subMem === 3 ? "underline" : undefined}
                onClick={(id) => handleSubMem(3)}
              >
                서현
              </span>
            </div>

            <div className="galleryTopSubView">
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
        </div>
      </div>
      <div className="galleryBody">
        {page.length ? (
          page.map((card, index) => {
            return <GalleryBody view={view} card={card} key={index} />;
          })
        ) : (
          <GalleryEmpty />
        )}
      </div>
      <Pagination
        className="GalleryBoardPage"
        count={Math.ceil(galleryCard.length / 12)}
        shape="rounded"
        onChange={handlePage}
        hidePrevButton
        hideNextButton
      />
    </div>
  );
}

export default GalleryTop;
