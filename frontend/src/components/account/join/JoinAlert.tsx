import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import "./JoinAlert.css";

function JoinAlert(props: any) {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p className="joinAlertMsg">{props.message}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className="joinAlertBtn"
            onClick={props.handleClose}
            color="primary"
            autoFocus
          >
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default JoinAlert;
