import { getCodeBody } from "services/helper";
import { API, APIBase } from "../api";
import { ConfirmPasswordRequest, FogotPasswordRequest, LoginRequest, RegisterRequest } from "../models";


let UserAPI = {
  login(data: LoginRequest) {
    data.tenCTDKVT = getCodeBody();
    return API().post(`/api/Login`, data);
  },

  currentUser() {
    return API().get(`/api/UserInfo`);
  },

  register(data: RegisterRequest) {
    data.tenCTDKVT = getCodeBody();
    return API().post(`/api/Register`, data);
  },

  fogotPassword(data: FogotPasswordRequest) {
    data.tenCTDKVT = getCodeBody();
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
    // data.tenCTDKVT = "beesky"
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
