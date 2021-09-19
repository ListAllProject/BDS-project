// import { Store } from "antd/lib/form/interface";
import { APIIMGAGE as API, tenCTDKVT } from "../api";
import { ResBlogs } from "../models";

let BlogsAPI = {
  getListBySlug(parameter: ResBlogs) {
    return API().get(
      `/web/blog?page=${parameter.page}&limit=${parameter.limit}&category_url=${
        parameter.url
      }&company_code=${
        tenCTDKVT[0].includes("https")
          ? tenCTDKVT[0].replaceAll("https://", "")
          : "beesky"
      }`
    );
  },
  getList(parameter: ResBlogs) {
    return API().get(
      `/web/blog?page=${parameter.page}&limit=${parameter.limit}&search=${
        parameter.search
      }&is_outstanding=${parameter.is_outstanding}&company_code=${
        tenCTDKVT[0].includes("https")
          ? tenCTDKVT[0].replaceAll("https://", "")
          : "beesky"
      }`
    );
  },
  getBlogBySlug(url: string) {
    return API().get(
      `/web/blog/` +
        url +
        `?company_code=${
          tenCTDKVT[0].includes("https")
            ? tenCTDKVT[0].replaceAll("https://", "")
            : "beesky"
        }`
    );
  },
  getCatBlog() {
    return API().get(
      `/web/category?company_code=${
        tenCTDKVT[0].includes("https")
          ? tenCTDKVT[0].replaceAll("https://", "")
          : "beesky"
      }`
    );
  },
};

export default BlogsAPI;
