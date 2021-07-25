import React from "react";
import { Carousel, Layout, Form, Select, Row, Col, Slider, Button } from "antd";
import room1 from "../../assets/images/room_1.png";
import room2 from "../../assets/images/room-2.png";
import room3 from "../../assets/images/room-3.png";
import "./home.scss";
import { Seperate } from "../../components/seperate/seperate";
import { ProductItem } from "../../components/product";

const data = [
  {
    img_url: room1,
    product_name: "Căn hộ S1.092205 - Tòa S1.09",
    product_kind: "Vinhomes Ocean Park",
    bedrooms: 3,
    square_meters: "73,9",
    bathrooms: 2,
    direct: "ĐB-TB",
    price: 2840694000,
  },
  {
    img_url: room2,
    product_name: "Căn hộ S1.092205 - Tòa S1.09",
    product_kind: "Vinhomes Ocean Park",
    bedrooms: 3,
    square_meters: "73,9",
    bathrooms: 2,
    direct: "ĐB-TB",
    price: 2840694000,
  },
  {
    img_url: room3,
    product_name: "Căn hộ S1.092205 - Tòa S1.09",
    product_kind: "Vinhomes Ocean Park",
    bedrooms: 3,
    square_meters: "73,9",
    bathrooms: 2,
    direct: "ĐB-TB",
    price: 2840694000,
  },
];

export const PopularItems = () => {
  return (
    <>
      <div className="homepage-container">
        <h1>Bất động sản nổi bật</h1>
        <Seperate
          widthPar={350}
          widthChil={80}
          style={{ marginBottom: "3%" }}
        />

        <div className="project-container popular-items">
          <Row className="popular-items__row">
            {data.map((item, index) => (
              <Col span={7} key={index} className="col-contain-item">
                <ProductItem
                  img_url={item.img_url}
                  product_name={item.product_name}
                  product_kind={item.product_kind}
                  bedrooms={item.bedrooms}
                  square_meters={item.square_meters}
                  bathrooms={item.bathrooms}
                  direct={item.direct}
                  price={item.price}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};
