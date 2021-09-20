import { Button, Form, Input, Skeleton, Image } from "antd";
import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory, useParams } from "react-router-dom";
import BookingAPI from "services/APIBEELAND/Booking";
import ProductAPI from "services/APIBEELAND/Product";
import { Voucher, productsObj } from "services/models";
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
  evoucher: string;
}

export const Booking = () => {
  const { maSP } = useParams<detailParams>();
  const childRef = useRef();
  const [product, setProduct] = useState<productsObj>();
  const [loadingBtn, setLoadingBtn] = useState(false);

  // Voucher
  const [formEvoucher] = Form.useForm();
  const [isCheckingVoucher, setIsCheckingVoucher] = useState(false);
  const [voucher, setVoucher] = useState<Voucher>();
  const [voucherMessage, setVoucherMessage] = useState("");

  useEffect(() => {
    ProductAPI.getProduct(parseInt(maSP))
      .then((res) => {
        if (res.data.status === 2000) {
          setProduct(res.data.data);
        }
      })
  }, []);

  const onFinishCheckVoucher = (data: EvoucherData) => {
    setIsCheckingVoucher(true);
    BookingAPI.getVoucher(data.evoucher)
      .then((res) => {
        if (res.data.status === 2000 && res.data.data && res.data.data.length > 0) {
          setVoucher(res.data.data[0]);
        } else {
          setVoucherMessage(res.data.message);
        }
      })
      .catch((err) => {
        setVoucherMessage("Có lỗi xảy ra vui lòng thử lại");
        console.log(err);
      }).finally(() => {
        setIsCheckingVoucher(false);
      });
  };

  const onSetLoading = (val: boolean) => {
    setLoadingBtn(val);
  };

  return (
    <div style={{ marginBottom: 20 }} className="wrap-booking-confirm-content">
      <div className="content">
        <Switch>
          <Route path="/v/booking/:maSP/xac-nhan">
            <BookingConfirm ref={childRef} onSetLoading={onSetLoading} />
          </Route>
          <Route path="/v/booking/:maSP/complete">
            <BookingComplete />
          </Route>
          <Route path="/v/booking/:maSP/thanh-toan-chuyen-khoan/:maPGC">
            <BookingPaymentTransfer ref={childRef} product={product} onSetLoading={onSetLoading} />
          </Route>
        </Switch>
        {product ? (
          <div style={{ marginBottom: 20 }} className="booking-information">
            <div className="information-image">
              <img src={product.HinhAnh} alt="" />
            </div>
            <div className="information-content">
              <div style={{ marginTop: "23px", fontWeight: 700, fontSize: 14 }}>
                {product.TenDA}
              </div>
              <div style={{ marginTop: "4px", fontWeight: 400, fontSize: 12 }}>
                {product.DiaChi}
              </div>
              <div
                style={{
                  width: "80px",
                  height: "1px",
                  backgroundColor: "#BE9355",
                }}
              ></div>
              <div style={{ marginTop: "12px", fontSize: 14, fontWeight: 700 }}>
                {product.KyHieu}
              </div>

              <div className="information-row">
                <div className="information-label">Diện tích</div>
                <div className="information-value">
                  {product.DTThongThuy}m<sup>2</sup>
                </div>
              </div>
              <div className="information-row">
                <div className="information-label">Loại căn hộ</div>
                <div className="information-value">{product.TenLoaiMau}</div>
              </div>
              <div className="information-row">
                <div className="information-label">Hướng</div>
                <div className="information-value">
                  {product.TenPhuongHuong}
                </div>
              </div>

              <div className="information-break"></div>

              <div className="information-row">
                <div className="information-label">Giá BĐS</div>
                <div className="information-value">
                  {helper.formatMoney(product.TongGiaChuaVAT)}
                </div>
              </div>
              <div className="information-row">
                <div className="information-label">Thuế GTGT (tạm tính)</div>
                <div className="information-value">
                  {helper.formatMoney(product.TienVAT)}
                </div>
              </div>
              <div className="information-row">
                <div className="information-label">
                  Kinh phí bảo trì (tạm tính)
                </div>
                <div className="information-value">
                  {helper.formatMoney(product.PhiBaoTri)}
                </div>
              </div>

              <div className="information-break"></div>

              <div className="information-row">
                <div className="information-label">Tổng tiền niêm yết</div>
                <div className="information-value">
                  {helper.formatMoney(product.TongGiaTriHDMB)}
                </div>
              </div>


              {window.location.href.indexOf("xac-nhan") !== -1 ?
                <>
                  <div className="information-break"></div>
                  <Form
                    form={formEvoucher}
                    className="evoucher"
                    onFinish={onFinishCheckVoucher}
                  >
                    <Form.Item name="evoucher">
                      <Input
                        suffix={<i className="fas fa-info-circle clickable" />}
                        placeholder="Nhập mã E-voucher"
                        addonAfter={
                          <Button htmlType="submit" loading={isCheckingVoucher}>
                            ÁP DỤNG
                      </Button>
                        }
                      ></Input>
                    </Form.Item>
                  </Form>
                </> : ""}

              {/* Show voucher value */}
              {voucher && voucher.GiaTri !== 0 ? (
                <div className="information-row">
                  <div className="information-label">Mức giảm (tạm tính)</div>
                  <div className="information-value">
                    {voucher ? helper.formatMoney(voucher.GiaTri) : 0}
                  </div>
                </div>
              ) : window.location.href.indexOf("xac-nhan") != -1 ? <div>{voucherMessage}</div> : ''}

              <div className="information-break"></div>

              <div className="information-row">
                <div className="information-label" style={{ fontWeight: 700 }}>
                  <strong>Tổng tiền mua online</strong>
                </div>
                <div className="information-value" style={{ color: "#BE9355" }}>
                  {voucher ? helper.formatMoney(product.TongGiaTriHDMB - voucher.GiaTri)
                    : helper.formatMoney(product.TongGiaTriHDMB)}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="wrap-loading-booking-info">
            <Image
              width={150}
              height={150}
              src="error"
              fallback="data:image/png;base64,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"
            />
            <Skeleton active />
            <Skeleton active /> <Skeleton active /> <Skeleton active />
          </div>
        )}
      </div>
      <div>
        {window.location.href.indexOf("complete") === -1 ?
          <Button
            loading={loadingBtn}
            onClick={() =>
              (childRef?.current as any).onBooking(product, voucher)
            }
            style={{ height: 35 }}
            size="middle"
            className="primary-btn"
          >Xác nhận</Button> : ''}
      </div>
    </div>
  );
};
