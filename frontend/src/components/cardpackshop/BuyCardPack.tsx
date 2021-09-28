import React, { useState } from "react";
import "./BuyCardPack.css";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}
const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function BuyCardPack(props: any): JSX.Element {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // 카드창;
  const [cardopen, setcardopen] = useState(false);

  const handleClickcardOpen = () => {
    setcardopen(true);
  };

  const handlecardClose = () => {
    setcardopen(false);
  };
  const [newcardlist, setnewcardlist] = useState<any[]>([]);
  // 결제함수
  const pay = () => {
    console.log(props.cardpackprice);
    console.log(props.cardpackNo);
    setOpen(false);
    // 결재코드
    // 잔액이 얼마 이상이면?
    const mywallet = 100;
    if (mywallet > props.cardpackprice) {
      axios
        .get(`/api/cardPack/buy/${props.cardpackNo}`, {
          headers: { Authorization: localStorage.getItem("token") },
          cardpackNo: props.cardpackNo,
        })
        .then((res) => {
          console.log(res.data);
          handleClickcardOpen();
          setnewcardlist(res.data.cardList);
        })
        .catch();
    }
    // 도형님의 결제코드
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickOpen}
          style={{ width: "300px", marginTop: "5px" }}
        >
          {props.cardpackprice} 구매하기
        </Button>
      </div>
      <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            결제하기
          </DialogTitle>
          <DialogContent dividers>
            <div style={{ width: "550px", height: "300px" }}></div>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              cancel
            </Button>
            <Button autoFocus onClick={pay} color="primary">
              pay
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <Dialog
          onClose={handlecardClose}
          aria-labelledby="customized-dialog-title"
          open={cardopen}
          className="newcardsbackground"
          fullWidth
          maxWidth="lg"
        >
          <DialogContent dividers className="newcards">
            <div style={{}}>
              <div className="container1">
                {newcardlist.map((card, i) => (
                  <div
                    className="card card0"
                    style={{
                      backgroundImage: `url("/${card.cardImgUrl}.jpg")`,
                      width: "100%",
                      height: "300px",
                    }}
                  >
                    <div className="border">
                      <h2 className="buycardpacktit">{card.cardNM}</h2>
                      <h2 className="buycardpacktit">{card.cardGradeNM}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default BuyCardPack;
