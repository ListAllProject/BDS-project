// import { Store } from "antd/lib/form/interface";
import { API } from "../api";
import {  Parameters } from "../models";

let BannersAPI = {
  getList(parameter: Parameters) {
    return API().get(
      `/web/banner?page=${parameter.page}&limit=${parameter.limit}&search=${parameter.search}&project_id=${parameter.project_id}`
    );
  },
};

export default BannersAPI;
