import { UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Pagination,
  Row,
  Select, Table
} from "antd";
import Nodata from "assets/images/Nodata.png";
import MyContext from "components/myContext";
import { useEffect, useState } from "react";
import ProjectsAPI from "services/APIBEELAND/Booking";
import { customTime } from "services/helper";
import { Booking } from "services/models";
import "./listTransfer.scss";


const { Option } = Select;
const dateFormat = "YYYY/MM/DD";
const customFormat = (value: { format: (arg0: any) => any }) =>
  `Từ ngày: ${value.format(dateFormat)}`;
const customFormat2 = (value: { format: (arg0: any) => any }) =>
  `Đến ngày: ${value.format(dateFormat)}`;

export interface BodyBooking {
  TuNgay: string;
  DenNgay: string;
  MaTT?: string;
  DuAn?: string;
  inputSearch?: string;
  Offset: number;
  Limit: number;
}

export interface Status {
  MaTT: number;
  TenTT: string;
}

export interface Project {
  MaDA: number;
  TenDA: string;
}

export const ListTransfer = () => {
  const [form] = Form.useForm();
  const [selectedTab, setselectedTab] = useState<Number>(1);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [statusList, setStatusList] = useState<Status[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [offset, setOffset] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = () => { };
  const columns = [
    {
      title: "Ngày ký",
      width: 130,
      dataIndex: "ngayKy",
      key: "NgayKy",
      fixed: "left",
      render: (val: any) => {
        return (
          <span className="row-item1" style={{ display: "table-caption" }}>
            {customTime(val, "DD/MM/YYYY HH:mm")}
          </span>
        );
      },
    },
    {
      title: "Tên dự án",
      width: 130,
      dataIndex: "tenDA",
      key: "TenDA",
      fixed: "left",
      render: (val: any) => {
        return <span className="row-item1">{val}</span>;
      },
    },
    {
      title: "Mã sản phẩm",
      dataIndex: "kyHieu",
      key: "KyHieu",
      width: 100,
      render: (val: any) => {
        return <span className="row-item1">{val}</span>;
      },
    },
    {
      title: "Khách hàng",
      dataIndex: "tenKH",
      key: "TenKH",
      width: 100,
      render: (val: any) => {
        return <span className="row-item1">{val}</span>;
      },
    },
    {
      title: "Giá trị HĐ",
      dataIndex: "tongGiTriHD",
      key: "TongGiTriHD",
      width: 100,
      render: (val: any) => {
        return (
          <span className="row-item2">
            {val &&
              new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "VND",
              }).format(val)}
          </span>
        );
      },
    },
    {
      title: "Giá trị cọc",
      dataIndex: "soTienGC",
      key: "SoTienGC",
      width: 100,
      render: (val: any) => {
        return (
          <span className="row-item2">
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "VND",
            }).format(val)}
          </span>
        );
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "tenTT",
      key: "TenTT",
      width: 130,
      render: (val: any) => {
        return <span className="row-item1">{val}</span>;
      },
    },
    {
      title: "",
      dataIndex: "HĐ",
      key: "HĐ",
      width: 150,
      render: (val: any, data: any) => {
        return ((data.ThanhToan === 0) && <a href={`/v/booking/${data.MaSP}/thanh-toan-chuyen-khoan/${data.MaPGC}`} className="row-item1" style={{ background: "#cd9844", borderRadius: "5px", padding: "5px 8px", color: "#fff" }}><i className="far fa-money-check-alt"></i> Thanh toán</a>)
      },
    },
  ];

  const getAllDuAnId = () => {
    if (projects.length > 0) {
      const arr = projects.map((item) => item.MaDA);
      return arr.join(",");
    }
  };

  const getAllStatusId = () => {
    if (statusList.length > 0) {
      const arr = statusList.map((item) => item.MaTT);
      return arr.join(",");
    }
  };

  const onSearch = (offsetVal: number = 1) => {
    const data: BodyBooking = {
      TuNgay: "2000-01-01",
      DenNgay: "2022-01-26",
      Offset: 1,
      Limit: 10,
    };
    setOffset(offsetVal)
    const temp = form.getFieldsValue();
    data.TuNgay = customTime(temp.Date1, "YYYY-MM-DD") || "2000-01-01";
    data.DenNgay = customTime(temp.Date2, "YYYY-MM-DD") || "2022-01-26";
    data.Limit = 10;
    data.Offset = offsetVal || 1;
    data.MaTT = temp.status > 0 ? temp.status.toString() : getAllStatusId();
    data.MaTT = `,${data.MaTT},`
    data.DuAn = temp.project > 0 ? temp.project.toString() : getAllDuAnId();
    data.DuAn = `,${data.DuAn},`
    data.inputSearch = temp.textSearch || ""
    getListBooking(data);
  };

  useEffect(() => {
    const data: BodyBooking = {
      TuNgay: "2000-01-01",
      DenNgay: "2022-01-26",
      MaTT: ",1,16,",
      DuAn: ",132,268,",
      inputSearch: "A-05-04",
      Offset: 1,
      Limit: 10,
    };
    getListBooking(data);
    getStatus();
    getProjects();
  }, []);

  const getProjects = () => {
    ProjectsAPI.getListProject().then((rs) => {
      if (rs.status === 200) {
        setProjects(rs.data.data);
      }
    });
  };

  const getStatus = () => {
    ProjectsAPI.getListStatus().then((rs) => {
      if (rs.status === 200) {
        setStatusList(rs.data.data);
      }
    });
  };

  const getListBooking = (data: BodyBooking) => {
    setLoading(true);
    ProjectsAPI.getListBooking(data)
      .then((rs) => {
        if (rs.status === 200) {
          setTotal(rs.data.totalRows)
          setBookings(rs.data.daTa);
        }
      })
      .catch(() => { })
      .then(() => setLoading(false));
  };


  return (
    <MyContext.Consumer>
      {(user) => {
        return (
          <div key="1" className="container-list-tranfer">
            <div className="wrap-list-tranfer">
              <div className="wrap-infor-user">
                <div className="top">
                  <span>
                    <Avatar size={24} icon={<UserOutlined />} />
                  </span>
                  <div
                    style={{
                      marginLeft: 12,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span className="name-user">{user}</span>
                    <span>Khách hàng</span>
                  </div>
                </div>
                <div className="bottom">
                  <div
                    onClick={() => setselectedTab(1)}
                    className={
                      selectedTab === 1 ? "item-choose focus" : "item-choose"
                    }
                  >
                    <i
                      style={{ marginRight: 5 }}
                      className="fas fa-exchange"
                    ></i>{" "}
                    Danh sách giao dịch
                  </div>
                  <div
                    onClick={() => setselectedTab(2)}
                    className={
                      selectedTab === 2 ? "item-choose focus" : "item-choose"
                    }
                  >
                    <i style={{ marginRight: 5 }} className="fas fa-users"></i>{" "}
                    Danh sách khách hàng
                  </div>
                  <div
                    onClick={() => {
                      window.location.href = "/login";
                      localStorage.removeItem("pathname");
                      localStorage.removeItem("token");
                    }}
                    className="item-choose"
                  >
                    <i
                      style={{ marginRight: 5 }}
                      className="fas fa-sign-out-alt"
                    ></i>{" "}
                    Đăng xuất
                  </div>
                </div>
              </div>

              <div className="wrap-table-list">
                {selectedTab === 1 && (
                  <>
                    <div className="transfer-title">DANH SÁCH GIAO DỊCH</div>
                    <div className="wrap-fillter">
                      <Form
                        form={form}
                        name="searching-box-sell"
                        onFinish={onFinish}
                      >
                        <Row gutter={16}>
                          <Col xxl={8} xl={8} lg={8} sm={24} xs={24}>
                            <Form.Item name="textSearch">
                              <Input
                                style={{ width: "100%" }}
                                placeholder="Nhập tên giao dịch"
                              ></Input>
                            </Form.Item>
                          </Col>
                          <Col xxl={8} xl={8} lg={8} sm={24} xs={24}>
                            <Form.Item name="status">
                              <Select
                                style={{ width: "100%" }}
                                placeholder="Trạng thái"
                              >
                                <Option value={0} key={0}>
                                  Tất cả trạng thái
                                </Option>
                                {statusList?.map((item: Status) => (
                                  <Option value={item.MaTT} key={item.MaTT}>
                                    {item.TenTT}
                                  </Option>
                                ))}
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col xxl={8} xl={8} lg={8} sm={24} xs={24}>
                            <Form.Item name="project">
                              <Select
                                style={{ width: "100%" }}
                                placeholder="Tất cả dự án"
                              >
                                <Option value={0} key={0}>
                                  Tất cả dự án
                                </Option>
                                {projects?.map((item: Project) => (
                                  <Option value={item.MaDA} key={item.MaDA}>
                                    {item.TenDA}
                                  </Option>
                                ))}
                              </Select>
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row gutter={16}>
                          <Col xxl={8} xl={8} lg={8} sm={24} xs={24}>
                            <Form.Item name="Date1">
                              <DatePicker
                                placeholder="Từ Ngày"
                                format={customFormat}
                                renderExtraFooter={() => "extra footer"}
                              />
                            </Form.Item>
                          </Col>
                          <Col xxl={8} xl={8} lg={8} sm={24} xs={24}>
                            <Form.Item name="Date2">
                              <DatePicker
                                placeholder="Đến ngày"
                                format={customFormat2}
                                renderExtraFooter={() => "extra footer"}
                              />
                            </Form.Item>
                          </Col>
                          <Col xxl={8} xl={8} lg={8} sm={24} xs={24}>
                            <Button
                              onClick={() => onSearch()}
                              size="large"
                              style={{ width: "100%" }}
                              className="primary-btn"
                            >
                              <i className="fas fa-search"></i> TÌM KIẾM
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                    <div className="wrap-table" style={{ marginTop: 40 }}>
                      {loading || (bookings && bookings.length > 0) ? (
                        <Table
                          loading={loading}
                          columns={columns as any}
                          dataSource={bookings}
                          scroll={{ x: 790 }}
                          pagination={false}
                        />
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <img width={80} src={Nodata} alt="nodata" />
                          <span style={{ marginTop: 20 }}>
                            Bạn chưa có giao dịch nào
                          </span>
                        </div>
                      )}
                      <div className="wrap-pagination">
                        <Pagination
                          current={offset}
                          onChange={(val) => {
                            onSearch(val);
                            setOffset(val);
                          }}
                          pageSize={10}
                          total={total || 0}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};
