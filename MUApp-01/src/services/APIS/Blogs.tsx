// import { Store } from "antd/lib/form/interface";
import { getCodeBody } from "services/helper";
import { APIIMGAGE as API } from "../api";
import { ResBlogs } from "../models";
const body = { "company_code": getCodeBody() }

let BlogsAPI = {
  getListBySlug(parameter: ResBlogs) {
    const bodySlug = {
      "MaLTin": Number(parameter.url),
      "TenCTDKVT": getCodeBody()
    }
    return API().post(
      `/api/TinTuc`,bodySlug
    );
  },
  getListById(id: number) {
    const bodySlug = {
      "MaLTin": id,
      "TenCTDKVT": getCodeBody()
    }
    return API().post(
      `/api/TinTuc`,bodySlug
    );
  },
  getList() {
    let data = {
      "MaLTin": 0,
      "isHome": true,
      "TenCTDKVT": getCodeBody()
    }
    return API().post(
      `/api/TinTuc`, data
    );
  },
  // getList(parameter: ResBlogs) {
  //   return API().get(
  //     `/web/blog?page=${parameter.page}&limit=${parameter.limit}&search=${
  //       parameter.search
  //     }&is_outstanding=${parameter.is_outstanding}&company_code=${getCodeBody()}`
  //   );
  // },
  getListNew() {
    let data = {
      "MaLTin": 0,
      "isHome": true,
      "TenCTDKVT": getCodeBody()
    }
    return API().post(
      `/api/TinTuc`, data
    );
  },
  getBlogBySlug(url: string) {
        const bodySlug = {
          "ID": Number(url),
          "TenCTDKVT": getCodeBody()
        }
    return API().post(
      `/api/ChiTietTinTuc`,bodySlug
    );
  },
  getCatBlog() {
    return API().post(
      `/api/LoaiTinTuc`, body
    );
  },
};

export default BlogsAPI;
