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
  apiUpload:
    "https://lingsmoment.herokuapp.com/https://apibeehomecore.appbeesky.com",
  apiImageUrl: "https://beesky-admin.ninja-it.asia", // for-blog-image
};

export const tenCTDKVT = window.location.href.split(".");

export const BaseUrl = window.Configs.apiBaseUrl;
export const ImageBaseUrl = window.Configs.apiImageUrl;
export const domainUpload = window.Configs.apiUpload;

let ApiBase = axios.create({
  baseURL: BaseUrl,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});
let Api = axios.create({
  baseURL: BaseUrl,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});
let ApiUpload = axios.create({
  baseURL: domainUpload,
  timeout: 100000,
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
      : "Bearer " + localStorage.getItem("token");
  return Api;
}

export function APIUpload() {
  return ApiUpload;
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

export function APIBase() {
  return ApiBase;
}

// const APIFormData = async (
//   url: string,
//   method: string,
//   bodyData: any
// ) => {
//   try {
//     const formData = new FormData()
//     formData.append('file', bodyData.file)
//     formData.append('site_id', bodyData.siteId)
//     const respond = await fetch(url, {
//       method,
//       body: formData,
//     })

//     const object = await respond.json()
//     if (respond.status < 200 || respond.status > 299) {
//       if (respond.status === 401) {
//         document.cookie = 'token' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
//         notification.warning({
//           message: 'Sites.bio Notification',
//           description: 'Access denied'
//         })
//         window.location.reload()
//       }
//       return { success: false, ...object }
//     }
//     return { success: true, data: object }
//   } catch (err) {
//     notification.error({
//       message: 'Sites.bio Notification',
//       description: err
//     })
//   }
// }

// export default APIFormData
