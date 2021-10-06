import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import "./MyPageTop.css";
import Web3 from "web3";
import { ConstructionRounded } from "@mui/icons-material";

interface MyPageTopProps {
  memberNick: string;
  memberGrade: string;
  countAuctionRegist: number;
  countSalesLike: number;
  countSalesOrder: number;
}

function MyPageTop(props: MyPageTopProps): JSX.Element {
  const {
    memberNick,
    memberGrade,
    countAuctionRegist,
    countSalesLike,
    countSalesOrder,
  } = props;
  const Web3 = require("web3");
  const web3 = new Web3("http://13.125.37.55:8548");
  // 관리자 계정(이더 많은거)
  const admin = "0x8BBa1857fD94CF79c78BBE90f977055be015E17E";
  // api 통해 불러온 유저 계정
  const [userAddress, setAddress] = useState<string>("");
  // 잔액
  const [userBalance, setBalance] = useState<string>("0");

  const walletCheck = async () => {
    console.log("walletchecktry");
    try {
      const res = await axios.get("/api/wallet/", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      console.log(res.data);
      if (res.data.success === true) {
        setAddress(res.data.address);
        setBalance(res.data.walletBal);
        console.log("walletcheck");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // api로 지갑 유무 파악
    walletCheck();
  });
  const [makingwallet, setmakingwallet] = useState(false);
  // getAccount는 지갑 주소가 없는 경우에만 버튼 활성화
  const getAccount = async () => {
    setmakingwallet(true);
    // 계정 생성 - 추후에 비밀번호 직접 입력 가능하게
    const newAccount = await web3.eth.personal.newAccount("123");
    console.log(newAccount);
    setAddress(newAccount);
    setmakingwallet(false);
    // 생성된 주소 서버로 넘겨서 저장하기
    const res = await axios.post(
      "/api/wallet/",
      { walletAdd: newAccount },
      { headers: { Authorization: localStorage.getItem("token") } }
    );
  };
  const [charging, setcharging] = useState(false);
  // 이더 충전 횟수 제한 혹은 일정 잔액 이하일때만 충전 가능하게 api로 변경
  const chargeEth = async () => {
    console.log(userAddress);
    setcharging(true);
    const tx = {
      from: admin,
      gasPrice: "20000000000",
      gas: "21000",
      to: userAddress,
      value: "7000000000000000000",
      data: "",
    };
    try {
      const adminUnlock = await web3.eth.personal.unlockAccount(
        admin,
        "qwer1234",
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
      const charge = await web3.eth.sendTransaction(tx, "qwer1234");
      console.log(charge);
      setcharging(false);
    } catch (err) {
      console.log(err);
    }
    walletCheck();
  };
  return (
    <div className="mypageTop">
      <div className="mypageUserInfo">
        <div className="mypageUserNick">
          <h1>{memberNick} 님</h1>
        </div>
        <div className="mypageUserInfos">
          <p className="mypageGrade">{memberGrade}</p>
          {userAddress !== "" ? (
            <div className="mypageAccount">
              {/* <p>지갑주소: {userAddress}</p> */}
              <h1 style={{ marginTop: "5px" }}>잔액: {userBalance} </h1>
            </div>
          ) : null}
          <br />
        </div>
        <div className="mypageUserUpdate">
          <Link className="tablinkMyPage" to="/update">
            <Button className="mypageUpdateBtn" variant="outlined" size="large">
              정보 수정
            </Button>
          </Link>
          <div>
            {userAddress === "" ? (
              makingwallet ? (
                <LoadingButton
                  className="mypageAccountBtn"
                  loading
                  loadingPosition="start"
                  startIcon={<SaveIcon />}
                  variant="outlined"
                  size="medium"
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    marginLeft: "5px",
                  }}
                >
                  지갑생성중
                </LoadingButton>
              ) : (
                <Button
                  className="mypageAccountBtn"
                  variant="outlined"
                  size="medium"
                  onClick={getAccount}
                >
                  지갑 생성
                </Button>
              )
            ) : charging ? (
              <LoadingButton
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="outlined"
                size="medium"
                style={{
                  color: "black",
                  backgroundColor: "white",
                  marginLeft: "5px",
                  marginTop: "10px",
                }}
              >
                충전중
              </LoadingButton>
            ) : (
              <Button
                className="mypageAccountBtn"
                variant="outlined"
                size="medium"
                onClick={chargeEth}
              >
                이더 충전
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="mypageShop">
        <div className="mypageOrder">
          <p>구매 내역</p>
          <span>{countAuctionRegist}</span>
        </div>
        <div className="mypageOrder">
          <p>관심 상품</p>
          <span>{countSalesLike}</span>
        </div>
        <div className="mypageOrder">
          <p>경매 등록</p>
          <span>{countSalesOrder}</span>
        </div>
      </div>
    </div>
  );
}

export default MyPageTop;
