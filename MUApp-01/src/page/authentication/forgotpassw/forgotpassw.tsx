import React, { useEffect } from "react";
import "./forgotpassw.scss";
import { Button, Input, Form } from "antd";
import { useState } from "react";
import { FogotPasswordRequest } from "../../../services/models";
import UserAPI from "../../../services/APIBEELAND/User";
import { useHistory } from "react-router-dom";

export const Forgotpassw = () => {

  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onFinish = (data: FogotPasswordRequest) => {
    if (!loading) {
      setLoading(true);
      UserAPI.fogotPassword(data)
        .then(res => {
          setLoading(false);
          if (res.data && res.data.status === 200) {
            console.log(res)
            setSuccessMessage(res.data.message);
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
      <div className="forgot-password-container">
        <div className="content">
          <div className="title">QUÊN MẬT KHẨU</div>
          <div className="title-line-break" />
          <div className="note">
            Vui lòng nhập địa chỉ email Quý khách đã đăng ký để đặt lại mật
            khẩu.
          </div>

          <Form className="body"
            onFinish={onFinish}>
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
              name="phone"
              rules={[{ required: true, message: 'Vui lòng nhập số điện thoại của bạn!' }]}>
              <Input
                placeholder="Số điện thoại"
                prefix={<i style={{ fontSize: 12 }} className="fas fa-phone" />}
              />
            </Form.Item>
            <div className="footer">
              <div className="forgot-password-error-message">
                {errorMessage}
              </div>
              <div className="forgot-password-success-message">
                {successMessage}
              </div>
              <Button style={{ width: 168 }} className="primary-btn" htmlType="submit" loading={loading}>GỬI</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
