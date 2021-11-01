import { Button, Col, Form, Row, Select } from "antd";
import { FC, useEffect, useState } from "react";
import { Seperate } from "../../components/seperate/seperate";
import ProjectsAPI from "../../services/APIS/Projects";
import { ProjectFilterObj } from "../../services/models";
import "./index.scss";
const { Option } = Select;

export const SearchingForm: FC<{
  setFilterResult: React.Dispatch<
    React.SetStateAction<
      | {
          MaTinh: number;
          MaHuyen: number;
          MaTT: number;
          isHome: number
        }
      | undefined
    >
  >;
}> = ({ setFilterResult }) => {
  const [form] = Form.useForm();
 const [tinh, setTinh] = useState(0);
  const [huyen, setHuyen] = useState(0);
  const [status, setStatus] = useState(0);

  const [listFilters, setListFilters] = useState<any[]>([]);
  const [listDistrict, setListDistrict] = useState<any[]>([]);
  const [listStatus, setListStatus] = useState<any[]>([]);

 const Fetch = () => {
    ProjectsAPI.getProjectFiltersList().then((res) => {
        if (res.data.data) {
          setListFilters(res.data.data);
        }
      });
  }
  useEffect(() => {
    Fetch();
    ProjectsAPI.getProjectFiltersStatus().then((res) => {
      if (res.data.data) {
        setListStatus(res.data.data);
      }
    });
  }, []);

  const onFinish = (values: {
    MaTinh: number;
    MaHuyen: number;
    MaTT: number;
    isHome: number
  }) => {
    setFilterResult((val) => ({
      ...val,
      MaTinh: tinh,
      MaHuyen: huyen,
      MaTT: status,
      isHome : 1
    }));
  };

  const onchangeProvice = (e:any) => {
    setTinh(e)
    listFilters.map(item => {
      if (item.maTinh == e) {
        setListDistrict(item.listHuyen)
      }
    })
  }
  const onchangeDis = (e:any) => {
    setHuyen(e)
  }
   const onchangeStatus = (e:any) => {
    setStatus(e)
   }
  
  return (
    <>
      <div className="homepage-container center-container">
        <h1>DỰ ÁN</h1>
        <Seperate widthPar={350} widthChil={80} />
        <div className="searching-box">
          <Form form={form} name="searching-box" onFinish={onFinish}>
            <Row gutter={16}>
              <Col xxl={8} xl={8} lg={8} sm={8} xs={24}>
                <Form.Item name="city">
                  <Select
                    style={{ width: "100%" }}
                    placeholder="Tỉnh / Thành phố"
                    onChange={(e) => onchangeProvice(e)}

                  >
                       {listFilters && listFilters.length > 0
                      ? listFilters.map(item => 
                          <Option key={item.maTinh} value={item.maTinh}>
                            {item.tenTinh}
                          </Option>
                        )
                      : null}
                  </Select>
                </Form.Item>
              </Col>
              <Col xxl={8} xl={8} lg={8} sm={8} xs={24}>
                <Form.Item name="district">
                  <Select style={{ width: "100%" }} placeholder="Quận / huyện"
                  onChange={(e) => onchangeDis(e)}
                  >
                   {listDistrict && listDistrict.length > 0
                      ? listDistrict.map((item) => (
                          <Option key={item.maHuyen} value={item.maHuyen}>
                            {item.tenHuyen}
                          </Option>
                      ))
                       : null}
                  </Select>
                </Form.Item>
              </Col>
              <Col xxl={8} xl={8} lg={8} sm={8} xs={24}>
                <Form.Item name="investor">
                  <Select style={{ width: "100%" }} placeholder="Trạng thái"
                   onChange={(e) => onchangeStatus(e)}
                  
                  >
                    {listStatus && listStatus.length > 0
                      ? listStatus.map((item) => (
                          <Option key={item.maTT} value={item.maTT}>
                            {item.tenTT}
                          </Option>
                        ))
                      : null}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            {/* <Row gutter={16}>
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
            </Row> */}
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
