
async function getCurrentTemp() {
  try {
    const params = new URLSearchParams({
      latitude: "18.35",
      longitude: "74.02",
      current: "temperature_2m",
      timezone: "auto"
    });

    const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
    
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network request failed");

    const data = await response.json();

    const temp = data.current.temperature_2m;
    return temp;

  } catch (error) {
    console.error("Error fetching temperature:", error);
    return null;
  }
}


export default getCurrentTemp;