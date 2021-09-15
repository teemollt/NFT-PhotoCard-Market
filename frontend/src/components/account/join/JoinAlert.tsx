import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import "./JoinAlert.css";

interface JoinAlertProps {
  message: string;
  open: boolean;
  handleClose: any;
}

function JoinAlert(props: JoinAlertProps): JSX.Element {
  const { message, open, handleClose } = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p className="joinAlertMsg">{message}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className="joinAlertBtn"
            onClick={handleClose}
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
