import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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
import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";

import axios from "axios";
import { contractAbi } from "../abi";
import MyNewCards from "./MyNewCards";

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
    buttonRoot: {
      fontSize: "inherit" /* inherit from Typography */,
    },
    myIconSizeMedium: {
      "& > *:first-child": {
        fontSize: "inherit",
      },
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
  // web3 객체
  const Web3 = require("web3");
  const web3 = new Web3("http://13.125.37.55:8548");
  // contract 객체
  const myContractAddress = "0xf1C563Ad18747384222dD4F8D21445bb0Fe4F51D"
  const myContract = new web3.eth.Contract(contractAbi, myContractAddress)
  const admin = "0x8BBa1857fD94CF79c78BBE90f977055be015E17E"
  const [open, setOpen] = useState(false)

  useEffect(() => {
    walletCheck();
  }, []);

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
  const [userAddress, setAddress] = useState<string>("");
  const [userBalance, setBalance] = useState<string>("0");
  const walletCheck = async () => {
    try {
      const res = await axios.get("/api/wallet/", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      if (res.data.success === true) {
        setAddress(res.data.address);
        setBalance(res.data.walletBal);
      }
    } catch { }
  }
  const [loading, setloading] = useState(false)
  // 결제함수
  const pay2 = async () => {
    await walletCheck()
    if (userAddress) {
      if (parseFloat(userBalance) > props.cardpackprice + 0.01) {
        //로딩 시작
        setloading(true)
        const tx = {
          from: userAddress,
          gasPrice: "20000000000",
          gas: "21000",
          to: admin,
          value: props.cardpackprice * Math.pow(10, 18),
          data: "",
        }
        await web3.eth.personal.unlockAccount(userAddress, "123", 10000)
        // 카드팩 구매 api 요청
        try {
          const res = await axios.get(`/api/cardPack/buy/${props.cardpackNo}`, {
            headers: { Authorization: localStorage.getItem("token") },
            cardpackNo: props.cardpackNo,
          })
          // api 요청 성공하면 돈보내기
          await web3.eth.sendTransaction(tx, "qwer1234")
          handleClickcardOpen()
          setnewcardlist(res.data.cardList)
          const tokenIds = res.data.cardList
          for (let i = 0; i < tokenIds.length; i++) {
            myContract.methods
              .transferFrom(admin, userAddress, parseInt(tokenIds[i].tokenSer))
              .send({
                from: admin,
              })
              .then(function (receipt: any) {
                walletCheck()
              })
          }
          setloading(false)
          setOpen(false)
        } catch {
          // 카드팩 구매 api 요청 실패
          alert("구매 실패")
          setloading(false)
          setOpen(false)
        }
      } else {
        alert("잔액이 부족합니다. 코인을 충전해주세요")
        setloading(false)
        setOpen(false)
      }
    } else {
      alert("지갑을 생성해주세요")
      setloading(false)
      setOpen(false)
    }
  };
  let history = useHistory();
  function makewallet() {
    history.push({
      pathname: "/mypage",
    });
  }
  return (
    <div>
      {/* GRADIENT CIRCLE PLANES */}
      <div style={{ textAlign: "center" }}>
        {props.soldout ? (
          <Button
            variant="contained"
            color="secondary"
            disabled
            onClick={handleClickOpen}
            style={{ width: "300px", marginTop: "5px" }}
          >
            Sold out
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClickOpen}
            style={{ width: "300px", marginTop: "5px" }}
          >
            {props.cardpackprice} 구매하기
          </Button>
        )}
      </div>
      <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          style={{}}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            결제하기
          </DialogTitle>
          <DialogContent dividers>
            <div style={{ width: "500px", height: "100%" }}>
              {userAddress ? null : (
                <Button
                  autoFocus
                  onClick={makewallet}
                  color="primary"
                  fullWidth
                >
                  <h3 style={{ color: "black" }}>지갑 생성하러가기</h3>
                </Button>
              )}
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
                <Button autoFocus onClick={pay2} color="primary" fullWidth>
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
              <h6>* 카드팩 구매시, 일정 수수료가 부과됩니다.</h6>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <Dialog
          onClose={handlecardClose}
          aria-labelledby="customized-dialog-title"
          open={cardopen}
          className="newcardsbackground"
          maxWidth="lg"
        >
          <div
            style={{ height: "555px", width: "310px" }}
            className="resultcards"
          >
            <MyNewCards newcardlist={newcardlist} />
          </div>
        </Dialog>
      </div>
    </div>
  );
}

export default BuyCardPack;
