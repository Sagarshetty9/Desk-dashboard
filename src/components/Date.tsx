import { useState, useEffect } from "react";
import { getFormattedDateTime } from "../utils/dateUtil";

const DateComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { dayName, currentDate, monthName } = getFormattedDateTime(currentTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border border-white flex flex-col justify-center items-center">
     <div className="font-black text-3xl">
      {dayName}
     </div>
     <div className="font-medium">
      {currentDate} {monthName}
     </div>
    </div>
  );
};

export default DateComponent;
