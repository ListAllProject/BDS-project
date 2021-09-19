import RoomImage from "../../assets/images/room-test.png";
import ImageIcon from "../../assets/images/image.png";
import Rotate360DegreeIcon from "../../assets/images/rotate360degree.png";
import DownloadIcon from "../../assets/images/download.png";
import QAIcon from "../../assets/images/QA.png";
import S11Image from "../../assets/images/S11.png";
import S12Image from "../../assets/images/S12.png";
import "./detail.scss";
import CustomSlider from "../../components/slider/slider";
import ButtonCustom from "../../components/buttonCustom/buttonCustom";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import ProductAPI from "../../services/APIBEELAND/Product";
import { productsObj } from "../../services/models";
import loadding from "../../assets/images/loadding.gif";
const settings = {
  infinite: true,
};

interface detailParams {
  maSP: string;
}

export const Detail = () => {
  const history = useHistory();
  const { maSP } = useParams<detailParams>();

  const [images, setImages] = useState<any[]>([]);
  const [product, setProduct] = useState<productsObj>();

  useEffect(() => {
    fetchData();
  }, [maSP]);

  const fetchData = () => {
    const maSPNumber = parseInt(maSP);
    ProductAPI.getProductImages(maSPNumber)
      .then((res) => {
        if (res.data.status === 2000) {
          setImages(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    ProductAPI.getProduct(maSPNumber)
      .then((res) => {
        if (res.data.status === 2000) {
          setProduct(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickBuyNow = () => {
    history.push(`/v/booking/${maSP}/xac-nhan`);
  };

  const imageList: JSX.Element[] = images.map((e) => {
    return <img src={e.HinhAnh} alt="Room 01" />;
  });

  const utilities: JSX.Element[] = [];
  for (let index = 0; index < 18; index++) {
    utilities.push(
      <span className="utilities-item">
        <i className="fal fa-check-circle"></i>Biểu tượng ngọn hải đăng
      </span>
    );
  }

  if (!product) {
    return (
      <img
        alt="image3"
        style={{
          borderRadius: 8,
          width: "100%",
          objectFit: "scale-down",
          maxHeight: 550,
        }}
        src={loadding}
      />
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
              <span
                className="action"
                onClick={() => {
                  window.open(product.Link_Video, "_blank");
                }}
              >
                <img src={ImageIcon} alt="" />
              </span>
              <span className="action">
                <img
                  src={Rotate360DegreeIcon}
                  alt=""
                  onClick={() => {
                    window.open(product.Link_360, "_blank");
                  }}
                />
              </span>
              <span className="action">
                <img
                  src={DownloadIcon}
                  alt="download"
                  onClick={() => {
                    window.open(product.Doccument, "_blank");
                  }}
                />
              </span>
              <span className="action">
                <img
                  src={QAIcon}
                  alt="QA"
                  onClick={() => {
                    window.open(product.LinkGroup, "_blank");
                  }}
                />
              </span>
            </div>
          </span>
          {/* Short description */}
          <span className="short-description">
            <div style={{ fontWeight: 700 }}>{product.TenDA}</div>

            <div style={{ marginTop: "8px" }}>
              <i className="fas fa-info-circle clickable" />
              <span style={{ marginLeft: "5px" }}>{product.DiaChi}</span>
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
              {`Căn hộ ${product.KyHieu} - ${product.TenKhu}`}
            </div>

            <div style={{ marginTop: "16px" }}>
              <span style={{ marginRight: "26px" }}>
                <i className="fal fa-bed-alt"></i>
                <span style={{ marginLeft: "5px" }}>{product.PhongNgu}</span>
              </span>
              <span style={{ marginRight: "26px" }}>
                <i className="fal fa-clone"></i>
                <span style={{ marginLeft: "5px" }}>{product.DTThongThuy}</span>
                m<sup>2</sup>
                <i
                  className="fas fa-info-circle clickable"
                  style={{ marginLeft: "5px" }}
                />
              </span>
              <span style={{ marginRight: "26px" }}>
                <i className="fal fa-bath"></i>
                <span style={{ marginLeft: "5px" }}>{product.SoPhongVS}</span>
              </span>
              <span style={{ marginRight: "26px" }}>
                <i className="fal fa-compass"></i>
                <span style={{ marginLeft: "5px" }}>
                  {product.TenPhuongHuong}
                </span>
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
                {new Intl.NumberFormat("vi-VN").format(product.TongGiaTriHDMB)}
              </span>
              <span style={{ fontSize: "24px", fontWeight: 700 }}>
                <sup>đ</sup>
              </span>
            </div>

            <div style={{ marginTop: "16px", marginBottom: "0px" }}>
              Đơn giá thủy thông
              <i className="fas fa-info-circle clickable"></i>
              <span style={{ marginLeft: "5px", fontWeight: 700 }}>
                {new Intl.NumberFormat("vi-VN").format(product.DonGiaThongThuy)}
              </span>
              <span>
                <sup>đ</sup>/m<sup>2</sup>
              </span>
            </div>

            <div className="clickable" style={{ marginTop: "16px" }}>
              Tôi muốn được tư vấn về căn hộ
            </div>
            <div className="action">
              {product.MuaNgay === 0 ?
                <div
                  style={{
                    width: "44.5%",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    color: "green",
                    letterSpacing: '2px',
                    fontSize: '16px'
                    }}>
                 <i className="far fa-check-circle" style={{fontSize: '24px', marginRight: '5px'}}></i> ĐÃ BOOK
                </div> :
                <ButtonCustom
                  style={{ width: "44.5%" }}
                  text="Mua ngay"
                  onClick={() => onClickBuyNow()}
                />
              }
              <ButtonCustom
                style={{
                  background: "unset",
                  width: "44.5%",
                  color: "#E1A943",
                  border: "1px solid #E1A943",
                  backgroundColor: "unset",
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

        <div
          dangerouslySetInnerHTML={{
            __html: product.NoiDung as string,
          }}
        />
      </div>
    </div>
  );
};
