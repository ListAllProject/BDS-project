import { API, APIBase } from "../api";

import {FogotPasswordRequest, LoginRequest, RegisterRequest} from "../models";

let UserAPI = {
  login(data: LoginRequest) {
    data.maCTDK = "beesky"
    return API().post(
      `/api/Login`,
      data,
    );
  },

  currentUser() {
    return API().get(
      `/api/UserInfo`,
    );
  },

  register(data: RegisterRequest) {
    data.maCTDK = "beesky"
    return API().post(
      `/api/Register`,
      data,
    );
  },

  fogotPassword(data: FogotPasswordRequest) {
    data.maCTDK = "beesky"
    return API().post(
      `/api/FogotPassword`,
      data,
    );
  },

  verifyEmail(token: string) {
    localStorage.removeItem("token");
    return APIBase().post(
      `/api/ActiveAccount`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
};

export default UserAPI;
