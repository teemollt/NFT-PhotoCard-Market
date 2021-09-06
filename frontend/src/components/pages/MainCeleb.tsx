import React from "react";
import { useParams } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function MainCeleb() {
  const { celeb } = useParams<{ celeb: string }>();
  return (
    <div>
      <h3>{celeb}의 메인페이지</h3>

      <React.Fragment>
        <CssBaseline />
        <Container>
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc" }}
          />
        </Container>
      </React.Fragment>
    </div>
  );
}

export default MainCeleb;
