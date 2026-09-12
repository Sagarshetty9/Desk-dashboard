import { useState, useEffect } from "react";
import { getFormattedDateTime } from "../utils/dateUtil.ts";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
// monthName, currentDate, year
  const { hours, minutes} = getFormattedDateTime(currentTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (

    <>
      {/* TIME IS BEING DISPLAYED HERE */}
      <div className="text-center border h-full flex justify-center items-center overflow-hidden">
        <span className="text-[8rem] lg:text-[10rem] font-black leading-none whitespace-nowrap select-none">
          {hours}:{minutes}
        </span>
      </div>
    </>


  );
};

export default Clock;
