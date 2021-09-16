import { FC, useEffect, useState } from "react";
import { Form, Select, Row, Col, Slider, Button } from "antd";
import "./home.scss";
import { Seperate } from "../../components/seperate/seperate";
import { ProjectFilterObj } from "services/models";
import ProjectsAPI from "services/APIS/Projects";
const { Option } = Select;

export const SearchingForm: FC<{
  setFilterResult: React.Dispatch<
    React.SetStateAction<
      | {
          city: string;
          district: string;
          investor: string;
        }
      | undefined
    >
  >;
}> = ({ setFilterResult }) => {
  const [form] = Form.useForm();
  const [sliderValue, setSliderValue] = useState<[number, number]>([0, 50]);
  const [listFilters, setListFilters] = useState<ProjectFilterObj>();

  useEffect(() => {
    ProjectsAPI.getProjectFiltersList("BEESKY").then((res) => {
      if (res.data.data) {
        setListFilters(res.data.data);
      }
    });
  }, []);

  const onFinish = (values: {
    city: string;
    district: string;
    investor: string;
  }) => {
    setFilterResult((val) => ({
      ...val,
      city: values.city === "all" ? "" : (values.city as string),
      district: values.district === "all" ? "" : (values.district as string),
      investor: values.investor === "all" ? "" : (values.investor as string),
    }));
  };

  return (
    <>
      <div className="homepage-container center-container">
        <h1>TÌM KIẾM</h1>
        <Seperate widthPar={350} widthChil={80} />
        <p className="intro-line">
          Chọn các tiêu chí để tìm kiếm dự án bạn mong muốn
        </p>

        <div className="searching-box">
          <Form form={form} name="searching-box" onFinish={onFinish}>
            <Row gutter={16}>
              <Col xxl={8} xl={8} lg={8} sm={8} xs={24}>
                <Form.Item name="city">
                  <Select
                    style={{ width: "100%" }}
                    placeholder="Tỉnh / Thành phố"
                  >
                    {listFilters?.cities && listFilters?.cities.length > 0
                      ? listFilters?.cities.map((item) => (
                          <Option key={item} value={item}>
                            {item}
                          </Option>
                        ))
                      : null}
                  </Select>
                </Form.Item>
              </Col>
              <Col xxl={8} xl={8} lg={8} sm={8} xs={24}>
                <Form.Item name="district">
                  <Select style={{ width: "100%" }} placeholder="Quận / huyện">
                    {listFilters?.districts && listFilters?.districts.length > 0
                      ? listFilters?.districts.map((item) => (
                          <Option key={item} value={item}>
                            {item}
                          </Option>
                        ))
                      : null}
                  </Select>
                </Form.Item>
              </Col>
              <Col xxl={8} xl={8} lg={8} sm={8} xs={24}>
                <Form.Item name="investor">
                  <Select style={{ width: "100%" }} placeholder="Chủ đầu tư">
                    {listFilters?.investors && listFilters?.investors.length > 0
                      ? listFilters?.investors.map((item) => (
                          <Option key={item} value={item}>
                            {item}
                          </Option>
                        ))
                      : null}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <div
              style={{
                display: "flex",
                width: "100%",
                // float: "right",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ width: "10%" }}></div>
              <Button size="large" className="primary-btn" htmlType="submit">
                <i className="fas fa-search"></i> TÌM KIẾM
              </Button>

              <a
                style={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 14,
                }}
                type="button"
                onClick={() => form.resetFields()}
              >
                Xóa tìm kiếm
              </a>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
