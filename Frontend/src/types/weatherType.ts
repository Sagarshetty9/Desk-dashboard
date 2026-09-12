import type { IconType } from "react-icons";


export interface WeatherData{
  temperature: number;
  code: number;
}

export interface WeatherCodeType {
  description: string;
  icon: IconType;
}

