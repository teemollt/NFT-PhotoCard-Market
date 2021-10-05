import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import "./MarketBuyItem.css"
import jwt_decode from "jwt-decode"
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import MuiDialogTitle from "@material-ui/core/DialogTitle"
import MuiDialogContent from "@material-ui/core/DialogContent"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import LoadingButton from "@mui/lab/LoadingButton"
import TextField from "@mui/material/TextField"
import DialogActions from "@mui/material/DialogActions"
import DialogContentText from "@mui/material/DialogContentText"
import Typography from "@mui/material/Typography"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import axios from "axios"
import { contractAbi } from "../abi"

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string
  children: React.ReactNode
  onClose: () => void
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
  })
const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props
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
  )
})

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

function MarketBuyItem(props: any): JSX.Element {
  // 판매자와 구매자 비교
  const [Iam, setIam] = useState(0)
  // web3 객체
  const Web3 = require("web3")
  const web3 = new Web3("http://13.125.37.55:8548")
  // contract 객체
  const myContractAddress = "0x0B8cbc026DAEb1708245F66E08e56238235778cA"
  const admin = "0x8BBa1857fD94CF79c78BBE90f977055be015E17E"
  const myContract = new web3.eth.Contract(contractAbi, myContractAddress)
  const [open, setOpen] = React.useState(false)
  const [userAddress, setAddress] = useState<string>("")
  const [userBalance, setBalance] = useState<string>("0")
  const walletCheck = async () => {
    try {
      const res = await axios.get("/api/wallet/", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      if (res.data.success == true) {
        setAddress(res.data.address)
        setBalance(res.data.walletBal)
      }
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    var token = localStorage.getItem("token")
    if (token) {
      var decoded: any | unknown = jwt_decode(token)
      setIam(decoded.sub)
    }
    walletCheck()
  })
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const [loading, setloading] = useState(false)
  const refund = async () => {
    const tx = {
      from: props.sellerwallet,
      gasPrice: "20000000000",
      gas: "21000",
      to: userAddress,
      value: props.price,
      data: "",
    }
    try {
      const adminUnlock = await web3.eth.personal.unlockAccount(
        props.sellerwallet,
        "123",
        6000
      )
      console.log(adminUnlock)
      const unlock = await web3.eth.personal.unlockAccount(
        userAddress,
        "123",
        6000
      )
      console.log(unlock)
    } catch (err) {
      console.log(err)
    }
    try {
      const charge = await web3.eth.sendTransaction(tx, "123")
      console.log(charge)
      // 환불 완료 alert 띄우기
    } catch (err) {
      console.log(err)
      // 환불실패 돈먹튀당함 ㅅㄱ
    }
  }
  // 결제함수
  const pay2 = async () => {
    await walletCheck()
    if (userAddress) {
      if (props.sellerwallet) {
        if (parseFloat(userBalance) > props.price + 0.01) {
          // 로딩 시작
          setloading(true)
          const tokenSer = parseInt(props.itemtoken)
          try {
            // 언락
            await web3.eth.personal.unlockAccount(
              userAddress,
              "123",
              10000
            )
            await web3.eth.personal.unlockAccount(
              props.sellerwallet,
              "123",
              10000
            )
            // 구매 api요청
            const res = await axios.post(
              "/api/auction/buy",
              {
                auctionNo: parseInt(props.auctionNo),
              },
              { headers: { Authorization: localStorage.getItem("token") } }
            )
            console.log(res.data)
            // 결제
            if (res.data.success) {
              const re = await myContract.methods
                .buyCard(tokenSer)
                .send({
                  from: userAddress,
                  value: props.price * Math.pow(10, 18),
                })
              console.log(re)
              setOpen(false)
              setloading(false)
              // 소유권 이전
              const change = await myContract.methods
                .transferFrom(props.sellerwallet, userAddress, tokenSer)
                .send({
                  from: props.sellerwallet,
                })
              console.log(change)
            } else {
              alert(res.data.msg)
            }
            history.push({
              pathname: "/market",
            })
          } catch (e) {
            console.log(e)
            setOpen(false)
            setloading(false)
            alert('구매 실패')
          }

        } else {
          alert('잔액이 부족합니다.')
        }
      } else {
        alert('다시 시도해 주세요.')
      }

    } else {
      alert('지갑을 만들어 주세요.')
    }
  }
  let history = useHistory()
  function makewallet() {
    history.push({
      pathname: "/mypage",
    })
  }
  // 수정
  function setinfo() {
    setnewtitle(props.title)
    setnewdetail(props.detail)
    setnewprice(props.price)
  }
  const handleOpenedit = () => {
    setinfo()
    setopenedit(true)
  }
  const handleCloseedit = () => {
    setopenedit(false)
  }
  const [openedit, setopenedit] = useState<boolean>(false)
  const [newtitle, setnewtitle] = useState<string>("")
  const [errortitle, seterrortitle] = useState(false)
  const [newdetail, setnewdetail] = useState<string>("")
  const [errordetail, seterrordetail] = useState(false)
  const [newprice, setnewprice] = useState<number>(0)
  const [errorprice, seterrorprice] = useState(false)
  useEffect(() => {
    setinfo()
  }, [])
  const changetitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setnewtitle(e.target.value.trim())
  }
  const changedetail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setnewdetail(e.target.value.trim())
  }
  const changeprice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setnewprice(parseInt(e.target.value.trim()))
  }
  function editfunction() {
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
        setopenedit(false)
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  function edit() {
    setopenedit(true)
    if (newtitle) {
      if (newdetail) {
        if (newprice > 0) {
          editfunction()
        } else {
          seterrorprice(true)
          setTimeout(() => {
            setnewprice(props.price)
            seterrorprice(false)
          }, 2000)
        }
      } else {
        seterrordetail(true)
        setTimeout(() => {
          setnewdetail(props.detail)
          seterrordetail(false)
        }, 2000)
      }
    } else {
      seterrortitle(true)
      setTimeout(() => {
        setnewtitle(props.title)
        seterrortitle(false)
      }, 2000)
    }
  }

  const [opendelete, setopendelete] = useState(false)

  const handleClickOpendelete = () => {
    setopendelete(true)
  }

  const handleClosedelete = () => {
    setopendelete(false)
  }

  function deleteitem() {
    axios
      .delete("/api/auction/delete", {
        data: {
          auctionNo: props.auctionNo,
        },
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res)
        setopendelete(false)
        history.push({
          pathname: "/market",
        })
      })
      .catch(() => { })
  }

  return (
    <div>
      {parseInt(props.memberNo) === parseInt(props.Iam) ? (
        <div>
          <Button fullWidth onClick={handleOpenedit}>
            수정
          </Button>
          {/* 수정 */}
          <Dialog open={openedit} onClose={handleCloseedit}>
            <DialogContent>
              <DialogContentText>
                수정항목을 입력해주세요. 미입력시 기존값으로 저장됩니다.
              </DialogContentText>
              <TextField
                value={newtitle}
                margin="dense"
                id="name"
                label="Title"
                type="text"
                fullWidth
                variant="standard"
                onChange={changetitle}
              />
              <TextField
                autoFocus
                margin="dense"
                value={newdetail}
                id="name"
                label="Detail"
                type="text"
                fullWidth
                variant="standard"
                multiline
                onChange={changedetail}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                value={newprice}
                label="Price"
                type="number"
                fullWidth
                variant="standard"
                onChange={changeprice}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseedit}>Cancel</Button>
              <Button onClick={edit}>save</Button>
            </DialogActions>
            {errortitle ? (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                <strong>상품의 제목을 입력해주세요</strong>
              </Alert>
            ) : null}
            {errordetail ? (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                <strong>상품의 상세내용을 입력해주세요</strong>
              </Alert>
            ) : null}
            {errorprice ? (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                <strong>상품 가격을 0이상의 값으로 입력해주세요</strong>
              </Alert>
            ) : null}
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
          {props.price} coin 구매
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
              <Button autoFocus onClick={pay2} color="primary" fullWidth>
                <h1 style={{ color: "black" }}>pay</h1>
              </Button>
            )}
            <Button
              autoFocus
              onClick={() => {
                setOpen(false)
                setloading(false)
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
  )
}
export default MarketBuyItem
