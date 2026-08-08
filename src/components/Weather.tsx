import getCurrentTemp from "../utils/weatherUtil";
import { useEffect, useState } from "react";
import type { WeatherData } from "../types/weatherType";
import getWeatherCode from "../utils/weatherCode";

const Weather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  //Add interval of 30 mins here
  useEffect(() => {
    async function fetchWeather() {
      try {
        console.log("Fetching data...");
        const data = await getCurrentTemp();
        setWeather(data);
      } catch (error) {
        console.log("There was a problem fetching data", error);
      }
    }

    fetchWeather()
    const intervalId = setInterval(fetchWeather, 30 * 60 * 1000); //Run after every 30 mins
    
    return () => clearInterval(intervalId);
    
  }, []);

  const { description, icon } = getWeatherCode(weather?.code ?? 100);
  const WeatherIcon = icon;

  if (weather) {
    console.log(weather);
    console.log("Desc", description);
    console.log("icon", icon);
  }
  return (
    <>
      <div className="font-bold text-2xl w-full">
        {weather && (
          <div className="flex items-center justify-evenly">
            <WeatherIcon size={80} className="text-green-600"/>
            <p className="font-black">{description}</p>
            <p className="text-gray-500 font-black">{weather.temperature}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
