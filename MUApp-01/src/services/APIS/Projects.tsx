import { getCodeBody } from "services/helper";
import { APIIMGAGE } from "../api";

let ProjectsAPI = {
  //k biet api nen tam thoi ghi ten zị
  getListProjects(
    limit: number,
    page: number,
    city?: string,
    investor?: string,
    district?: string
  ) {
    let params = "";

    if (limit) {
      params = params + `limit=${limit}&`;
    }
    if (page) {
      params = params + `page=${page}&`;
    }
    if (city) {
      params = params + `city=${city}&`;
    }
    if (investor) {
      params = params + `investor=${investor}&`;
    }
    if (district) {
      params = params + `district=${district}&`;
    }
    return APIIMGAGE().get(
      `/web/project` +
        `?${params}&company_code=${getCodeBody()}`
    );
  },
  getProjectBySlug(url: string) {
    return APIIMGAGE().get(
      `/web/project/${url}?company_code=${getCodeBody()}`
    );
  },
  getProjectFiltersList() {
    return APIIMGAGE().get(
      `/web/project/filters/list?company_code=${getCodeBody()}`
    );
  },
};

export default ProjectsAPI;
