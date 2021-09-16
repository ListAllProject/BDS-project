import "./register.scss";
import { Input, Checkbox, Button, Form } from "antd";
import { RegisterRequest } from "../../../services/models";
import { useEffect, useState } from "react";
import UserAPI from "../../../services/APIBEELAND/User";
import { useHistory } from "react-router-dom";
// import ButtonCustom from "../../../components/buttonCustom/buttonCustom";

export const Register = (props: any) => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onFinish = (data: RegisterRequest) => {
    setErrorMessage('');
    setSuccessMessage('');
    setLoading(true);
    UserAPI.register(data)
      .then(res => {
        setLoading(false);
        if (res.data && res.data.status === 2000) {
          setSuccessMessage(res.data.message);
        } else {
          setErrorMessage(res.data.message);
        }
      })
      .catch(err => {
        setLoading(false);
        setErrorMessage("Có lỗi xảy ra, vui lòng thử lại!");
        console.log(err);
      })
  }

  useEffect(() => {
    if(localStorage.getItem("token")){
      history.push('/')
    }
  }, []);

  return (
    <div className="background">
      <div className="register-container">
        <div className="content">
          <div className="title">ĐĂNG KÝ</div>
          
          <div className="title-line-break" />
          {!loading ? <div className="loading-frame">
            <div className="loading-frame-background"></div>
          </div> : ''}
          <Form
            className="body"
            onFinish={onFinish}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Vui lòng nhập họ tên của bạn!' }]}>
              <Input
                placeholder="Họ và tên"
                prefix={<i style={{ fontSize: 12 }} className="fas fa-user" />}
              />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[{ required: true, message: 'Vui lòng nhập số điện thoại của bạn!' }]}>
              <Input
                placeholder="Số điện thoại"
                prefix={<i style={{ fontSize: 12 }} className="fas fa-phone" />}
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Vui lòng nhập địa chỉ email của bạn!' }]}>
              <Input
                placeholder="Email"
                prefix={
                  <i style={{ fontSize: 12 }} className="fas fa-envelope" />
                }
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

            <Form.Item
              name="passwordRe"
              rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu!' }]}>
              <Input.Password
                placeholder="Xác nhận mật khẩu"
                prefix={<i style={{ fontSize: 12 }} className="fas fa-key" />}
              />
            </Form.Item>

            <Form.Item
              name="emailNotification"
              className="additional-action">
              <Checkbox>Đăng ký nhận thông tin, thông báo qua email</Checkbox>
            </Form.Item>

            <div className="footer">
              <div className="note">
                Các thông tin để đăng ký tài khoản trên đây của Quý khách sẽ được
                sử dụng trong suốt quá trình giao dịch BĐS tại Beesky Online, vui
                lòng nhập đầy đủ và chính xác.
            </div>
              <div className="register-error-message">
                {errorMessage}
              </div>
              <div className="register-success-message">
                {successMessage}
              </div>
              <div className="note"></div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button size="large" className="primary-btn" htmlType="submit" loading={loading}>
                  ĐĂNG KÝ
                </Button>
              </div>
              <div className="note">
                <a href="/">Hướng dẫn đăng ký tài khoản</a>
              </div>
              <div className="note">
                Bạn đã có tài khoản? <a href="/">Đăng nhập ngay</a>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
