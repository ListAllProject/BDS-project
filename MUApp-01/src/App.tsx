import { Skeleton } from "antd";
import ScrollToTop from "components/ScrollToTop";
import { Booking } from "page/booking/booking";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import "./App.scss";
import "./assets/fontawesome-pro-5.13.0-web/css/all.min.css";
import MyContext from "./components/myContext";
import { FooterWrap } from "./layout/footer/footer";
import { HeaderWrap } from "./layout/header/header";
import { Home } from "./page/appHome/home";
import { Forgotpassw } from "./page/authentication/forgotpassw/forgotpassw";
import { Login } from "./page/authentication/login/login";
import { Register } from "./page/authentication/register/register";
import { VerifyEmail } from "./page/authentication/verifyEmail/verifyEmail";
import { Blog } from "./page/blogs/blogs";
import { BlogCategory } from "./page/blogs/blogsCategory";
import { Cart } from "./page/cart/cart";
import { Detail } from "./page/detail/detail";
import { Introduce } from "./page/introduce/introduce";
import { News } from "./page/news/news";
import { Projects } from "./page/projects";
import { Selling } from "./page/selling/selling";
import { TablePrice } from "./page/tablePrice/tablePrice";
import { bds } from "./services/store";
import { ListTransfer } from "page/listTransfer/listTransfer";
import { ConfirmPassword } from "page/authentication/forgotpassw/changePassword";

// import { Index } from "./page";

const AuthorizeApp = () => {
  const history = useHistory();

  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    bds
      .authorize()
      .then(() => {
        setUser(bds.store.user);
      })
      .catch((err) => {
        if (err.message === "401") {
          localStorage.setItem("pathname", window.location.pathname);
          history.push("/login");
        }
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  if (!loaded) {
    return (
      <div>
        <Skeleton active />
      </div>
    );
  } else {
    return (
      <MyContext.Provider value={user}>
        <Switch>
          <Route path="/v/gio-hang">
            <Cart />
          </Route>
          <Route path="/v/booking/:maSP">
            <Booking />
          </Route>
          <Route path="/v/danh-sach-giao-dich">
          <ListTransfer />
          </Route>  
        </Switch>
      </MyContext.Provider>
    );
  }
};
function App() {
  return (
    <Router>
      <HeaderWrap />

      <ScrollToTop />
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
        <Route path="/Account/ConfimForgotPassword">
          <ConfirmPassword />
        </Route>
        <Route exact path="/gioi-thieu-du-an/:url/:id">
          <Introduce />
        </Route>
        <Route path="/tin-tuc/:url" component={News}></Route>
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
        <Route exact path="/xac-nhan-email">
          <VerifyEmail />
        </Route>
        <Route path="/chi-tiet-du-an/:maSP" component={Detail}></Route>
        <Route path="/v">
          <AuthorizeApp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <FooterWrap />
    </Router>
  );
}

export default App;
