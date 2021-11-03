import { Input } from "antd";
import { useEffect, useState } from "react";
import bgrFooter from "../../assets/images/Group44.png";
import InfoAPI from "../../services/APIS/Info";
import "./footer.scss";
import ReactHtmlParser from "react-html-parser";

export const FooterWrap = () => {
  const [info, setInfo] = useState<any>({});


  useEffect(() => {
    fetchDataHeader()
  }, []);

  const fetchDataHeader = () => {
    InfoAPI.getList()
      .then((res) => {
        let result = res.data.data;
        setInfo(result[0]);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      className="container-footer"
      style={{
        backgroundImage: `url(${bgrFooter})`,
        backgroundRepeat: "repeat-x",
        backgroundPositionY: "bottom",
      }}
    >
      <div className="text-top">
        Thông tin Chính xác - Minh bạch - Đa dạng - Tiết kiệm và Đầy đủ ưu đãi
      </div>
      <div className="wrap-footer-content">
        <div className="top-content">
          <span className="title">
            {info?.intro_footer ? info?.intro_footer[0].title : ""}
          </span>
          <span className="description">
            {info?.intro_footer ? info?.intro_footer[0].sub_title : ""}
          </span>
        </div>
        <div className="div-row-space" />
        <div className="midle-content">
          <div className="ft-content-1">
            <span className="title">TRỤ SỞ CHÍNH</span>
            <div className="f-space-row"></div>
            <span className="item-infor ">
              <i
                style={{ marginRight: 8 }}
                className="fas fa-map-marker-alt"
              ></i>
              Trụ sở: {info?.locate}
            </span>
            <span className="item-infor ">
              <i style={{ marginRight: 8 }} className="fas fa-phone-alt"></i>
              {info?.phone}
            </span>
            <span className="item-infor ">
              <i style={{ marginRight: 8 }} className="fas fa-fax"></i>
              Fax: {info?.fax}
            </span>
            <span className="item-infor ">
              <i style={{ marginRight: 8 }} className="fas fa-envelope"></i>
              Email: {info?.email}
            </span>
            <span className="item-infor ">
              <i style={{ marginRight: 8 }} className="fas fa-globe"></i>
              Website: {info?.website}
            </span>
          </div>
          <div className="ft-content-1">
            <span className="title">Truy cập ngay</span>
            <div className="f-space-row"></div>
            <span className="item-infor ">
              <a href="/du-an" >Trang dự án</a>
            </span>
            <span className="item-infor ">
              <a href="/chung-cu" >Trang đang bán</a>
            </span>
            <span className="item-infor ">
              <a href="/danh-sach-tin-tuc" >Trang tin tức</a>
            </span>
            <span className="item-infor ">

              <a href="/bang-gia-truc-tuyen" >Bảng giá trực tuyến</a>
            </span>

          </div>
          <div className="ft-content-1">
            <span className="title">ĐĂNG KÝ NHẬN BẢNG TIN</span>
            <div className="f-space-row"></div>
            <span style={{ color: "#AAAAAA" }}>
              {`Hãy đăng ký để nhận những thông tin mới nhất về các sản phẩm dịch
              của ${info?.company_name}.`}
            </span>
            <Input
              style={{ marginTop: 20, backgroundColor: "#383838" }}
              placeholder="Email của bạn"
              addonAfter={<i className="fas fa-paper-plane"></i>}
            ></Input>
            <div style={{ marginTop: 20, display: "flex", color: "white" }}>
              <i style={{ marginRight: 30 }} className="fab fa-facebook-f"></i>
              <i style={{ marginRight: 30 }} className="fab fa-youtube"></i>
              <i className="fab fa-google"></i>
            </div>
          </div>
        </div>
        <div className="div-row-space" />
        <div className="bottom-content">
          <div className="text-end">
            {ReactHtmlParser(info?.copywrite)}
          </div>
        </div>
      </div>
    </div>
  );
};
