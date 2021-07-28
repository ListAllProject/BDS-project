import  { useState } from "react";
import { Form, Select, Row, Col, Slider, Button } from "antd";
// import "../home/home.scss";
import "./projects.scss";
import { Seperate } from "../../components/seperate/seperate";
import room1 from "../../assets/images/room_1.png";
import room2 from "../../assets/images/room-2.png";
import room3 from "../../assets/images/room-3.png";
import { ProductItem } from "../../components/product";
const { Option } = Select;

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

export const Projects = () => {
  const [form] = Form.useForm();

  const [sliderValue, setSliderValue] = useState<[number, number]>([0, 50]);

  return (
    <div className="container-selling">
      <div
        className="wrap-content-selling"
        // style={{
        //   backgroundImage: `url(${bgrTable})`,
        //   backgroundRepeat: "repeat-x",
        //   backgroundPositionY: "bottom",
        // }}
      >
        <div className="title-selling">
          <h2>DỰ ÁN</h2>
          <Seperate widthChil={80} widthPar={357} />
        </div>
        <div className="searching-box-sell">
          <Form form={form} name="searching-box">
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item name="city">
                  <Select style={{ width: "100%" }} placeholder="Chọn dự án">
                    <Option value="1">HCM</Option>
                    <Option value="2">Dak Lak</Option>
                    <Option value="3">Nghe An</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="district">
                  <Select style={{ width: "100%" }} placeholder="Chọn tòa">
                    <Option value="1">HCM</Option>
                    <Option value="2">Dak Lak</Option>
                    <Option value="3">Nghe An</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="owner">
                  <Select style={{ width: "100%" }} placeholder="Loại căn hộ">
                    <Option value="1">HCM</Option>
                    <Option value="2">Dak Lak</Option>
                    <Option value="3">Nghe An</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item name="project_kind">
                  <Select
                    style={{ width: "100%", marginTop: "17px" }}
                    placeholder="Hướng ban công"
                  >
                    <Option value="1">HCM</Option>
                    <Option value="2">Dak Lak</Option>
                    <Option value="3">Nghe An</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item
                  name="price"
                  label="Khoảng giá"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                  className="searching_form_label_slider"
                >
                  <Slider
                    onChange={(value) => setSliderValue(value)}
                    range
                    tooltipVisible={false}
                    defaultValue={[0, 50]}
                    value={sliderValue}
                    marks={{
                      [sliderValue[0]]: {
                        style: {
                          color: "#000000",
                        },
                        label: <strong>{sliderValue[0]} tỷ</strong>,
                      },
                      [sliderValue[1]]: {
                        style: {
                          color: "#000000",
                        },
                        label: <strong>{sliderValue[1]} tỷ</strong>,
                      },
                    }}
                  />
                </Form.Item>
              </Col>
              <Col className="select-box-status"  span={8}>
                <Form.Item name="project_kind">
                  <Select
                    style={{ width: "100%", marginTop: "17px" }}
                    placeholder="Tình trạng căn hộ"
                  >
                    <Option value="1">HCM</Option>
                    <Option value="2">Dak Lak</Option>
                    <Option value="3">Nghe An</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#BE9355",
                // marginTop: 20,
              }}
            >
              <span
                style={{
                  padding: 5,
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: 14,
                }}
              >
                <i className="fas fa-plus-square"></i> Tìm kiếm nâng cao
              </span>
              <span
                style={{
                  padding: 5,
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: 14,
                }}
              >
                XÓA TÌM KIẾM
              </span>
            </Row>
          </Form>
        </div>
      </div>
      <div className="homepage-container" style={{ marginBottom: 0 }}>
        <div className="project-container popular-items">
          <Row className="popular-items__row">
            {data.map((item, index) => (
              <Col
                span={7}
                key={index}
                className="col-contain-item"
                style={{ marginBottom: 60 }}
              >
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button className="primary-btn" size="large">
          XEM THÊM{" "}
          <i
            className="fas fa-sort-down"
            style={{ margin: "0px 0px 5px 10px" }}
          ></i>
        </Button>
      </div>
    </div>
  );
};
