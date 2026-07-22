import DateComponent from "../components/Date.tsx";
import Calendar from "react-calendar";
//calender ko clean up krna h

const Utility = () => {
  return (
    <section className="h-screen w-auto rounded-2xl flex justify-center flex-col ">
      <div className=" grid grid-cols-2 w-full gap-2 border-2">
        <DateComponent />

        <Calendar showNavigation={false} showNeighboringMonth={false} showFixedNumberOfWeeks={false}/>
      </div>

      <div className="flex justify-center gap-2 ">
        <div className=" border">Whether</div>

        <div className=" border">Quote</div>
      </div>

      <div className=" border">Todo</div>
    </section>
  );
};

export default Utility;
