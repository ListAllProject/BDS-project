import React, { useEffect } from "react";
import "./forgotpassw.scss";
import { Button, Input, Form } from "antd";
import { useState } from "react";
import { ConfirmPasswordRequest, FogotPasswordRequest } from "../../../services/models";
import UserAPI from "../../../services/APIBEELAND/User";
import { useHistory, useLocation } from "react-router-dom";

export const ConfirmPassword = () => {

  const search = useLocation().search;
  const token = new URLSearchParams(search).get('token');
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const onFinish = (data: ConfirmPasswordRequest) => {
    if (data.password != data.rePassword) {
      setErrorMessage("Mật khẩu không khớp, vui lòng nhập lại!");
      return;
    }
    if (!loading) {
      setLoading(true);
      UserAPI.confirmPassword(data, token || "")
        .then(res => {
          if (res.data && res.data.status === 2000) {
            history.push('/login');
          } else {
            setErrorMessage(res.data.message);
          }
        })
        .catch(err => {
          setErrorMessage('Có lỗi xảy ra, vui lòng thử lại!');
          console.log(err)
        }).finally(() => {
          setLoading(false);
        })
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push('/')
    }
  }, []);

  return (
    <div className="background">
      <div className="forgot-password-container">
        <div className="content">
          <div className="title">XÁC NHẬN MẬT KHẨU</div>
          <div className="title-line-break" />
          <div className="note">
            Vui lòng nhập mật khẩu mới của bạn.
          </div>

          <Form className="body"
            onFinish={onFinish}>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu của bạn!' }]}>
              <Input
                placeholder="Password"
                type="password"
                prefix={
                  <i style={{ fontSize: 12 }} className="fas fa-key" />
                }
              />
            </Form.Item>

            <Form.Item
              name="rePassword"
              rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu của bạn!' }]}>
              <Input
                type="password"
                placeholder="Retype Password"
                prefix={<i style={{ fontSize: 12 }} className="fas fa-key" />}
              />
            </Form.Item>
            <div className="footer">
              <div className="forgot-password-error-message">
                {errorMessage}
              </div>
              <Button style={{ width: 168 }} className="primary-btn" htmlType="submit" loading={loading}>GỬI</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
