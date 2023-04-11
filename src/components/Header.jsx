import React, { useContext } from "react";
import { Stack } from "@mui/system";
import { Box, Link, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/material/styles";
import cloudy from "../../public/cloudy.png";
import { ColorModeContext } from "../App";
import i18n from "i18next";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { WeatherDataContext } from "./WeatherContext";
import { handleLanguageButtonClick } from "../utils/handleLanguageButtonClick";
const Header = () => {
  const isArabic = i18n.language === "ar";
  const isEnglish = i18n.language === "en";

  const { weatherData, setWeatherData, setErrorMessage, setErrorOccurred } =
    useContext(WeatherDataContext);

  const { toggleColorMode } = useContext(ColorModeContext);

  const handleLanguageButtonClickWrapper = async (lang) => {
    await handleLanguageButtonClick(
      lang,
      weatherData,
      setWeatherData,
      setErrorMessage,
      setErrorOccurred
    );
  };
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: theme.palette.mode === "light" ? "#fefefe" : "#1f2937",
      }}
    >
      <img src={cloudy} alt="logo" height={45} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <IconButton
          sx={{
            borderRadius: "10px",
            right: 35,
            top: 15,
            mr: 2,
            position: "fixed",
            color: theme.palette.mode === "light" ? "#374151" : "#9ca3af",
            "&:hover": {
              backgroundColor: "transparent",
              color: theme.palette.mode === "light" ? "#111827" : "#f3f4f6",
            },
            "&:focus": {
              outline: "none",
              border: "none",
            },
          }}
          onClick={toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
        <Button
          onClick={() => handleLanguageButtonClickWrapper("en")}
          disabled={isEnglish}
          sx={{
            color: theme.palette.mode === "light" ? "#374151" : "#9ca3af",
            backgroundColor:
              theme.palette.mode === "light" ? "#fefefe" : "inherit",
            ":hover": {
              color: theme.palette.mode === "light" ? "#111827" : "#f3f4f6",
              backgroundColor:
                theme.palette.mode === "light" ? "#f1f3f5" : "#343a40",
            },
            ":focus": {
              outline: "none",
              border: "none",
            },
          }}
        >
          {" "}
          EN
        </Button>
        <Button
          disabled={isArabic}
          sx={{
            color: theme.palette.mode === "light" ? "#374151" : "#9ca3af",
            backgroundColor:
              theme.palette.mode === "light" ? "#fefefe" : "inherit",
            ":hover": {
              color: theme.palette.mode === "light" ? "#111827" : "#f3f4f6",
              backgroundColor:
                theme.palette.mode === "light" ? "#f1f3f5" : "#343a40",
            },
            ":focus": {
              outline: "none",
              border: "none",
            },
          }}
          onClick={() => handleLanguageButtonClickWrapper("ar")}
        >
          AR
        </Button>
      </Box>
      <Box sx={{ position: "fixed", right: 10, mb: 0.5 }}>
        <Link
          className="link"
          href="https://github.com/Yehya22"
          target="_blank"
        >
          <GitHubIcon
            sx={{
              color: theme.palette.mode === "light" ? "#374151" : "#9ca3af",
              ":hover": {
                color: theme.palette.mode === "light" ? "#111827" : "#f3f4f6",
              },
            }}
          />
        </Link>
      </Box>
    </Stack>
  );
};

export default Header;
