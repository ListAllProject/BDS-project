import { API } from "../api";

import {FogotPasswordRequest, LoginRequest, RegisterRequest} from "../models";

let UserAPI = {
  login(data: LoginRequest) {
    data.maCTDK = "beesky"
    return API().post(
      `/api/Login`,
      data,
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
    // Note: chưa biết dùng api nào để active account
    return API().post(
      `/api/ActiveAccount`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
};

export default UserAPI;
