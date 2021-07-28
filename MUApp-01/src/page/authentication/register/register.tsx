import "./register.scss";
import { Input, Checkbox } from "antd";
import ButtonCustom from "../../../components/buttonCustom/buttonCustom";

export const Register = () => {
  return (
    <div className="background">
      <div className="register-container">
        <div className="content">
          <div className="title">ĐĂNG KÝ</div>
          <div className="title-line-break" />
          <div className="body">
            <Input
              placeholder="Họ và tên"
              prefix={<i style={{ fontSize: 12 }} className="fas fa-user" />}
            />
            <Input
              placeholder="Số điện thoại"
              prefix={<i style={{ fontSize: 12 }} className="fas fa-phone" />}
            />
            <Input
              placeholder="Email"
              prefix={
                <i style={{ fontSize: 12 }} className="fas fa-envelope" />
              }
            />
            <Input.Password
              placeholder="Mật khẩu"
              prefix={<i style={{ fontSize: 12 }} className="fas fa-key" />}
            />
            <Input.Password
              placeholder="Xác nhận mật khẩu"
              prefix={<i style={{ fontSize: 12 }} className="fas fa-key" />}
            />
          </div>
          <div className="additional-action">
            <Checkbox>Đăng ký nhận thông tin, thông báo qua email</Checkbox>
          </div>

          <div className="footer">
            <div className="note">
              Các thông tin để đăng ký tài khoản trên đây của Quý khách sẽ được
              sử dụng trong suốt quá trình giao dịch BĐS tại Beesky Online, vui
              lòng nhập đầy đủ và chính xác.
            </div>
            <div className="note"></div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ButtonCustom text="ĐĂNG KÝ" onClick={() => null} />
            </div>
            <div className="note">
              <a href="/">Hướng dẫn đăng ký tài khoản</a>
            </div>
            <div className="note">
              Bạn đã có tài khoản? <a  href="/">Đăng nhập ngay</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
