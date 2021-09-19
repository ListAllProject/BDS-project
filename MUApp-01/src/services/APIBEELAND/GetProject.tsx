import { API, tenCTDKVT } from "../api";

let ProjectsBeelandAPI = {
  getListProducts(obj: any) {
    return API().post(`/api/beeland/get-products`, obj);
  },

  // for-filter
  getProjectFilter() {
    const obj = {
      tenCTDKVT: tenCTDKVT[0].includes("https")
        ? tenCTDKVT[0].replaceAll("https://", "")
        : "beesky",
    };
    return API().post(`/api/beeland/get-project`, obj);
  },
  getBuildingByProject(maDa: number) {
    return API().post(`/api/beeland/get-building-by-project`, {
      tenCTDKVT: tenCTDKVT[0].includes("https")
        ? tenCTDKVT[0].replaceAll("https://", "")
        : "beesky",
      maDA: maDa,
    });
  },
  getFloorByBuilding() {
    return API().post(`/api​/beeland​/get-floor-by-building`, {
      tenCTDKVT: tenCTDKVT[0].includes("https")
        ? tenCTDKVT[0].replaceAll("https://", "")
        : "beesky",
    });
  },
  getDirect() {
    return API().post(`/api/beeland/get-direct`, {
      tenCTDKVT: tenCTDKVT[0].includes("https")
        ? tenCTDKVT[0].replaceAll("https://", "")
        : "beesky",
    });
  },
  getTypeofApartment(maTn: number) {
    return API().post(`/api/beeland/get-typeof-apartment`, {
      tenCTDKVT: tenCTDKVT[0].includes("https")
        ? tenCTDKVT[0].replaceAll("https://", "")
        : "beesky",
      maTN: maTn,
    });
  },
  getPrice() {
    return API().post(`/api/beeland/get-price`, {
      tenCTDKVT: tenCTDKVT[0].includes("https")
        ? tenCTDKVT[0].replaceAll("https://", "")
        : "beesky",
    });
  },
};

export default ProjectsBeelandAPI;
