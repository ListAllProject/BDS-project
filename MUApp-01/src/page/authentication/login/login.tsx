import "./login.scss";
import { Input, Checkbox } from "antd";
import FacebookLogo from "../../../assets/images/facebook.svg";
import GoogleLogo from "../../../assets/images/google.svg";
import ButtonCustom from "../../../components/buttonCustom/buttonCustom";

export const Login = () => {
  return (
    <div className="background">
      <div className="login-container">
        <div className="content">
          <div className="title">ĐĂNG NHẬP</div>
          <div className="title-line-break" />
          <div className="body">
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
          </div>
          <div className="additional-action">
            <span>
              <Checkbox>Ghi nhớ mật khẩu</Checkbox>
            </span>
            <span>Quên mật khẩu?</span>
          </div>
          <div className="footer">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <ButtonCustom text="ĐĂNG NHẬP" onClick={() => null} />
            </div>
            <div className="social-login">
              <div>Hoặc đăng nhập bằng</div>
              <div className="social-logo">
                <img src={FacebookLogo} alt="Facebook" />
                <img src={GoogleLogo} alt="Google" />
              </div>
            </div>
            <div className="note">
              Bạn chưa có tài khoản? <a  href="/">Đăng ký ngay</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
