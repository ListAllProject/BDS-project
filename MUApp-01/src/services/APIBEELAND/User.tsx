import { API, APIBase, tenCTDKVT } from "../api";

import {FogotPasswordRequest, LoginRequest, RegisterRequest, ConfirmPasswordRequest} from "../models";

let UserAPI = {
  login(data: LoginRequest) {
    data.maCTDK = tenCTDKVT[0].includes("https")
      ? tenCTDKVT[0].replaceAll("https://", "")
      : "beesky";
    return API().post(`/api/Login`, data);
  },

  currentUser() {
    return API().get(`/api/UserInfo`);
  },

  register(data: RegisterRequest) {
    data.maCTDK = tenCTDKVT[0].includes("https")
      ? tenCTDKVT[0].replaceAll("https://", "")
      : "beesky";
    return API().post(`/api/Register`, data);
  },

  fogotPassword(data: FogotPasswordRequest) {
    data.maCTDK = tenCTDKVT[0].includes("https")
      ? tenCTDKVT[0].replaceAll("https://", "")
      : "beesky";
    return API().post(`/api/FogotPassword`, data);
  },

  verifyEmail(token: string) {
    localStorage.removeItem("token");
    return APIBase().post(
      `/api/ActiveAccount`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  confirmPassword(data: ConfirmPasswordRequest, token: string) {
    // data.maCTDK = "beesky"
    return APIBase().post(
      `/api/ConfimPasword`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  },
};

export default UserAPI;
