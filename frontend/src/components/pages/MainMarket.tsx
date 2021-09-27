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
        setsearchresult(res.data.cardList);
        console.log(res.data.cardList);
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
            <div>
              <TabPanel value={value} index={i + 1}>
                <MarketBody celebNo={group.groupNo} />
              </TabPanel>
            </div>
          );
        })}
        <div>
          <TabPanel value={value} index={searchnumber + 1}>
            <div className="mainmaerketcontainer">
              <div className="finder">
                <div className="finder__outer">
                  <div className="finder__inner">
                    <input
                      className="finder__input"
                      type="text"
                      name="q"
                      placeholder="검색어를 입력해주세요"
                      onChange={(e) => {
                        console.log(e.target.value);
                        setsearch(e.target.value);
                      }}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          searchitem(search);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {searchresult.length > 0 ? (
              <MarketBodySearch searchresult={searchresult} />
            ) : (
              <div>검색을 해주세요</div>
            )}
          </TabPanel>
        </div>
      </Container>
    </div>
  );
}

export default MainMarket;
