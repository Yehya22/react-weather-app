import i18n from "i18next";

export const handleWeatherDataChange = (
  data,
  setWeatherData,
  setErrorMessage,
  setErrorOccurred
) => {
  if (data?.error?.code === 1006) {
    const errorMessage = i18n.t("error_1006");
    setErrorMessage(errorMessage);
    setWeatherData(null);
    setErrorOccurred(true);
  } else {
    setWeatherData(data);
    setErrorMessage(null);
    setErrorOccurred(false);
  }
};
