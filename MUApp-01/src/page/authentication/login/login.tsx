import "./login.scss";
import { Input, Checkbox, Button, Form } from "antd";
import FacebookLogo from "../../../assets/images/facebook.svg";
import GoogleLogo from "../../../assets/images/google.svg";
import { LoginRequest } from "../../../services/models";
import UserAPI from "../../../services/APIBEELAND/User";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";

export const Login = () => {

  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onFinish = (data: LoginRequest) => {
    if (!loading) {
      setLoading(true);
      UserAPI.login(data)
      .then(res => {
        setLoading(false);
        if (res.data && res.data.status === 200) {
          localStorage.setItem("token", res.data.acessToken);
          window.location.href = "/"
        } else {
          setErrorMessage(res.data.message);
        }
      })
      .catch(err => {
        setLoading(false);
        setErrorMessage('Có lỗi xảy ra, vui lòng thử lại!');
        console.log(err)
      })
    }
  }

  useEffect(() => {
    if(localStorage.getItem("token")){
      history.push('/')
    }
  }, []);
    
  return (
    <div className="background">
      <div className="login-container">
        <div className="content">
          <div className="title">ĐĂNG NHẬP</div>
          <div className="title-line-break" />
          <Form
            className="body"
            onFinish={onFinish}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Vui lòng nhập địa chỉ email của bạn!' }]}>
              <Input
                placeholder="Email"
                prefix={<i style={{ fontSize: 12 }} className="fas fa-envelope" />}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
              <Input.Password
                placeholder="Mật khẩu"
                prefix={<i style={{ fontSize: 12 }} className="fas fa-key" />}
              />
            </Form.Item>

            <div className="additional-action">
              <span>
                <Form.Item name="savePassword">
                  <Checkbox>Ghi nhớ mật khẩu</Checkbox>
                </Form.Item>
              </span>
              <span>Quên mật khẩu?</span>
            </div>
            <div className="login-error-message">
              {errorMessage}
            </div>
            <div className="footer">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Button size="large" className="primary-btn" htmlType="submit" loading={loading}>
                  ĐĂNG NHẬP
              </Button>
              </div>
              <div className="social-login">
                <div>Hoặc đăng nhập bằng</div>
                <div className="social-logo">
                  <img src={FacebookLogo} alt="Facebook" />
                  <img src={GoogleLogo} alt="Google" />
                </div>
              </div>
              <div className="note">
                Bạn chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
