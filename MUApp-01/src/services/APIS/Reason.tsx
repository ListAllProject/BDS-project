// import { Store } from "antd/lib/form/interface";
import { APIIMGAGE as API, tenCTDKVT } from "../api";

let ReasonsAPI = {
  getListByProjectId(projectId: number) {
    return API().get(
      `/web/reason?project_id=${projectId}&company_code=${
        tenCTDKVT[0].includes("https")
          ? tenCTDKVT[0].replaceAll("https://", "")
          : "beesky"
      }`
    );
  },
};

export default ReasonsAPI;
