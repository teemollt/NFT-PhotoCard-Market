import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Container from "@material-ui/core/Container";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: "1000px",
      margin: "auto",
      maxHeight: 300,
    },
    inline: {
      display: "inline",
    },
    margin: {
      width: "100%",
      maxWidth: "900px",
      margin: "auto",
    },
  })
);

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "No.",
    width: 100,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "user",
    headerName: "user",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "card",
    headerName: "card",
    align: "center",
    width: 150,
    headerAlign: "center",
  },
  {
    field: "content",
    headerName: "content",
    width: 680,
    align: "center",
    headerAlign: "center",
  },

  {
    field: "date",
    headerName: "Date",
    type: "date",
    description: "경매가 시작된 날",
    sortable: true,
    width: 150,
    align: "center",
    headerAlign: "center",
  },
];

const rows = [
  {
    id: 1,
    user: "Snow",
    card: "S급 아이유카드",
    content: "아이유!!! 아이유!!!! 꺌꺄랴꺄랶ㄹ꺌ㄹ꺄랶",
    date: "2021-09-07",
  },
  {
    id: 2,
    user: "Snow",
    card: "S급 아이유카드",
    content: "아이유!!! 아이유!!!! 꺌꺄랴꺄랶ㄹ꺌ㄹ꺄랶",
    date: "2021-09-07",
  },
  {
    id: 3,
    user: "Snow",
    card: "S급 아이유카드",
    content: "아이유!!! 아이유!!!! 꺌꺄랴꺄랶ㄹ꺌ㄹ꺄랶",
    date: "2021-09-07",
  },
  {
    id: 4,
    user: "Snow",
    card: "S급 아이유카드",
    content: "아이유!!! 아이유!!!! 꺌꺄랴꺄랶ㄹ꺌ㄹ꺄랶",
    date: "2021-09-07",
  },
  {
    id: 5,
    user: "Snow",
    card: "S급 아이유카드",
    content: "아이유!!! 아이유!!!! 꺌꺄랴꺄랶ㄹ꺌ㄹ꺄랶",
    date: "2021-09-07",
  },
  {
    id: 6,
    user: "Snow",
    card: "S급 아이유카드",
    content: "아이유!!! 아이유!!!! 꺌꺄랴꺄랶ㄹ꺌ㄹ꺄랶",
    date: "2021-09-07",
  },
  {
    id: 7,
    user: "Snow",
    card: "S급 아이유카드",
    content: "아이유!!! 아이유!!!! 꺌꺄랴꺄랶ㄹ꺌ㄹ꺄랶",
    date: "2021-09-07",
  },
  {
    id: 8,
    user: "Snow",
    card: "S급 아이유카드",
    content: "아이유!!! 아이유!!!! 꺌꺄랴꺄랶ㄹ꺌ㄹ꺄랶",
    date: "2021-09-07",
  },
  {
    id: 9,
    user: "Snow",
    card: "S급 아이유카드",
    content: "아이유!!! 아이유!!!! 꺌꺄랴꺄랶ㄹ꺌ㄹ꺄랶",
    date: "2021-09-07",
  },
  {
    id: 10,
    user: "Snow",
    card: "S급 아이유카드",
    content: "아이유!!! 아이유!!!! 꺌꺄랴꺄랶ㄹ꺌ㄹ꺄랶",
    date: "2021-09-07",
  },
  {
    id: 11,
    user: "Snow",
    card: "S급 아이유카드",
    content: "아이유!!! 아이유!!!! 꺌꺄랴꺄랶ㄹ꺌ㄹ꺄랶",
    date: "2021-09-07",
  },
  {
    id: 12,
    user: "Snow",
    card: "S급 아이유카드",
    content: "아이유!!! 아이유!!!! 꺌꺄랴꺄랶ㄹ꺌ㄹ꺄랶",
    date: "2021-09-07",
  },
].sort((a, b) => b.id - a.id);

function Review(): JSX.Element {
  let [review, setreview] = useState<string>("");
  function getreview(data: any): object {
    let reviewid: number = data.id;
    console.log(reviewid);
    console.log(data);
    // history.push(`/biditem/${itemid}`);
    return data;
  }
  const classes = useStyles();
  return (
    <div>
      <h1>Review</h1>
      <Container>
        <div style={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            onRowClick={(param) => {
              getreview(param.row);
            }}
          />
        </div>
      </Container>
      <div className={classes.root}>
        <TextField
          className={classes.margin}
          id="input-with-icon-grid"
          label="Comment"
          onChange={(e) => {
            setreview(e.target.value);
          }}
        />
        <SendIcon
          style={{ height: "50px", cursor: "pointer" }}
          onClick={() => {
            console.log(review);
          }}
        />
      </div>
    </div>
  );
}

export default Review;
