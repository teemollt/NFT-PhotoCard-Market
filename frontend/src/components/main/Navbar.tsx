import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from "../account/login/Login";
import Button from "@material-ui/core/Button";
function Navbar(): JSX.Element {
  let token: string | null = localStorage.getItem("token");
  return (
    <div>
      <div className="navbar">
        <img
          src="https://t1.daumcdn.net/cfile/blog/2518024D5335817C22"
          alt=""
          style={{ width: "100px" }}
        />
      </div>
      <br />
      <div className="breadcrumbs">
        <Button>
          <Link className="tablink" to="/">
            Home
          </Link>
        </Button>
        <Button>
          <Link className="tablink" to="/cardpackshop">
            Shop
          </Link>
        </Button>
        <Button>
          <Link className="tablink" to="/mainbid">
            Auction
          </Link>
        </Button>
        {token ? (
          <Button>
            <Link className="tablink" to="/gallery/id">
              Gallery
            </Link>
          </Button>
        ) : null}
        {token ? (
          <Button>
            <Link className="tablink" to="/mypage">
              My Page
            </Link>
          </Button>
        ) : null}
        {token ? null : (
          <Button>
            <Link className="tablink" to="/join">
              Join
            </Link>
          </Button>
        )}
        {token ? null : (
          <Button>
            <text className="tablink" to="">
              <Login />
            </text>
          </Button>
        )}
        {token ? (
          <Button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            <Link className="tablink" to="">
              logout
            </Link>
          </Button>
        ) : null}
        <Button>
          <Link className="tablink" to="/service/id">
            Service
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
