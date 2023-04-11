import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import CircleIcon from "@mui/icons-material/Circle";

const WeatherData = ({ weatherData, handleIcons }) => {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";
  const isWidthSmall = useMediaQuery("(max-width:502px)");
  if (!weatherData) {
    return (
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle3">
          {t("Enter a city or use location button to get the weather data.")}
        </Typography>
      </Box>
    );
  }
  return (
    <Box>
      <Box direction="row">{handleIcons(weatherData)}</Box>
      <Typography variant="h3" sx={{ mb: 2 }}>
        {weatherData?.current?.temp_c}ºC
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        {weatherData?.location?.name}
        <br />
        {weatherData?.location?.country}
      </Typography>
      {isArabic ? (
        <React.Fragment>
          <Typography
            variant="subtitle1"
            style={{
              display: "inline-flex",
              marginRight: "5px",
            }}
          >
            {t("Feels like")}:°م {weatherData?.current?.feelslike_c}
          </Typography>

          <CircleIcon sx={{ fontSize: "small", mr: "3px" }} color="inherit" />
          {isWidthSmall && <br />}

          <Typography
            variant="subtitle1"
            style={{ display: "inline-flex", marginRight: "5px" }}
          >
            {t("Info")} :{weatherData?.current?.condition?.text}
          </Typography>

          <CircleIcon sx={{ fontSize: "small", mr: "3px" }} color="inherit" />
          {isWidthSmall && <br />}

          <Typography
            variant="subtitle1"
            style={{ display: "inline-flex", marginRight: "5px" }}
          >
            {t("Humidity")}: %{weatherData?.current?.humidity}
          </Typography>

          <CircleIcon sx={{ fontSize: "small", mr: "3px" }} color="inherit" />
          {isWidthSmall && <br />}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <CircleIcon sx={{ fontSize: "small", mr: "3px" }} color="inherit" />
          <Typography
            variant="subtitle1"
            style={{ display: "inline-flex", marginRight: "15px" }}
          >
            {t("Feels like")}: {weatherData?.current?.feelslike_c}°C
          </Typography>
          {isWidthSmall && <br />}

          <CircleIcon sx={{ fontSize: "small", mr: "3px" }} color="inherit" />
          <Typography
            variant="subtitle1"
            style={{ display: "inline-flex", marginRight: "15px" }}
          >
            {t("Info")}: {weatherData?.current?.condition?.text}
          </Typography>
          {isWidthSmall && <br />}

          <CircleIcon sx={{ fontSize: "small", mr: "3px" }} color="inherit" />
          <Typography
            variant="subtitle1"
            style={{ display: "inline-flex", marginRight: "15px" }}
          >
            {t("Humidity")}: {weatherData?.current?.humidity}°C
          </Typography>
        </React.Fragment>
      )}
    </Box>
  );
};

export default WeatherData;
