import axios from "axios";

declare global {
  interface Window {
    Configs: any;
    ws: any;
  }
}

window.Configs = {
  // apiBaseUrl: window.location.protocol + "//beesky-admin.ninja-it.asia",
  apiBaseUrl:
    "https://lingsmoment.herokuapp.com/https://api-client.mybeeland.com",
  apiImageUrl: "https://beesky-admin.ninja-it.asia", // for-blog-image
};

export const BaseUrl = window.Configs.apiBaseUrl;
export const ImageBaseUrl = window.Configs.apiImageUrl;

let Api = axios.create({
  baseURL: BaseUrl,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});
let ApiImage = axios.create({
  baseURL: ImageBaseUrl,
  timeout: 100000,
  // headers: {
  //   // "Content-Type": "application/json",
  // },
});

export function API() {
  Api.defaults.responseType = undefined;
  Api.defaults.headers.common["authorization"] =
    localStorage.getItem("token") === undefined ||
    localStorage.getItem("token") === "undefined" ||
    localStorage.getItem("token") == null
      ? ""
      : 'Bearer ' + localStorage.getItem("token");
  return Api;
}

export function APIIMGAGE() {
  // console.log("token", localStorage.getItem("token"));
  ApiImage.defaults.responseType = undefined;
  ApiImage.defaults.headers.common["token"] =
    localStorage.getItem("token") === undefined ||
    localStorage.getItem("token") === "undefined" ||
    localStorage.getItem("token") == null
      ? ""
      : localStorage.getItem("token");
  return ApiImage;
}
