// import { Store } from "antd/lib/form/interface";
import { getCodeBody } from "services/helper";
import { APIIMGAGE as API } from "../api";
import { ResBlogs } from "../models";

const data = {
        "company_code" : getCodeBody()
}
let InfoAPI = {
 
  getList() {
    return API().post(
      `/api/GetComPany`, data
    );
  },
};

export default InfoAPI;
