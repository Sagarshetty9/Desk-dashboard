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

      {/* WEATHER  */}
      <div className="flex">
        <div className=" border w-full h-20 rounded-2xl flex justify-center items-center">
          <Weather/>
        </div>
      </div>


      {/*TODO////////////////////////*/}
      <section className="border h-full rounded-2xl">Todo</section>
    </section>
  );
};

export default Utility;
