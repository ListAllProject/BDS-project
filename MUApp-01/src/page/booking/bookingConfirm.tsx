import { Button, Form, Input, Modal, Select } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BookingAPI from "services/APIBEELAND/Booking";
import List from "rc-virtual-list";
// import "react-select/dist/react-select.css";
// import "react-virtualized-select/styles.css";
import {
  AddBookingRequest,
  Huyen,
  Tinh,
  Xa,
  InfoKhachHang,
  productsObj,
  Voucher,
} from "services/models";
import "./booking.scss";
const { Option } = Select;
const { forwardRef, useRef, useImperativeHandle } = React;

interface detailParams {
  maSP: string;
}

interface searchData {
  searchText: string;
}

interface BookingData {
  name: string;
  phoneNumber: string;
  email?: string;
  cmnd?: string;
  address?: string;
  city?: any;
  district?: any;
  ward?: any;
}

interface props {
  onSetLoading: (val: boolean) => void
}

export const BookingConfirm = forwardRef((props: props, ref) => {
  const history = useHistory();
  const [listTinhs, setListTinhs] = useState<Tinh[]>([]);
  const [selectedTinh, setSelectedTinh] = useState<Tinh>();
  const [selectedHuyen, setSelectedHuyen] = useState<Huyen>();
  const [selectedXa, setSelectedXa] = useState<Xa>();
  const [form] = Form.useForm();
  // const [bookingInformation, setBookingInformation] = useState<AddBookingRequest>();
  const [product, setProduct] = useState<productsObj>();
  const [voucher, setVoucher] = useState<Voucher>();
  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [dataKH, setDataKH] = useState<InfoKhachHang[]>([]);
  const [selectedKH, setSelectedKH] = useState<InfoKhachHang | null>(null);

  useEffect(() => {
    BookingAPI.getAddress()
      .then((res) => {
        if (res.data.status === 2000) {
          setListTinhs(res.data.data);
        }
      })
      .catch((err) => {
      })
      .finally(() => {
      });
  }, []) 

  useImperativeHandle(ref, () => ({
    onBooking(product: productsObj, voucher: Voucher) {
      if (product) {
        setProduct(product);
        setVoucher(voucher);
        form.submit();
      }
    },
  }));

  // Add booking handle
  const onFinishBooking = (data: BookingData) => {
    props.onSetLoading(true)
    BookingAPI.addKH({
      DiDong: data.phoneNumber,
      TenKH: data.name,
      DiaChi: data.address,
      Email: data.email,
      MaTinh: data.city,
      MaHuyen: data.district,
      MaXa: data.ward,
      SoCMND: data.cmnd,
    })
      .then((res) => {
        if (res.data.status === 2000) {
          const maKH = res.data.data;
          if (product) {
            const addBookingRequest: AddBookingRequest = {
              GiaChuaVAT: product.TongGiaChuaVAT,
              GiaThongThuy: product.TongGiaChuaVAT,
              MGD: 1,
              MaNhomGioHang: product.MaNhomGioHang,
              MaSP: product.MaSP,
              PhiBaoTri: product.PhiBaoTri,
              TongGiaTriHD: product.TongGiaTriHDMB,
              MaKH: maKH,
              MaVoucher: voucher?.ID,
            }

            BookingAPI.addBooking(addBookingRequest)
              .then((res) => {
                if (res.data.status === 2000) {
                  history.push(
                    `/v/booking/${addBookingRequest.MaSP}/thanh-toan-chuyen-khoan/${res.data.data}`
                  );
                } else if (res.data.status === 2002) {
                  Modal.info({
                    title: 'Thông Báo',
                    content: (
                      <div>
                        {res.data.message}
                      </div>
                    ),
                    onOk() { },
                  });
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {
        props.onSetLoading(false)
      });
  };

  // Address handle
  const onSelectedTinhChange = (value: any) => {
    form.setFieldsValue({
      district: null,
      ward: null
    })
    const maTinh = parseInt(value);
    const tinh = listTinhs.find((e) => e.maTinh === maTinh);
    setSelectedTinh(tinh);
  };
  const onSelectedHuyenChange = (value: any) => {
    form.setFieldsValue({
      ward: null
    })
    const maHuyen = parseInt(value);
    const huyen = selectedTinh?.listHuyen.find((e) => e.maHuyen === maHuyen);
    setSelectedHuyen(huyen);
  };
  const onSelectedXaChange = (value: any) => {
    const maXa = parseInt(value);
    const xa = selectedHuyen?.listXa.find((e) => e.MaXa === maXa);
    setSelectedXa(xa);
  };

  // Search Customer handle
  const onFinishSearchKH = (data: searchData) => {
    setLoading(true);
    BookingAPI.searchKH(data.searchText || "")
      .then((res) => {
        if (res.data.status === 2000) {
          setDataKH(res.data.data);
        }
      })
      .catch((err) => { })
      .finally(() => {
        setLoading(false);
      });
  };

  const onSetSelectedKH = (data: InfoKhachHang) => {
    setSelectedKH(data);

    form.setFieldsValue({
      name: data.TenKH,
      cmnd: data.SoCMND || '',
      phoneNumber: data.DiDong || data.DiDong2,
      email: data.Email || data.Email2,
      address: data.DiaChi,
    })
  };
  const changeSearch = (e: any) => {
    if (e.target.value.length === 0) setShow(true)
    else setShow(false)
  };

  return (
    <div className="booking-confirm">
      {/* Title */}
      <div className="title">XÁC NHẬN BOOKING</div>
      <div className="title-line-break">
        <div className="title-middle-line-break"></div>
      </div>

      {/* Note */}
      <div
        style={{
          marginTop: "40px",
          fontSize: 14,
          fontWeight: 400,
          textAlign: "center",
        }}
      >
        Thông tin Họ và tên, Email, Điện thoại, ngày sinh sẽ được tự động điền
        chính xác theo các thông tin quý khách đã cung cấp khi tạo tài khoản.
        Trường hợp quý khách có nhu cầu thay đổi các thông tin này, vui lòng
        truy cập mục Tài khoản của tôi để điều chỉnh thông tin tài khoản.
      </div>

      {/* Form input */}
      <Form
        style={{ margin: "40px 0px" }}
        className="search-form"
        onFinish={onFinishSearchKH}
      >
        <Form.Item name="searchText" style={{ marginBottom: 0 }}>
          <Input
            onFocus={() => setShow(false)}
            onChange={changeSearch}
            placeholder="Nhập tên hoặc số điện thoại của khách hàng"
            addonAfter={
              <Button htmlType="submit" loading={loading}>
                Tìm kiếm
              </Button>
            }
          ></Input>
        </Form.Item>
        {dataKH.length !== 0 && !show && (
          <List data={dataKH} height={200} itemHeight={30} itemKey="id">
            {(KH) => (
              <div
                onClick={() => { onSetSelectedKH(KH); setShow(true) }}
                className={`item-results ${selectedKH?.MaKh === KH.MaKh ? "item-focus" : ""
                  }`}
              >
                <span style={{ fontWeight: "bold" }}>{KH.TenKH}</span> -
                {KH.DiDong}
              </div>
            )}
          </List>
        )}
      </Form>

      <Form form={form} layout="vertical" onFinish={onFinishBooking}>
        <div className="booking-confirm-form-row">
          <Form.Item
            label="Họ tên "
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
          >
            <Input placeholder="Tên người booking" />
          </Form.Item>
          <Form.Item name="cmnd" label="Số CMND/ CCCD/ Hộ chiếu">
            <Input placeholder="Nhập tên số CMND/ CCCD/ Hộ chiếu" />
          </Form.Item>
        </div>

        <div className="booking-confirm-form-row">
          <Form.Item
            label="Số điện thoại "
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập nhập số điện thoại!",
              },
            ]}
          >
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input placeholder="Nhập địa chỉ Email" />
          </Form.Item>
        </div>

        <div className="booking-confirm-form-row">
          <Form.Item label="Số nhà, ngõ/ngách, tên đường, phố" name="address">
            <Input placeholder="Nhập địa chỉ" />
          </Form.Item>
          <Form.Item label="Thành phố/ Tỉnh" name="city">
            <Select
              placeholder="- Chọn Thành phố/ Tỉnh -"
              onChange={(value) => onSelectedTinhChange(value)}
            >
              {listTinhs.map((e) => {
                return <Option key={e.maTinh} value={e.maTinh}>{e.tenTinh}</Option>;
              })}
            </Select>
          </Form.Item>
        </div>

        <div className="booking-confirm-form-row">
          <Form.Item label="Quận/ Huyện" name="district">
            <Select
              onChange={(value) => onSelectedHuyenChange(value)}
              placeholder="- Chọn Quận/ Huyện -"
            >
              {selectedTinh
                ? selectedTinh.listHuyen.map((e) => {
                  return <Option key={e.maHuyen} value={e.maHuyen}>{e.tenHuyen}</Option>;
                })
                : ""}
            </Select>
          </Form.Item>
          <Form.Item label="Phường/ Xã" name="ward">
            <Select
              value={selectedXa?.MaXa}
              onChange={(value) => onSelectedXaChange(value)}
              placeholder="- Chọn Phường/ Xã -"
            >
              {selectedHuyen
                ? selectedHuyen.listXa.map((e) => {
                  return <Option key={e.MaXa} value={e.MaXa}>{e.TenXa}</Option>;
                })
                : ""}
            </Select>
          </Form.Item>
        </div>
        {/* <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#EBEBEB",
          }}
        ></div> */}
        {/* <Form.Item
          style={{ marginTop: "20px" }}
          label="Phương thức thanh toán"
          name="payment-method"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn phương thức thanh toán",
            },
          ]}
        >
          <Select>
            <Option value="1">Chuyển khoản</Option>
          </Select>
        </Form.Item> */}
      </Form>
    </div>
  );
});
