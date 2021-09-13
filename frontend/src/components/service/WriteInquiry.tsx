import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

function WriteInquiry(): JSX.Element {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const write = () => {
    console.log(title);
    console.log(content);
    // axios
    setOpen(false);
  };
  let [title, settitle] = useState("");
  let [content, setcontent] = useState("");
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        WRITE
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="lg"
      >
        <DialogTitle id="form-dialog-title">1:1문의하기</DialogTitle>
        <DialogContent style={{ width: "700px" }}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <TextField
            id="standard-multiline-static"
            label="Content"
            multiline
            fullWidth
            rows={4}
            onChange={(e) => {
              setcontent(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={write} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default WriteInquiry;
