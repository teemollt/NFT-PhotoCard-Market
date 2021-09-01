import React from "react";
import Navbar from "./components/main/Navbar";
import { Route, Switch } from "react-router-dom";
import Main from "./components/page/Main";
import Profile from "./components/page/Profile";
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
