import { getCodeBody } from "services/helper";
import { API } from "../api";

let ProjectsBeelandAPI = {
  getListProducts(obj: any) {
    return API().post(`/api/beeland/get-products`, obj);
  },

  // for-filter
  getProjectFilter() {
    const obj = {
      tenCTDKVT: getCodeBody(),
    };
    return API().post(`/api/beeland/get-project`, obj);
  },
  getBuildingByProject(maDa: number) {
    return API().post(`/api/beeland/get-building-by-project`, {
      tenCTDKVT: getCodeBody(),
      maDA: maDa,
    });
  },
  getFloorByBuilding() {
    return API().post(`/api​/beeland​/get-floor-by-building`, {
      tenCTDKVT: getCodeBody(),
    });
  },
  getDirect() {
    return API().post(`/api/beeland/get-direct`, {
      tenCTDKVT: getCodeBody(),
    });
  },
  getTypeofApartment(maTn: number) {
    return API().post(`/api/beeland/get-typeof-apartment`, {
      tenCTDKVT: getCodeBody(),
      maTN: maTn,
    });
  },
  getPrice() {
    return API().post(`/api/beeland/get-price`, {
      tenCTDKVT: getCodeBody(),
    });
  },
};

export default ProjectsBeelandAPI;
