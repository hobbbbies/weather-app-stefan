export default function (data, parentDivClass) {
  const parentDiv = document.querySelector(parentDivClass);

  parentDiv.textContent = "";

  for (let i = 0; i < data.length; i += 1) {
    const weatherProperties = [
      { property: "temperature", label: "Temperature", suffix: "°C" },
      { property: "feelsLike", label: "Feels Like", suffix: "°C" },
      { property: "precipitation", label: "precipitation", suffix: "%" },
      { property: "windSpeed", label: "Wind Speed", suffix: "km/h" },
    ];

    const wrapperDiv = document.createElement("section");
    wrapperDiv.classList.add("wrapper");

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");
    dateDiv.textContent = `${data[i].datetime}`;
    wrapperDiv.append(dateDiv);

    const iconImg = document.createElement("img");
    import(`./images/WeatherIcons/PNG/1st Set - Color/${data[i].icon}.png`)
      .then((src) => {
        iconImg.src = src.default;
      }).catch((error) => {
        console.error(error);
      });
    // iconImg.src = `./images/WeatherIcons/PNG/1st Set - Color/${data[i].icon}.png`;
    wrapperDiv.append(iconImg);

    weatherProperties.forEach((element) => {
      const divToAdd = document.createElement("div");
      divToAdd.classList.add(`class-${element.property}`);
      divToAdd.textContent = `${element.label}: ${data[i][element.property]}${
        element.suffix
      }`;
      wrapperDiv.append(divToAdd);
    });
    parentDiv.append(wrapperDiv);
  }
}
