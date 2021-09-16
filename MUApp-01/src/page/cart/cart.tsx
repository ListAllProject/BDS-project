import "./cart.scss";
import { Input } from "antd";
import RoomImage from "../../assets/images/room-test.png";
import RoomImage1 from "../../assets/images/room-test-1.png";
import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <div style={{ marginBottom: 20 }} className="wrap-cart-content">
      <div className="content">
        {/* Title */}
        <div className="title">GIỎ HÀNG</div>
        <div className="title-line-break">
          <div className="title-middle-line-break"></div>
        </div>

        {/* Cart */}
        <div className="cart">
          <span className="product-list">
            {/* product item */}
            <div className="product-item">
              <img src={RoomImage1} alt="Room 01" className="product-image" />
              <span className="product-location">
                <div style={{ fontSize: 14, fontWeight: 700 }}>
                  Căn hộ S1.092205 - Tòa S1.09
                </div>
                <div style={{ fontSize: 12, fontWeight: 400 }}>
                  Vinhomes Ocean Park
                </div>
              </span>
              <span className="product-area">
                <div style={{ fontSize: 14, fontWeight: 700 }}>Diện tích</div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>
                  63m<sup>2</sup>
                </div>
              </span>
              <span className="product-type">
                <div style={{ fontSize: 14, fontWeight: 700 }}>Loại căn hộ</div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>2PN+1</div>
              </span>
              <span className="product-price">
                <div style={{ fontSize: 14, fontWeight: 700 }}>Thành tiền</div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>
                  2.613.359.000
                </div>
              </span>
              <div className="remove-product-button">
                <i
                  className="far fa-trash-alt"
                  style={{ fontSize: "15px" }}
                ></i>
              </div>
            </div>

            <div className="product-item">
              <img src={RoomImage} alt="Room 01" className="product-image" />
              <span className="product-location">
                <div style={{ fontSize: 14, fontWeight: 700 }}>
                  Căn hộ S1.092205 - Tòa S1.09
                </div>
                <div style={{ fontSize: 12, fontWeight: 400 }}>
                  Vinhomes Ocean Park
                </div>
              </span>
              <span className="product-area">
                <div style={{ fontSize: 14, fontWeight: 700 }}>Diện tích</div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>
                  63m<sup>2</sup>
                </div>
              </span>
              <span className="product-type">
                <div style={{ fontSize: 14, fontWeight: 700 }}>Loại căn hộ</div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>2PN+1</div>
              </span>
              <span className="product-price">
                <div style={{ fontSize: 14, fontWeight: 700 }}>Thành tiền</div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>
                  2.613.359.000
                </div>
              </span>
              <div className="remove-product-button">
                <i
                  className="far fa-trash-alt"
                  style={{ fontSize: "15px" }}
                ></i>
              </div>
            </div>

            <div className="product-item">
              <img src={RoomImage} alt="Room 01" className="product-image" />
              <span className="product-location">
                <div style={{ fontSize: 14, fontWeight: 700 }}>
                  Căn hộ S1.092205 - Tòa S1.09
                </div>
                <div style={{ fontSize: 12, fontWeight: 400 }}>
                  Vinhomes Ocean Park
                </div>
              </span>
              <span className="product-area">
                <div style={{ fontSize: 14, fontWeight: 700 }}>Diện tích</div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>
                  63m<sup>2</sup>
                </div>
              </span>
              <span className="product-type">
                <div style={{ fontSize: 14, fontWeight: 700 }}>Loại căn hộ</div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>2PN+1</div>
              </span>
              <span className="product-price">
                <div style={{ fontSize: 14, fontWeight: 700 }}>Thành tiền</div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>
                  2.613.359.000
                </div>
              </span>
              <div className="remove-product-button">
                <i
                  className="far fa-trash-alt"
                  style={{ fontSize: "15px" }}
                ></i>
              </div>
            </div>
            <div className="line-break"></div>
            <div className="staff-voucher">
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: 16,
                }}
              >
                Nhập mã nhân viên bán hàng
              </span>
              <span className="voucher-input">
                <Input addonAfter={<div>NHẬP MÃ</div>}></Input>
              </span>
            </div>
            <div style={{ fontSize: 12, fontWeight: 400, textAlign: "center" }}>
              Vui lòng điền mã nhân viên tư vấn bán hàng cho Quý khách (nếu có)
            </div>
          </span>

          <span className="checkout">
            <div className="wrap-checkout-content">
              <div className="price">
                <span
                  style={{
                    marginRight: "5px",
                    fontSize: 12,
                    fontWeight: 400,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Giá BĐS niêm yết
                  <i className="fas fa-info-circle clickable" />
                </span>
                <span style={{ fontSize: 18, fontWeight: 700 }}>
                  2.613.359.000đ
                </span>
              </div>
              <div className="evoucher">
                <Input
                  suffix={<i className="fas fa-info-circle clickable" />}
                  placeholder="Nhập mã E-voucher"
                  addonAfter={<div>ÁP DỤNG</div>}
                ></Input>
              </div>
              <div className="total-price">
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Tổng tiền mua online
                </span>
                <span style={{ fontSize: 18, fontWeight: 700 }}>
                  2.613.359.000đ
                </span>
              </div>
              <Link to="/v/xac-nhan-booking">
                <div className="buy-now-button">XÁC NHẬN</div>
              </Link>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
