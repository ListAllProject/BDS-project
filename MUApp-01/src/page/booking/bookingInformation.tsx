import RoomImage from '../../assets/images/room-test.png';

export const BookingInformation = () => {
  return (
    <div style={{ marginBottom: 20 }} className="booking-information">
      <div className="information-image">
        <img src={RoomImage} alt="" />
      </div>
      <div className="information-content">
        <div style={{ marginTop: '23px', fontWeight: 700, fontSize: 14 }}>
          Vinhomes Ocean Park
      </div>
        <div style={{ marginTop: '4px', fontWeight: 400, fontSize: 12 }}>
          Gia Lâm, Hà Nội
      </div>
        <div style={{ width: '80px', height: '1px', backgroundColor: '#BE9355' }}></div>
        <div style={{ marginTop: '12px', fontSize: 14, fontWeight: 700 }}>
          Căn hộ S1.092205 - Tòa S1.09
      </div>

        <div className="information-row">
          <div className="information-label">Diện tích</div>
          <div className="information-value">55,3m2</div>
        </div>
        <div className="information-row">
          <div className="information-label">Loại căn hộ</div>
          <div className="information-value">2PN+1</div>
        </div>
        <div className="information-row">
          <div className="information-label">Hướng</div>
          <div className="information-value">ĐN</div>
        </div>

        <div className="information-break"></div>

        <div className="information-row">
          <div className="information-label">Giá BĐS</div>
          <div className="information-value">2.337.716.752</div>
        </div>
        <div className="information-row">
          <div className="information-label">Thuế GTGT (tạm tính)</div>
          <div className="information-value">228.887.915</div>
        </div>
        <div className="information-row">
          <div className="information-label">Kinh phí bảo trì (tạm tính)</div>
          <div className="information-value">46.754.335</div>
        </div>

        <div className="information-break"></div>

        <div className="information-row">
          <div className="information-label">Tổng tiền niêm yết</div>
          <div className="information-value">2.337.716.752</div>
        </div>
        <div className="information-row">
          <div className="information-label">Mức giảm (tạm tính)</div>
          <div className="information-value">228.887.915</div>
        </div>

        <div className="information-break"></div>

        <div className="information-row" >
          <div className="information-label" style={{ fontWeight: 700, }}><strong>Tổng tiền mua online</strong></div>
          <div className="information-value" style={{ color: '#BE9355' }}>228.887.915</div>
        </div>
      </div>
    </div>
  )
}