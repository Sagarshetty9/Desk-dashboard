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
    console.log("Data fetched");
  }
  return (
    <>
      <div className="font-bold text-2xl border h-full p-2">
        {weather && (
          <div>
            <WeatherIcon size={80} className="text-white"/>
            <p className="font-black text-end">{description}</p>
            <p className="text-end">{weather.temperature}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
