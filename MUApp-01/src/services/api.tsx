import axios from "axios";

declare global {
  interface Window {
    Configs: any;
    ws: any;
  }
}

window.Configs = {
  apiBaseUrl: window.location.protocol + "//api-stg.mybeeland.com",
};

export const BaseUrl = window.Configs.apiBaseUrl;

let Api = axios.create({
  baseURL: BaseUrl,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

export function API() {
  // console.log("token", localStorage.getItem("token"));
  Api.defaults.responseType = undefined;
  Api.defaults.headers.common["token"] =
    localStorage.getItem("token") === undefined ||
    localStorage.getItem("token") === "undefined" ||
    localStorage.getItem("token") == null
      ? ""
      : localStorage.getItem("token");
  return Api;
}
