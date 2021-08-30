import { useEffect, useState } from "react";
import "./verifyEmail.scss";
import { useHistory, useLocation } from "react-router-dom";
import UserAPI from "../../../services/APIBEELAND/User";
import { Button, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const VerifyEmail = () => {

  const search = useLocation().search;
  const history = useHistory();
  const token = new URLSearchParams(search).get('token');
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    UserAPI.verifyEmail(token || "")
      .then(res => {
        setLoading(false);
        if (res.data && res.data.status === 2000) {
          setSuccessMessage(res.data.message)
        } else {
          setErrorMessage(res.data.message)
        }
      })
      .catch(err => {
        setLoading(false);
        setErrorMessage('Có lỗi xảy ra, vui lòng thử lại!')
        console.log(err)
      })
  }

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div className="background">
      <div className="forgot-password-container">
        <div className="content">
          <div className="title">THÔNG BÁO</div>
          <div className="title-line-break" />
          <div className="note">
            {loading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /> : ''}
            <div className="verify-email-success-message">
              {successMessage}
            </div>
            <div className="verify-email-error-message">
              {errorMessage}
            </div>
          </div>
          <div style={{marginTop: '20px'}}>
            {successMessage != "" ? <Button size="large" className="primary-btn" onClick={() => {history.push('/login')}}>
              ĐĂNG NHẬP
              </Button> : ''}
          </div>
        </div>
      </div>
    </div>
  );
};
