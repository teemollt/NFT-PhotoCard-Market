import React, { useState } from "react";
import { useLocation } from "react-router";
import "./BidItem.css";
import Countdown from "react-countdown";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import AuctionBuyItem from "../auction/AuctionBuyItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      height: "400px",
    },
    container: {
      width: "60%",
    },
    paper2: {
      padding: theme.spacing(2),
      textAlign: "center",
      height: "330px",
    },
  })
);

function createData(id: number, name: string, bidprice: number) {
  return { id, name, bidprice };
}

const rows = [
  createData(1, "김도형", 159),
  createData(2, "조영우", 160),
  createData(3, "하지훈", 161),
  createData(4, "신지현", 167),
  createData(5, "남근형", 180),
]
  .sort((a, b) => b.bidprice - a.bidprice)
  .slice(0, 5);

const buynow = () => {
  console.log("성공");
};
function BidItem(): JSX.Element {
  const classes = useStyles();

  let [bidprice, setbidprice] = useState<number>(0);
  // axios 경매물품 정보

  const price = "1btc";

  const moment = require("moment");
  // 현재시간
  var today = moment();
  console.log(today);

  var enddate = moment("2021-09-10T00:00:00");
  console.log(enddate);
  var duration = moment.duration(enddate.diff(today));
  var rest = duration.asSeconds();

  const location: any = useLocation();
  return (
    <div style={{ textAlign: "center" }}>
      {/* 남은시간 */}
      <div>
        <h1>
          {rest > 0 ? (
            <Countdown date={Date.now() + rest * 1000} />
          ) : (
            "경매가 종료되었습니다"
          )}
        </h1>
      </div>
      <br />
      <div>
        <Container className={classes.container}>
          <Grid container spacing={5}>
            <Grid item xs={12} lg={6}>
              <Paper className={classes.paper}>
                <img
                  src={location.state.data.imgUrl}
                  alt=""
                  width="100%"
                  height="100%"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} lg={6}>
              <div className={classes.paper2}>
                {location.state.data.salesDetail}
                <div className="buybtn">
                  <AuctionBuyItem price={price} />
                </div>
                최근 입찰 기록
                <TableContainer>
                  <Table className="" size="small">
                    <TableHead style={{ backgroundColor: "#F2F2F2" }}>
                      <TableRow>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">User</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell component="th" scope="row" align="center">
                            {row.bidprice}
                          </TableCell>
                          <TableCell align="center">{row.name}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div>
                <TextField
                  id="input-with-icon-grid"
                  label="Price"
                  type="number"
                  fullWidth
                  style={{ width: "90%" }}
                  onChange={(e) => {
                    console.log(typeof Number(e.target.value));
                    setbidprice(2);
                  }}
                />
                &nbsp;&nbsp;
                <SendIcon
                  style={{ height: "50px", cursor: "pointer" }}
                  onClick={() => {
                    console.log(bidprice);
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default BidItem;
