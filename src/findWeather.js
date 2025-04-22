export default async function (location) {
  const API_KEY = "552LRAY2FT5BVXVCQKN3D9YX7";
  try {
    const request = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}`,
      { mode: "cors" }
    );
    return request.json();
  } catch (error) {
    throw new Error("Error! status: ", request.status);
  }
}
