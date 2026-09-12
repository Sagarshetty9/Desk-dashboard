import Utility from "./section/Utility.tsx";
import SystemInfo from "./section/SystemInfo.tsx";

const App = () => {
  return (
    <div className=" w-screen flex h-screen gap-1 ">
      <div className="w-1/2 h-full">
        <Utility />
      </div>
      <div className="w-1/2 h-full">
        <SystemInfo />
      </div>
    </div>
  );
};

export default App;
