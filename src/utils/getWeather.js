import i18n from "i18next";

const Key = import.meta.env.VITE_REACT_APP_RAPID_API_KEY;

const BASE_URL = `https://weatherapi-com.p.rapidapi.com/current.json?key=${Key}&`;

const getWeather = async (city, longitude, latitude) => {
  try {
    let url;
    if (city) {
      url = `${BASE_URL}q=${city}`;
    } else if (longitude && latitude) {
      url = `${BASE_URL}q=${latitude},${longitude}`;
    } else {
      alert("Please Enter a Search Term or use The button below");
    }

    const langParam = i18n.language === "ar" ? "&lang=ar" : "";
    url += langParam;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": Key,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    null;
  }
};

export default getWeather;
