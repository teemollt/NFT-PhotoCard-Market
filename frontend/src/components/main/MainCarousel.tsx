import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import axios from "axios";

function MainCarousel(): JSX.Element {
  const [celeb, setCeleb] = useState<number>(5);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .get("/api/member/mypage", {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          setCeleb(res.data.mypage.celebNo);
        });
    }
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Card>
          <CardMedia
            component="video"
            image={"/videos/" + celeb + ".mp4"}
            muted
            controls
            autoPlay
          />
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default MainCarousel;
