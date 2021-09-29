import React, { useEffect, useState } from "react";
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
import { contractAbi } from "../abi";

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
  // web3 객체
  const Web3 = require("web3");
  const web3 = new Web3("http://13.125.37.55:8545");
  // contract 객체
  const myContractAddress = "0x05C0D32D866Be1AB23B62AF3ca5bc673E45Aff6d";
  const myContract = new web3.eth.Contract(contractAbi, myContractAddress);
  const [open, setOpen] = useState(false);

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
      if (res.data.success == true) {
        setAddress(res.data.address);
        setBalance(res.data.walletBal);
      }
    } catch (err) {
      console.log(err);
    }
  };
  // 결제함수
  const pay = () => {
    walletCheck();
    setOpen(false);
    console.log("pay함수 실행");
    console.log(userBalance);
    // 결재코드
    // 잔액이 얼마 이상이면?
    if (parseFloat(userBalance) > props.cardpackprice + 0.01) {
      console.log("통과했니");
      // 컨트랙트 buyCardPack 호출
      myContract.methods
        .buyCardPack()
        .send({
          from: userAddress,
          value: props.cardpackprice * Math.pow(10, 18),
        })
        .then(function (receipt: any) {
          console.log(receipt);
          axios
            .get(`/api/cardPack/buy/${props.cardpackNo}`, {
              headers: { Authorization: localStorage.getItem("token") },
              cardpackNo: props.cardpackNo,
            })
            .then((res) => {
              console.log(res.data);
              handleClickcardOpen();
              setnewcardlist(res.data.cardList);
              const tokenIds = res.data.cardList;
              for (let i = 0; i < tokenIds.length; i++) {
                myContract.methods
                  .changeOwner(tokenIds[i].tokenNo)
                  .send({
                    from: userAddress,
                  })
                  .then(function (receipt: any) {
                    console.log(receipt);
                    walletCheck();
                  });
              }
            })
            .catch();
        });
    } else {
      alert("잔액이 부족합니다. 캐시를 충전해주세요");
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
