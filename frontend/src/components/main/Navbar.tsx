import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from "../account/Login";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <Link to="/">
          <BottomNavigationAction label="Home" icon={<FavoriteIcon />} />
        </Link>
        <Link to="/profile">
          <BottomNavigationAction label="Home" icon={<FavoriteIcon />} />
        </Link>
        <Link to="/mainbid">
          <BottomNavigationAction label="Home" icon={<FavoriteIcon />} />
        </Link>
        <Link to="/test">
          <BottomNavigationAction label="Home" icon={<LocationOnIcon />} />
        </Link>
      </BottomNavigation>
      <Login />
    </div>
  );
}

export default Navbar;
