import getWeather from "./getWeather";
import i18n from "i18next";
import { handleWeatherDataChange } from "./handleWeatherDataChange";

export const handleLanguageButtonClick = async (
  lang,
  weatherData,
  setWeatherData,
  setErrorMessage,
  setErrorOccurred
) => {
  await i18n.changeLanguage(lang);
  const data = await getWeather(weatherData?.location?.name);

  handleWeatherDataChange(
    data,
    setWeatherData,
    setErrorOccurred,
    setErrorMessage
  );
};
