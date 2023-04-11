import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const NoWeatherData = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="subtitle3">
        {t("Enter a city or use location button to get the weather data.")}
      </Typography>
    </Box>
  );
};

export default NoWeatherData;
