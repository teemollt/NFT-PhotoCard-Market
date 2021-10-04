import React, { useState, useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import MarketBody from "../market/MarketBody";
import MarketRegItem from "../market/MarketRegItem";
import axios from "axios";
import "./MainMarket.css";
import MarketBodySearch from "../market/MarketBodySearch";

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

function MainMarket(): JSX.Element {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  // 전체목록
  let [allceleb, setallceleb] = useState<any[]>([]);
  let [celeb, setceleb] = useState<any[]>([]);
  let [searchnumber, setsearchnumber] = useState<number>(0);
  // 데이터저장하는곳
  useEffect(() => {
    axios.get("/api/main/celebgrouplist").then((res) => {
      setsearchnumber(res.data.res.length);
      setceleb(res.data.res);
    });
  }, []);
  // 검색
  const [clicksearch, setclicksearch] = useState(false);
  const [search, setsearch] = useState<string>("");
  const [searchresult, setsearchresult] = useState<any[]>([]);
  function searchitem(data: string) {
    // 찾기해서 결과값 가져오기
    axios
      .get(`/api/search/all/${data}`, {
        keyword: data,
      })
      .then((res) => {
        console.log(res.data);
        setsearchresult(res.data.auctionList);
        setclicksearch(true);
      });
  }
  return (
    <div className={classes.root}>
      <div className={classes.registeritem}>
        <MarketRegItem />
      </div>

      <br />
      <Container>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          centered
        >
          <Tab label="전체" {...a11yProps(0)} key={0} />
          {celeb.map((group, i) => {
            return (
              <Tab label={group.groupNm} {...a11yProps(i + 1)} key={i + 1} />
            );
          })}
          <Tab
            label="검색"
            {...a11yProps(searchnumber + 1)}
            key={searchnumber + 1}
          />
        </Tabs>
        <div>
          <TabPanel value={value} index={0}>
            <MarketBody celebNo={0} />
          </TabPanel>
        </div>
        {celeb.map((group, i) => {
          return (
            <div key={i}>
              <TabPanel value={value} index={i + 1}>
                <MarketBody celebNo={group.groupNo} />
              </TabPanel>
            </div>
          );
        })}
        <div>
          <TabPanel value={value} index={searchnumber + 1}>
            <div className="search">
              <div>
                <form className="search-form">
                  <input
                    type="search"
                    className="search-input"
                    placeholder="찾고자하는 카드의 타이틀을 입력하세요"
                    onChange={(e) => {
                      setsearch(e.target.value);
                    }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        searchitem(search);
                      }
                    }}
                  />
                  <button type="submit" className="search-button" disabled>
                    <svg className="submit-button">
                      <use xlinkHref="#search" />
                    </svg>
                  </button>
                </form>
                <svg xmlns="" width={0} height={0} display="none">
                  <symbol id="search" viewBox="0 0 32 32">
                    <path d="M 19.5 3 C 14.26514 3 10 7.2651394 10 12.5 C 10 14.749977 10.810825 16.807458 12.125 18.4375 L 3.28125 27.28125 L 4.71875 28.71875 L 13.5625 19.875 C 15.192542 21.189175 17.250023 22 19.5 22 C 24.73486 22 29 17.73486 29 12.5 C 29 7.2651394 24.73486 3 19.5 3 z M 19.5 5 C 23.65398 5 27 8.3460198 27 12.5 C 27 16.65398 23.65398 20 19.5 20 C 15.34602 20 12 16.65398 12 12.5 C 12 8.3460198 15.34602 5 19.5 5 z" />
                  </symbol>
                </svg>
              </div>
            </div>

            {searchresult.length > 0 ? (
              <MarketBodySearch searchresult={searchresult} />
            ) : null}
          </TabPanel>
        </div>
      </Container>
    </div>
  );
}

export default MainMarket;
