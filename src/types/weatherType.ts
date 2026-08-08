import type { IconType } from "react-icons";


export interface WeatherData{
  temperature: number;
  code: number;
  icon: IconType;
}

export interface WeatherCodeType {
  description: string;
  icon: IconType;
}

