// import { Store } from "antd/lib/form/interface";
import { APIIMGAGE as API, tenCTDKVT } from "../api";
import { Parameters } from "../models";

let BannersAPI = {
  getList(parameter: Parameters) {
    return API().get(
      `/web/banner?page=${parameter.page}&limit=${parameter.limit}&search=${
        parameter.search
      }&project_id=${parameter.project_id}&company_code=${
        tenCTDKVT[0].includes("https")
          ? tenCTDKVT[0].replaceAll("https://", "")
          : "beesky"
      }`
    );
  },
};

export default BannersAPI;
