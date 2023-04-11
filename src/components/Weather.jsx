import React, { useContext, useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import getWeather from "../utils/getWeather";
import { iconMap } from "../utils/images";
import { useTranslation } from "react-i18next";
import LocationButton from "./LocationButton";
import WeatherData from "./WeatherData";
import NoWeatherData from "./NoWeatherData";
import { handleWeatherDataChange } from "../utils/handleWeatherDataChange";
import { WeatherDataContext } from "./WeatherContext";
const Weather = () => {
  const {
    weatherData,
    setWeatherData,
    errorMessage,
    setErrorMessage,
    setErrorOccurred,
  } = useContext(WeatherDataContext);

  const { t } = useTranslation();

  const handleIcons = (weatherData) => {
    const conditionCode = weatherData?.current.condition?.code;
    const iconFileName = iconMap[conditionCode];
    if (iconFileName) {
      return <img src={`${iconFileName}`} style={{ width: 180 }} />;
    } else {
      return null;
    }
  };
  const handleLocationClick = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      const data = await getWeather(null, longitude, latitude);
      handleWeatherDataChange(
        data,
        setWeatherData,
        setErrorMessage,
        setErrorOccurred
      );
    });
  };

  useEffect(() => {
    if (!errorMessage && !weatherData?.location?.name) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          const data = await getWeather(null, longitude, latitude);
          handleWeatherDataChange(
            data,
            setWeatherData,
            setErrorMessage,
            setErrorOccurred
          );
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            console.error("Permission denied for location access");
          }
        }
      );
    }
  }, []);

  return (
    <Stack>
      <Box
        sx={{
          width: "100%",
          maxWidth: "450px",
          mb: 2,
          [`@media (min-width:600px)`]: {
            maxWidth: "600px",
          },
          [`@media (min-width:960px)`]: {
            maxWidth: "960px",
          },
          [`@media (min-width:1024px) and (min-height:800px)`]: {
            maxWidth: "1024px",
          },
        }}
      >
        {weatherData ? (
          <Typography
            sx={{ color: "#16a34a", fontSize: "12px", textAlign: "start" }}
          >
            {t("Success")}
          </Typography>
        ) : null}
        {errorMessage ? (
          <Typography
            component={"span"}
            sx={{ color: "#ef4444", fontSize: "12px", textAlign: "start" }}
          >
            {errorMessage}
            <Box>
              <LocationButton onhandleLocationClick={handleLocationClick} />
            </Box>
          </Typography>
        ) : (
          <Typography
            component="span"
            sx={{
              boxShadow: "none",
            }}
          >
            <LocationButton onhandleLocationClick={handleLocationClick} />
            {weatherData ? (
              <Box>
                <WeatherData
                  weatherData={weatherData}
                  handleIcons={handleIcons}
                />
              </Box>
            ) : (
              <NoWeatherData weatherData={weatherData} />
            )}
          </Typography>
        )}
      </Box>
    </Stack>
  );
};
export default Weather;
