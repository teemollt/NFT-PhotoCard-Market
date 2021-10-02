import React, { useState, useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
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
      setceleb(res.data.res);
    });
  }, []);

  // let history = useHistory();
  function gotocelebmain(data: any) {
    // history.push({
    //   pathname: `/searchall/${data.groupNm}`,
    //   state: { data: data },
    // });
  }
  return (
    <div className={classes.root}>
      {/* {celeb.map((group, i) => (
        <Button
          onClick={() => {
            // gotocelebmain(group);
          }}
        >
          {group.groupNm}
        </Button>
      ))} */}
      <div className="wrapper">
        <input type="checkbox" />
        <div className="video">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/v7bnOxV4jAc?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text">
          <span data-text="Watch the video" />
        </div>
      </div>
      
    </div>
  );
}

export default MainCelebList;
