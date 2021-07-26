import React from "react";
import "./blog.scss";
import topimg from "../../assets/images/bgr-blog.jpg";
import imgTop1 from "../../assets/images/img-top2.png";
import imgTop2 from "../../assets/images/img-top3.png";
import imgTop3 from "../../assets/images/img-top4.png";
import imgTop4 from "../../assets/images/img-top1.png";

import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog2.png";

const data1 = [
  {
    title: "Vinhomes Ocean Park - Nơi mọi ô cửa đều nhìn ra miền xanh bao la",
    img: imgTop1,
    description:
      "Vị trí gần trung tâm, không gian sống trong lành, uy tín chủ đầu tư, chính sách cho vay tốt… là những tiêu chí mà người mua thường đặt ra khi cân nhắc",
  },
  {
    title:
      "Ra mắt Sapphire Parkville – “Tâm điểm xanh” của Vinhomes Smart City",
    img: imgTop2,
    description:
      "Với những căn chung cư nhỏ, việc thiết kế phòng khách như thế nào vừa đẹp vừa tiện dụng khiến cho gia chủ khá đau đầu. Cùng Vinhomes Online",
  },
  {
    title:
      "Tòa tháp trái tim Vinhomes Ocean Park - bán hết 50% số căn hộ trong 60 phút",
    img: imgTop3,
    description:
      "Với vị trí vàng giữa trung tâm mới của thành phố, giao thông thuận tiện, hệ thống tiện ích cao cấp, đồng bộ, các tòa tháp cao cấp tại khu vực phía Tây",
  },
  {
    title:
      "Đầu tư BĐS hạng sang: Vinhomes Smart City - Chung cư cao cấp phía Tây ‘ăn điểm’",
    img: imgTop4,
    description:
      "Với vị trí vàng giữa trung tâm mới của thành phố, giao thông thuận tiện, hệ thống tiện ích cao cấp, đồng bộ, các tòa tháp cao cấp tại khu vực phía Tây",
  },
];

const data2 = [
  {
    title: "Vinhomes Ocean Park - Nơi mọi ô cửa đều nhìn ra miền xanh bao la",
    img: blog1,
    description:
      "Vị trí gần trung tâm, không gian sống trong lành, uy tín chủ đầu tư, chính sách cho vay tốt… là những tiêu chí mà người mua thường đặt ra khi cân nhắc",
  },
  {
    title:
      "Ra mắt Sapphire Parkville – “Tâm điểm xanh” của Vinhomes Smart City",
    img: blog2,
    description:
      "Với những căn chung cư nhỏ, việc thiết kế phòng khách như thế nào vừa đẹp vừa tiện dụng khiến cho gia chủ khá đau đầu. Cùng Vinhomes Online",
  },
  {
    title:
      "Tòa tháp trái tim Vinhomes Ocean Park - bán hết 50% số căn hộ trong 60 phút",
    img: blog3,
    description:
      "Với vị trí vàng giữa trung tâm mới của thành phố, giao thông thuận tiện, hệ thống tiện ích cao cấp, đồng bộ, các tòa tháp cao cấp tại khu vực phía Tây",
  },
  {
    title:
      "Đầu tư BĐS hạng sang: Vinhomes Smart City - Chung cư cao cấp phía Tây ‘ăn điểm’",
    img: imgTop4,
    description:
      "Với vị trí vàng giữa trung tâm mới của thành phố, giao thông thuận tiện, hệ thống tiện ích cao cấp, đồng bộ, các tòa tháp cao cấp tại khu vực phía Tây",
  },
  {
    title: "Vinhomes Ocean Park - Nơi mọi ô cửa đều nhìn ra miền xanh bao la",
    img: blog1,
    description:
      "Vị trí gần trung tâm, không gian sống trong lành, uy tín chủ đầu tư, chính sách cho vay tốt… là những tiêu chí mà người mua thường đặt ra khi cân nhắc",
  },
  {
    title:
      "Ra mắt Sapphire Parkville – “Tâm điểm xanh” của Vinhomes Smart City",
    img: blog2,
    description:
      "Với những căn chung cư nhỏ, việc thiết kế phòng khách như thế nào vừa đẹp vừa tiện dụng khiến cho gia chủ khá đau đầu. Cùng Vinhomes Online",
  },
  {
    title:
      "Tòa tháp trái tim Vinhomes Ocean Park - bán hết 50% số căn hộ trong 60 phút",
    img: blog3,
    description:
      "Với vị trí vàng giữa trung tâm mới của thành phố, giao thông thuận tiện, hệ thống tiện ích cao cấp, đồng bộ, các tòa tháp cao cấp tại khu vực phía Tây",
  },
  {
    title: "Vinhomes Ocean Park - Nơi mọi ô cửa đều nhìn ra miền xanh bao la",
    img: blog1,
    description:
      "Vị trí gần trung tâm, không gian sống trong lành, uy tín chủ đầu tư, chính sách cho vay tốt… là những tiêu chí mà người mua thường đặt ra khi cân nhắc",
  },
  {
    title:
      "Ra mắt Sapphire Parkville – “Tâm điểm xanh” của Vinhomes Smart City",
    img: blog2,
    description:
      "Với những căn chung cư nhỏ, việc thiết kế phòng khách như thế nào vừa đẹp vừa tiện dụng khiến cho gia chủ khá đau đầu. Cùng Vinhomes Online",
  },
  {
    title:
      "Tòa tháp trái tim Vinhomes Ocean Park - bán hết 50% số căn hộ trong 60 phút",
    img: blog3,
    description:
      "Với vị trí vàng giữa trung tâm mới của thành phố, giao thông thuận tiện, hệ thống tiện ích cao cấp, đồng bộ, các tòa tháp cao cấp tại khu vực phía Tây",
  },
];

export const Blog = () => {
  return (
    <div className="container-blog">
      <div className="wrap-content-list-blog">
        <div className="top-content">
          <div className="top-left-content">
            <img
              style={{
                borderRadius: 8,
                minHeight: 400,
                objectFit: "scale-down",
              }}
              src={topimg}
            ></img>
            <div className="tille-top1">
              S1.02 tòa căn hộ đầu tiên tại Vinhomes Ocean Park tích hợp hệ
              thống Smart Home
            </div>
            <div className="time">
              <i className="fal fa-clock"></i> Thứ 2 ,08/07/2019
            </div>
          </div>
          <div className="top-right-content">
            <div style={{ fontSize: 24, fontWeight: 700 }}>Tin tức nổi bật</div>
            {data1.map((item) => {
              return (
                <div className="content-item">
                  <div>
                    <img
                      style={{
                        width: 117,
                      }}
                      src={item.img}
                    ></img>
                  </div>
                  <div
                    style={{
                      marginLeft: 16,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span className="title-blog">{item.title}</span>
                    <span className="time-blog">
                      <i className="fal fa-clock"></i> Thứ 2 ,08/07/2019
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="list-blog">
          {data2.map((item) => {
            return (
              <div className="wrap-blog">
                <div>
                  <img style={{ width: "100%" }} src={item.img} />
                </div>
                <div className="title-blog">{item.title}</div>
                <div className="time-blog">
                  <i className="fal fa-clock"></i> Thứ 2 ,08/07/2019
                </div>
                <div className="description">{item.description}</div>
              </div>
            );
          })}
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 40 }}
        >
          <span
           className="btn-loadmore"
          >
            Xem Thêm <i className="fas fa-sort-down"></i>
          </span>
        </div>
      </div>
    </div>
  );
};
