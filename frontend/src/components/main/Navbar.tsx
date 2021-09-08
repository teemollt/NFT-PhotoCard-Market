import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from "../account/login/Login";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

function Navbar(): JSX.Element {
  return (
    <div>
      <div className="navbar">
        <img
          src="https://t1.daumcdn.net/cfile/blog/2518024D5335817C22"
          alt=""
          style={{ width: "100px" }}
        />
        <br />
        <div className="breadcrumb">
          <Breadcrumbs separator=" " aria-label="breadcrumb">
            <Link className="tablink" to="/">
              Home
            </Link>
            <Link className="tablink" to="/gallery/id">
              Gallery
            </Link>
            <Link className="tablink" to="/mainbid">
              Auction
            </Link>
            <Link className="tablink" to="/mypage">
              My Page
            </Link>
            <text className="tablink" to="">
              <Login />
            </text>
            <Link className="tablink" to="/join">
              Join
            </Link>
            <Link className="tablink" to="/service/id">
              Service
            </Link>
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
