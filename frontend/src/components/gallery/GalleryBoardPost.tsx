import React from "react";
import { useHistory } from "react-router-dom";
import "./GalleryBoardPost.css";

interface GalleryBoardPostProps {
  post: {
    galleryArticleContent: string;
    galleryArticleNo: number;
    likes: number;
    member: {
      memberNick: string;
      memberNo: number;
    };
  };
}

function GalleryBoardPost(props: GalleryBoardPostProps) {
  let history = useHistory();

  const { galleryArticleContent, galleryArticleNo, likes } = props.post;
  const { memberNick, memberNo } = props.post.member;

  const handleToGallery = (pk: number) => {
    history.push({
      pathname: `/gallery/${pk}`,
      state: { pk: pk },
    });
  };

  return (
    <tr className="postBody" onClick={(pk) => handleToGallery(memberNo)}>
      <td className="postBodyNo">{galleryArticleNo}</td>
      <td className="postBodyNick">{memberNick}</td>
      <td className="postBodyContent">{galleryArticleContent}</td>
      <td className="postBodyLike">{likes}</td>
    </tr>
  );
}

export default GalleryBoardPost;
