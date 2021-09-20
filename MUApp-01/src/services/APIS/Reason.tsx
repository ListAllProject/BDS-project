// import { Store } from "antd/lib/form/interface";
import { getCodeBody } from "services/helper";
import { APIIMGAGE as API } from "../api";

let ReasonsAPI = {
  getListByProjectId(projectId: number) {
    return API().get(
      `/web/reason?project_id=${projectId}&company_code=${getCodeBody()}`
    );
  },
};

export default ReasonsAPI;
