import React from 'react';
import "./forgotpassw.scss";
import { Input } from 'antd';

export const Forgotpassw = () => {
    return (
        <div className="background">
            <div className="forgot-password-container">
                <div className="content">
                    <div className="title">
                        QUÊN MẬT KHẨU
                    </div>
                    <div className="title-line-break" />
                    <div className="note">
                        Vui lòng nhập địa chỉ email Quý khách đã đăng ký để đặt lại mật khẩu.
                    </div>
                    <div className="body">
                        <Input placeholder="Email" prefix={<i style={{ fontSize: 12 }} className="fas fa-envelope" />} />
                    </div>
                    <div className="footer">
                        <input type="button" className="send-button" value="GỬI"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

