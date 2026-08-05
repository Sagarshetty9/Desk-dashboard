import { useState, useEffect } from "react";
import { getFormattedDateTime } from "../utils/dateUtil";
import type {FormattedDateTime} from "../types/dateType"

const DateComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { dayName, currentDate, monthName } = getFormattedDateTime(currentTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

//Use types for dates. Lil complicated but can be done gng

  return (
    <div className="border border-white flex flex-col justify-center items-center rounded-2xl @CONTAINER">
     <div className={`font-black ${dayName.length > 7 ? 'text-[3.1cqw]' : 'text-[4cqw]'}`}>
      {dayName.toUpperCase()}  
     </div>
     <div className={`font-bold text-[20px] text-gray-400 `}>
      {currentDate} {monthName}
     </div>
    </div>
  );
};

export default DateComponent;
