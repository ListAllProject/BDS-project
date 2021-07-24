import React, { Component, FC } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Seperate } from "../seperate/seperate";
import bathroom from "../../assets/images/bath.png";
import square_meter from "../../assets/images/square_meter.png";
import direction from "../../assets/images/direction.png";
import bed from "../../assets/images/bed.png";
import { Button, Col, Row } from "antd";

interface Props {
  img_url: string;
  product_name: string;
  product_kind: string;
  bedrooms: number;
  square_meters: number | string;
  bathrooms: number;
  direct: string;
  price: number;
}

interface State {}

export const ProductItem: FC<Props> = ({
  img_url,
  product_name,
  product_kind,
  bedrooms,
  square_meters,
  bathrooms,
  direct,
  price,
}) => {
  return (
    <div className="product-item-container">
      <img className="product-img" src={img_url} alt={img_url} />

      <p className="product_kind">{product_kind}</p>
      <Seperate widthPar={80} widthChil={80} style={{ marginBottom: "8%" }} />

      <p className="product_name">{product_name}</p>
      <Row className="detail-info-with-icon__container">
        <Col span={1}></Col>
        <Col span={5} className="detail-info-with-icon__item">
          <img src={bed} className="icon" /> {bedrooms}PN
        </Col>
        <Col
          span={8}
          style={{
            display: "flex",
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          <div className="detail-info-with-icon__item">
            <img src={square_meter} className="icon" />
            <div className="square">{square_meters} ㎡</div>
            <i className="fas fa-info-circle" style={{ marginLeft: 5 }}></i>
          </div>
        </Col>
        <Col span={4} className="detail-info-with-icon__item">
          <img src={bathroom} className="icon" />
          {bathrooms}
        </Col>
        <Col span={6} className="detail-info-with-icon__item">
          <img src={direction} className="icon" />
          {direct}
        </Col>
      </Row>

      <p className="price-title">
        Giá niêm yết <i className="fas fa-info-circle"></i>
      </p>
      <p className="price">{new Intl.NumberFormat("vi-VN").format(price)}</p>

      <div className="buy-btn">Mua ngay</div>
    </div>
  );
};
