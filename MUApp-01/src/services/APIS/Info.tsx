// import { Store } from "antd/lib/form/interface";
import { getCodeBody } from "services/helper";
import { APIIMGAGE as API } from "../api";
import { ResBlogs } from "../models";

let InfoAPI = {

  getList() {
    return API().get(
      `/web/company-info?company_code=${getCodeBody()}`
    );
  },
};

export default InfoAPI;
