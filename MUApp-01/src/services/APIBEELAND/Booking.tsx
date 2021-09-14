import { AddBookingRequest, AddKHRequest } from "services/models";
import { API } from "../api";

let BookingAPI = {
  getVoucher(voucher: string) {
    return API().post(`/api/beeland/check-voucher`, {
      tenCTDKVT: 'beesky',
      Voucher: voucher
    });
  },

  getAddress() {
    return API().post(`/api/beeland/get-address`, {
      TenCTDKVT: 'beesky',
    });
  },

  searchKH(searchText: string) {
    console.log(searchText)
    return API().post(`/api/beeland/search-customer`, {
      TenCTDKVT: 'beesky',
      inputSearch: searchText,
    });
  },

  addKH(data: AddKHRequest) {
    return API().post(`/api/beeland/add-customer`, {
      TenCTDKVT: 'beesky',
      ...data
    });
  },

  addBooking(data: AddBookingRequest) {
    return API().post(`/api/beeland/add-booking`, {
      TenCTDKVT: 'beesky',
      ...data
    });
  }
}

export default BookingAPI;
