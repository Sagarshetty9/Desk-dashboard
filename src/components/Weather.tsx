import getCurrentTemp from "../utils/weatherUtil";
import { useEffect, useState } from "react";
import type { WeatherData } from "../types/weatherType";

const Weather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        console.log("Fetching data...")
        const data = await getCurrentTemp();
        setWeather(data);
      } catch (error) {
        console.log("There was problem fetching data", error);
      }
    }
    fetchWeather();
  }, []);

  if (weather) {
    console.log(weather);
  }
  return (
      <div>
        {weather && <p>Temperature: {weather.temperature}°C (Code: {weather.code})</p>}
      </div>
    );
};

export default Weather;
