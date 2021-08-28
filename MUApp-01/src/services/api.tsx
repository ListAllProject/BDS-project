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
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYU5WIjo5NjMsIkhvVGVuIjoiaG9hbiIsIk1hQ1RESyI6IjEiLCJUZW5DVERLVlQiOiJiZWVza3kiLCJFbWFpbCI6ImRpbmhob2Fubmd1eWVuOTk5QGdtYWlsLmNvbSIsIkRpRG9uZyI6IjAzNzc2MDE1NTkiLCJpc0xvY2siOmZhbHNlLCJpc0FjY2VwdCI6dHJ1ZSwibmJmIjoxNjMwMTI2MjMxLCJleHAiOjE2MzA3MzEwMzEsImlhdCI6MTYzMDEyNjIzMSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo0NDM2NiIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDQzNjYifQ.5fogorGJ2tupj-3WrdUF70ZsIYFHPTSuWpI8x_ol6wU",
  },
});
let ApiImage = axios.create({
  baseURL: ImageBaseUrl,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

export function API() {
  // console.log("token", localStorage.getItem("token"));
  Api.defaults.responseType = undefined;
  Api.defaults.headers.common["Access-Control-Allow-Headers"] = "*";
  // Api.defaults.headers.common["Authorization"] =
  //   localStorage.getItem("token") === undefined ||
  //   localStorage.getItem("token") === "undefined" ||
  //   localStorage.getItem("token") == null
  //     ? ""
  //     : localStorage.getItem("token");

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
