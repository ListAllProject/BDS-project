import { APIIMGAGE as API, tenCTDKVT } from "../api";
import { Parameters } from "../models";

let ImagesAPI = {
  getList(parameter: Parameters) {
    return API().get(
      `/web/image?project_id=${parameter.project_id}&company_code=${
        tenCTDKVT[0].includes("https")
          ? tenCTDKVT[0].replaceAll("https://", "")
          : "beesky"
      }`
    );
  },
};

export default ImagesAPI;
