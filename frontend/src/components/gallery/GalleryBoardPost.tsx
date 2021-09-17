import React from "react";
import "./GalleryBoardPost.css";

interface GalleryBoardPostProps {
  post: {
    postNo: number;
    nick: string;
    content: string;
    like: number;
  };
}

function GalleryBoardPost(props: GalleryBoardPostProps) {
  const { postNo, nick, content, like } = props.post;
  return (
    <tr className="postBody">
      <th className="postBodyNo">{postNo}</th>
      <th className="postBodyNick">{nick}</th>
      <th className="postBodyContent">{content}</th>
      <th className="postBodyLike">{like}</th>
    </tr>
  );
}

export default GalleryBoardPost;
