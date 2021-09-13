import React from "react";
import "./ServiceIntroduction.css";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";

function ServiceIntroduction(): JSX.Element {
  return (
    <div className="cardvideo">
      <Card>
        <CardMedia
          component="video"
          image="/videos/example.mp4"
          muted
          controls
        />
      </Card>
    </div>
  );
}

export default ServiceIntroduction;
