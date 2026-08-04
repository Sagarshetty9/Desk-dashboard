async function getCurrentTemp() {
  try {
    const params = new URLSearchParams({
      latitude: "18.35",
      longitude: "74.02",
      current: "temperature_2m,weather_code",
      timezone: "auto",
    });

    const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;

    const response = await fetch(url);
    
    const data = await response.json();

    return {
      temprature: data.current.temperature_2m,
      code: data.current.weather_code
    }
    
  } catch (error) {
    console.error("Error fetching temperature:", error);
    return null;
  }
}


export default getCurrentTemp;
