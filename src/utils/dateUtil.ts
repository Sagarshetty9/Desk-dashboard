import type {FormattedDateTime} from "../types/dateType"

export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];



export function getFormattedDateTime(
  date: Date = new Date()
): FormattedDateTime {
  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const amPm: "AM" | "PM" = date.getHours() >= 12 ? "PM" : "AM";
  const dayName = days[date.getDay()];
  const monthIndex = date.getMonth();
  const monthName = months[monthIndex];
  const currentDate = date.getDate();
  const year = date.getFullYear();

  return {
    hours,
    minutes,
    amPm,
    dayName,
    monthName,
    currentDate,
    monthIndex,
    year,
  };
}