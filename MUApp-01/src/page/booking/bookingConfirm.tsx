import { Button, Form, Input, Select, List } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BookingAPI from "services/APIBEELAND/Booking";
import "react-select/dist/react-select.css";
import "react-virtualized-select/styles.css";
import { AddBookingRequest, Huyen, Tinh, Xa } from "services/models";
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

export const BookingConfirm = forwardRef((props, ref) => {

  const history = useHistory();
  const [listTinhs, setListTinhs] = useState<Tinh[]>([])
  const [selectedTinh, setSelectedTinh] = useState<Tinh>()
  const [selectedHuyen, setSelectedHuyen] = useState<Huyen>()
  const [selectedXa, setSelectedXa] = useState<Xa>()
  const [form] = Form.useForm();
  const [bookingInformation, setBookingInformation] = useState<AddBookingRequest>();

  useEffect(() => {
    BookingAPI.getAddress()
      .then(res => {
        if (res.data.status === 2000) {
          setListTinhs(res.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  useImperativeHandle(ref, () => ({
    onBooking(data: AddBookingRequest) {
      if (data) {
        setBookingInformation(data)
        form.submit();
      }
    }
  }));

  // Add booking handle
  const onFinishBooking = (data: BookingData) => {
    BookingAPI.addKH({
      DiDong: data.phoneNumber,
      TenKH: data.name,
      DiaChi: data.address,
      Email: data.email,
      MaTinh: data.city,
      MaHuyen: data.district,
      MaXa: data.ward,
      SoCMND: data.cmnd,
    }).then(res => {
      if (res.data.status === 2000) {
        const maKH = res.data.data;
        if (bookingInformation) {
          bookingInformation.MaKH = maKH;
          BookingAPI.addBooking(bookingInformation)
            .then(res => {
              if (res.data.status === 2000) {
                history.push(`/v/booking/${bookingInformation.MaSP}/thanh-toan-chuyen-khoan/${res.data.data}`)
              }
            })
            .catch(err => {
              console.log(err);
            })
        }
      }
    }).catch(err => {
      console.log(err)
    })
  }

  // Address handle
  const onSelectedTinhChange = (value: any) => {
    const maTinh = parseInt(value);
    const tinh = listTinhs.find(e => e.maTinh === maTinh);
    setSelectedTinh(tinh);
  }
  const onSelectedHuyenChange = (value: any) => {
    const maHuyen = parseInt(value);
    const huyen = selectedTinh?.listHuyen.find(e => e.maHuyen === maHuyen);
    setSelectedHuyen(huyen);
  }
  const onSelectedXaChange = (value: any) => {
    const maXa = parseInt(value);
    const xa = selectedHuyen?.listXa.find(e => e.MaXa === maXa);
    setSelectedXa(xa);
  }

  // TODO:
  // Search Customer handle
  const options = Array.from(new Array(1000), (_, index) => ({
    label: `Item ${index}`,
    value: index
  }));
  const onFinishSearchKH = (data: searchData) => {
    BookingAPI.searchKH(data.searchText)
      .then(res => {

      })
      .catch(err => {

      })
  }

  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

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
        Thông tin Họ và tên, Email, Điện thoại, ngày sinh sẽ được tự động
        điền chính xác theo các thông tin quý khách đã cung cấp khi tạo tài
        khoản. Trường hợp quý khách có nhu cầu thay đổi các thông tin này,
        vui lòng truy cập mục Tài khoản của tôi để điều chỉnh thông tin tài
        khoản.
          </div>

      {/* Form input */}
      <Form style={{ marginTop: '40px' }} className="search-form" onFinish={onFinishSearchKH}>
        <Form.Item name="searchText">
          <Input
            placeholder="Nhập tên hoặc số điện thoại của khách hàng"
            addonAfter={<Button htmlType="submit" loading={false} >Tìm kiếm</Button>}
          ></Input>
          <List
            dataSource={data}
            renderItem={item => (
              <List.Item>
                {item}
              </List.Item>
            )}
          />
        </Form.Item>
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
              onChange={(value) => onSelectedTinhChange(value)}>
              {listTinhs.map(e => {
                return <Option value={e.maTinh}>{e.tenTinh}</Option>
              })}
            </Select>
          </Form.Item>
        </div>

        <div className="booking-confirm-form-row">
          <Form.Item label="Quận/ Huyện" name="district">
            <Select
              onChange={(value) => onSelectedHuyenChange(value)}
              placeholder="- Chọn Quận/ Huyện -">
              {selectedTinh ? selectedTinh.listHuyen.map(e => {
                return <Option value={e.maHuyen}>{e.tenHuyen}</Option>
              }) : ''}
            </Select>
          </Form.Item>
          <Form.Item label="Phường/ Xã" name="ward">
            <Select
              value={selectedXa?.MaXa}
              onChange={(value) => onSelectedXaChange(value)}
              placeholder="- Chọn Phường/ Xã -">
              {selectedHuyen ? selectedHuyen.listXa.map(e => {
                return <Option value={e.MaXa}>{e.TenXa}</Option>
              }) : ''}
            </Select>
          </Form.Item>
        </div>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#EBEBEB",
          }}
        ></div>
        <Form.Item
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
        </Form.Item>
      </Form>
    </div>
  );
});
