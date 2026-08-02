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

      {/* TIME IS BEING DISPLAYED HERE */}
      <div className="w-full @container flex justify-center items-center">
        <span className="text-[36cqw] font-extrabold">
          {hours}:{minutes}
        </span>
      </div>

        {/* DATE AND OTHER STUFF */}
      <div className="   ">
        <span className="font-bold text-2xl">
          {currentDate} | {monthName} | {year}
        </span>
      </div>
    </section>
  );
};

export default Clock;
