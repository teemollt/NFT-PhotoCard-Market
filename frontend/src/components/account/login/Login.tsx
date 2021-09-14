import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import LoginTable from "./LoginTable";

export interface State {
  open: boolean;
}

function Login() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <text
        className="loginText"
        onClick={handleClickOpen}
        style={{ cursor: "poin" }}
      >
        Login
      </text>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <LoginTable handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Login;
