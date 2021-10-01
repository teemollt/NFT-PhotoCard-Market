import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./MarketBuyItem.css";
import jwt_decode from "jwt-decode";
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
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
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

function MarketBuyItem(props: any): JSX.Element {
  // 판매자와 구매자 비교
  const [Iam, setIam] = useState(0);
  const [can, setcan] = useState(false);
  console.log(props.memberNo);
  useEffect(() => {
    var token = localStorage.getItem("token");
    if (token) {
      var decoded: any | unknown = jwt_decode(token);
      console.log(decoded.sub);
      setIam(decoded.sub);
    }
    if (Iam === props.memberNo) {
      setcan(false);
    } else {
      setcan(true);
    }
  }, []);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [loading, setloading] = useState(false);
  // 결제함수
  const pay = () => {
    setloading(true);
    // 가격
    console.log(props.price);
    // 아이템토큰번호
    console.log(props.itemtoken);
    // 옥션번호
    console.log(props.auctionNo);
    // 판매자 주소
    console.log(props.sellerwallet);
    // 지갑있는지 체크
    // 잔액체크
    // 구매통신보내기
    axios
      .post(
        "/api/auction/buy",
        {
          auctionNo: parseInt(props.auctionNo),
        },
        { headers: { Authorization: localStorage.getItem("token") } }
      )
      .then((res) => {
        console.log(res);
        setOpen(false);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let history = useHistory();
  function makewallet() {
    history.push({
      pathname: "/mypage",
    });
  }
  function edit() {}
  return (
    <div>
      {can ? (
        <Button fullWidth onClick={handleClickOpen}>
          {props.price} eth 구매
        </Button>
      ) : (
        <Button fullWidth onClick={edit}>
          수정하기
        </Button>
      )}
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          결제하기
        </DialogTitle>
        <DialogContent dividers>
          <div style={{ width: "500px", height: "100%" }}>
            <Button autoFocus onClick={makewallet} color="primary" fullWidth>
              <h3 style={{ color: "black" }}>지갑 생성하러가기</h3>
            </Button>
            {loading ? (
              <LoadingButton fullWidth>
                <div id="floatingCirclesG">
                  <div className="f_circleG" id="frotateG_01" />
                  <div className="f_circleG" id="frotateG_02" />
                  <div className="f_circleG" id="frotateG_03" />
                  <div className="f_circleG" id="frotateG_04" />
                  <div className="f_circleG" id="frotateG_05" />
                  <div className="f_circleG" id="frotateG_06" />
                  <div className="f_circleG" id="frotateG_07" />
                  <div className="f_circleG" id="frotateG_08" />
                </div>
              </LoadingButton>
            ) : (
              <Button autoFocus onClick={pay} color="primary" fullWidth>
                <h1 style={{ color: "black" }}>pay</h1>
              </Button>
            )}

            <Button
              autoFocus
              onClick={() => {
                setOpen(false);
                setloading(false);
              }}
              color="primary"
              fullWidth
            >
              <h4 style={{ color: "black" }}>cancel</h4>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MarketBuyItem;
