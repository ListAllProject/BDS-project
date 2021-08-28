import { FC } from "react";

import "./style.scss";
import bathroom from "../../assets/images/bath.png";
import square_meter from "../../assets/images/square_meter.png";
import direction from "../../assets/images/direction.png";
import bed from "../../assets/images/bed.png";
import { Col, Divider, Row } from "antd";

interface Props {
  img_url: string;
  product_name: string;
  product_kind: string;
  bedrooms: string;
  square_meters: number | string;
  bathrooms: number;
  direct: string;
  price: number;
}


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
        <Col
          xxl={8}
          xl={8}
          lg={8}
          md={8}
          sm={8}
          xs={8}
          className="detail-info-with-icon__item bed"
        >
          <img alt="image1" src={bed} className="icon" /> {bedrooms}
        </Col>
        <Col
          xxl={6}
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={6}
          style={{
            display: "flex",
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          <div className="detail-info-with-icon__item">
            <img alt="image2" src={square_meter} className="icon" />
            <div className="square">{square_meters} ㎡</div>
            <i className="fas fa-info-circle" style={{ marginLeft: 5 }}></i>
          </div>
        </Col>
        <Col
          xxl={4}
          xl={4}
          lg={4}
          md={4}
          sm={4}
          xs={4}
          className="detail-info-with-icon__item"
        >
          <img alt="image3" src={bathroom} className="icon" />
          {bathrooms}
        </Col>
        <Col
          xxl={6}
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={6}
          className="detail-info-with-icon__item"
        >
          <img alt="image4" src={direction} className="icon" />
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
