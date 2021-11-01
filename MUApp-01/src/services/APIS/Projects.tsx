import { getCodeBody } from "services/helper";
import { APIIMGAGE } from "../api";

let ProjectsAPI = {
  //k biet api nen tam thoi ghi ten zị
  getListProjects(data : any) {
    let params = "";

    if (data?.limit) {
      params = params + `limit=${data.limit}&`;
    }
    if (!data) {
      data = {}
    }
    data.TenCTDKVT = getCodeBody() 
    return APIIMGAGE().post(
      `/api/beeland/get-project` , data
    );
  },

  getProjectBySlug(url: string) {
    return APIIMGAGE().get(
      `/web/project/${url}?company_code=${getCodeBody()}`
    );
  },

  getProjectImage(id: number) {
    let data = { MaDA: 0 , TenCTDKVT: "beesky"}
    data.MaDA = id;
    data.TenCTDKVT = getCodeBody()
    return APIIMGAGE().post(
      `/api/HinhAnhDuAn`, data
    );
  },
  
   getProjectReason(id: number) {
    let data = { MaDA: 0 , TenCTDKVT: "beesky"}
    data.MaDA = id;
    data.TenCTDKVT = getCodeBody()
    return APIIMGAGE().post(
      `/api/DuAn_GioiThieu`, data
    );
  },
  getProjectById(id: number) {
    let data = { MaDA: 0 , TenCTDKVT: "beesky"}
    data.MaDA = id;
    data.TenCTDKVT = getCodeBody()
    return APIIMGAGE().post(
      `/api/projectDetail`, data
    );
  },
  getProjectFiltersList() {
    let body = { "TenCTDKVT": getCodeBody() };
    return APIIMGAGE().post(
      `/api/beeland/get-address`, body
    );
  },

  getProjectFilter(data:any) {
    data.TenCTDKVT = getCodeBody()
    return APIIMGAGE().post(
      `/api/beeland/get-project`, data
    );
  },
   getProjectFiltersStatus() {
    let body = { "company_code": getCodeBody() };
    return APIIMGAGE().post(
      `/api/projectStatus`, body
    );
  },
};

export default ProjectsAPI;
