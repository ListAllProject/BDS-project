import { Button, Input, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { Upload, message, Select } from "antd";
import ButtonCustom from "../../components/buttonCustom/buttonCustom";
import { useHistory, useParams } from "react-router-dom";
import "./booking.scss";
import BookingAPI from "services/APIBEELAND/Booking";
import { productsObj } from "services/models";
import { flatMap } from "assets/fontawesome-pro-5.13.0-web/js/v4-shims";
const { forwardRef, useRef, useImperativeHandle } = React;
const { Option } = Select;

interface detailParams {
  maPGC: string;
}

interface Bank {
  MaNH: number;
  TeNH: string;
  TruSo: string;
  ChuTaiKhoan: string;
  SoTK: number;
}

interface DataImage {
  uid: string;
  url: string;
}

interface props {
  product: productsObj | undefined;
  onSetLoading: (val: boolean) => void;
}

let imagesTemp: DataImage[] = [];
export const BookingPaymentTransfer = forwardRef((props: props, ref) => {
  const { maPGC } = useParams<detailParams>();

  const [banks, setBanks] = useState<Bank[]>([]);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [loadingSelect, setLoadingSelect] = useState<boolean>(false);
  const [images, setImages] = useState<DataImage[]>([]);

  useEffect(() => {
    imagesTemp = [...images];
  });

  let history = useHistory();
  const propsUpload = {
    multiple: true,
    accept: ".png, .jpg, jpeg",
    async onChange(info: any) {
      if (info.file.status !== "uploading" && info.file.status !== "removed") {
        // info.file.status = "PROGRESS";
        info.file.status = "done";
        const formData = new FormData();
        formData.append("Image", info.file.originFileObj);
        formData.append("Type", "booking");
        formData.append("CompanyCode", "beesky");
        const res = await BookingAPI.uploadImage(formData);
        if (res) {
          const temp: DataImage = { uid: info.file.uid, url: res.data[0] };
          imagesTemp.push(temp);
          setImages(imagesTemp);
        }
      }
    },
    onRemove(info: any) {
      imagesTemp = imagesTemp.filter((_i: DataImage) => _i.uid !== info.uid);
      setImages(imagesTemp);
    },
  };

  useImperativeHandle(ref, () => ({
    onBooking(data: any) {
      onConfirmXacNhan(data);
    },
  }));

  const onConfirmXacNhan = async (propduct: productsObj) => {
    if (images && images.length > 0) {
      props.onSetLoading(true);
      const rs = images.map((i) => {
        return {
          Image: i.url,
        };
      });
      const dataAddImage = {
        MaPGC: Number(maPGC),
        RequestIMG: rs,
      };

      const dataConfirmReceipt = {
        MaPGC: Number(maPGC),
        MaSP: propduct.MaSP,
        NguoiNop: "",
        DienGiai: "",
        MaNH: selectedBank?.MaNH,
        SoTienGC: props.product?.SoTienGC,
      };

      const rsAdd1 = await BookingAPI.addImageBooking(dataAddImage);
      const rsAdd2 = await BookingAPI.addConfirmReceipt(dataConfirmReceipt);
      if (rsAdd2.data.status === 2000) {
        history.push(`/v/booking/${propduct.MaSP}/complete`);
      }
      props.onSetLoading(false);
    } else {
      message.error("Hãy tải lên ít nhất 1 file hình ảnh!");
    }
  };

  useEffect(() => {
    setLoadingSelect(true);
    BookingAPI.getBanks()
      .then((res) => {
        setBanks(res.data.data);
        setSelectedBank(res.data.data[0]);
      })
      .catch((error) => {})
      .finally(() => {
        setLoadingSelect(false);
      });
  }, []);

  const onSelectBank = (val: number) => {
    const bank = banks.find((_b) => _b.MaNH === val);
    if (bank) setSelectedBank(bank);
  };

  return (
    <div className="booking-payment-transfer">
      {/* Title */}
      <div className="title">THANH TOÁN CHUYỂN KHOẢN</div>
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
        Thông tin thanh toán chuyển khoản
      </div>
      {banks && !loadingSelect ? (
        <>
          <div className="wrap-select-banks">
            <Select
              value={selectedBank?.MaNH}
              loading={loadingSelect}
              style={{ width: "100%" }}
              onChange={onSelectBank}
            >
              {banks.map((_b) => {
                return (
                  <Option key={_b.MaNH} value={_b.MaNH}>
                    Ngân hàng {_b.TeNH}
                  </Option>
                );
              })}
            </Select>
          </div>

          <div style={{ width: "100%" }}>
            <div style={{ marginTop: "24px", fontSize: 14, fontWeight: 600 }}>
              Đơn vị hưởng thụ
            </div>
            <div style={{ marginTop: "12px", fontSize: 14, fontWeight: 400 }}>
              {selectedBank?.ChuTaiKhoan}
            </div>
          </div>
          <div className="transfer-information-row">
            <div className="transfer-information-row-item">
              <div style={{ marginTop: "24px", fontSize: 14, fontWeight: 600 }}>
                Số tài khoản
              </div>
              <div style={{ marginTop: "12px", fontSize: 14, fontWeight: 400 }}>
                {selectedBank?.SoTK}
              </div>
            </div>
            <div className="transfer-information-row-item">
              <div
                style={{
                  marginTop: "24px",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "red",
                }}
              >
                Số tiền cọc
              </div>
              <div
                style={{
                  marginTop: "12px",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "red",
                }}
              >
                {props.product?.SoTienGC.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </div>
            </div>
          </div>

          <div style={{ width: "100%" }}>
            <div style={{ marginTop: "24px", fontSize: 14, fontWeight: 600 }}>
              Nội dung
            </div>
            <div style={{ marginTop: "12px", fontSize: 14, fontWeight: 400 }}>
              {props.product?.NoiDungCK}
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#EBEBEB",
              marginTop: "24px",
            }}
          ></div>
        </>
      ) : (
        <>
          <Skeleton active />
          <Skeleton active />
        </>
      )}

      <div style={{ marginTop: "20px", fontSize: 14, fontWeight: 400 }}>
        Sau khi thanh toán, chuyển khoản xin vui lòng tải lên ảnh Uỷ Nhiệm Chi
      </div>

      <div
        style={{
          marginTop: "20px",
          fontSize: 14,
          fontWeight: 600,
          width: "100%",
        }}
      >
        Tải lên ảnh Uỷ Nhiệm Chi
      </div>

      <div style={{ width: "100%", position: "relative" }}>
        <Input
          style={{ marginBottom: "24px" }}
          disabled
          suffix={
            <Upload listType="picture" {...propsUpload}>
              <Button size="middle" className="primary-btn">
                Chọn file
              </Button>
            </Upload>
          }
        ></Input>
        <div
          style={{
            position: "absolute",
            top: "14px",
            left: "0px",
            color: "#999999",
            width: "calc(100% - 145px)",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          Tải lên nhiều file bằng cách giữ Ctrl + Click chuột
        </div>
      </div>

      {/* <div className="submit-button">
        <ButtonCustom style={{ padding: "9px 43px" }} onClick={() => { history.push("/chuyen-khoan-thanh-cong"); }} text="Xác nhận" />
      </div> */}
    </div>
  );
});
