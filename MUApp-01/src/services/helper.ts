import moment from "moment";

export const customTime = (
  time: Date | string | undefined,
  format: string = "DD/MM/YYYY HH:mm:ss"
) => {
  return (time && moment.utc(time).local().format(format)) || "";
};

export const getHexColor = (number: number) => {
  return "#" + ((number) >>> 0).toString(16).slice(-6);
}

export const formatMoney = (number: number) => {
  return new Intl.NumberFormat("vi-VN").format(number);
}