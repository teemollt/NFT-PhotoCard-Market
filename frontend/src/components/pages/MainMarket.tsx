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
    width:"800px"
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
        <MarketRegItem />
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
            <div>
              <TabPanel value={value} index={i}>
                <MarketBody celebNo={group.groupNo} />
              </TabPanel>
            </div>
          );
        })}
      </Container>
    </div>
  );
}

export default MainMarket;
