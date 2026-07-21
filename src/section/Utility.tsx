
import DateComponent from "../components/Date.tsx";
import Calendar from 'react-calendar'

const Utility = () => {
  return (
    <section className="h-screen w-auto rounded-2xl flex justify-center flex-col items-center">
      <div className=" grid grid-cols-2 w-full h-full gap-2">
        <DateComponent />

        <Calendar />
      </div>

      <div className="">
        <div className=" border">Whether</div>

        <div className=" border">Quote</div>
      </div>

      <div className=" border">Todo</div>
    </section>
  );
};

export default Utility;
