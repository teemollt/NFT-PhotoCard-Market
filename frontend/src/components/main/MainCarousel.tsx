import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

function MainCarousel() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <img src="./images/iu1.jpg" alt="iu" width="100%" />
      </Container>
    </React.Fragment>
  );
}

export default MainCarousel;
