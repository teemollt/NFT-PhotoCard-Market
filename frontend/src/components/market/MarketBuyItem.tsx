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
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
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

function MarketBuyItem(props: any): JSX.Element {
  // 판매자와 구매자 비교
  const [Iam, setIam] = useState(0);
  // web3 객체
  const Web3 = require("web3");
  const web3 = new Web3("http://13.125.37.55:8545");
  // contract 객체
  const myContractAddress = "0x55e333149CE4558612055f453Bf1c7f7D81A3CAa";
  const myContract = new web3.eth.Contract(contractAbi, myContractAddress);
  const [open, setOpen] = React.useState(false);
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
  useEffect(() => {
    var token = localStorage.getItem("token");
    if (token) {
      var decoded: any | unknown = jwt_decode(token);
      setIam(decoded.sub);
    }
    walletCheck();
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseedit = () => {
    setopenedit(false);
  };
  const [loading, setloading] = useState(false);
  // 결제함수
  const pay = () => {
    // 지갑이 있으면
    if (userAddress) {
      walletCheck();
      // 잔액이 가격+가스비 이상이면
      if (parseFloat(userBalance) > props.price + 0.01) {
        // 로딩 시작
        setloading(true);
        // 컨트랙트 buycard 호출
        myContract.methods
          .buyCard(props.itemtoken)
          .send({
            from: userAddress,
            value: props.price * Math.pow(10, 18),
          })
          .then(function (receipt: any) {
            console.log(receipt);
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
                // 성공했으면 소유권 이전 함수 호출
                myContract.methods
                  .changeOwner(props.itemtoken)
                  .send({
                    from: userAddress,
                  })
                  .then(function (receipt: any) {
                    console.log(receipt);
                    walletCheck();
                  });
              })
              .catch((err) => {
                // api요청 실패
                console.log(err);
                // 구매 실패 alert 띄우기
                // 여기서 환불 함수 호출
                const refund = async () => {
                  const tx = {
                    from: props.sellerwallet,
                    gasPrice: "20000000000",
                    gas: "21000",
                    to: userAddress,
                    value: props.price,
                    data: "",
                  };
                  try {
                    const adminUnlock = await web3.eth.personal.unlockAccount(
                      props.sellerwallet,
                      "123",
                      6000
                    );
                    console.log(adminUnlock);
                    const unlock = await web3.eth.personal.unlockAccount(
                      userAddress,
                      "123",
                      6000
                    );
                    console.log(unlock);
                  } catch (err) {
                    console.log(err);
                  }
                  try {
                    const charge = await web3.eth.sendTransaction(tx, "123");
                    console.log(charge);
                    // 환불 완료 alert 띄우기
                  } catch (err) {
                    console.log(err);
                    // 환불실패 돈먹튀당함 ㅅㄱ
                  }
                };
                refund();
              });
          });
      } else {
        alert("잔액이 부족합니다. 캐시를 충전해주세요");
      }
      // 가격
      console.log(props.price);
      // 아이템토큰번호
      console.log(props.itemtoken);
      // 옥션번호
      console.log(props.auctionNo);
      // 판매자 주소
      console.log(props.sellerwallet);
      // 잔액체크
      walletCheck();
      // 구매통신보내기
    } else {
      alert("지갑을 생성해주세요");
    }
  };
  let history = useHistory();
  function makewallet() {
    history.push({
      pathname: "/mypage",
    });
  }
  const [openedit, setopenedit] = useState<boolean>(false);
  const [newtitle, setnewtitle] = useState<string>(props.title);
  const [newdetail, setnewdetail] = useState<string>(props.detail);
  const [newprice, setnewprice] = useState<number>(props.price);
  function edit() {
    console.log(props.price);
    console.log(newprice);
    console.log(newtitle);
    console.log(newdetail);
    setopenedit(true);
    if (newtitle === "") {
      setnewtitle(props.title);
    }
    if (newdetail === "") {
      setnewdetail(props.detail);
    }
    if (newprice === 0) {
      setnewprice(props.price);
    }
    axios
      .put(
        "/api/auction/edit",
        {
          auctionNo: props.auctionNo,
          auctionDetail: newdetail,
          auctionTitle: newtitle,
          price: newprice,
        },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      )
      .then((res) => {
        setopenedit(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const [opendelete, setopendelete] = useState(false);

  const handleClickOpendelete = () => {
    setopendelete(true);
  };

  const handleClosedelete = () => {
    setopendelete(false);
  };

  function deleteitem() {
    axios
      .delete("/api/auction/delete", {
        auctionNo: parseInt(props.auctionNo),
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res);
        setopendelete(false);
      })
      .catch();
  }

  return (
    <div>
      {parseInt(props.memberNo) === parseInt(props.Iam) ? (
        <div>
          <Button
            fullWidth
            onClick={() => {
              setopenedit(true);
            }}
          >
            수정
          </Button>
          {/* 수정 */}
          <Dialog open={openedit} onClose={handleCloseedit}>
            <DialogContent>
              <DialogContentText>
                수정항목을 입력해주세요. 미입력시 기존값으로 저장됩니다.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Title"
                type="text"
                fullWidth
                variant="standard"
                placeholder={props.title}
                onChange={(e) => {
                  setnewtitle(e.target.value);
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Detail"
                type="text"
                fullWidth
                variant="standard"
                placeholder={props.detail}
                multiline
                onChange={(e) => {
                  setnewdetail(e.target.value);
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Price"
                type="number"
                fullWidth
                variant="standard"
                placeholder={props.price}
                onChange={(e) => {
                  setnewprice(parseInt(e.target.value));
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseedit}>Cancel</Button>
              <Button onClick={edit}>save</Button>
            </DialogActions>
          </Dialog>
          {/* 삭제 */}
          <Button fullWidth onClick={handleClickOpendelete}>
            삭제
          </Button>
          <Dialog
            open={opendelete}
            onClose={handleClosedelete}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                정말 판매글을 삭제하시겠습니까?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClosedelete}>cancel</Button>
              <Button onClick={deleteitem} autoFocus>
                delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      ) : (
        <Button fullWidth onClick={handleClickOpen}>
          {props.price} eth 구매
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
            {userAddress ? null : (
              <Button autoFocus onClick={makewallet} color="primary" fullWidth>
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
