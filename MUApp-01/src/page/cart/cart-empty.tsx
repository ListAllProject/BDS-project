import './cart.scss';
import CardIcon from '../../assets/images/cart.png';

export const CartEmpty = () => {
  return (
    <div className="wrap-cart-content">
      <div className="content">
        {/* Title */}
        <div className="title">
          GIỎ HÀNG
        </div>
        <div className="title-line-break">
          <div className="title-middle-line-break"></div>
        </div>

        {/* Cart Empty */}
        <div className="cart-emtpy-body">
          <div className="cart-icon">
            <img style={{ width: '100%', height: '100%' }} src={CardIcon} alt="Shopping cart" />
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, marginTop: '40px' }}>
            Không có sản phẩm nào trong giỏ hàng của bạn
          </div>
          <div className="add-product-button">Thêm sản phẩm vào giỏ hàng</div>
        </div>
      </div>
    </div>
  )
}