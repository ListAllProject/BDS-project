import { getCodeBody } from "services/helper";
import { API } from "../api";

let ProductAPI = {
  getProductImages(maSP: number) {
    return API().post(`/api/beeland/get-product-images`, {
      tenCTDKVT: getCodeBody(),
      maSP: maSP,
    });
  },

  getProduct(maSP: number) {
    return API().post(`/api/beeland/get-product`, {
      tenCTDKVT: getCodeBody(),
      maSP: maSP,
    });
  },

  getBlock(maDA: number) {
    return API().post(`/api/beeland/block`, {
      tenCTDKVT: getCodeBody(),
      maDA: maDA,
    });
  },
};

export default ProductAPI;
