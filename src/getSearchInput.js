import findWeather from "./findWeather";
import WeatherData from "./WeatherData";

export default function () {
  const input = document.querySelector("#location-search");
  const btn = document.querySelector(".search-btn");

  btn.addEventListener("click", (event) => {
    event.preventDefault();
    findWeather(input.value)
      .then((data) => {
        if (!data.currentConditions) {
          throw new Error("No weather data found");
        }
        const countryData = new WeatherData(
          data.currentConditions.conditions,
          data.currentConditions.temp,
          data.currentConditions.feelslike,
          data.currentConditions.precip,
          data.currentConditions.windspeed
        );
        console.log(
          countryData.conditions,
          countryData.temperature,
          countryData.feelsLike,
          countryData.precipitation,
          countryData.windSpeed
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}
