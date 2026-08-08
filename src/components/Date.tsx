import { useState, useEffect } from "react";
import { getFormattedDateTime } from "../utils/dateUtil";
import type { FormattedDateTimeType } from "../types/dateType"

const DateComponent = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const dateTime: FormattedDateTimeType = getFormattedDateTime(currentTime);
  const { dayName, currentDate, monthName,year } = dateTime;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="border border-white flex flex-col justify-center items-center rounded-2xl @CONTAINER">
     <div className={`font-black ${dayName.length > 7 ? 'text-[3.1cqw]' : 'text-[4cqw]'}`}>
      {dayName.toUpperCase()}  
     </div>
     <div className={`font-bold text-xl text-gray-400 `}>
      {currentDate} {monthName} {year}
     </div>
    </div>
  );
};

export default DateComponent;
