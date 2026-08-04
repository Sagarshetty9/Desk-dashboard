import getCurrentTemp from "../utils/weather";
import { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {

    setInterval(() => {
      getCurrentTemp()
        .then(res => setWeather(res))
    }, 10000)
  }, []);

  console.log()

  return <div>Here goes Weather</div>;
};

export default Weather;
