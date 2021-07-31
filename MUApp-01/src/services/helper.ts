import moment from "moment";

export const customTime = (
  time: Date | string | undefined,
  format: string = "DD/MM/YYYY HH:mm:ss"
) => {
  return (time && moment.utc(time).local().format(format)) || "";
};
