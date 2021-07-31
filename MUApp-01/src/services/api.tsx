import axios from "axios";

declare global {
    interface Window {
      Configs: any;
      ws: any;
    }
  }

window.Configs = {
    apiBaseUrl: location.protocol + "//api-stg.mybeeland.com",
    webSocketBaseUrl: (location.protocol === "https:" ? "wss:" : "ws:") + "//endpointdev.shlab.me/",
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
