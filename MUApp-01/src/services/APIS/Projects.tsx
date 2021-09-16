import { APIIMGAGE as API } from "../api";

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
    return API().get(`/web/project` + `?${params}`);
  },
  getProjectBySlug(url: string) {
    return API().get(`/web/project/${url}`);
  },
  getProjectFiltersList(company: string) {
    let params = `?company_code=${company}`
    return API().get(`/web/project/filters/list/${params}`);
  },
};

export default ProjectsAPI;
