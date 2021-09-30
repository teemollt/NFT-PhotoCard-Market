import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./MainCarousel.css";

function MainCarousel4(): JSX.Element {
  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className="namebox">
              <h1 className="name">Taeyeon</h1>
            </div>
          </Grid>
          <Grid item xs={6}>
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/RmuL-BPFi2Q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MainCarousel4;
