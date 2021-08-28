import { API } from "../api";

let ProjectsBeelandAPI = {
  getListProducts(obj: any) {
    return API().post(`/api/beeland/get-products`, obj);
  },

  // for-filter
  getProjectFilter() {
    const obj = {
      tenCTDKVT: "beesky",
    };
    return API().post(`/api/beeland/get-project`, obj);
  },
  getBuildingByProject() {
    return API().post(`/api/beeland/get-building-by-project`, {
      tenCTDKVT: "beesky",
    });
  },
  getFloorByBuilding() {
    return API().post(`/api​/beeland​/get-floor-by-building`, {
      tenCTDKVT: "beesky",
    });
  },
  getDirect() {
    return API().post(`/api/beeland/get-direct`, {
      tenCTDKVT: "beesky",
    });
  },
  getTypeofApartment() {
    return API().post(`/api/beeland/get-typeof-apartment`, {
      tenCTDKVT: "beesky",
    });
  },
  getPrice() {
    return API().post(`/api/beeland/get-price`, {
      tenCTDKVT: "beesky",
    });
  },
};

export default ProjectsBeelandAPI;
