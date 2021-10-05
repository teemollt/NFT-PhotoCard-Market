import React from "react";
import "./App.css";
import Navbar from "./components/main/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./components/pages/Main";
import MyPage from "./components/pages/MyPage";
import MainMarket from "./components/pages/MainMarket";
import Gallery from "./components/pages/Gallery";
import CardPackDetail from "./components/pages/CardPackDetail";
import Footer from "./components/main/Footer";
import Service from "./components/pages/Service";
import Join from "./components/pages/Join";
import MainMarketItem from "./components/pages/MainMarketItem";
import MyPageUpdate from "./components/pages/MyPageUpdate";
import CardPackShop from "./components/pages/CardPackShop";
import GalleryBoard from "./components/pages/GalleryBoard";
import MainCeleb from "./components/pages/MainCeleb";
import MainSearchAll from "./components/pages/MainSearchAll";

declare module "axios" {
  interface AxiosRequestConfig {
    cardpackNo?: number;
    reviewContent?: string;
    salesNo?: number;
    cardpackId?: number;
    keyword?: string;
    auctionNo?: string | number;
  }
}

function App(): JSX.Element {
  if (localStorage.getItem("token")) {
  }
  let token = localStorage.getItem("token");

  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/join">
          <Join />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/searchall/:keyword">
          <MainSearchAll />
        </Route>
        {token ? (
          <div>
            <Route path="/mypage">
              <MyPage />
            </Route>
            <Route path="/market">
              <MainMarket />
            </Route>
            <Route path="/mainceleb/:no?">
              <MainCeleb />
            </Route>
            <Route path="/cardpackshop/">
              <CardPackShop />
            </Route>
            <Route path="/gallery/:pk">
              <Gallery />
            </Route>
            <Route path="/cardpackdetail/:cardpackid">
              <CardPackDetail />
            </Route>
            <Route path="/marketitem/:id">
              <MainMarketItem />
            </Route>
            <Route path="/update">
              <MyPageUpdate />
            </Route>
            <Route path="/gboard">
              <GalleryBoard />
            </Route>
          </div>
        ) : (
          <div>
            <Redirect to="/" />
          </div>
        )}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
