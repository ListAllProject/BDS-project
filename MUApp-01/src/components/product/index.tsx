import React, { Component, FC } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Seperate } from "../seperate/seperate";
import bathroom from "../../assets/images/bath.png";
import square_meter from "../../assets/images/square_meter.png";
import direction from "../../assets/images/direction.png";
import bed from "../../assets/images/bed.png";
import { Button, Col, Divider, Row } from "antd";

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
      <Divider
        type="horizontal"
        style={{
          margin: "auto",
          minWidth: 80,
          width: 80,
          background: "#BE9355",
        }}
      />

      <p className="product_name">{product_name}</p>
      <Row className="detail-info-with-icon__container">
        <Col xxl={2} xl={1} lg={1} md={0} sm={0} xs={0}></Col>
        <Col
          xxl={5}
          xl={5}
          lg={5}
          md={5}
          sm={5}
          xs={5}
          className="detail-info-with-icon__item"
        >
          <img src={bed} className="icon" /> {bedrooms}PN
        </Col>
        <Col
          xxl={7}
          xl={8}
          lg={9}
          md={8}
          sm={8}
          xs={8}
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
        <Col
          xxl={4}
          xl={4}
          lg={3}
          md={3}
          sm={3}
          xs={3}
          className="detail-info-with-icon__item"
        >
          <img src={bathroom} className="icon" />
          {bathrooms}
        </Col>
        <Col
          xxl={6}
          xl={6}
          lg={6}
          md={5}
          sm={5}
          xs={5}
          className="detail-info-with-icon__item"
        >
          <img src={direction} className="icon" />
          {direct}
        </Col>
      </Row>

      <Divider type="horizontal" style={{ margin: 0 }} />

      <p className="price-title">
        Giá niêm yết <i className="fas fa-info-circle"></i>
      </p>
      <p className="price">{new Intl.NumberFormat("vi-VN").format(price)}</p>

      <div className="buy-btn">Mua ngay</div>
    </div>
  );
};
