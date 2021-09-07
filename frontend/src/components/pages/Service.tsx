import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import SiteIntroduction from "../service/SiteIntroduction";
import Inquiry from "../service/InquiryList";
import ServiceIntroduction from "../service/ServiceIntroduction";
import ServiceContact from "../service/ServiceContact";

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
  tabs: {
    // borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function Service(): JSX.Element {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Container>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          centered
        >
          <Tab label="Introduction" {...a11yProps(0)} />
          <Tab label="Service" {...a11yProps(1)} />
          <Tab label="1:1 inquiry" {...a11yProps(2)} />
          <Tab label="Contact" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <SiteIntroduction />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ServiceIntroduction />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Inquiry />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ServiceContact />
        </TabPanel>
      </Container>
    </div>
  );
}

export default Service;
