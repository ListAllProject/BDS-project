import { HeaderWrap } from "../layout/header/header";
import { FooterWrap } from "../layout/footer/footer";
import { TablePrice } from "./tablePrice/tablePrice";
import { Switch, Route } from "react-router-dom";
import { Home } from "./appHome/home";
import { Detail } from "./detail/detail";
import { Selling } from "./selling/selling";
import { Projects } from "./projects/index";
import { Blog } from "./blogs/blogs";
import { BlogCategory } from "./blogs/blogsCategory";
import { News } from "./news/news";
import { Cart } from "./cart/cart";
import { BookingPaymentTransfer } from "./booking/bookingPaymentTransfer";
import { BookingComplete } from "./booking/bookingComplete";
import { Introduce } from "./introduce/introduce";

export const Index = () => {
  return (
    <>
      <Switch>
      <Route path="/v/abc-1">
            hhhhh
        </Route>
        <Route exact path="/gioi-thieu-du-an">
          <Introduce />
        </Route>

        <Route exact path="/chuyen-khoan-thanh-cong">
          <BookingComplete />
        </Route>

        <Route exact path="/xac-nhan-booking">
        </Route>
        <Route exact path="/thanh-toan-chuyen-khoan">
          <BookingPaymentTransfer />
        </Route>
        <Route exact path="/gio-hang">
          <Cart />
        </Route>
        <Route path="/tin-tuc/:url">
          <News />
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
        <Route path="/chi-tiet-du-an/:maSP" component={Detail}></Route>
      </Switch>
    </>
  );
};
