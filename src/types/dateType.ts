export interface FormattedDateTime {
  hours: number;
  minutes: string;
  amPm: "AM" | "PM";
  dayName: string;
  monthName: string;
  currentDate: number;
  monthIndex: number;
  year: number;
}