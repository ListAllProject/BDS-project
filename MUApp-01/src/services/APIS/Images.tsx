import { APIIMGAGE as API } from "../api";
import { Parameters } from "../models";

let ImagesAPI = {
  getList(parameter: Parameters) {
    return API().get(`/web/image?project_id=${parameter.project_id}&company_code=BEESKY`);
  },
};

export default ImagesAPI;
