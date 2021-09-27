import React, { useEffect, useState } from "react";
import GalleryBoardPost from "../gallery/GalleryBoardPost";
import GalleryBoardNew from "../gallery/GalleryBoardNew";
import { Favorite } from "@material-ui/icons";
import { Button, Pagination } from "@mui/material";
import axios from "axios";
import "./GalleryBoard.css";

export type post = {
  galleryArticleContent: string;
  galleryArticleNo: number;
  likes: number;
  member: {
    memberNick: string;
    memberNo: number;
  };
};

function GalleryBoard() {
  const [open, setOpen] = useState<boolean>(false);
  const [posts, setPosts] = useState<Array<post>>([]);
  const [page, setPage] = useState<Array<post>>([]);

  useEffect(() => {
    axios.get("/api/gallery/main").then((res) => {
      setPage(res.data.res.slice(0, 10));
      setPosts(res.data.res);
    });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePage = (e: any) => {
    const page = Number(e.target.innerText);
    setPage(posts.slice(page * 10 - 10, page * 10));
  };

  return (
    <div className="galleryBoard">
      <div className="galleryBoardBtnDiv">
        <Button
          className="galleryBoardBtn"
          variant="contained"
          size="small"
          onClick={handleClickOpen}
        >
          작성
        </Button>
        {open ? (
          <GalleryBoardNew open={open} handleClose={handleClose} />
        ) : null}
      </div>
      <table className="galleryTable">
        <tbody>
          <tr>
            <th className="boardNo">글 번호</th>
            <th className="boardNick">닉네임</th>
            <th className="boardContent">갤러리 소개</th>
            <th className="boardLike">
              <Favorite className="boardIcon" color="secondary" />
            </th>
          </tr>
          {page.map((post, index) => {
            return <GalleryBoardPost post={post} key={index} />;
          })}
        </tbody>
      </table>
      <Pagination
        className="GalleryBoardPage"
        count={Math.ceil(posts.length / 10)}
        shape="rounded"
        onChange={handlePage}
        hidePrevButton
        hideNextButton
      />
    </div>
  );
}

export default GalleryBoard;
