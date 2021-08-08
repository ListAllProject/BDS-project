import { useEffect, useState } from "react";
import { Form, Select, Row, Col, Slider, Button } from "antd";
import "./index.scss";
import { Seperate } from "../../components/seperate/seperate";
import ProjectsAPI from "../../services/APIS/Projects";
const { Option } = Select;

export const SearchingForm = () => {
  const [form] = Form.useForm();
  const [sliderValue, setSliderValue] = useState<[number, number]>([0, 50]);
  // const [listFilters, setListFilters] = useState<[number, number]>([0, 50]);

  useEffect(() => {
    ProjectsAPI.getProjectFiltersList()
      .then((res) => {
        if (res.data.data) {
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="homepage-container center-container">
        <h1>DỰ ÁN</h1>
        <Seperate widthPar={350} widthChil={80} />
        <div className="searching-box">
          <Form form={form} name="searching-box">
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item name="city">
                  <Select
                    style={{ width: "100%" }}
                    placeholder="Tỉnh / Thành phố"
                  >
                    <Option value="1">HCM</Option>
                    <Option value="2">Dak Lak</Option>
                    <Option value="3">Nghe An</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="district">
                  <Select style={{ width: "100%" }} placeholder="Quận / huyện">
                    <Option value="1">HCM</Option>
                    <Option value="2">Dak Lak</Option>
                    <Option value="3">Nghe An</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="owner">
                  <Select style={{ width: "100%" }} placeholder="Chủ đầu tư">
                    <Option value="1">HCM</Option>
                    <Option value="2">Dak Lak</Option>
                    <Option value="3">Nghe An</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
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
              <Col className="select-project" span={8}>
                <Form.Item name="project_kind">
                  <Select
                    style={{ width: "100%", marginTop: "17px" }}
                    placeholder="Loại dự án"
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
                justifyContent: "center",
                // marginTop: 20,
              }}
            >
              <Button size="large" className="primary-btn">
                <i className="fas fa-search"></i> TÌM KIẾM
              </Button>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};
