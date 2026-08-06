import getCurrentTemp from "../utils/weatherUtil";
import { useEffect, useState } from "react";
import type { WeatherData } from "../types/weatherType";
import getWeatherCode from "../utils/weatherCode"

const Weather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  //Add interval of 30 mins here
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

    const { description, icon } = getWeatherCode(weather?.code ?? 100)
  
  if (weather) {
    console.log(weather);
    console.log('Desc',description);
    console.log('icon',icon);
  }
  return (
    <>
      <div className="font-bold text-2xl">
        {weather &&(
          <div className="flex items-center">
            <p>{description}</p>
            <img src="https://cdn-icons-png.flaticon.com/512/3873/3873754.png" alt="Photo" className="w-15 h-15 inline-block ml-2" />
              {/*addedImages for testing. Just do the Icon fix somehow*/}
           </div>
          )}
      </div>
     </>
    );
};

export default Weather;
