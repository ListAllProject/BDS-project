import RoomImage from "../../assets/images/room-test.png";
// import RoomImage1 from "../../assets/images/room-test-1.png";
import ImageIcon from "../../assets/images/image.png";
import Rotate360DegreeIcon from "../../assets/images/rotate360degree.png";
import DownloadIcon from "../../assets/images/download.png";
import QAIcon from "../../assets/images/QA.png";
import S11Image from "../../assets/images/S11.png";
import S12Image from "../../assets/images/S12.png";
// import BackgroundGradientImage from "../../assets/images/background-gradient.png";
import "./detail.scss";
import CustomSlider from "../../components/slider/slider";
import ButtonCustom from "../../components/buttonCustom/buttonCustom";

const settings = {
  infinite: true,
};

export const Detail = () => {
  const imageList: JSX.Element[] = [
    <img src={RoomImage} alt="Room 01" />,
    <img src={RoomImage} alt="Room 01" />,
    <img src={RoomImage} alt="Room 01" />,
    <img src={RoomImage} alt="Room 01" />,
    <img src={RoomImage} alt="Room 01" />,
  ];

  const utilities: JSX.Element[] = [];
  for (let index = 0; index < 18; index++) {
    utilities.push(
      <span className="utilities-item">
        <i className="fal fa-check-circle"></i>Biểu tượng ngọn hải đăng
      </span>
    );
  }

  return (
    <div style={{ marginBottom: 20 }} className="wrap-detail-product-content">
      <div className="content">
        {/* Title */}
        <div className="title">CHUNG CƯ</div>
        <div className="title-line-break">
          <div className="title-middle-line-break"></div>
        </div>

        {/* Description */}
        <div className="description">
          {/* Image slider */}
          <span className="image">
            <div className="image-slider">
              <CustomSlider
                classNextArrow="fal fa-chevron-circle-right next-arrow"
                components={imageList}
                classPreviousArrow="fal fa-chevron-circle-left previous-arrow"
                showNum={0}
                settings={settings}
              ></CustomSlider>
            </div>
            <div className="additional-action">
              <span className="action">
                <img src={ImageIcon} alt="" />
              </span>
              <span className="action">
                <img src={Rotate360DegreeIcon} alt="" />
              </span>
              <span className="action">
                <img src={DownloadIcon} alt="" />
              </span>
              <span className="action">
                <img src={QAIcon} alt="" />
              </span>
            </div>
          </span>
          {/* Short description */}
          <span className="short-description">
            <div style={{ fontWeight: 700 }}>Vinhomes Ocean Park</div>

            <div style={{ marginTop: "8px" }}>
              <i className="fas fa-info-circle clickable" />
              <span style={{ marginLeft: "5px" }}>Gia Lâm, Hà Nội</span>
            </div>

            <div
              style={{
                width: "80px",
                height: "1px",
                backgroundColor: "gray",
                marginTop: "15px",
              }}
            ></div>

            <div
              style={{ fontSize: "16px", fontWeight: 700, marginTop: "16px" }}
            >
              Căn hộ S1.092205 - Tòa S1.09
            </div>

            <div style={{ marginTop: "16px" }}>
              <span style={{ marginRight: "26px" }}>
                <i className="fal fa-bed-alt"></i>
                <span style={{ marginLeft: "5px" }}>3PN</span>
              </span>
              <span style={{ marginRight: "26px" }}>
                <i className="fal fa-clone"></i>
                <span style={{ marginLeft: "5px" }}>73.9</span>m<sup>2</sup>
                <i
                  className="fas fa-info-circle clickable"
                  style={{ marginLeft: "5px" }}
                />
              </span>
              <span style={{ marginRight: "26px" }}>
                <i className="fal fa-bath"></i>
                <span style={{ marginLeft: "5px" }}>2</span>
              </span>
              <span style={{ marginRight: "26px" }}>
                <i className="fal fa-compass"></i>
                <span style={{ marginLeft: "5px" }}>DB-TB</span>
              </span>
            </div>

            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "gray",
                marginTop: "15px",
                opacity: 0.3,
              }}
            ></div>

            <div style={{ marginTop: "16px" }}>
              Giá niêm yết
              <i
                className="fas fa-info-circle clickable"
                style={{ marginLeft: "5px" }}
              />
            </div>
            <div>
              <span style={{ fontSize: "24px", fontWeight: 700 }}>
                2.840.694.000
              </span>
              <span style={{ fontSize: "24px", fontWeight: 700 }}>
                <sup>đ</sup>
              </span>
            </div>

            <div style={{ marginTop: "16px", marginBottom: "0px" }}>
              Đơn giá hủy thông
              <i className="fas fa-info-circle clickable"></i>
              <span style={{ marginLeft: "5px", fontWeight: 700 }}>
                37.210.731
              </span>
              <span>
                <sup>đ</sup>/m<sup>2</sup>
              </span>
            </div>

            <div className="clickable" style={{ marginTop: "16px" }}>
              Tôi muốn được tư vấn về căn hộ
            </div>
            <div className="action">
              <ButtonCustom
                style={{ width: "44.5%" }}
                text="Mua ngay"
                onClick={() => null}
              />
              <ButtonCustom
                style={{
                  background: "unset",
                  width: "44.5%",
                  color: "#E1A943",
                  border: "1px solid #E1A943",
                  backgroundColor: "unset"
                }}
                text="Tính thử giá"
                onClick={() => null}
              />
            </div>
            {/* <input
                type="button"
                className="buy-now-button"
                value="Mua ngay"
              />
              <span style={{ width: "5%" }}></span>
              <input
                type="button"
                className="calculate-price-button"
                value="Tính thử giá"
              /> */}
            <div className="clickable" style={{ marginTop: "16px" }}>
              Chi tiết chính sách bán hàng
            </div>
          </span>
        </div>

        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "black",
            marginTop: "60px",
            color: "transparent",
            opacity: "0.3",
          }}
        >
          .
        </div>
        {/* Detail */}
        <div className="detail">
          <div
            style={{ fontSize: "24px", fontWeight: 700, textAlign: "center" }}
          >
            THÔNG TIN CHI TIẾT
          </div>

          <div style={{ fontSize: "18px", fontWeight: 700 }}>GIỚI THIỆU</div>
          <div style={{ marginTop: "20px", fontSize: 14, fontWeight: 400 }}>
            Căn hộ bao gồm 2 phòng ngủ, 1 phòng khách, 2 nhà vệ sinh, 1 phòng
            bếp, lô gia và một không gian đa năng cư dân có thể sử dụng làm
            phòng đọc sách, không gian chơi cho trẻ em hoặc góc làm việc riêng,…
            <br />
            Diện tích thông thủy là 62.8m2.
            <br />
            Căn hộ có hướng ban công là hướng Đông Bắc và Tây Bắc.
          </div>

          <div style={{ fontSize: 18, fontWeight: 700, marginTop: "40px" }}>
            Tiện ích nội khu
          </div>
          <div className="detail-utilities">{utilities}</div>

          <div style={{ fontSize: 18, fontWeight: 700, marginTop: "40px" }}>
            Mặt bằng căn hộ
          </div>
          <div className="detail-space">
            <img
              src={S11Image}
              alt="Mặt bằng căn hộ"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="handover-standards-button-wrapper">
            <div className="handover-standards-button">Tiêu chuẩn bàn giao</div>
          </div>

          <div style={{ fontSize: 18, fontWeight: 700, marginTop: "40px" }}>
            Mặt bằng căn hộ
          </div>
          <div className="detail-space">
            <img
              src={S12Image}
              alt="Mặt bằng tầng"
              style={{ maxWidth: "100%" }}
            />
          </div>

          <div style={{ fontSize: 18, fontWeight: 700, marginTop: "40px" }}>
            Mặt bằng căn hộ
          </div>
          <div
            style={{
              marginTop: "20px",
              fontSize: 14,
              fontWeight: 400,
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            - Thông tin, hình ảnh, các tiện ích chỉ mang tính chất tương đối và
            có thể được điều chỉnh theo quyết định của Chủ Đầu Tư tại từng thời
            điểm đảm bảo phù hợp quy hoạch và thực tế thi công Dự Án.
            <br />
            - Các thông tin, cam kết chính thức sẽ được quy định cụ thể tại Hợp
            đồng mua bán.
            <br />
            - Việc quản lý, vận hành và kinh doanh của khu đô thị sẽ theo quy
            định của Ban quản lý.
            <br />
            - Mọi thông tin được đăng tải đúng tại thời điểm công bố và có thể
            được điều chỉnh mà không cần thông báo trước.
            <br />
            - Các thông tin, cam kết chính thức sẽ được quy định cụ thể tại Hợp
            đồng mua bán.
            <br />
            - Trường hợp Chủ Đầu Tư phát hiện sai sót về hiển thị Giá niêm yết
            do lỗi hệ thống hoặc bị tác động bởi các sự kiện bất khả kháng*,
            Vinhomes Online có quyền điều chỉnh thông tin và thu hồi Sản Phẩm mà
            không cần thông báo trước.
            <br />
            *Các sự kiện bất khả kháng bao gồm nhưng không giới hạn:
            <br />
            - Các hiện tượng thiên nhiên: mưa, lũ, động đất, hỏa hoạn, bão, sóng
            thần, núi lửa phun trào,...;
            <br />
            - Các hiện tượng xã hội: chiến tranh, đảo chính, đình công, cấm vận,
            thay đổi chính sách của Chính phủ,…;
            <br />
            - Các sự cố công nghệ thông tin: mất điện, lỗi mạng, lỗi đường
            truyền, lỗi tín hiệu,…;
            <br />
            - Các sự cố do tác động từ bên thứ 3: tin tặc tấn công website,...
            <br />
          </div>

          <div style={{ fontSize: 18, fontWeight: 700, marginTop: "40px" }}>
            CHỦ ĐẦU TƯ
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, marginTop: "20px" }}>
            Công TNHH Đầu tư và Phát triển Đô thị Gia Lâm
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              marginTop: "12px",
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            Số 7 đường Bằng Lăng 1, Khu đô thị sinh thái Vinhomes Riverside,
            phường Việt Hưng, quận Long Biên, Thành phố Hà Nội, Việt Nam
          </div>
        </div>
      </div>
    </div>
  );
};
