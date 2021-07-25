import React, { useState } from "react";
import PropTypes from "prop-types";
import { Carousel, Layout, Form, Select, Row, Col, Slider, Button } from "antd";
import "./selling.scss";
import { Seperate } from "../../components/seperate/seperate";
const { Option } = Select;

export const Selling = () => {
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
          <h2>BẤT ĐỘNG SẢN ĐANG BÁN</h2>
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
              <Col span={8}>
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
              <span style={{ padding: 5, cursor: "pointer" }}>
                <i className="fas fa-plus-square"></i> Tìm kiếm nâng cao
              </span>
              <span style={{ padding: 5, cursor: "pointer" }}>
                XÓA TÌM KIẾM
              </span>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};
