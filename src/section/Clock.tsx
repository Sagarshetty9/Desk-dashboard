import { useState, useEffect } from "react";
import { getFormattedDateTime } from "../utils/dateUtil.ts";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const { hours, minutes, monthName, currentDate, year } =
    getFormattedDateTime(currentTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen w-auto rounded-2xl border-4 border-white flex justify-center flex-col items-center">
      <div className="    ">
        <span className="text-[130px] font-extrabold">
          {hours}:{minutes}
        </span>
      </div>

      <div className="   ">
        <span className="font-bold text-2xl">
          {" "}
          {currentDate} | {monthName} | {year}
        </span>
      </div>
    </section>
  );
};

export default Clock;
