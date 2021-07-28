import { BookingInformation } from './bookingInformation';
import './booking.scss';
import ButtonCustom from '../../components/buttonCustom/buttonCustom';
import SuccessThumbnail from '../../assets/images/success-thumbnail.png';

export const BookingComplete = () => {
  return (
    <div className="wrap-booking-confirm-content">
      <div className="content">
        <div className="booking-complete">
          {/* Title */}
          <div className="title">
            THÀNH CÔNG
          </div>
          <div className="title-line-break">
            <div className="title-middle-line-break"></div>
          </div>

          <img style={{width: '232px', marginTop: '44px'}} src={SuccessThumbnail} alt="Thành công"/>

          <div style={{fontWeight: 400, fontSize: 18, margin: '37px 0px 24px 0px', textAlign: 'center'}}>Booking thành công, công ty chúng tôi sẽ xác nhận trong thời gian sớm nhất</div>

          <div className="submit-button">
            <ButtonCustom onClick={() => {}} type="submit" text="Trang chủ" />
          </div>
        </div> {/* End of Page */}

        <BookingInformation></BookingInformation>
        <div className="submit-button-replace">
          <ButtonCustom onClick={() => {}} type="submit" text="Trang chủ" />
        </div>
      </div>
    </div>
  )
}