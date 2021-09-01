import React from "react";
import Navbar from "./components/basic/Navbar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Main from "./Main";
import MainBid from "./MainBid";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
