import { Store } from "antd/lib/form/interface";
import { API } from "../api";
import { Parameters } from "../models";

let BlogsAPI = {
  getList(parameter: Parameters) {
    return API().get(`/web/blog?${parameter}`);
  },
};

export default BlogsAPI
