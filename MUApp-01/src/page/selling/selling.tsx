import { useEffect, useState } from "react";
import { Form, Select, Row, Col, Slider, Button, Spin } from "antd";
import "./selling.scss";
import { Seperate } from "../../components/seperate/seperate";
import { ProductItem } from "../../components/product";
import ProjectsBeelandAPI from "../../services/APIBEELAND/GetProject";
import { priceObj, productsObj, projectObj } from "../../services/models";
import { Store } from "antd/lib/form/interface";
const { Option } = Select;

export const Selling = () => {
  const [form] = Form.useForm();

  const [sliderFloor, setSliderFloor] = useState<[number, number]>([0, 5]);
  const [sliderSquare, setSliderSquare] = useState<[number, number]>([0, 50]);
  const [listProducts, setListProducts] = useState<productsObj[]>();
  const [listProjects, setListProjects] = useState<projectObj[]>();
  const [listPrices, setListPrices] = useState<priceObj[]>();
  const [listBuilding, setListBuilding] = useState<any[]>();
  const [listTypes, setListTypes] = useState<any[]>();
  const [direct, setDirect] = useState<any[]>();
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    limit: 100,
    page: 1,
  });
  const defaultData = {
    TenCTDKVT: "beesky",
    MaDA: 0,
    MaTN: 0,
    MaHuong: 0,
    MaLM: 0,
    MinFloor: 5,
    MaxFloor: 15,
    Price: 0,
    MinDT: 0,
    MaxDT: 132,
  }
  const [model, setModel] = useState(defaultData);
  const fetchDatas = () => {
    console.log(model, 99)
    ProjectsBeelandAPI.getListProducts({
      TenCTDKVT: "beesky",
      MaDA: model.MaDA,
      MaTN: model.MaTN,
      MaHuong: model.MaHuong,
      MaLM: model.MaLM,
      MinFloor: model.MinFloor,
      MaxFloor: model.MaxFloor,
      Price: model.Price,
      MinDT: model.MinDT,
      MaxDT: model.MaxDT,
      Offset: pagination.page,
      Limit: pagination.limit,
    }).then((res) => {
      if (res.data.data) {
        setListProducts(res.data.data);
      }
      setLoading(false);
    });
  }
  useEffect(() => {
    fetchDatas()
  }, [model, pagination.limit]);

  useEffect(() => {
    ProjectsBeelandAPI.getProjectFilter().then((res) => {
      if (res.data.data && res.data.data.length !== 0) {
        setListProjects(res.data.data);
      }
    });
    ProjectsBeelandAPI.getPrice().then((res) => {
      if (res.data.data && res.data.data.length !== 0) {
        setListPrices(res.data.data);
      }
    });

    // ProjectsBeelandAPI.getTypeofApartment().then((res) => {
    //   if (res.data.data && res.data.data.length !== 0) {
    //     setListTypes(res.data.data);
    //   }
    // });
    ProjectsBeelandAPI.getDirect().then((res) => {
      if (res.data.data && res.data.data.length !== 0) {
        setDirect(res.data.data);
      }
    });
  }, []);
  const onChangDA = (e: any) => {
    ProjectsBeelandAPI.getBuildingByProject(e).then((res) => {
      if (res.data.data && res.data.data.length !== 0) {
        setListBuilding(res.data.data);
      }
    });
  }
  const onChangTN = (e: any) => {
    ProjectsBeelandAPI.getTypeofApartment(e).then((res) => {
      if (res.data.data && res.data.data.length !== 0) {
        setListTypes(res.data.data);
      }
    });
  }
  const onFinish = (values: Store) => {
    if (values.floor) {
      Object.assign(values, {
        MinFloor: values.floor[0],
        MaxFloor: values.floor[1],
      });
    }
    if (values.square) {
      Object.assign(values, {
        MinDT: values.square[0],
        MaxDT: values.square[1],
      });
    }

    setModel((val) => ({
      ...val,
      MaDA: values.MaDA ? values.MaDA : 0,
      MaTN: values.MaTN ? values.MaTN : 0,
      MaHuong: values.MaHuong ? values.MaHuong : 0,
      MaLM: values.MaLM ? values.MaLM : 0,
      MinFloor: values.MinFloor ? values.MinFloor : 5,
      MaxFloor: values.MaxFloor ? values.MaxFloor : 15,
      Price: values.Price ? values.Price : 0,
      MinDT: values.MinDT ? values.MinDT : 0,
      MaxDT: values.MaxDT ? values.MaxDT : 132,
      Offset: pagination.page,
      Limit: pagination.limit,
    }));
  };

  return (
    <div className="container-selling">
      <div
        className="wrap-content-selling"
      >
        <div className="title-selling">
          <h2>CHUNG CƯ</h2>
          <Seperate widthChil={80} widthPar={357} />
        </div>
        <div className="searching-box-sell">
          <Form form={form} name="searching-box-sell" onFinish={onFinish}>
            <Row gutter={16}>
              <Col span={8} className="mb-20">
                <Form.Item name="MaDA">
                  <Select style={{ width: "100%" }} placeholder="Chọn dự án" onChange={onChangDA}>
                    {listProjects?.map((item) => (
                      <Option value={item.ID} key={item.ID}>
                        {item.TenDA}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8} className="mb-20">
                <Form.Item name="MaTN">
                  <Select style={{ width: "100%" }} placeholder="Chọn tòa" onChange={onChangTN}>
                    {listBuilding?.map((item: any) => (
                      <Option value={item.ID} key={item.ID}>
                        {item.TenTN}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8} className="mb-20">
                <Form.Item name="Price">
                  <Select
                    style={{ width: "100%" }}
                    placeholder="Chọn khoảng giá"
                  >
                    {listPrices?.map((item) => (
                      <Option value={item.ID} key={item.ID}>
                        {item.TenKhoangGia}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              {showAdvanced ? (
                <>
                  <Col span={8}>
                    <Form.Item
                      name="floor"
                      label="Khoảng tầng"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                      className="searching_form_label_slider"
                    >
                      <Slider
                        key="floor"
                        onChange={(value) => setSliderFloor(value)}
                        range
                        tooltipVisible={false}
                        defaultValue={[0, 5]}
                        min={0}
                        max={15}
                        value={sliderFloor}
                        marks={{
                          [sliderFloor[0]]: {
                            style: {
                              color: "#000000",
                            },
                            label: <strong>{sliderFloor[0]} tầng</strong>,
                          },
                          [sliderFloor[1]]: {
                            style: {
                              color: "#000000",
                            },
                            label: <strong>{sliderFloor[1]} tầng</strong>,
                          },
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      name="square"
                      label="Khoảng diện tích"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                      className="searching_form_label_slider"
                    >
                      <Slider
                        key="square"
                        onChange={(value) => setSliderSquare(value)}
                        range
                        tooltipVisible={false}
                        defaultValue={[0, 50]}
                        min={0}
                        max={132}
                        value={sliderSquare}
                        marks={{
                          [sliderSquare[0]]: {
                            style: {
                              color: "#000000",
                            },
                            label: <strong>{sliderSquare[0]} m2</strong>,
                          },
                          [sliderSquare[1]]: {
                            style: {
                              color: "#000000",
                            },
                            label: <strong>{sliderSquare[1]} m2</strong>,
                          },
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name="MaLM">
                      <Select
                        style={{ width: "100%" }}
                        placeholder="Loại căn hộ"
                      >
                        {listTypes?.map((item, index) => (
                          <Option key={item.ID} value={item.ID}>
                            {item.TenLoaiMau}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name="MaHuong">
                      <Select
                        style={{ width: "100%", marginTop: "17px" }}
                        placeholder="Hướng cửa"
                      >
                        {direct?.map((item, index) => (
                          <Option key={index} value={item.ID}>
                            {item.TenPhuongHuong}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                </>
              ) : null}
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
                onClick={() => setShowAdvanced(!showAdvanced)}
              >
                {!showAdvanced ? (
                  <>
                    <i className="fas fa-plus-square"></i> Tìm kiếm nâng cao
                  </>
                ) : (
                  <>
                    <i className="far fa-minus-square"></i> Tìm kiếm thường
                  </>
                )}
              </span>
              <Button size="large" className="primary-btn" htmlType="submit">
                <i className="fas fa-search"></i> TÌM KIẾM
              </Button>
              <span
                style={{
                  padding: 5,
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: 14,
                }}
                onClick={() => { form.resetFields(); setModel(defaultData) }}
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
            {listProducts && listProducts.length !== 0 ? (
              listProducts.map((item, index) => (
                <Col
                  span={7}
                  key={index}
                  className="col-contain-item"
                  style={{ marginBottom: 60 }}
                >
                  <ProductItem
                    img_url={item.HinhAnh}
                    product_name={`Căn hộ ${item.KyHieu} - ${item.TenKhu}`}
                    product_kind={item.TenDA}
                    bedrooms={item.SoPhongNgu}
                    square_meters={item.DTThongThuy}
                    bathrooms={parseInt(item.SoPhongVS.replace(" VS", ""))}
                    direct={item.TenPhuongHuong}
                    price={item.TongGiaTriHDMB}
                  />
                </Col>
              ))
            ) : (
              <div className="spinner-contain">
                <Spin />
                <p style={{ marginLeft: 10 }}>Đang load dữ liệu...</p>
              </div>
            )}
          </Row>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          className="primary-btn"
          size="large"
          onClick={() => {
            setPagination((val) => ({ ...val, limit: pagination.limit + 12 }));
            setLoading(true);
          }}
          loading={loading}
        >
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
