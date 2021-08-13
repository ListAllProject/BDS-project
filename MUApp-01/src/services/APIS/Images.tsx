import { API } from "../api";
import {  Parameters } from "../models";

let ImagesAPI = {
  getList(parameter: Parameters) {
    return API().get(
      `/web/image?project_id=${parameter.project_id}`
    );
  },
};

export default ImagesAPI;
