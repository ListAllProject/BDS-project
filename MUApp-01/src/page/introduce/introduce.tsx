// import React from "react";
import banner from "../../assets/images/banner-introduce1.png";
// import iconIntroduce from "../../assets/images/icon-introduce.png";
import iconTextTop from "../../assets/images/icon-text-top.png";
import imgMap from "../../assets/images/image-map.png";
import iconHome from "../../assets/images/icon-home-introduce.png";
import vector5 from "../../assets/images/Vector5.png";
import num1 from "../../assets/images/num1.png";
import num2 from "../../assets/images/num2.png";
import reason1 from "../../assets/images/reason1.png";
import reason2 from "../../assets/images/reason2.png";

import libaryBig from "../../assets/images/libary-big.png";
import libarySmall1 from "../../assets/images/libary-small1.png";
import libarySmall2 from "../../assets/images/libary-small2.png";
import libarySmall3 from "../../assets/images/libary-small3.png";
import libarySmall4 from "../../assets/images/libary-small4.png";

import oderPrj1 from "../../assets/images/oder-prj-1.png";
import oderPrj2 from "../../assets/images/oder-prj-2.png";
import oderPrj3 from "../../assets/images/oder-prj-3.png";

import "./introduce.scss";
import CustomSlider from "../../components/slider/slider";
import { Seperate } from "../../components/seperate/seperate";

const settings = {
  infinite: true,
};

