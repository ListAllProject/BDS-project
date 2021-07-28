import { BookingInformation } from "./bookingInformation";
import "./booking.scss";
import { Input, Form, Select } from "antd";
import ButtonCustom from "../../components/buttonCustom/buttonCustom";
import { FormInstance } from "antd/lib/form";
import React from "react";
const { Option } = Select;

const onSubmit = () => {
  console.log("aaaa", formRef.current);
  formRef.current?.submit();
};

const formRef = React.createRef<FormInstance>();

export const BookingConfirm = () => {
  return (
    <div className="wrap-booking-confirm-content">
      <div className="content">
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
          <Form ref={formRef} layout="vertical">
            <div className="booking-confirm-form-row">
              <Form.Item label="Họ tên">
                <Input placeholder="Tên người booking" />
              </Form.Item>
              <Form.Item style={{}} label="Số CMND/ CCCD/ Hộ chiếu">
                <Input placeholder="Nhập tên số CMND/ CCCD/ Hộ chiếu" />
              </Form.Item>
            </div>

            <div className="booking-confirm-form-row">
              <Form.Item label="Số điện thoại">
                <Input placeholder="Nhập số điện thoại" />
              </Form.Item>
              <Form.Item label="Email">
                <Input placeholder="Nhập địa chỉ Email" />
              </Form.Item>
            </div>

            <div className="booking-confirm-form-row">
              <Form.Item label="Số nhà, ngõ/ngách, tên đường, phố">
                <Input placeholder="Nhập địa chỉ" />
              </Form.Item>
              <Form.Item label="Thành phố/ Tỉnh">
                <Select>
                  <Option value="1">Ho Chi Minh</Option>
                  <Option value="2">Dak Lak</Option>
                  <Option value="3">Nghe An</Option>
                </Select>
              </Form.Item>
            </div>

            <div className="booking-confirm-form-row">
              <Form.Item label="Quận/ Huyện">
                <Select>
                  <Option value="1">Quan 1</Option>
                  <Option value="2">Quan 2</Option>
                  <Option value="3">Quan 3</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Phường/ Xã">
                <Select placeholder="Phường Chương Dương">
                  <Option value="1">Phường Chương Dương</Option>
                  <Option value="2">Phuong 2</Option>
                  <Option value="3">Phuong 3</Option>
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
            >
              <Select placeholder="Chuyen khoan">
                <Option value="1">Chuyen khoan</Option>
                <Option value="2">Phuong 2</Option>
                <Option value="3">Phuong 3</Option>
              </Select>
            </Form.Item>

            <div className="submit-button">
              <ButtonCustom onClick={() => {}} type="submit" text="Xác nhận" />
            </div>
          </Form>
        </div>
        <BookingInformation></BookingInformation>
        <ButtonCustom
          onClick={() => onSubmit()}
          type="submit"
          text="Xác nhận"
          className="submit-button-replace"
        />
      </div>
    </div>
  );
};
