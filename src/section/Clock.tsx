import { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = currentTime.getHours() % 12 || 12;
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  // const amPm = currentTime.getHours() >= 12 ? "PM" : "AM";

  return (

      <section className="h-screen w-auto rounded-2xl border-4 border-white flex justify-center flex-col items-center">

        <div className="    ">
          <span className="text-[150px] font-extrabold">{hours}:{minutes}</span>
        </div>

        <div className="   ">
          <span className="font-bold text-2xl"> {currentTime.getDate()} | {currentTime.getMonth()} | {currentTime.getFullYear()} {currentTime.getDay()}</span>
        </div>

      </section>
  
)};

export default Clock;
