import { useState, useEffect } from "react";

const Clock = () => {

  const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);


  return (
    <section className="bg-zinc-500 w-auto rounded-4xl ">
      <div className="h-screen w-auto rounded-2xl flex justify-center align-center items-center font-bold text-6xl">
          {currentTime.toLocaleTimeString()}
      </div>
    </section>
  );
};

export default Clock;
