import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
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

function MarketRegItem() {
  // 선택하고 가격적어 올리는 창
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  // 내 카드 리스트목록
  const [mycardlist, setmycardlist] = useState<any[]>([]);
  useEffect(() => {
    var token: string | null = localStorage.getItem("token");
    if (token) {
      var decoded: any = jwt_decode(token);
    }
    axios.get(`/api/gallery/${decoded.sub}/0/0/0`).then((res) => {
      console.log(res);
      setmycardlist(res.data.res);
    });
  }, []);
  //
  const [inputprice, setinputprice] = useState<string>("");
  const [selectedcardNo, setselectedcardNo] = useState<number>(0);
  const [selectedcardNm, setselectedcardNm] = useState<string>("");
  function register(data: any) {
    setOpen(true);
    setselectedcardNo(data.cardNo);
    setselectedcardNm(data.cardNM);
  }
  function successregister() {
    setOpen(false);
    // 정말 카드등록하는 api
    //
  }
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
                <Grid item xs={3}>
                  <div className="page-content">
                    <div
                      className="card"
                      style={{
                        backgroundImage: `url("/${card.cardImgUrl}.jpg")`,
                        backgroundSize: "100% 100%",
                      }}
                    >
                      {/* <img src={"/" + card.cardImgUrl+'.jpg'} alt="" /> */}
                      <div className="content">
                        <h2 className="title">{card.cardNM}</h2>
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
            {selectedcardNo}번 {selectedcardNm} 카드를 판매하시겠습니까?
            <br />
            <br />
            내가 설정한 금액 : <h1>{inputprice}</h1>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="판매하고 싶은 가격을 입력해주세요"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setinputprice(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={successregister}>판매등록</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MarketRegItem;
