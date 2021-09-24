import React, { useState } from "react"
import "./BidItem.css"
import Countdown from "react-countdown"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Fab from "@material-ui/core/Fab"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"
import SendIcon from "@material-ui/icons/Send"

const useStyles = makeStyles({
  table: {},
})

function createData(id: number, name: string, bidprice: number) {
  return { id, name, bidprice }
}

const rows = [
  createData(1, "김도형", 159),
  createData(2, "조영우", 160),
  createData(3, "하지훈", 161),
  createData(4, "신지현", 167),
  createData(5, "남근형", 180),
]
  .sort((a, b) => b.bidprice - a.bidprice)
  .slice(0, 5)

const buynow = () => {
  console.log("성공")
}
function BidItem(): JSX.Element {
  let [bidprice, setbidprice] = useState<number>(0)
  // axios 경매물품 정보

  const price = "1btc"
  const classes = useStyles()

  const moment = require("moment")
  // 현재시간
  var today = moment()
  console.log(today)

  var enddate = moment("2021-09-10T00:00:00")
  console.log(enddate)
  var duration = moment.duration(enddate.diff(today))
  var rest = duration.asSeconds()
  return (
    <div style={{ textAlign: "center" }}>
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
        <Container>
          <Grid container style={{ display: "flex", height: "100%" }}>
            <Grid item xs={4}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrlm541sni77e78CwZJ5nZH2xIVLbSYSAl3Q9VOntdkQoc0o-rZfLqxmkdLW9d0fK8pNA&usqp=CAU"
                alt=""
                width="300"
              />
            </Grid>
            <Grid item xs={8}>
              <div className="buybtn">
                <Fab variant="extended" color="primary" onClick={buynow}>
                  즉시구매 {price}
                </Fab>
              </div>

              <TableContainer component={Paper}>
                <Table className={classes.table} size="small">
                  <TableHead>
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

              <br />
              <div>
                <TextField
                  id="input-with-icon-grid"
                  label="Price"
                  type="number"
                  onChange={(e) => {
                    console.log(typeof Number(e.target.value))
                    setbidprice(2)
                  }}
                />
                <SendIcon
                  style={{ height: "50px", cursor: "pointer" }}
                  onClick={() => {
                    console.log(bidprice)
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default BidItem
