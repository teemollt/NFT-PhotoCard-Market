import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
function MainCarousel(): JSX.Element {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Card>
          <CardMedia
            component="video"
            image="/videos/아이유화보영상.mp4"
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
