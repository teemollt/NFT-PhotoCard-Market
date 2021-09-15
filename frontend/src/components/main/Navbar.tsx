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
        <Link className="tablink" to="/">
          <Button>Home</Button>
        </Link>

        <Link className="tablink" to="/cardpackshop">
          <Button>Shop</Button>
        </Link>

        <Link className="tablink" to="/mainbid">
          <Button>Auction</Button>
        </Link>
        {token ? (
          <Link className="tablink" to="/gallery/id">
            <Button>Gallery</Button>
          </Link>
        ) : null}
        {token ? (
          <Link className="tablink" to="/mypage">
            <Button>My Page</Button>
          </Link>
        ) : null}
        {token ? null : (
          <Link className="tablink" to="/join">
            <Button>Join</Button>
          </Link>
        )}
        {token ? null : (
          <Button>
            <text className="tablink" to="">
              <Login />
            </text>
          </Button>
        )}
        {token ? (
          <Link className="tablink" to="">
            <Button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
            >
              logout
            </Button>
          </Link>
        ) : null}
        <Link className="tablink" to="/service/id">
          <Button>Service</Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
