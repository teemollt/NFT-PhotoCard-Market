import React, { useState, useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Container from "@material-ui/core/Container";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import axios from "axios";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root1: {
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

declare module "axios" {
  export interface AxiosRequestConfig {
    cardpackNo: number;
  }
}

function Review(props: any): JSX.Element {
  const columns: GridColDef[] = [
    {
      field: "reviewPK",
      headerName: "No.",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "reviewUser",
      headerName: "user",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "reviewCardpack",
      headerName: "card",
      align: "center",
      width: 150,
      headerAlign: "center",
    },
    {
      field: "reviewContent",
      headerName: "content",
      width: 680,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "reviewDate",
      headerName: "Date",
      type: "date",
      description: "경매가 시작된 날",
      sortable: true,
      width: 150,
      align: "center",
      headerAlign: "center",
    },
  ];

  const [rows, setrows] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get(`/api/cardPack/${props.cardpackNo}/review`, {
        cardpackNo: props.cardpackNo,
      })
      .then((res) => {
        setrows(res.data.res);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  });

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
            getRowId={(row) => row.reviewPK}
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
      <div className={classes.root1}>
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
