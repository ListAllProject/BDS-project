import { API, tenCTDKVT } from "../api";

let ProductAPI = {
  getProductImages(maSP: number) {
    return API().post(`/api/beeland/get-product-images`, {
      tenCTDKVT: tenCTDKVT[0].includes("https")
        ? tenCTDKVT[0].replaceAll("https://", "")
        : "beesky",
      maSP: maSP,
    });
  },

  getProduct(maSP: number) {
    return API().post(`/api/beeland/get-product`, {
      tenCTDKVT: tenCTDKVT[0].includes("https")
        ? tenCTDKVT[0].replaceAll("https://", "")
        : "beesky",
      maSP: maSP,
    });
  },

  getBlock(maDA: number) {
    return API().post(`/api/beeland/block`, {
      tenCTDKVT: tenCTDKVT[0].includes("https")
        ? tenCTDKVT[0].replaceAll("https://", "")
        : "beesky",
      maDA: maDA,
    });
  },
};

export default ProductAPI;
