import { BodyBooking } from "page/listTransfer/listTransfer";
import { AddBookingRequest, AddKHRequest } from "services/models";
import { API, APIIMGAGE, APIUpload } from "../api";

const tenCTDKVT = window.location.href.split(".");

let BookingAPI = {
  getVoucher(voucher: string) {
    return API().post(`/api/beeland/check-voucher`, {
      tenCTDKVT: tenCTDKVT[0].includes("https")
        ? tenCTDKVT[0].replaceAll("https://", "")
        : "beesky",
      Voucher: voucher,
    });
  },
  getBanks() {
    return API().post(`api/beeland/banks`, {
      tenCTDKVT: tenCTDKVT[0].includes("https")
        ? tenCTDKVT[0].replaceAll("https://", "")
        : "beesky",
    });
  },

  getAddress() {
    return API().post(`/api/beeland/get-address`, {
      TenCTDKVT: tenCTDKVT[0].includes("https")
        ? tenCTDKVT[0].replaceAll("https://", "")
        : "beesky",
    });
  },

  searchKH(searchText: string) {
    console.log(searchText);
    return API().post(`/api/beeland/search-customer`, {
      TenCTDKVT: tenCTDKVT[0].includes("https")
        ? tenCTDKVT[0].replaceAll("https://", "")
        : "beesky",
      inputSearch: searchText,
    });
  },

  addKH(data: AddKHRequest) {
    return API().post(`/api/beeland/add-customer`, {
      TenCTDKVT: tenCTDKVT[0].includes("https")
        ? tenCTDKVT[0].replaceAll("https://", "")
        : "beesky",
      ...data,
    });
  },

  addBooking(data: AddBookingRequest) {
    return API().post(`/api/beeland/add-booking`, {
      TenCTDKVT: tenCTDKVT[0].includes("https")
        ? tenCTDKVT[0].replaceAll("https://", "")
        : "beesky",
      ...data,
    });
  },

  uploadImage(data: any) {
    return APIUpload().post(`/api/BeeHomeAdmin/uploadFile`, data);
  },

  addImageBooking(data: any) {
    return API().post(`/api/beeland/add-images-booking`, {
      TenCTDKVT: tenCTDKVT[0].includes("https")
        ? tenCTDKVT[0].replaceAll("https://", "")
        : "beesky",
      ...data,
    });
  },

  addConfirmReceipt(data: any) {
    return API().post(`/api/beeland/confirm-receipt`, {
      ...data,
    });
  },
  getListBooking(data: BodyBooking) {
    return API().post(`/api/beeland/list-booking`, data);
  },
  getListStatus() {
    return API().post(`/api/beeland/status`, {
      TenCTDKVT: tenCTDKVT[0].includes("https")
        ? tenCTDKVT[0].replaceAll("https://", "")
        : "beesky",
    });
  },
  getListProject() {
    return API().post(`/api/beeland/get-project`, {
      TenCTDKVT: tenCTDKVT[0].includes("https")
        ? tenCTDKVT[0].replaceAll("https://", "")
        : "beesky",
    });
  },
};

export default BookingAPI;
