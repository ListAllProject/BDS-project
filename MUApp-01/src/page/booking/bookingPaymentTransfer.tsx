import { BookingInformation } from './bookingInformation';
import { Input } from 'antd';
import './booking.scss';
import { Upload, message } from 'antd';
import ButtonCustom from '../../components/buttonCustom/buttonCustom';

export const BookingPaymentTransfer = () => {

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    multiple: true,
    onChange(info: any) {
      if (info.file.status !== 'uploading') {
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div style={{ marginBottom: 20 }} className="wrap-booking-confirm-content">
      <div className="content">
        <div className="booking-payment-transfer">
          {/* Title */}
          <div className="title">
            THANH TOÁN CHUYỂN KHOẢN
          </div>
          <div className="title-line-break">
            <div className="title-middle-line-break"></div>
          </div>

          {/* Note */}
          <div style={{ marginTop: '40px', fontSize: 14, fontWeight: 400, textAlign: 'center' }}>
            Thông tin thanh toán chuyển khoản
          </div>

          <div style={{ width: '100%' }}>
            <div style={{ marginTop: '24px', fontSize: 14, fontWeight: 600 }}>Đơn vị hưởng thụ</div>
            <div style={{ marginTop: '12px', fontSize: 14, fontWeight: 400 }}>Công ty TNHH công nghệ và thương mại Beesky Việt Nam</div>
          </div>
          <div className="transfer-information-row">
            <div className="transfer-information-row-item">
              <div style={{ marginTop: '24px', fontSize: 14, fontWeight: 600 }}>Số tài khoản</div>
              <div style={{ marginTop: '12px', fontSize: 14, fontWeight: 400 }}>0123 4567 8901</div>
            </div>
            <div className="transfer-information-row-item">
              <div style={{ marginTop: '24px', fontSize: 14, fontWeight: 600 }}>Ngân hàng</div>
              <div style={{ marginTop: '12px', fontSize: 14, fontWeight: 400 }}>Techcombank</div>
            </div>
          </div>

          <div style={{ width: '100%' }}>
            <div style={{ marginTop: '24px', fontSize: 14, fontWeight: 600 }}>Nội dung</div>
            <div style={{ marginTop: '12px', fontSize: 14, fontWeight: 400 }}>Tiền đặt cọc booking Căn hộ S1.092205- Toà S1.09</div>
          </div>
          <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB', marginTop: '24px' }}></div>

          <div style={{ marginTop: '20px', fontSize: 14, fontWeight: 400 }}>Sau khi thanh toán, chuyển khoản xin vui lòng tải lên ảnh Uỷ Nhiệm Chi</div>

          <div style={{ marginTop: '20px', fontSize: 14, fontWeight: 600, width: '100%' }}>Tải lên ảnh Uỷ Nhiệm Chi</div>

          <div style={{ width: '100%', position: 'relative' }}>
            <Input style={{ marginBottom: '24px' }} disabled suffix={
              <Upload
                listType="picture"
                {...props}>
                <ButtonCustom style={{padding: "5px 43px"}}  onClick={() => {}} text="Chọn file" />
              </Upload>
            }></Input>
            <div style={{ position: 'absolute', top: '14px', left: '0px', color: '#999999', width: 'calc(100% - 110px)', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
              Tải lên nhiều file bằng cách giữ Ctrl + Click chuột
            </div>
          </div>

          <div className="submit-button">
            <ButtonCustom style={{padding: "9px 43px"}} onClick={() => {}} text="Xác nhận" />
          </div>
        </div> {/* End of Page */}

        <BookingInformation></BookingInformation>
        <div className="submit-button-replace">
          <ButtonCustom style={{padding: "9px 43px"}} onClick={() => {}} text="Xác nhận" />
        </div>
      </div>
    </div>
  )
}