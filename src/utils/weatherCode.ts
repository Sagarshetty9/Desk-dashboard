import type { WeatherCodeType } from "../types/weatherType"

// Record<number, WeatherCodeDetails> ensures every key is a number and maps to our interface
const WEATHER_CODE_MAP: Record<number, WeatherCodeType> = {
  0: { description: "Clear Sky", icon: "☀️" },
  1: { description: "Mainly Clear", icon: "🌤️" },
  2: { description: "Partly Cloudy", icon: "⛅" },
  3: { description: "Overcast", icon: "☁️" },
  45: { description: "Foggy", icon: "🌫️" },
  48: { description: "Rime Fog", icon: "🌫️" },
  51: { description: "Light Drizzle", icon: "🌧️" },
  53: { description: "Drizzle", icon: "🌧️" },
  55: { description: "Heavy Drizzle", icon: "🌧️" },
  61: { description: "Slight Rain", icon: "🌧️" },
  63: { description: "Moderate Rain", icon: "🌧️" },
  65: { description: "Heavy Rain", icon: "🌧️" },
  71: { description: "Light Snow", icon: "🌨️" },
  73: { description: "Moderate Snow", icon: "🌨️" },
  75: { description: "Heavy Snow", icon: "🌨️" },
  80: { description: "Rain Showers", icon: "🌦️" },
  81: { description: "Moderate Showers", icon: "🌦️" },
  82: { description: "Violent Rain", icon: "🌧️" },
  95: { description: "Thunderstorm", icon: "🌩️" },
  96: { description: "Thunderstorm with Hail", icon: "⛈️" },
  99: { description: "Severe Thunderstorm", icon: "⛈️" },
  100: { description: "Unknown", icon: "❓" }
};

 export default function getWeatherCode(code: number): WeatherCodeType {
  return WEATHER_CODE_MAP[code] ;
 }

