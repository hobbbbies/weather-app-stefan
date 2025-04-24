export default class WeatherData {
  #icon;
  #temperature;
  #feelsLike;
  #precipitation;
  #windSpeed;
  #datetime;
  #resolvedAddress

  constructor(icon, temp, feelsLike, precip, windspeed, datetime, resolvedAddress) {
    this.#icon = icon;
    this.#temperature = temp;
    this.#feelsLike = feelsLike;
    this.#precipitation = precip;
    this.#windSpeed = windspeed;
    this.#datetime = datetime;
    this.#resolvedAddress = resolvedAddress;
  }

  // Getters to access private fields
  get icon() {
    return this.#icon;
  }
  get temperature() {
    return this.#temperature;
  }
  get feelsLike() {
    return this.#feelsLike;
  }
  get precipitation() {
    return this.#precipitation;
  }
  get windSpeed() {
    return this.#windSpeed;
  }

  get datetime() {
    return this.#datetime;
  }

  get resolvedAddress() {
    return this.#resolvedAddress;
  }
}
