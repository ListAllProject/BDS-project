// import { Store } from "antd/lib/form/interface";
import { getCodeBody } from "services/helper";
import { APIIMGAGE as API } from "../api";
import { Parameters } from "../models";

const data = {
        "company_code" : getCodeBody()
}
let BannersAPI = {
  getList(parameter: Parameters) {
    return API().post(
      `/api/banner`, data
    );
  },
};

export default BannersAPI;
