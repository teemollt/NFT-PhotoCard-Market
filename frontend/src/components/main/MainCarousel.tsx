import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

function MainCarousel(): JSX.Element {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <img
          src="https://jamdda.com/files/attach/images/w/560/516/080/88b61326585eb9b63503d2f7b8c01672ef480c3d.gif"
          alt="iu"
          width="100%"
        />
      </Container>
    </React.Fragment>
  );
}

export default MainCarousel;
