import React from "react";
import Navbar from "./components/basic/Navbar";
import { Route, Switch } from "react-router";
import Main from "./Main";
import MainBid from "./MainBid";

function App() {
  return (
    <div>
        <Navbar />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/bidmarket">
          <MainBid />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
