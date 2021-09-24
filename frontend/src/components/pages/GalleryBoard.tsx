import React, { useState } from "react";
import GalleryBoardPost from "../gallery/GalleryBoardPost";
import GalleryBoardNew from "../gallery/GalleryBoardNew";
import { Favorite } from "@material-ui/icons";
import { Button } from "@mui/material";
import { Pagination } from "@mui/material";
import "./GalleryBoard.css";

const tempPosts: Array<post> = [
  {
    postNo: 1,
    nick: "ssafy",
    content: "볼 건 없지만 갤러리 놀러 오세요",
    like: 10,
  },
  { postNo: 2, nick: "거짓말임", content: "레어 카드 많아요", like: 20 },
  {
    postNo: 3,
    nick: "탱구",
    content: "당신이 보지 못한 모든 카드 제 갤러리에 있음",
    like: 135,
  },
  {
    postNo: 4,
    nick: "현아사랑해",
    content: "갤러리 들어와서 구경은 안 해도 좋아요만 눌러 주셈",
    like: 42,
  },
  {
    postNo: 5,
    nick: "레어수집가",
    content: "레어템 많으니까 와서 구경 ㄱㄱ",
    like: 243,
  },
  {
    postNo: 6,
    nick: "현타",
    content: "현질 많이 했어요 갤러리가 아주 화려하겠죠?",
    like: 111,
  },
  {
    postNo: 7,
    nick: "텅장",
    content: "월급 털었다 불쌍하니까 와서 좋아요나 눌러 주고 가",
    like: 333,
  },
  { postNo: 8, nick: "별사탕", content: "아이유 카드 밖에 없음", like: 262 },
  {
    postNo: 9,
    nick: "좋아요",
    content: "좋아요 눌러 주세요 좋아요가 필요해요...",
    like: 158,
  },
  { postNo: 10, nick: "LOVE_U", content: "I LOVE IU", like: 76 },
  { postNo: 11, nick: "별사탕", content: "아이유 카드 밖에 없음", like: 262 },
  {
    postNo: 12,
    nick: "좋아요",
    content: "좋아요 눌러 주세요 좋아요가 필요해요...",
    like: 158,
  },
  { postNo: 13, nick: "LOVE_U", content: "I LOVE IU", like: 76 },
];

export type post = {
  postNo: number;
  nick: string;
  content: string;
  like: number;
};

function GalleryBoard() {
  const [open, setOpen] = useState<boolean>(false);
  const [posts, setPosts] = useState<Array<post>>(tempPosts.slice(0, 10));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePage = (e: any) => {
    const page = Number(e.target.innerText);
    setPosts(tempPosts.slice(page * 10 - 10, page * 10));
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
          {posts.map((post) => {
            return <GalleryBoardPost post={post} />;
          })}
        </tbody>
      </table>
      <Pagination
        className="GalleryBoardPage"
        count={Math.ceil(tempPosts.length / 10)}
        shape="rounded"
        onChange={handlePage}
        hidePrevButton
        hideNextButton
      />
    </div>
  );
}

export default GalleryBoard;
