import React, { useState, useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import MainAuctionBody from "../auction/MainAuctionBody";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import AuctionRegItem from "../auction/AuctionRegItem";
import axios from "axios";
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps): JSX.Element {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  tabs: {},
  registeritem: {
    textAlign: "center",
    marginTop: "20px",
  },
}));

function MainAuction(): JSX.Element {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  // 검색어
  let [search1, setsearch1] = useState("");
  let [search2, setsearch2] = useState("");
  let [search3, setsearch3] = useState("");
  let [search4, setsearch4] = useState("");
  // 아티스트목록
  let [celeb, setceleb] = useState<any[]>([]);
  // 데이터저장하는곳
  useEffect(() => {
    axios.get("/api/main/celebgrouplist").then((res) => {
      console.log(res.data.res);
      setceleb(res.data.res);
    });
  }, []);
  return (
    <div className={classes.root}>
      <div className={classes.registeritem}>
        <AuctionRegItem />
      </div>
      <Container>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          centered
        >
          {celeb.map((group, i) => {
            return <Tab label={group.groupNm} {...a11yProps(i)} key={i} />;
          })}
        </Tabs>
        {celeb.map((group, i) => {
          return (
            <TabPanel value={value} index={i}>
              <div style={{ textAlign: "right" }}>
                <TextField
                  id="standard-textarea"
                  label="검색어를 입력해주세요"
                  placeholder=""
                  multiline
                  onChange={(e) => {
                    setsearch1(e.target.value);
                  }}
                />
                <IconButton
                  aria-label="delete"
                  color="primary"
                  style={{ cursor: "pointer" }}
                >
                  <ImageSearchIcon />
                </IconButton>
              </div>
              <div style={{ textAlign: "center" }}>{group.groupNm}</div>
              <br />
              <MainAuctionBody />
            </TabPanel>
          );
        })}
      </Container>
    </div>
  );
}

export default MainAuction;
