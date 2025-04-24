import findWeather from "./findWeather";
import WeatherData from "./WeatherData";
import render from "./render";

export default function () {
  const input = document.querySelector("#location-search");
  const btn = document.querySelector(".search-btn");
  const location = document.querySelector(".location");

  btn.addEventListener("click", (event) => {
    event.preventDefault();
    findWeather(input.value)
      .then((data) => {

        // const iconMapping = {
        //     "overcast": "fa-cloud",
        //     "Partially cloudy": "fa-cloud-sun",
        //     "Clear": "fa-sun",
        // }

        let countryData = [];
        let hourlyData = [];
        for(let i = 0; i < data.days.length; i+=1) {
            const dateWithourYear = data.days[i].datetime.replace(/^\d{4}-/, "");

            countryData[i] = new WeatherData(
              data.days[i].icon,
              data.days[i].temp,
              data.days[i].feelslike,
              data.days[i].precip,
              data.days[i].windspeed,
              dateWithourYear,
            );

            hourlyData[i] = new WeatherData(
                data.days[0].hours[12 + i].icon,
                data.days[0].hours[12 + i].temp,
                data.days[0].hours[12 + i].feelslike,
                data.days[0].hours[12 + i].precip,
                data.days[0].hours[12 + i].windspeed,
                `Hour ${12 + i}:`
            );
        }
        location.textContent = data.resolvedAddress;


        render(countryData.slice(0, 1), ".weather-info-content");
        render(countryData.slice(1), ".upcoming-content");
        render(hourlyData, ".hourly");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}
