import { useState } from "react";
import { Badge, Drawer, Dropdown, Input } from "antd";
import logo from "../../assets/images/logo.png";
import "./header.scss";
import { Link, NavLink } from "react-router-dom";

export const HeaderWrap = () => {
  const [visilbe, setVisible] = useState(false);

  const menu = (
    <div className="menu-project">
      <span className="span-item">
      Vinhomes Ocean Park
      </span>
      <div className="div-space-menu-prj"></div>
      <span  className="span-item">
      Vinhomes Smart City
      </span>
    </div>
  );

  return (
    <div className="container-header">
      <div className="logo">
        <Link to="/">
          <img alt="image3" src={logo} />
        </Link>
      </div>
      <div className="wrap-right">
        <div className="top-header">
          <Input
            addonAfter="NHẬP"
            style={{ maxWidth: "300px" }}
            placeholder="Nhập SĐT nhận ưu đãi"
          ></Input>
          <span
            style={{
              margin: "0px 20px",
              minWidth: 60,
              color: "#BE9355",
              whiteSpace: "nowrap",
            }}
          >
            {" "}
            <i
              style={{ color: "#011769" }}
              className="fad fa-comment-alt-lines"
            ></i>{" "}
            Tư vấn
          </span>
          <span
            style={{
              color: "#BE9355",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
          >
            <i style={{ color: "#011769" }} className="fad fa-phone-volume"></i>{" "}
            0123 456 787
          </span>
        </div>
        <div className="div-row-space"></div>
        <div className="bottom-header">
          <span
            onClick={() => {
              setVisible(!visilbe);
            }}
            className="btn-menu-header"
          >
            <i
              style={{ fontWeight: 600, fontSize: 26, cursor: "pointer" }}
              className="fal fa-bars"
            ></i>
          </span>

          <div className="left">
            <Link to="/">
              <span style={{ color: "#BE9355", marginRight: 5, fontSize: 16 }}>
                <i className="fal fa-home"></i>
              </span>
            </Link>

            <NavLink
              to={{
                pathname: "/dang-ban",
              }}
              className="item-text"
              activeClassName={"item-text-selected"}
            >
              ĐANG BÁN {/* <i   className="fas fa-caret-down"></i> */}
            </NavLink>
            <span className="item-text">
              SẮP BÁN <i className="fas fa-caret-down"></i>
            </span>
            <Dropdown overlay={menu}>
              <NavLink
                to={{
                  pathname: "/du-an",
                }}
                className="item-text"
                activeClassName={"item-text-selected"}
              >
                DỰ ÁN <i className="fas fa-caret-down  icon-prj"></i>
              </NavLink>
            </Dropdown>

            <span className="item-text">
              HỖ TRỢ <i className="fas fa-caret-down"></i>
            </span>

            <NavLink
              to={{
                pathname: "/danh-sach-tin-tuc",
              }}
              className="item-text"
              activeClassName={"item-text-selected"}
            >
              TIN TỨC
              {/* <i   className="fas fa-caret-down"></i> */}
            </NavLink>
          </div>

          <div className="right">
            <div className="wrap-right-content">
              <Link to="/bang-gia-truc-tuyen">
                <h3>BẢNG GIÁ TRỰC TUYẾN</h3>
              </Link>
              <Link
                style={{ color: "#011769" }}
                className="item-text"
                to="/register"
              >
                ĐĂNG KÝ
              </Link>
              <span className="div-col-space"></span>
              <Link
                style={{ color: "#011769" }}
                className="item-text"
                to="/login"
              >
                ĐĂNG NHẬP
              </Link>
            </div>

            <span
              style={{
                padding: "0px 2px",
                fontSize: 16,
                cursor: "pointer",
                margin: "0px 5px",
              }}
            >
              <i className="fal fa-user-circle"></i>
            </span>
            <Link to="/gio-hang">
              <span style={{ padding: "0px 5px " }}>
                <Badge
                  style={{
                    backgroundColor: "white",
                    color: "#BE9355",
                    border: " 1px solid #011769 ",
                  }}
                  count={2}
                  size="small"
                >
                  <i
                    style={{ color: "#011769" }}
                    className="fal fa-shopping-cart"
                  ></i>
                </Badge>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Drawer
        title={
          <div>
            <Link to="/">
              <img alt="image2" src={logo} />
            </Link>
          </div>
        }
        placement="left"
        onClose={() => {
          setVisible(false);
        }}
        visible={visilbe}
        className="container-drawer"
      >
        <div className="wrap-contentdrawer">
          {/* <Link to="/">
                <span
                  style={{ color: "#BE9355", marginRight: 5, fontSize: 16 }}
                >
                  <i className="fal fa-home"></i>
                </span>
              </Link> */}

          <NavLink
            to={{
              pathname: "/dang-ban",
            }}
            className="tab-item"
          >
            ĐANG BÁN {/* <i   className="fas fa-caret-down"></i> */}
          </NavLink>

          <span className="tab-item">SẮP BÁN</span>

          <NavLink
            to={{
              pathname: "/du-an",
            }}
            className="tab-item"
          >
            DỰ ÁN
          </NavLink>

          <span className="tab-item">HỖ TRỢ</span>

          <NavLink
            to={{
              pathname: "/danh-sach-tin-tuc",
            }}
            className="tab-item"
          >
            TIN TỨC
          </NavLink>

          <NavLink className="tab-item" to="/bang-gia-truc-tuyen">
            <h3>BẢNG GIÁ TRỰC TUYẾN</h3>
          </NavLink>

          <span className="div-col-space-drawer"></span>

          <span className="tab-item">
            <Link
              style={{ color: "#011769" }}
              className="item-text"
              to="/register"
            >
              <i style={{ width: 27 }} className="fal fa-user-plus"></i>
              ĐĂNG KÝ
            </Link>
          </span>
          <span className="tab-item">
            <Link
              style={{ color: "#011769" }}
              className="item-text"
              to="/login"
            >
              <i style={{ width: 27 }} className="fal fa-sign-in-alt"></i>
              ĐĂNG NHẬP
            </Link>
          </span>
        </div>
      </Drawer>
    </div>
  );
};
