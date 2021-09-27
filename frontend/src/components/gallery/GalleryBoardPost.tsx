import React from "react";
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
  const { galleryArticleContent, galleryArticleNo, likes } = props.post;
  const { memberNick, memberNo } = props.post.member;

  const handleToGallery = (pk: number) => {
    window.location.replace("/gallery/" + pk);
  };

  return (
    <tr className="postBody" onClick={(pk) => handleToGallery(memberNo)}>
      <th className="postBodyNo">{galleryArticleNo}</th>
      <th className="postBodyNick">{memberNick}</th>
      <th className="postBodyContent">{galleryArticleContent}</th>
      <th className="postBodyLike">{likes}</th>
    </tr>
  );
}

export default GalleryBoardPost;
