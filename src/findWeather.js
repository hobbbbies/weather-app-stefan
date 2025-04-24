export default async function (location) {
  const API_KEY = "552LRAY2FT5BVXVCQKN3D9YX7";
  const currentDate = new Date();
  const weekFromToday = new Date(currentDate.getTime() + 6 * 24 * 60 * 60 * 1000);

  try {
    const request = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${formatDate(currentDate)}/${formatDate(weekFromToday)}?unitGroup=metric&include=hours&key=${API_KEY}`,
      { mode: "cors" }
    );
    return request.json();
  } catch (error) {
    throw new Error("Error! status: ", request.status);
  }
}

function formatDate(date) {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}
