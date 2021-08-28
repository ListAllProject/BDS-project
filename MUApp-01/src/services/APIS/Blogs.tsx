// import { Store } from "antd/lib/form/interface";
import { APIIMGAGE as API } from "../api";
import { ResBlogs } from "../models";

let BlogsAPI = {
  getList(parameter: ResBlogs) {
    return API().get(
      `/web/blog?page=${parameter.page}&limit=${parameter.limit}&search=${parameter.search}&is_outstanding=${parameter.is_outstanding}`
    );
  },
  getBlogBySlug(url: string) {
    return API().get(`/web/blog/` + url);
  },
};

export default BlogsAPI;
