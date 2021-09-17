import React from 'react'
import { Favorite } from '@material-ui/icons';
import './GalleryBoard.css'

function GalleryBoard() {
  return (
    <table className="galleryTable">
      <tbody>
        <tr>
          <th className="postNo">글 번호</th>
          <th className="postNick">닉네임</th>
          <th className="postContent">갤러리 소개</th>
          <th className="postLike"><Favorite className="postIcon" color="secondary" /></th>
        </tr>
      </tbody>
    </table>
  )
}

export default GalleryBoard
