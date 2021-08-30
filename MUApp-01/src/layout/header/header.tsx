import { useEffect, useState } from "react";
import { Badge, Drawer, Dropdown, Input, Menu } from "antd";
import logo from "../../assets/images/logo.png";
import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import { DetailProject, BlogObj } from "../../services/models";
import ProjectsAPI from "../../services/APIS/Projects";
import BlogsAPI from "../../services/APIS/Blogs";
import SubMenu from "antd/lib/menu/SubMenu";

export const HeaderWrap = () => {
  const [visilbe, setVisible] = useState(false);
  const [projects, setProjects] = useState<DetailProject[]>([]);
  const [catblogs, setCatBlogs] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
    fetchDataBlog();
  }, []);

  const fetchDataBlog = () => {
    BlogsAPI.getCatBlog()
      .then((res) => {
        let result = res.data.data;
        setCatBlogs(result);
      })
      .catch((err) => console.log(err));
  };
  const fetchData = () => {
    let limit = 8;
    let page = 1;
    ProjectsAPI.getListProjects(limit, page)
      .then((res) => {
        let result = res.data.data.list_projects;
        setProjects(result);
      })
      .catch((err) => console.log(err));
  };
  const menuComponent = (
    <div className="menu-project">
      {projects.map((e, i) => {
        return (
          <Link className="span-item" to={`/gioi-thieu-du-an/${e.url}/${e.id}`}>
            {e.main_title}
          </Link>
        );
      })}
    </div>
  );
  const projectsDrawerComponent = (
    <div>
      {projects.map((e, i) => {
        return (
          <Menu.Item id={`project_${i}`} key={`project_${i}`} onClick={() => { setVisible(false); }}>
            <Link className="span-item" to={`/gioi-thieu-du-an/${e.url}/${e.id}`}>
              {e.main_title}
            </Link>
          </Menu.Item>
        );
      })}
    </div>
  );

  const menuBlogsComponent = (
    <div className="menu-project news">
      {catblogs.map((e, i) => {
        return (
          <Link className="span-item" to={"/danh-sach-tin-tuc/" + e.url}>
            {e.name}
          </Link>
        );
      })}
    </div>
  );

  const menuBlogsDrawerComponent = (
    <div>
      {catblogs.map((e, i) => {
        return (
            <Menu.Item id={`blog_${e.id}`} key={`blog_${e.id}`} onClick={() => { setVisible(false); }}>
            <Link className="span-item" to={"/danh-sach-tin-tuc/" + e.url}>
              {e.name}
            </Link>
          </Menu.Item>
        );
      })}
    </div>
  );

  const onOpenChange = (keys: React.Key[]) => {
    // setDrawerOpenKeys([keys[0].toString()])
  }
  return (
    <div className="container-header">
      <div className="logo">
        <Link to="/">
          <img alt="image3" src={logo} />
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
                pathname: "/chung-cu",
              }}
              className="item-text"
              activeClassName={"item-text-selected"}
            >
              CHUNG CƯ {/* <i   className="fas fa-caret-down"></i> */}
            </NavLink>
            <span className="item-text">
              SẮP BÁN <i className="fas fa-caret-down"></i>
            </span>
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

          <Menu mode="inline">
            <NavLink onClick={() => { setVisible(false); }}
              to={{ pathname: "/chung-cu" }}
              className="submenu-nav-link">
              CHUNG CƯ
            </NavLink>
            
            <SubMenu key="sub1" title="SẮP BÁN">
              <Menu.Item key="5">Test 1</Menu.Item>
              <Menu.Item key="6">Test 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="DỰ ÁN">
              {projectsDrawerComponent}
            </SubMenu>
            <NavLink onClick={() => { setVisible(false); }}
              to={{ pathname: "/chung-cu" }}
              className="submenu-nav-link">
              HỖ TRỢ
            </NavLink>
            <SubMenu key="sub3" title="TIN TỨC">
              {menuBlogsDrawerComponent}
            </SubMenu>
          </Menu>

          {/* <NavLink
            onClick={() => {
              setVisible(false);
            }}
            to={{
              pathname: "/chung-cu",
            }}
            className="tab-item"
          >
            CHUNG CƯ
          </NavLink>

          <span className="tab-item">SẮP BÁN</span>

          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            to={{
              pathname: "/du-an",
            }}
            className="tab-item"
          >
            DỰ ÁN
          </NavLink>

          <span className="tab-item">HỖ TRỢ</span>

          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            to={{
              pathname: "/danh-sach-tin-tuc",
            }}
            className="tab-item"
          >
            TIN TỨC
          </NavLink> */}

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
              setVisible(false);
            }}
            style={{ color: "#011769" }}
            className="tab-item"
            to="/login"
          >
            <i style={{ width: 27 }} className="fal fa-sign-in-alt"></i>
            ĐĂNG NHẬP
          </Link>
        </div>
      </Drawer>
    </div>
  );
};
