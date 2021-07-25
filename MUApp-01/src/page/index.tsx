import React from "react";
import { Carousel, Input, Layout } from "antd";
import { HeaderWrap } from "../layout/header/header";
import { FooterWrap } from "../layout/footer/footer";
import { TablePrice } from "./tablePrice/tablePrice";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./home/home";
import { Detail } from "./detail/detail";
import { Selling } from "./selling/selling";
import { Projects } from "./projects";

export const Index = () => {
  return (
    <>
      <HeaderWrap />
      <Switch>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/selling">
          <Selling />
        </Route>
        <Route exact path="/table-price">
          <TablePrice />
        </Route>
        <Route path="/product-detail" component={Detail}></Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <FooterWrap />
    </>
  );
};
