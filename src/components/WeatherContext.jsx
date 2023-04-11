import React, { createContext, useState } from "react";
export const WeatherDataContext = createContext(null);

export const WeatherDataProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorOccurred, setErrorOccurred] = useState(false);

  return (
    <WeatherDataContext.Provider
      value={{
        weatherData,
        setWeatherData,
        errorMessage,
        setErrorMessage,
        errorOccurred,
        setErrorOccurred,
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
};
