import { HeaderWrap } from "../layout/header/header";
import { FooterWrap } from "../layout/footer/footer";
import { TablePrice } from "./tablePrice/tablePrice";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home/home";
import { Detail } from "./detail/detail";
import { Selling } from "./selling/selling";
import { Projects } from "./projects/index";
import { Blog } from "./blogs/blogs";
import { News } from "./news/news";
import { Cart } from "./cart/cart";
import { BookingConfirm } from "./booking/bookingConfirm";
import { BookingPaymentTransfer } from "./booking/bookingPaymentTransfer";
import { BookingComplete } from "./booking/bookingComplete";
import { Introduce } from "./introduce/introduce";

export const Index = () => {
  return (
    <>
      <HeaderWrap />
      <Switch>
        <Route exact path="/gioi-thieu-du-an">
          <Introduce />
        </Route>

        <Route exact path="/chuyen-khoan-thanh-cong">
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
        <Route exact path="/tin-tuc">
          <News />
        </Route>
        <Route exact path="/du-an">
          <Projects />
        </Route>
        <Route exact path="/dang-ban">
          <Selling />
        </Route>
        <Route exact path="/bang-gia-truc-tuyen">
          <TablePrice />
        </Route>
        <Route exact path="/danh-sach-tin-tuc">
          <Blog />
        </Route>
        <Route path="/chi-tiet-du-an" component={Detail}></Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <FooterWrap />
    </>
  );
};
