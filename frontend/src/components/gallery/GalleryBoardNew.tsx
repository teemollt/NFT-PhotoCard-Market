import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { Button } from "@mui/material"
import "./GalleryBoardNew.css"
import axios from "axios"

interface GalleryBoardNewProps {
  open: boolean
  handleClose: any
}

function GalleryBoardNew(props: GalleryBoardNewProps) {
  const { open, handleClose } = props
  const [content, setContent] = useState<string>("")
  const handleSubmit = () => {
    if (content) {
      axios
        .post(
          "/api/gallery/insert",
          { galleryArticleContent: content },
          {
            headers: { Authorization: localStorage.getItem("token") },
          }
        )
        .then(() => window.location.reload())
    }
  }
  return (
    <div className="galleryBoardNew">
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="galleryBoardNewTitle">갤러리 자랑</DialogTitle>
        <DialogContent>
          <DialogContentText className="galleryBoardNewContent">
            <p>
              다른 유저들이 나의 갤러리에 방문할 수 있도록 갤러리를 자랑해
              보세요!
            </p>
            <p>(최대 80자)</p>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            fullWidth
            variant="standard"
            inputProps={{
              maxlength: 80,
            }}
            helperText={content.length}
            onChange={(e) => setContent(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button className="galleryBoardNewBtn" onClick={handleClose}>
            취소
          </Button>
          <Button className="galleryBoardNewBtn" onClick={handleSubmit}>
            작성
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default GalleryBoardNew
