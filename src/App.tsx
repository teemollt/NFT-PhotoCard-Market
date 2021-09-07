import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import Join from './join';
import Mypage from './mypage';
import Gallery from './gallery';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const handleToJoin = (e: any) => {
    window.location.replace("/join")
  }

  const handleToMypage = (e: any) => {
    window.location.replace("/mypage")
  }

  const handleToGallery = (e: any) => {
    window.location.replace("/my-gallery")
  }

  return (
    <div className="App">
      <Button variant="contained" color="primary" onClick={handleToJoin}>
        Join
      </Button>
      <Button variant="contained" color="primary" onClick={handleToMypage} style={{ marginLeft:"10px" }}>
        Mypage
      </Button>
      <Button variant="contained" color="primary" onClick={handleToGallery} style={{ marginLeft:"10px" }}>
        GALLERY
      </Button>
      <Switch>
        <Route path="/join">
          <Join />
        </Route>
        <Route path="/mypage">
          <Mypage />
        </Route>
        <Route path="/my-gallery">
          <Gallery />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
