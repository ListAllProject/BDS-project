// import { Store } from "antd/lib/form/interface";
import { getCodeBody } from "services/helper";
import { APIIMGAGE as API } from "../api";
import { ResBlogs } from "../models";

let BlogsAPI = {
  getListBySlug(parameter: ResBlogs) {
    return API().get(
      `/web/blog?page=${parameter.page}&limit=${parameter.limit}&category_url=${
        parameter.url
      }&company_code=${getCodeBody()}`
    );
  },
  getList(parameter: ResBlogs) {
    return API().get(
      `/web/blog?page=${parameter.page}&limit=${parameter.limit}&search=${
        parameter.search
      }&is_outstanding=${parameter.is_outstanding}&company_code=${getCodeBody()}`
    );
  },
  getBlogBySlug(url: string) {
    return API().get(
      `/web/blog/` +
        url +
        `?company_code=${getCodeBody()}`
    );
  },
  getCatBlog() {
    return API().get(
      `/web/category?company_code=${getCodeBody()}`
    );
  },
};

export default BlogsAPI;
