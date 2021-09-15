import React, { useState } from "react";
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

function Service(): JSX.Element {
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
  return (
    <div className={classes.root}>
      <div className={classes.registeritem}><AuctionRegItem/></div>
      <Container>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          centered
        >
          <Tab label="김도형" {...a11yProps(0)} />
          <Tab label="나비" {...a11yProps(1)} />
          <Tab label="신지현" {...a11yProps(2)} />
          <Tab label="이태희와 아이들" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
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
          <br />
          <MainAuctionBody />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div style={{ textAlign: "right" }}>
            <TextField
              id="standard-textarea"
              label="검색어를 입력해주세요"
              placeholder=""
              multiline
              onChange={(e) => {
                setsearch2(e.target.value);
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
          <br />
          <MainAuctionBody />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div style={{ textAlign: "right" }}>
            <TextField
              id="standard-textarea"
              label="검색어를 입력해주세요"
              placeholder=""
              multiline
              onChange={(e) => {
                setsearch3(e.target.value);
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
          <br />
          <MainAuctionBody />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div style={{ textAlign: "right" }}>
            <TextField
              id="standard-textarea"
              label="검색어를 입력해주세요"
              placeholder=""
              multiline
              onChange={(e) => {
                setsearch4(e.target.value);
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
          <br />
          <MainAuctionBody />
        </TabPanel>
      </Container>
    </div>
  );
}

export default Service;