export const Introduce = () => {
  const imageList: JSX.Element[] = [
    <img src={banner} alt="Room 01" />,
    <img src={banner} alt="Room 01" />,
    <img src={banner} alt="Room 01" />,
    <img src={banner} alt="Room 01" />,
    <img src={banner} alt="Room 01" />,
  ];
  return (
    <div className="container-introduce">
      <div className="wrap-content-banner">
        <CustomSlider
          classNextArrow="fal fa-chevron-right next-arrow"
          components={imageList}
          classPreviousArrow="fal fa-chevron-left previous-arrow"
          showNum={0}
          settings={settings}
        ></CustomSlider>
        {/* <div className="icon-introduce">
          <img src={iconIntroduce} alt="imageicon" />
          <br />
          <div className="text-title-top">GIỚI THIỆU DỰ ÁN</div>
        </div>
        <div className="khampha">
          <span className="text-kp">KHÁM PHÁ</span>
        </div> */}
      </div>

      <div className="wrap-content-introduce">
        <div className="text-top">
          Không chỉ là một Đại đô thị đẳng cấp quốc tế, Vinhomes Ocean Park kiến
          tạo nên một Thành phố mới với Thiên nhiên – Cuộc sống và Con người với
          một diện mạo mới mẻ và tinh thần hứng khởi, sẵn sàng cho những trải
          nghiệm tưởng không thể mà lại là có thể.
        </div>
        <div className="iconTextTop">
          <span>
            <img alt="img-icon1" src={iconTextTop} />
          </span>
          <div className="space-div-icon"></div>
        </div>
        <div className="text-vinhomes-ocean-park">VINHOMES OCEAN PARK</div>
        <div className="text-noibiennhung">
          NƠI BIẾN NHỮNG ĐIỀU KHÔNG THỂ THÀNH CÓ THỂ
        </div>
        <div style={{ width: "100%", height: "4px" }}>
          <Seperate widthPar={350} widthChil={80} style={{ marginTop: 16 }} />
        </div>
        <div className="container-map-content">
          <div className="wrap-map">
            <img style={{ width: "100%" }} alt="image111" src={imgMap} />
          </div>
          <div className="wrap-right-content">
            <div className="top-text">THÀNH PHỐ BIỂN HỒ TRONG LÒNG HÀ NỘI</div>
            <div className="middle-text">
              Nơi liền kề phố phường sôi động là xanh ngát đại dương. Nơi giữa
              nội đô là cận biển kề hồ, là góc bể chân mây. Nơi chỉ một bước là
              thư thái vùi chân dưới làn cát mịn và cũng chỉ một bước là thỏa
              sức reo vui với nhịp sống năng động từng ngày.
            </div>
            <div className="bottom-content">
              <div className="wrap-bottom">
                <span>
                  <img alt="icon1" src={iconHome} />
                </span>
                <span style={{ fontWeight: 600 }}>Quy mô</span>
                <span
                  style={{
                    color: "rgba(190, 147, 85, 1)",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  420ha
                </span>
              </div>

              <div className="wrap-bottom">
                <span>
                  <img alt="icon2" src={vector5} />
                </span>

                <span style={{ fontWeight: 600 }}>Mật độ xây dựng</span>
                <span
                  style={{
                    color: "rgba(190, 147, 85, 1)",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  Gần 19%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* make by An */}
      <div className="reasons-container">
        <div className="wrap-reasons-container">
          <div className="title-container">
            <p className="small-title">8 LÝ DO LỰA CHỌN</p>
            <p className="big-title">THÀNH PHỐ BIỂN HỒ VINHOMES OCEAN PARK</p>
            <Seperate widthPar={350} widthChil={80} />
          </div>
          <div
            className="reason-item-container"
            style={{ flexDirection: "row-reverse" }}
          >
            <div className="wrap-image">
              <img alt="img1" src={reason1} className="big_img" />
            </div>
            <div className="content">
              <div>
                <img alt="img2" src={num1} className="small_img" />
              </div>

              <div className="content_title">
                VỊ TRÍ CỬA NGÕ SÔI ĐỘNG PHÍA ĐÔNG BẮC THỦ ĐÔ
              </div>
              <div className="content_small_content">
                Vinhomes Ocean Park tọa lạc tại giao điểm vàng của Gia Lâm, nơi
                đang được đầu tư trọng điểm về cơ sở hạ tầng giao thông để trở
                thành trung tâm mới của Thủ đô.
              </div>
            </div>
          </div>
          <div
            className="reason-item-container"
            style={{ flexDirection: "row" }}
          >
            <div className="wrap-image">
              <img alt="img4" src={reason2} className="big_img" />
            </div>
            <div className="content">
              <div>
                <img alt="img3" src={num2} className="small_img" />
              </div>
              <div className="content_title">
                BIỂN HỒ NƯỚC MẶN 6,1 HA ĐẦU TIÊN TẠI VIỆT NAM
              </div>
              <div className="content_small_content">
                Với công trình biển hồ nước mặn 6,1 ha đầu tiên tại Việt Nam,
                Vinhomes Ocean Park đã chính thức hiện thực hóa giấc mơ “tắm
                biển ngay dưới chân nhà mình” cho mỗi cư dân – Điều tưởng chừng
                như không thể, giờ là có thể.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap-content-introduce">
        <div className="container-libary">
          <div className="title-libary">VINHOMES OCEAN PARK</div>
          <div className="title-name-libary">THƯ VIỆN</div>
          <div style={{ width: "100%", height: "4px" }}>
            <Seperate widthPar={350} widthChil={80} style={{ marginTop: 16 }} />
          </div>
          <div className="content-libary">
            <div>
              <img style={{ width: "100%" }} alt="libary-big" src={libaryBig} />
            </div>
            <div className="wrap-image-small">
              <span>
                <img
                  style={{ width: "100%" }}
                  alt="libary-small1"
                  src={libarySmall1}
                />
              </span>
              <span>
                <img
                  style={{ width: "100%" }}
                  alt="libary-small2"
                  src={libarySmall2}
                />
              </span>{" "}
              <span>
                <img
                  style={{ width: "100%" }}
                  alt="libary-small3"
                  src={libarySmall3}
                />
              </span>{" "}
              <span>
                <img
                  style={{ width: "100%" }}
                  alt="libary-small4"
                  src={libarySmall4}
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-oder-project">
        <div className="wrap-content-oder-project">
          <div className="title-libary">TÌM HIỂU</div>
          <div className="title-name-libary">CÁC DỰ ÁN KHÁC</div>
          <Seperate widthPar={350} widthChil={80} />
          <div className="content-oder-prj">
            <div className="square-pj">
              <span>
                <img
                  style={{ width: "100%" }}
                  src={oderPrj1}
                  alt="oder-imag1"
                />
              </span>
              <div className="title-pj">Vinhomes Ocean Park</div>
              <div className="description-pj">
                TP Biển hồ - Thiên đường nghỉ dưỡng mỗi ngày
              </div>
            </div>
            <div className="square-pj">
              <span>
                <img
                  style={{ width: "100%" }}
                  src={oderPrj2}
                  alt="oder-imag2"
                />
              </span>
              <div className="title-pj">Vinhomes Ocean Park</div>
              <div className="description-pj">
                TP Biển hồ - Thiên đường nghỉ dưỡng mỗi ngày
              </div>
            </div>
            <div className="square-pj">
              <span>
                <img
                  style={{ width: "100%" }}
                  src={oderPrj3}
                  alt="oder-imag3"
                />
              </span>
              <div className="title-pj">Vinhomes Ocean Park</div>
              <div className="description-pj">
                TP Biển hồ - Thiên đường nghỉ dưỡng mỗi ngày
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
