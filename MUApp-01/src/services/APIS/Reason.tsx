// import { Store } from "antd/lib/form/interface";
import { API } from "../api";

let ReasonsAPI = {
  getListByProjectId(projectId: number) {
    return API().get(
      `/web/reason?project_id=${projectId}`
    );
  },
};

export default ReasonsAPI;
