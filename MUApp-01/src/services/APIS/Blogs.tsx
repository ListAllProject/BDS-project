// import { Store } from "antd/lib/form/interface";
import { APIIMGAGE as API } from "../api";
import { ResBlogs } from "../models";

let BlogsAPI = {
  getListBySlug(parameter: ResBlogs) {
    return API().get(
      `/web/blog?page=${parameter.page}&limit=${parameter.limit}&category_url=${parameter.url}&company_code=BEESKY`
    );
  },
  getList(parameter: ResBlogs) {
    return API().get(
      `/web/blog?page=${parameter.page}&limit=${parameter.limit}&search=${parameter.search}&is_outstanding=${parameter.is_outstanding}&company_code=BEESKY`
    );
  },
  getBlogBySlug(url: string) {
    return API().get(`/web/blog/` + url + "?company_code=BEESKY");
  },
  getCatBlog() {
    return API().get(`/web/category?company_code=BEESKY`);
  },
};

export default BlogsAPI;
