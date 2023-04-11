import React, { useState, useContext } from "react";
import { IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import getWeather from "../utils/getWeather";
import { useTranslation } from "react-i18next";
import { WeatherDataContext } from "./WeatherContext";
import { handleWeatherDataChange } from "../utils/handleWeatherDataChange";
const SearchBar = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [city, setCity] = useState("");
  const { setWeatherData, setErrorMessage, setErrorOccurred } =
    useContext(WeatherDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getWeather(city);
    handleWeatherDataChange(
      data,
      setWeatherData,
      setErrorMessage,
      setErrorOccurred
    );
    setCity("");
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: theme.palette.mode === "light" ? "#fefefe" : "inherit",
        borderRadius: 3,
        boxShadow: "none",
        display: "flex",
        justifyContent: "space-between",
        "&:focus-within": {
          border:
            theme.palette.mode === "light"
              ? "2px solid #212529 "
              : "2px solid #fefefe",
        },
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder={t("Enter your location...")}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          border: "none",
          outline: "none",
        }}
      />

      <IconButton
        type="click"
        sx={{
          color: "inherit",
          "&:focus-within": {
            outline: "none",
            border: "none",
          },
        }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
