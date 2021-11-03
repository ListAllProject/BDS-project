import { useEffect, useState } from "react";
import { Badge, Drawer, Dropdown, Input, Menu, Tooltip } from "antd";
import logo from "../../assets/images/logo.png";
import "./header.scss";
import { Link, NavLink, useHistory } from "react-router-dom";
import { DetailProject, BlogObj } from "../../services/models";
import ProjectsAPI from "../../services/APIS/Projects";
import BlogsAPI from "../../services/APIS/Blogs";
import InfoAPI from "../../services/APIS/Info";
import SubMenu from "antd/lib/menu/SubMenu";
import { bds } from "services/store";
import UserAPI from "services/APIBEELAND/User";

export const HeaderWrap = () => {
  const history = useHistory();

  const [visilbe, setVisible] = useState(false);
  const [projects, setProjects] = useState<DetailProject[]>([]);
  const [catblogs, setCatBlogs] = useState<any[]>([]);
  const [info, setInfo] = useState<any>({});

  const [token, setToken] = useState<string | null>("");
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    fetchData();
    fetchDataBlog();
    fetchDataHeader()
  }, []);

  useEffect(() => {
    UserAPI.currentUser().then((rs) => {
      if (rs.data.status === 2000) {
        setUser(rs.data.data.HoTen);
      }
    });
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);


  const fetchDataBlog = () => {
    BlogsAPI.getCatBlog()
      .then((res) => {
        let result = res.data.data;
        setCatBlogs(result);
      })
      .catch((err) => console.log(err));
  };
  const fetchDataHeader = () => {
    InfoAPI.getList()
      .then((res) => {
        let result = res.data.data;
        setInfo(result[0]);
      })
      .catch((err) => console.log(err));
  };
  const fetchData = () => {
    let limit = 8;
    let page = 1;
    ProjectsAPI.getListProjects({})
      .then((res) => {
        let result = res.data.data;
        setProjects(result);
      })
      .catch((err) => console.log(err));
  };
  const menuComponent = (
    <div className="menu-project">
      {projects.map((e, i) => {
        return (
          <Link
            className="span-item"
            key={e.MaDA}
            to={`/gioi-thieu-du-an/${e.MaDA}`}
          >
            {e.TenDA}
          </Link>
        );
      })}
    </div>
  );
  const projectsDrawerComponent = (
    <>
      {projects.map((e, i) => {
        return (
          <Menu.Item
            id={`project_${i}`}
            key={`project_${i}`}
            onClick={() => {
              setVisible(false);
            }}
          >
            <Link
              className="span-item"
              to={`/gioi-thieu-du-an/${e.MaDA}`}
            >
              {e.TenDA}
            </Link>
          </Menu.Item>
        );
      })}
    </>
  );

  const menuBlogsComponent = (
    <div className="menu-project news">
      {catblogs.map((e, i) => {
        return (
          <Link
            key={i}
            className="span-item"
            to={"/danh-sach-tin-tuc/" + e.MaLoai}
          >
            {e.TenLoai}
          </Link>
        );
      })}
    </div>
  );

  const menuBlogsDrawerComponent = (
    <>
      {catblogs.map((e, i) => {
        return (
          <Menu.Item
            id={`blog_${e.MaLoai}`}
            key={`blog_${e.MaLoai}`}
            onClick={() => {
              setVisible(false);
            }}
          >
            <Link className="span-item" to={"/danh-sach-tin-tuc/" + e.MaLoai}>
              {e.TenLoai}
            </Link>
          </Menu.Item>
        );
      })}
    </>
  );

  const menuUser = () => {
    return (
      <Menu>
        <Menu.Item
          onClick={() => {
            setVisible(false);
            history.push("/v/danh-sach-giao-dich");
          }}
        >
          Danh sách giao dịch
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <div className="container-header">
      <div className="logo">
        <Link to="/">
          <img width="40" style={{maxWidth:"70px"}} alt="image" src={info?.logo} />
        </Link>
      </div>
      <div className="wrap-right">
        <div className="top-header">
          <div className="box-tooltip">
            <span className="tooltip">Nhập SĐT nhận ưu đãi</span>
            <Input
              addonAfter="NHẬP"
              style={{ maxWidth: "300px" }}
              placeholder="Nhập SĐT nhận ưu đãi"
            ></Input>
          </div>
          <span
            style={{
              margin: "0px 15px",
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
          <a
            href={`tel:${info?.phone}`}
            style={{
              color: "#BE9355",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
          >
            <i style={{ color: "#011769" }} className="fad fa-phone-volume"></i>{" "}
            {info?.phone}
          </a>
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
                pathname: "/chung-cu",
              }}
              className="item-text"
              activeClassName={"item-text-selected"}
            >
              ĐANG BÁN {/* <i   className="fas fa-caret-down"></i> */}
            </NavLink>
            <Dropdown overlay={menuComponent}>
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

            <Dropdown overlay={menuBlogsComponent}>
              <NavLink
                to={{
                  pathname: "/danh-sach-tin-tuc",
                }}
                className="item-text"
                activeClassName={"item-text-selected"}
              >
                TIN TỨC <i className="fas fa-caret-down  icon-prj"></i>
              </NavLink>
            </Dropdown>
          </div>

          <div className="right">
            <div className="wrap-right-content">
              <Link to="/bang-gia-truc-tuyen">
                <h3>BẢNG GIÁ TRỰC TUYẾN</h3>
              </Link>
              {!token && (
                <div>
                  {" "}
                  <Link
                    style={{ color: "#011769" }}
                    className="item-text"
                    to="/register"
                  >
                    ĐĂNG KÝ
                  </Link>
                  <span className="div-col-space"></span>
                  <Link
                    onClick={() =>
                      localStorage.setItem("pathname", window.location.pathname)
                    }
                    style={{ color: "#011769" }}
                    className="item-text"
                    to="/login"
                  >
                    ĐĂNG NHẬP
                  </Link>
                </div>
              )}
            </div>

            {token && (
              <div>
                <span className="name-user">
                  {user ? (
                    <Dropdown
                      overlay={menuUser}
                      trigger={["hover"]}
                      placement="bottomCenter"
                      arrow
                    >
                      <span>{user}</span>
                    </Dropdown>
                  ) : (
                    <i className="fas fa-spinner fa-pulse"></i>
                  )}
                </span>
                <Tooltip placement="bottom" title={"Logout"}>
                  <span
                    onClick={() => {
                      window.location.href = "/login";
                      localStorage.removeItem("pathname");
                      localStorage.removeItem("token");
                    }}
                    style={{
                      padding: "0px 2px",
                      fontSize: 16,
                      cursor: "pointer",
                      margin: "0px 5px",
                    }}
                  >
                    <i className="fal fa-sign-out-alt"></i>
                  </span>
                </Tooltip>
              </div>
            )}
          </div>
        </div>
      </div>

      <Drawer
        title={
          <div>
            <Link to="/">
              <img alt="image2" width="40" src={info?.logo} />
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
          <Menu mode="inline">
            <Menu.Item key="chungcu">
              <NavLink
                onClick={() => {
                  setVisible(false);
                }}
                to={{ pathname: "/chung-cu" }}
              >
                ĐANG BÁN
              </NavLink>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title="DỰ ÁN"
              onTitleClick={() => {
                setVisible(false);
                history.push("/du-an");
              }}
            >
              {projectsDrawerComponent}
            </SubMenu>
            <SubMenu
              onTitleClick={() => {
                setVisible(false);
                history.push("/danh-sach-tin-tuc");
              }}
              key="sub3"
              title="TIN TỨC"
            >
              {menuBlogsDrawerComponent}
            </SubMenu>
          </Menu>

          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="tab-item"
            to="/bang-gia-truc-tuyen"
          >
            <h3>BẢNG GIÁ TRỰC TUYẾN</h3>
          </NavLink>

          <span className="div-col-space-drawer"></span>
          {!token && (
            <>
              <Link
                to="/register"
                onClick={() => {
                  setVisible(false);
                }}
                style={{ color: "#011769" }}
                className="tab-item"
              >
                <i style={{ width: 27 }} className="fal fa-user-plus"></i>
                ĐĂNG KÝ
              </Link>
              <Link
                onClick={() => {
                  localStorage.setItem("pathname", window.location.pathname);
                  setVisible(false);
                }}
                style={{ color: "#011769" }}
                className="tab-item"
                to="/login"
              >
                <i style={{ width: 27 }} className="fal fa-sign-in-alt"></i>
                ĐĂNG NHẬP
              </Link>
            </>
          )}
        </div>
      </Drawer>
    </div>
  );
};
