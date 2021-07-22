import React from 'react';
import { Input } from 'antd';
import logo from "../../assets/images/logo.png";
import "./header.scss";

export const HeaderWrap = () => {
    return (
        <div className="container-header">
            <div className="logo">
                    <img src={logo} />
            </div>
            <div className="wrap-right">
                <div className="top-header">
                    <Input addonAfter="NHẬP" style={{ maxWidth: "300px" }} placeholder="Nhập SĐT nhận ưu đãi" ></Input>
                    <span style={{ padding: "0px 20px", minWidth: 80, color: "#BE9355" }}> <i style={{ color: "#011769" }} className="fad fa-comment-alt-lines"></i> Tư vấn</span>
                    <span style={{ minWidth: 95, color: "#BE9355", fontWeight: "bold" }} ><i style={{ color: "#011769" }} className="fad fa-phone-volume"></i> 0123456787</span>
                </div>
                <div className="div-row-space"></div>
                <div className="bottom-header">
                    <div className="left">
                        <span style={{ color: "#BE9355", marginRight: 5 }}><i className="fal fa-home"></i></span>
                        <span className="item-text" >ĐANG BÁN <i style={{ color: "#BE9355" }} className="fas fa-caret-down"></i></span>
                        <span className="item-text" >SẮP BÁN <i style={{ color: "#BE9355" }} className="fas fa-caret-down"></i></span>
                        <span className="item-text" >DỰ ÁN <i style={{ color: "#BE9355" }} className="fas fa-caret-down"></i></span>
                        <span className="item-text" >HỖ TRỢ <i style={{ color: "#BE9355" }} className="fas fa-caret-down"></i></span>
                    </div>
                    <div className="right">
                        <h3>BẢNG GIÁ TRỰC TUYẾN</h3>
                        <span className="item-text">ĐĂNG KÝ</span>
                        <span className="div-col-space"></span>
                        <span className="item-text">ĐĂNG NHẬP</span>
                        <span><i style={{ color: "#011769" }} className="fal fa-shopping-cart"></i></span>

                    </div>

                </div>
            </div>
        </div>
    );
}


