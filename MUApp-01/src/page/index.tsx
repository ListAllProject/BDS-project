import React from "react";
import { Carousel, Input, Layout } from "antd";
import { HeaderWrap } from "../layout/header/header";
import { FooterWrap } from "../layout/footer/footer";
import { TablePrice } from "./tablePrice/tablePrice";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./home/home";

export const Index = () => {
  return (
    <>
      <HeaderWrap />
      <Router>
        <Switch>
          <Route exact path="/table-price">
            <TablePrice />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <FooterWrap />
    </>
  );
};
