import Clock from "../components/Clock.tsx";
import Weather from "../components/Weather.tsx";
import DateComponent from "../components/Date.tsx";

const Utility = () => {
  return (
    <section className="h-full w-full border-2 flex flex-col ">
      {/* Clock takes top space */}
      <div className="flex-1 w-full pt-1 px-1 pb-0">
        <Clock />
      </div>

      {/* Weather and Date fill bottom space */}
      <div className="flex-1 w-full flex gap-1 p-1">
        <div className="w-1/2 h-full min-w-0">
          <Weather />
        </div>
        <div className="w-1/2 h-full min-w-0">
          <DateComponent />
        </div>
      </div>
    </section>
  );
};

export default Utility;