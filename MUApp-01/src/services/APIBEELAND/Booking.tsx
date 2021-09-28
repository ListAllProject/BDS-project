import { BodyBooking } from "page/listTransfer/listTransfer";
import { getCodeBody } from "services/helper";
import { AddBookingRequest, AddKHRequest } from "services/models";
import { API, APIUpload } from "../api";

let BookingAPI = {
  getVoucher(voucher: string) {
    return API().post(`/api/beeland/check-voucher`, {
      tenCTDKVT: getCodeBody(),
      Voucher: voucher,
    });
  },
  getBanks() {
    return API().post(`api/beeland/banks`, {
      tenCTDKVT: getCodeBody()
    });
  },

  getAddress() {
    return API().post(`/api/beeland/get-address`, {
      TenCTDKVT: getCodeBody(),
    });
  },

  searchKH(searchText: string) {
    return API().post(`/api/beeland/search-customer`, {
      TenCTDKVT: getCodeBody(),
      inputSearch: searchText,
    });
  },

  addKH(data: AddKHRequest) {
    return API().post(`/api/beeland/add-customer`, {
      TenCTDKVT: getCodeBody(),
      ...data,
    });
  },

  addBooking(data: AddBookingRequest) {
    return API().post(`/api/beeland/add-booking`, {
      TenCTDKVT: getCodeBody(),
      ...data,
    });
  },

  uploadImage(data: any) {
    return APIUpload().post(`/api/BeeHomeAdmin/uploadFile`, data);
  },

  addImageBooking(data: any) {
    return API().post(`/api/beeland/add-images-booking`, {
      TenCTDKVT: getCodeBody(),
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
      TenCTDKVT: getCodeBody(),
    });
  },
  getListProject() {
    return API().post(`/api/beeland/get-project`, {
      TenCTDKVT: getCodeBody(),
    });
  },
};

export default BookingAPI;
