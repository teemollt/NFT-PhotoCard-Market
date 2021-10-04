import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import Login from "../account/login/Login";
import Button from "@material-ui/core/Button";
import axios from "axios";

function Navbar(): JSX.Element {
  const [pk, setPk] = useState<number>();

  let history = useHistory();
  let token: string | null = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("/api/member/mypage", {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          setPk(res.data.mypage.memberNo);
        });
    }
  }, []);

  const handleToGallery = (pk: number | undefined) => {
    history.push({
      pathname: `/gallery/${pk}`,
      state: { pk: pk },
    });
  };

  return (
    <div>
      <div className="navbar">
        <img src="/image/thefanlogo2.png" alt="" style={{ width: "200px" }} />
      </div>
      <br />
      <div className="breadcrumbs">
        <Link className="tablink" to="/">
          <Button>Home</Button>
        </Link>
        {token ? (
          <Link className="tablink" to="/cardpackshop">
            <Button>Shop</Button>
          </Link>
        ) : null}
        {token ? (
          <Link className="tablink" to="/market">
            <Button>Market</Button>
          </Link>
        ) : null}
        {token ? (
          <Button className="navGallery" onClick={() => handleToGallery(pk)}>
            Gallery
          </Button>
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
