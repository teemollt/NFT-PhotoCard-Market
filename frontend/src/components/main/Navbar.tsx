import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from "../account/login/Login";
import Button from "@material-ui/core/Button";
import axios from "axios";

function Navbar(): JSX.Element {
  const [nick, setNick] = useState<string>();

  let token: string | null = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("/api/member/mypage", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setNick(res.data.mypage.memberNick);
        localStorage.setItem("pk", res.data.mypage.memberNo);
      });
  }, []);

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

        <Link className="tablink" to="/market">
          <Button>Market</Button>
        </Link>
        {token ? (
          <Link className="tablink" to={"/gallery/" + nick}>
            <Button>Gallery</Button>
          </Link>
        ) : null}
        {token ? (
          <Link className="tablink" to="/gboard">
            <Button>Board</Button>
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
                window.location.replace("/");
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
