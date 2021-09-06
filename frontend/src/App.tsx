import React from "react";
import Navbar from "./components/main/Navbar";
import { Route, Switch } from "react-router-dom";
import Main from "./components/pages/Main";
import Profile from "./components/pages/Profile";
import MainBid from "./components/pages/MainBid";
import MainCeleb from "./components/pages/MainCeleb";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/profile/:id" >
          <Profile />
        </Route>
        <Route path="/mainceleb/:celeb" >
          <MainCeleb />
        </Route>
        <Route path="/mainbid" >
          <MainBid />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
