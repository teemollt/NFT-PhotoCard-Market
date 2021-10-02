import React, { useState, useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import "./CardpackReviewList.css";
import axios from "axios";
import CardpackReview from "./CardpackReview";
import Pagination from "./Pagination";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import CreateIcon from "@mui/icons-material/Create";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root1: {
      width: "100%",
      maxWidth: "1000px",
      margin: "auto",
      // maxHeight: 300,
    },
    inline: {
      display: "inline",
    },
    margin: {
      width: "100%",
      maxWidth: "900px",
      margin: "auto",
    },
    container: {
      margin: "auto",
    },
    createicon: {
      cursor: "pointer",
    },
  })
);

function CardpackReviewList(props: any): JSX.Element {
  const classes = useStyles();

  const [reviews, setreviews] = useState<any[]>([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [reviewsPerPage, setreviewsPerPage] = useState(5);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await axios
        .get(`/api/cardPack/${props.cardpackNo}/review`, {
          cardpackNo: props.cardpackNo,
        })
        .then((res) => {
          setreviews(res.data.res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchReviews();
  }, []);
  // Get current reviews
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const paginate = (pageNumber: any) => setcurrentPage(pageNumber);

  let [review, setreview] = useState<string>("");
  // 리뷰작성
  function createreview() {
    if (review) {
      axios
        .post(
          `/api/cardPack/${props.cardpackNo}/create/review`,
          {
            cardpackNo: props.cardpackNo,
            reviewContent: review,
          },
          { headers: { Authorization: localStorage.getItem("token") } }
        )
        .then((res) => {
          setreview("");
        })
        .catch();
    }
  }
  return (
    <div>
      <h1>REVIEW</h1>
      <Container className={classes.container}>
        <CardpackReview reviews={currentReviews} />
      </Container>
      <Pagination
        reviewsPerPage={reviewsPerPage}
        totalReviews={reviews.length}
        paginate={paginate}
      />
      <div className={classes.root1}>
        <TextField
          id="standard-basic"
          label="댓글을 작성해주세요"
          variant="standard"
          fullWidth
          value={review}
          onChange={(e) => {
            setreview(e.target.value);
          }}
        />
        <br />
        <br />
        {review ? (
          <CreateIcon
            fontSize="large"
            className={classes.createicon}
            onClick={() => {
              createreview();
            }}
          />
        ) : (
          <CreateIcon
            fontSize="large"
            className={classes.createicon}
            color="disabled"
          />
        )}
      </div>
    </div>
  );
}

export default CardpackReviewList;
