import { APIIMGAGE as API } from "../api";
import { getCodeBody } from "services/helper";


let HomeAPI = {
  //k biet api nen tam thoi ghi ten zị
  getBanners(page: number, limit: number) {
    let params = "";

    if (page) {
      params = params + `page=${page}&`;
    }
    if (limit) {
      params = params + `limit=${limit}&`;
    }
    let data = { "TenCTDKVT": getCodeBody() }
    return API().post(`/api/banner`, data);
  },
  // getProvince() {
  //   return API().get(`/api/Province`);
  // },
  // getById(id:number) {
  //     return API().get(`/abc/xyz/${id}`);
  //   },
  // create(obj:Store) {
  //     return API().post(`/abc/xyz`, obj);
  //   },
  // update(obj:Store) {
  //     return API().put(`/abc/xyz/${obj.id}`, obj);
  //   },
  // delete(id:number) {
  //     return API().delete(`/abc/xyz/${id}`);
  //   },
};

export default HomeAPI;
