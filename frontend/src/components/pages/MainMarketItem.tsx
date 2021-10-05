import React, { useState, useEffect } from "react"
import { useLocation } from "react-router"
import "./MainMarketItem.css"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import MarketBuyItem from "../market/MarketBuyItem"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import Tooltip from "@mui/material/Tooltip"
import axios from "axios"
import jwt_decode from "jwt-decode"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      height: "400px",
      borderRadius: "20px",
    },
    container: {
      width: "400px",
    },
    paper2: {
      padding: theme.spacing(1),
      textAlign: "center",
    },
    iteminfos: {
      padding: 0,
    },
    iteminfo: {},
  })
)
function MainMarketItem(): JSX.Element {
  const [islike, setislike] = useState(false)
  const [likepeople, setlikepeople] = useState(0)
  // like, unlike
  const changelike = () => {
    if (islike) {
      axios
        .post(
          "/api/auction/like",
          {
            auctionNo: location.state.auctionNo,
          },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          setislike(false)
        })
    } else {
      axios
        .post(
          "/api/auction/like",
          {
            auctionNo: location.state.auctionNo,
          },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          setislike(true)
        })
    }
  }
  const [itemtitle, setitemtitle] = useState<string>("")
  const [itemdetail, setitemdetail] = useState<string>("")
  const [itemimageurl, setitemimageurl] = useState<string>("")
  const [itemprice, setitemprice] = useState<number>(0)
  const [itemauctionNo, setitemauctionNo] = useState<number>(0)
  const [itemtokenNo, setitemtokenNo] = useState<string>("")
  const [memberNo, setmemberNo] = useState<number>(0)
  const [sellerwallet, setsellerwallet] = useState<string>("")
  const [itemcardgrade, setitemcardgrade] = useState<string>("")
  const [itemcardnm, setitemcardnm] = useState("")
  // 옥션번호로 데이터받기
  useEffect(() => {
    axios
      .get(`/api/auction/${location.state.auctionNo}/detail`, {
        auctionNo: location.state.auctionNo,
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data)
        setitemtitle(res.data.auction.auctionTitle)
        setitemdetail(res.data.auction.auctionDetail)
        setitemprice(res.data.auction.price)
        setitemauctionNo(res.data.auction.auctionNo)
        setitemcardgrade(res.data.card.cardGradeNM)
        setitemimageurl(res.data.card.cardImgUrl)
        setitemcardnm(res.data.card.cardNM)
        setitemtokenNo(res.data.card.tokenSer)
        setmemberNo(res.data.member.memberNo)
        setsellerwallet(res.data.sellerWallet.salletAdd)
      })
      .catch()
  }, [])
  useEffect(() => {
    axios
      .get(`/api/auction/likecheck/${location.state.auctionNo}`, {
        auctionNo: location.state.auctionNo,
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setlikepeople(res.data.peoplelike)
        if (res.data.islike === true) {
          setislike(true)
        } else {
          setislike(false)
        }
      })
      .catch()
  })
  const [Iam, setIam] = useState<number>(0)
  useEffect(() => {
    var token = localStorage.getItem("token")
    if (token) {
      var decoded: any | unknown = jwt_decode(token)
      setIam(decoded.sub)
    }
  }, [])
  const classes = useStyles()
  const location: any = useLocation()
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <Container className={classes.container}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <img
                  src={itemimageurl}
                  alt=""
                  width="100%"
                  height="100%"
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              {/* 좋아요 */}
              <Tooltip title={likepeople} placement="right-start">
                {islike ? (
                  <ShoppingCartIcon
                    onClick={changelike}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <AddShoppingCartIcon
                    onClick={changelike}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </Tooltip>
              <div className={classes.iteminfo}>
                <h4>
                  {itemcardnm}({itemcardgrade})
                </h4>
              </div>
              <div className={classes.iteminfo}>
                <h1>{itemtitle}</h1>
              </div>
              <div className={classes.iteminfo}>{itemdetail}</div>
              <div className={classes.iteminfo}>
                <h1>{itemprice} coin</h1>
              </div>
              <div className={classes.paper2}>
                <div className="buybtn">
                  <MarketBuyItem
                    price={itemprice}
                    title={itemtitle}
                    detail={itemdetail}
                    itemtoken={itemtokenNo}
                    auctionNo={itemauctionNo}
                    memberNo={memberNo}
                    sellerwallet={sellerwallet}
                    Iam={Iam}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default MainMarketItem
