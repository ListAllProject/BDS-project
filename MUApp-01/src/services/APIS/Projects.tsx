import { Store } from "antd/lib/form/interface";
import { API } from "../api";

let ProjectsAPI = {
  //k biet api nen tam thoi ghi ten zị
  getListProjects(
    limit: number,
    page: number,
    city: string,
    investor: string,
    district: string
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
  getProjectById(id: number) {
    return API().get(`/web/project/${id}`);
  },
  getProjectFiltersList() {
    return API().get(`/web/project/filters/list`);
  },
  //   create(obj: Store) {
  //     return API().post(`/abc/xyz`, obj);
  //   },
  //   update(obj: Store) {
  //     return API().put(`/abc/xyz/${obj.id}`, obj);
  //   },
  //   delete(id: number) {
  //     return API().delete(`/abc/xyz/${id}`);
  //   },
};

export default ProjectsAPI;
