import "./App.scss";
import "./assets/fontawesome-pro-5.13.0-web/css/all.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Forgotpassw } from "./page/authentication/forgotpassw/forgotpassw";
import { Login } from "./page/authentication/login/login";
import { Register } from "./page/authentication/register/register";
import { FooterWrap } from "./layout/footer/footer";
import { HeaderWrap } from "./layout/header/header";
import { Blog } from "./page/blogs/blogs";
import { BookingComplete } from "./page/booking/bookingComplete";
import { BookingConfirm } from "./page/booking/bookingConfirm";
import { BookingPaymentTransfer } from "./page/booking/bookingPaymentTransfer";
import { Cart } from "./page/cart/cart";
import { Detail } from "./page/detail/detail";
import { Home } from "./page/appHome/home";
import { Introduce } from "./page/introduce/introduce";
import { News } from "./page/news/news";
import { Projects } from "./page/projects";
import { Selling } from "./page/selling/selling";
import { TablePrice } from "./page/tablePrice/tablePrice";
import { useEffect } from "react";
import { BlogCategory } from "./page/blogs/blogsCategory";

function App() {

  return (
    <Router>
      <HeaderWrap />

      <Switch>
        <Route path="/forget-password">
          <Forgotpassw />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/gioi-thieu-du-an/:url/:id">
          <Introduce />
        </Route>
        <Route exact path="/booking-complete">
          <BookingComplete />
        </Route>
        <Route exact path="/xac-nhan-booking">
          <BookingConfirm />
        </Route>
        <Route exact path="/thanh-toan-chuyen-khoan">
          <BookingPaymentTransfer />
        </Route>
        <Route exact path="/gio-hang">
          <Cart />
        </Route>
        <Route path="/tin-tuc/:url" component={News}>
        </Route>
        <Route exact path="/du-an">
          <Projects />
        </Route>
        <Route exact path="/chung-cu">
          <Selling />
        </Route>
        <Route exact path="/bang-gia-truc-tuyen">
          <TablePrice />
        </Route>
        <Route exact path="/danh-sach-tin-tuc">
          <Blog />
        </Route>
        <Route exact path="/danh-sach-tin-tuc/:url">
          <BlogCategory />
        </Route>
        <Route path="/chi-tiet-du-an" component={Detail}></Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <FooterWrap />
    </Router>
  );
}

export default App;
