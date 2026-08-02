import DateComponent from "../components/Date";
import Weather from "../components/Weather";
import Calendar from "react-calendar";

const Utility = () => {
  return (
    <section className="h-screen w-auto rounded-2xl flex flex-col gap-2">
    {/* CONTAINER FOR DAY AND CALENDER ////////////*/}

      {/* DATE */}
      <div className=" grid grid-cols-2 w-full gap-2 ">
        <DateComponent />
        <div className="border rounded-2xl">
          <Calendar
            showNavigation={false}
            showNeighboringMonth={false}
            showFixedNumberOfWeeks={false}
          />
        </div>
      </div>

      <div className="flex gap-2">
        <div className=" border w-[50%] h-20">
          <Weather/>
        </div>

        <div className=" border w-[50%] h-20">Quote</div>
      </div>

      <div className=" border h-full">Todo</div>
    </section>
  );
};

export default Utility;
