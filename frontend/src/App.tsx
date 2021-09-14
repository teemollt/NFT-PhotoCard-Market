import React from "react";
import Navbar from "./components/main/Navbar";
import { Route, Switch } from "react-router-dom";
import Main from "./components/pages/Main";
import MyPage from "./components/pages/MyPage";
import MainBid from "./components/pages/MainAuction";
import Gallery from "./components/pages/Gallery";
import CardPackDetail from "./components/pages/CardPackDetail";
import Footer from "./components/main/Footer";
import Service from "./components/pages/Service";
import Join from "./components/pages/Join";
import BidItem from "./components/pages/BidItem";
import MyPageUpdate from "./components/pages/MyPageUpdate";
import CardPackShop from "./components/pages/CardPackShop";

function App(): JSX.Element {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/mypage">
          <MyPage />
        </Route>
        <Route path="/mainbid/:tag?">
          <MainBid />
        </Route>
        <Route path="/cardpackshop/">
          <CardPackShop/>
        </Route>
        <Route path="/gallery/:id">
          <Gallery />
        </Route>
        <Route path="/cardpackdetail/:cardpackid">
          <CardPackDetail />
        </Route>
        <Route path="/service/:id">
          <Service />
        </Route>
        <Route path="/join">
          <Join />
        </Route>
        <Route path="/biditem/:id">
          <BidItem />
        </Route>
        <Route path="/update">
          <MyPageUpdate />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
