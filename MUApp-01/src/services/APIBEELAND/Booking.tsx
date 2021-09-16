import { AddBookingRequest, AddKHRequest } from "services/models";
import { API, APIIMGAGE, APIUpload } from "../api";

let BookingAPI = {
  getVoucher(voucher: string) {
    return API().post(`/api/beeland/check-voucher`, {
      tenCTDKVT: "beesky",
      Voucher: voucher,
    });
  },
  getBanks() {
    return API().post(`api/beeland/banks`, {
      tenCTDKVT: "beesky",
    });
  },

  getAddress() {
    return API().post(`/api/beeland/get-address`, {
      TenCTDKVT: "beesky",
    });
  },

  searchKH(searchText: string) {
    console.log(searchText);
    return API().post(`/api/beeland/search-customer`, {
      TenCTDKVT: "beesky",
      inputSearch: searchText,
    });
  },

  addKH(data: AddKHRequest) {
    return API().post(`/api/beeland/add-customer`, {
      TenCTDKVT: "beesky",
      ...data,
    });
  },

  addBooking(data: AddBookingRequest) {
    return API().post(`/api/beeland/add-booking`, {
      TenCTDKVT: "beesky",
      ...data,
    });
  },

  uploadImage(data: any) {
    return APIUpload().post(`/api/BeeHomeAdmin/uploadFile`, data);
  },

  addImageBooking(data: any) {
    return API().post(`/api/beeland/add-images-booking`, {
      TenCTDKVT: "beesky",
      ...data,
    });
  },

  addConfirmReceipt(data: any) {
    return API().post(`/api/beeland/confirm-receipt`, {
      ...data,
    });
  },
};

export default BookingAPI;
