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
          MaTinh: number; MaHuyen: number; MaTT: number; isHome: number;
        }
      | undefined
    >
  >;
}> = ({ setFilterResult }) => {
  const [form] = Form.useForm();
  const [sliderValue, setSliderValue] = useState<[number, number]>([0, 50]);
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
  
  // const onFinish = () => {
  //   let data = {MaTinh : tinh, MaHuyen: huyen, MaTT: status}
  //   ProjectsAPI.getProjectFilter(data).then((res) => {
  //       if (res.data.data) {
  //         setListFilters(res.data.data);
  //       }
  //      });
  // }
  const onFinish = (values: {
   MaTinh: number; MaHuyen: number; MaTT: number; isHome: number;
  }) => {
    setFilterResult((val) => ({
      ...val,
      MaTinh: tinh,
      MaHuyen: huyen,
      MaTT: status,
      isHome : 0
      // MaTinh: values.MaTinh === "all" ? "" : (values.MaTinh as number),
      // district: values.district === "all" ? "" : (values.district as string),
      // investor: values.investor === "all" ? "" : (values.investor as string),
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
                  whiteSpace: "nowrap",
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
