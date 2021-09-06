import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from "../account/Login";
// import MonochromePhotosIcon from "@material-ui/icons/MonochromePhotos";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        {/* <h1 onClick={() => {}}>
          D<MonochromePhotosIcon fontSize="large" />
          102
        </h1> */}
        <img
          src="https://ww.namu.la/s/01f84f9924cdf39c9716c039ff6426f31d67be236c969a5dfce6d4583833412927683220ab36b5dc6b6925beeb7832c00794d24658b1a59a22f37c1b89c4f3e5b219df1cdca77ba16eef87ab3d15df0fc26775127ca3f661c74476cdbcadd54b"
          alt=""
          style={{ width: "100px" }}
        />
        <br />
        <Link className="tablink" to="/">
          Home
        </Link>
        <Link className="tablink" to="/mainbid">
          Auction
        </Link>
        <Link className="tablink" to="/profile/1">
          Profile
        </Link>
        <Link className="tablink" to="/test">
          page2
        </Link>
        <Link className="tablink" to="/gallery/1">
          Gallery
        </Link>
        <Login />
      </div>
    </div>
  );
}

export default Navbar;
