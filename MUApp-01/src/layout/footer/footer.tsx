import { Input } from "antd";
import bgrFooter from "../../assets/images/Group44.png";
import "./footer.scss";

export const FooterWrap = () => {
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
            BEESKY ONLINE – SÀN GIAO DỊCH TMĐT BẤT ĐỘNG SẢN HÀNG ĐẦU VIỆT NAM
          </span>
          <span className="description">
            Beesky Online được ra đời và phát triển với mong muốn mang đến một
            dịch vụ đẳng cấp, thuận tiện và tiết kiệm hơn cho Khách hàng khi mua
            BĐS. Tại Beesky Online, Quý khách có thể dễ dàng tìm kiếm BĐS phù
            hợp với nhu cầu. Với tiêu chí Chính Xác, Minh Bạch, Đa Dạng, Tiết
            Kiệm và Đầy đủ Ưu Đãi, chúng tôi luôn cung cấp tới khách hàng thông
            tin, chính sách bán hàng đầy đủ, kịp thời, rõ ràng nhất, cùng với
            phương thức thanh toán an toàn, tiện lợi nhất. Giờ đây, khách hàng
            có thể mua BĐS ở bất cứ đâu, bất cứ lúc nào, với chỉ vài thao tác
            trên máy tính hoặc điện thoại di động. Hãy cùng chúng tôi trải
            nghiệm một nền tảng số hoàn toàn mới!
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
              Trụ sở: Số 7, Đại Lộ Thăng Long, Phường Trung Hoà, Quận Cầu
              Giấy.HN
            </span>
            <span className="item-infor ">
              <i style={{ marginRight: 8 }} className="fas fa-phone-alt"></i>
              01234 456 566
            </span>
            <span className="item-infor ">
              <i style={{ marginRight: 8 }} className="fas fa-fax"></i>
              Fax: 0913 994 696
            </span>
            <span className="item-infor ">
              <i style={{ marginRight: 8 }} className="fas fa-envelope"></i>
              Email: info@beesky.com.vn
            </span>
            <span className="item-infor ">
              <i style={{ marginRight: 8 }} className="fas fa-globe"></i>
              Website: http://beesky.vn/
            </span>
          </div>
          <div className="ft-content-1">
            <span className="title">VĂN PHÒNG GIAO DỊCH HỒ CHÍ MINH</span>
            <div className="f-space-row"></div>
            <span className="item-infor ">
              <i
                style={{ marginRight: 8 }}
                className="fas fa-map-marker-alt"
              ></i>
              Trụ sở: Tầng 6, 102 Nguyễn Xí, P26, Quận Bình Thạnh.HCM
            </span>
            <span className="item-infor ">
              <i style={{ marginRight: 8 }} className="fas fa-phone-alt"></i>
              Điện thoại: 0287 10 60 686
            </span>
            <span className="item-infor ">
              <i style={{ marginRight: 8 }} className="fas fa-fax"></i>
              Fax: 0913 994 696
            </span>
            <span className="item-infor ">
              <i style={{ marginRight: 8 }} className="fas fa-envelope"></i>
              Email: info@beesky.com.vn
            </span>
            <span className="item-infor ">
              <i style={{ marginRight: 8 }} className="fas fa-globe"></i>
              Website: http://beesky.vn/
            </span>
          </div>
          <div className="ft-content-1">
            <span className="title">ĐĂNG KÝ NHẬN BẢNG TIN</span>
            <div className="f-space-row"></div>
            <span style={{ color: "#AAAAAA" }}>
              Hãy đăng ký để nhận những thông tin mới nhất về các sản phẩm dịch
              của Beesky Việt Nam.
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
            Bản quyền thuộc Công ty TNHH công nghệ và thương mại Beesky Việt
            Nam.
          </div>
          <div className="text-end">
            MST: 0106909814 ,Cấp ngày :22/07/2015 - Nơi cấp: Sở Kế hoạch và đầu
            tư Thành Phố Hà Nội
          </div>
        </div>
      </div>
    </div>
  );
};
