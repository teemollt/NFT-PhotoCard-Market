import React from "react";
import "./ServiceContact.css";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// icon
import PlaceIcon from "@material-ui/icons/Place";
import PublicIcon from "@material-ui/icons/Public";
import CallIcon from "@material-ui/icons/Call";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "auto",
      width: "25%",
    },
  })
);

function ServiceContact(): JSX.Element {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <List component="nav">
          <ListItem
            button
            onClick={() => {
              window.location.replace("https://goo.gl/maps/qNENxL6xegQmaGV56");
            }}
          >
            <ListItemIcon>
              <PlaceIcon />
            </ListItemIcon>
            <ListItemText primary="경상북도 구미시 암수동 94" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              window.location.replace(
                "https://www.ssafy.com/ksp/jsp/swp/swpMain.jsp"
              );
            }}
          >
            <ListItemIcon>
              <PublicIcon />
            </ListItemIcon>
            <ListItemText primary="SSAFY" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <ListItemText primary="+82544795114" />
          </ListItem>
        </List>
      </div>
      <br />
      <div className="map">
        <Card>
          <CardMedia component="img" image="/images/지도.png" />
        </Card>
      </div>
    </div>
  );
}

export default ServiceContact;
