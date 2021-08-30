import { API } from "../api";

let ProductAPI = {
  getProductImages(maSP: number) {
    return API().post(`/api/beeland/get-product-images`, {
      tenCTDKVT: 'beesky',
      maSP: maSP
    });
  },

  getProduct(maSP: number) {
    return API().post(`/api/beeland/get-product`, {
      tenCTDKVT: 'beesky',
      maSP: maSP
    });
  }
}

export default ProductAPI;
