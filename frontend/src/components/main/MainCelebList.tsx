import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
  })
);

function MainCelebList(): JSX.Element {
  const classes = useStyles();
  // let [celeb, setceleb] = useState("");
  return (
    <div className={classes.root}>
      <Link to="/mainceleb/iu" style={{ textDecoration: "none" }}>
        <Chip avatar={<Avatar></Avatar>} label="아이유" onClick={() => {}} />
      </Link>
      <Link to="/mainceleb/SNSD" style={{ textDecoration: "none" }}>
        <Chip
          avatar={<Avatar></Avatar>}
          color="primary"
          label="소녀시대"
          onClick={() => {}}
        />
      </Link>
      <Link to="/mainceleb/BTS" style={{ textDecoration: "none" }}>
        <Chip
          avatar={<Avatar></Avatar>}
          label="방탄소년단"
          color="secondary"
          onClick={() => {}}
        />
      </Link>
    </div>
  );
}

export default MainCelebList;
