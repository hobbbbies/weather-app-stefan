export default class WeatherData {
  #conditions;
  #temperature;
  #feelsLike;
  #precipitation;
  #windSpeed;

  constructor(conditions, temp, feelsLike, precip, windspeed) {
    this.#conditions = conditions;
    this.#temperature = temp;
    this.#feelsLike = feelsLike;
    this.#precipitation = precip;
    this.#windSpeed = windspeed;
  }

  // Getters to access private fields
  get conditions() {
    return this.#conditions;
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
}
