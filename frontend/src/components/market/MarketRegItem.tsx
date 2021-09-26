import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Grid from "@mui/material/Grid";
import "./MarketRegItem.css";

function MarketRegItem() {
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
  function register(data: any) {
    console.log(data);
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
          <div>카드 선택</div>
          <br />
          <div>
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
                        backgroundImage: "url(/images/지도.png)",
                        width: "",
                        height: "",
                      }}
                    >
                      <div className="content">
                        <h2 className="title">{card.cardNM}</h2>
                        <button
                          className="btn"
                          onClick={() => {
                            register(card.cardNo);
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
    </div>
  );
}

export default MarketRegItem;
