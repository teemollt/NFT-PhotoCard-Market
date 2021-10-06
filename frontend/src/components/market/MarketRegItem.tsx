import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import "./MarketRegItem.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function MarketRegItem() {
  // 선택하고 가격적어 올리는 창
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    setinputprice(0);
  };
  // 내 카드 리스트목록
  const [mycardlist, setmycardlist] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get(`/api/auction/beforeInsert`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setmycardlist(res.data.res);

      });
  }, []);
  //
  function reloadbeforeinsert() {
    axios
      .get(`/api/auction/beforeInsert`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setmycardlist(res.data.res);
      });
  }
  const [inputprice, setinputprice] = useState<number>(0);
  const [errorprice, seterrorprice] = useState(false);
  const [selectedcardNo, setselectedcardNo] = useState<number>(0);
  const [selectedcardNm, setselectedcardNm] = useState<string>("");
  const [selectedtoken, setselectedtoken] = useState<number>(0);
  const [selectedcardtitle, setselectedcardtitle] = useState<string>("");
  const [errortitle, seterrortitle] = useState(false);
  const [selectedcarddetail, setselectedcarddetail] = useState<string>("");
  const [errordetail, seterrordetail] = useState(false);
  function register(data: any) {
    setOpen(true);
    setselectedcardNo(data.cardNo);
    setselectedcardNm(data.cardNM);
    setselectedtoken(data.token[0].tokenNo);
  }

  function successregister() {
    if (selectedcardtitle) {
      if (selectedcarddetail) {
        if (Number.isInteger(Number(inputprice))) {
          // 다 통과하면 진짜 등록
          axios
            .post(
              "/api/auction/insert",
              {
                tokenNo: selectedtoken,
                price: inputprice,
                auctionTitle: selectedcardtitle,
                auctionDetail: selectedcarddetail,
              },
              { headers: { Authorization: localStorage.getItem("token") } }
            )
            .then(() => {
              reloadbeforeinsert();
              setOpen(false);
            });
          //
        } else {
          seterrorprice(true);
          setTimeout(() => {
            setinputprice(0);
            seterrorprice(false);
          }, 2000);
        }
      } else {
        seterrordetail(true);
        setTimeout(() => {
          seterrordetail(false);
        }, 2000);
      }
    } else {
      seterrortitle(true);
      setTimeout(() => {
        seterrortitle(false);
      }, 2000);
    }
  }
  const inputpricevalue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputprice(parseInt(e.target.value.trim()));
  };
  return (
    <div className="section full-height">
      <input
        className="modal-btn"
        type="checkbox"
        id="modal-btn"
        name="modal-btn"
      />
      <label htmlFor="modal-btn">
        물품 등록 <i className="uil uil-expand-arrows" />
      </label>
      <div className="modal">
        <div className="modal-wrap">
          <br />
          <div style={{}}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {mycardlist.map((card, i) => (
                <Grid item xs={6} md={4} key={i}>
                  <div className="page-content">
                    <div
                      className="card"
                      style={{
                        backgroundImage: `url("${card.cardImgUrl}")`,
                        backgroundSize: "100% 100%",
                      }}
                    >
                      <div className="content">
                        <h2 className="title">{card.cardNM}</h2>
                        <h2 className="title">{card.cardGradeNM}</h2>
                        <button
                          className="btn"
                          onClick={() => {
                            register(card);
                          }}
                        >
                          등록
                        </button>
                      </div>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>나의 카드 판매 등록</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ width: "500px", textAlign: "center" }}>
            {selectedcardNm} 카드를 판매하시겠습니까?
            <br />
            <br />
            내가 설정한 금액 :{inputprice ? <h1>{inputprice}</h1> : null}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="제목을 입력해주세요"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setselectedcardtitle(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="카드에 대한 설명을 입력해주세요"
            type="text"
            fullWidth
            variant="standard"
            multiline
            onChange={(e) => {
              setselectedcarddetail(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="판매하고 싶은 가격을 입력해주세요"
            type="number"
            fullWidth
            value={inputprice}
            variant="standard"
            onChange={inputpricevalue}
            InputProps={{ inputProps: { min: 0 } }}
          />
        </DialogContent>
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
            <strong>상품 가격을 0 이상의 정수로 입력해주세요</strong>
          </Alert>
        ) : null}
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={successregister}>판매등록</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MarketRegItem;
