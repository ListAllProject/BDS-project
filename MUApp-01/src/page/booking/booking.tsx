import { Button, Form, Input } from "antd";
import ButtonCustom from "components/buttonCustom/buttonCustom";
import React, { useEffect, useState } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import BookingAPI from "services/APIBEELAND/Booking";
import ProductAPI from "services/APIBEELAND/Product";
import { AddBookingRequest, productsObj } from "services/models";
import * as helper from "../../services/helper";
import "./booking.scss";
import { BookingComplete } from "./bookingComplete";
import { BookingConfirm } from "./bookingConfirm";
import { BookingPaymentTransfer } from "./bookingPaymentTransfer";

const { useRef } = React;

interface detailParams {
  maSP: string;
}

interface EvoucherData {
  evoucher: string,
}

interface Voucher {
  ID: number,
  GiaTri: number,
}

export const Booking = () => {

  const { maSP } = useParams<detailParams>();
  const childRef = useRef();
  const [product, setProduct] = useState<productsObj>();
  const [loading, setLoading] = useState(false);

  // Voucher
  const [formEvoucher] = Form.useForm();
  const [isCheckingVoucher, setIsCheckingVoucher] = useState(false);
  const [voucher, setVoucher] = useState<Voucher>();
  const [voucherMessage, setVoucherMessage] = useState("");

  //
  const [bookingInformation, setBookingInformation] = useState<AddBookingRequest>();

  useEffect(() => {
    setLoading(true);
    ProductAPI.getProduct(parseInt(maSP))
      .then(res => {
        setLoading(false);
        if (res.data.status === 2000) {
          const producTemp = res.data.data;
          setProduct(res.data.data);
          setBookingInformation({
            GiaChuaVAT: producTemp.TongGiaChuaVAT,
            GiaThongThuy: producTemp.TongGiaChuaVAT,
            MGD: 1,
            MaNhomGioHang: producTemp.MaNhomGioHang,
            MaSP: producTemp.MaSP,
            // TODO: PhiBaoGomPBT: 
            PhiBaoGomPBT: 0,
            PhiBaoTri: producTemp.PhiBaoTri,
            TongGiaTriHD: producTemp.TongGiaTriHDMB,
            MaKH: -1,
          })
        }
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      })
  }, [maSP])
  
  const onFinishCheckVoucher = (data: EvoucherData) => {
    setIsCheckingVoucher(true);
    BookingAPI.getVoucher(data.evoucher)
      .then(res => {
        setIsCheckingVoucher(false);
        if (res.data.status === 2000 && res.data.data && res.data.data.length > 0) {
          setVoucher(res.data.data[0])
        } else {
          setVoucher({
            GiaTri: 0,
            ID: 0,
          });
          setVoucherMessage(res.data.message);
        }
      })
      .catch(err => {
        setVoucher({
          GiaTri: 0,
          ID: 0,
        });
        setIsCheckingVoucher(false);
        setVoucherMessage("Có lỗi xảy ra vui lòng thử lại");
        console.log(err);
      })
  }

  return (
    <div style={{ marginBottom: 20 }} className="wrap-booking-confirm-content">
      <div className="content">
        <Switch>
          <Route path="/v/booking/:maSP/xac-nhan">
            <BookingConfirm ref={childRef} />
          </Route>
          <Route path="/v/booking/:maSP/complete">
            <BookingComplete />
          </Route>
          <Route path="/v/booking/:maSP/thanh-toan-chuyen-khoan">
            <BookingPaymentTransfer />
          </Route>
        </Switch>
        {product ? <div style={{ marginBottom: 20 }} className="booking-information">
          <div className="information-image">
            <img src={product.HinhAnh} alt="" />
          </div>
          <div className="information-content">
            <div style={{ marginTop: '23px', fontWeight: 700, fontSize: 14 }}>
              {product.TenDA}
            </div>
            <div style={{ marginTop: '4px', fontWeight: 400, fontSize: 12 }}>
              {product.DiaChi}
            </div>
            <div style={{ width: '80px', height: '1px', backgroundColor: '#BE9355' }}></div>
            <div style={{ marginTop: '12px', fontSize: 14, fontWeight: 700 }}>
              {product.KyHieu}
            </div>

            <div className="information-row">
              <div className="information-label">Diện tích</div>
              <div className="information-value">{product.DTThongThuy}m<sup>2</sup></div>
            </div>
            <div className="information-row">
              <div className="information-label">Loại căn hộ</div>
              <div className="information-value">{product.TenLoaiMau}</div>
            </div>
            <div className="information-row">
              <div className="information-label">Hướng</div>
              <div className="information-value">{product.TenPhuongHuong}</div>
            </div>

            <div className="information-break"></div>

            <div className="information-row">
              <div className="information-label">Giá BĐS</div>
              <div className="information-value">{helper.formatMoney(product.TongGiaChuaVAT)}</div>
            </div>
            <div className="information-row">
              <div className="information-label">Thuế GTGT (tạm tính)</div>
              <div className="information-value">{helper.formatMoney(product.TienVAT)}</div>
            </div>
            <div className="information-row">
              <div className="information-label">Kinh phí bảo trì (tạm tính)</div>
              <div className="information-value">{helper.formatMoney(product.PhiBaoTri)}</div>
            </div>

            <div className="information-break"></div>

            <div className="information-row">
              <div className="information-label">Tổng tiền niêm yết</div>
              <div className="information-value">{helper.formatMoney(product.TongGiaTriHDMB)}</div>
            </div>

            <div className="information-break"></div>

            <Form form={formEvoucher} className="evoucher" onFinish={onFinishCheckVoucher}>
              <Form.Item name="evoucher">
                <Input
                  suffix={<i className="fas fa-info-circle clickable" />}
                  placeholder="Nhập mã E-voucher"
                  addonAfter={<Button htmlType="submit" loading={isCheckingVoucher}>ÁP DỤNG</Button>}
                ></Input>
              </Form.Item>
            </Form>
            {voucher && voucher.GiaTri != 0 ? <div className="information-row">
              <div className="information-label">Mức giảm (tạm tính)</div>
              <div className="information-value">{voucher ? helper.formatMoney(voucher.GiaTri) : 0}</div>
            </div> : <div>{voucherMessage}</div>}

            <div className="information-break"></div>

            <div className="information-row" >
              <div className="information-label" style={{ fontWeight: 700, }}><strong>Tổng tiền mua online</strong></div>
              <div className="information-value" style={{ color: '#BE9355' }}>{voucher ? helper.formatMoney(product.TongGiaTriHDMB - voucher.GiaTri) : helper.formatMoney(product.TongGiaTriHDMB)}</div>
            </div>
          </div>
        </div> : ''}
      </div>
      <div>
        <ButtonCustom
          style={{ padding: "9px 43px" }}
          onClick={() => (childRef?.current as any).onBooking(bookingInformation)}
          text="Xác nhận"
          className="submit-button-replace"
        />
      </div>
    </div>
  );
};
