import Clock from "./section/Clock";
import Utility from "./section/Utility";

const App = () => {
  return (
    <>
       <div className="grid grid-cols-2 bg-black gap-2 px-7">
        <Clock/>
        <Utility/>
       </div>
    </>
  );
};

export default App;
