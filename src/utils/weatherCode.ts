import type { WeatherCodeType } from "../types/weatherType"
import {
  WiDaySunny,
  WiDayCloudy,
  WiCloudy,
  WiFog,
  WiRain,
  WiShowers,
  WiSnow,
  WiThunderstorm,
  WiDayHail,
} from "react-icons/wi";
// Record<number, WeatherCodeDetails> ensures every key is a number and maps to our interface
const WEATHER_CODE_MAP: Record<number, WeatherCodeType> = {
  0: { description: "Clear Sky", icon: WiDaySunny },

  1: { description: "Mainly Clear", icon: WiDayCloudy },
  2: { description: "Partly Cloudy", icon: WiDayCloudy },
  3: { description: "Overcast", icon: WiCloudy },

  45: { description: "Foggy", icon: WiFog },
  48: { description: "Rime Fog", icon: WiFog },

  51: { description: "Light Drizzle", icon: WiRain },
  53: { description: "Drizzle", icon: WiRain },
  55: { description: "Heavy Drizzle", icon: WiRain },

  61: { description: "Slight Rain", icon: WiRain },
  63: { description: "Moderate Rain", icon: WiRain },
  65: { description: "Heavy Rain", icon: WiRain },

  71: { description: "Light Snow", icon: WiSnow },
  73: { description: "Moderate Snow", icon: WiSnow },
  75: { description: "Heavy Snow", icon: WiSnow },

  80: { description: "Rain Showers", icon: WiShowers },
  81: { description: "Moderate Showers", icon: WiShowers },
  82: { description: "Violent Rain", icon: WiShowers },

  95: { description: "Thunderstorm", icon: WiThunderstorm },
  96: { description: "Thunderstorm with Hail", icon: WiDayHail },
  99: { description: "Severe Thunderstorm", icon: WiThunderstorm },

  100: { description: "Unknown", icon: WiCloudy },
};

export default function getWeatherCode(code: number): WeatherCodeType {
  return WEATHER_CODE_MAP[code] ?? WEATHER_CODE_MAP[100];
 }

