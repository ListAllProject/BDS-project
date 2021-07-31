// import { Store } from "antd/lib/form/interface";
import { API } from "../api";
import {  ResBlogs } from "../models";

let BlogsAPI = {
  getList(parameter: ResBlogs) {
    return API().get(
      `/web/blog?page=${parameter.page}&limit=${parameter.limit}&search=${parameter.search}&is_outstanding=${parameter.is_outstanding}`
    );
  },
};

export default BlogsAPI;
