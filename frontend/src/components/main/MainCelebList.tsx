import React, { useState, useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

function MainCelebList(): JSX.Element {
  const classes = useStyles();

  let [celeb, setceleb] = useState<any[]>([]);
  // 데이터저장하는곳
  useEffect(() => {
    axios.get("/api/main/celebgrouplist").then((res) => {
      console.log(res.data.res);
      setceleb(res.data.res.splice(0, 4));
    });
  }, []);

  let history = useHistory();
  function gotocelebmain(data: any) {
    console.log(data);

    history.push({
      pathname: `/mainceleb/${data.groupNo}`,
      state: { data: data },
    });
  }
  return (
    <div className={classes.root}>
      {celeb.map((group, i) => (
        <Button
          onClick={() => {
            gotocelebmain(group);
          }}
        >
          {group.groupNm}
        </Button>
      ))}
    </div>
  );
}

export default MainCelebList;
