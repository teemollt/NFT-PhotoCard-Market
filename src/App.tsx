import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import Join from './join'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const handleToJoin = (e: any) => {
    window.location.replace("/join")
  }

  return (
    <div className="App">
      <Button variant="contained" color="primary" onClick={handleToJoin}>
        Join
      </Button>
      <Switch>
        <Route path="/join">
          <Join />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
