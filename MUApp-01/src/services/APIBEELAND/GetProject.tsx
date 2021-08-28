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
  getBuildingByProject(maDa: number) {
    return API().post(`/api/beeland/get-building-by-project`, {
      tenCTDKVT: "beesky",
      maDA: maDa
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
  getTypeofApartment(maTn: number) {
    return API().post(`/api/beeland/get-typeof-apartment`, {
      tenCTDKVT: "beesky",
      maTN: maTn
    });
  },
  getPrice() {
    return API().post(`/api/beeland/get-price`, {
      tenCTDKVT: "beesky",
    });
  },
};

export default ProjectsBeelandAPI;
