import React from "react";
import { Button } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const LocationButton = ({ onhandleLocationClick }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isArabic = i18n.language === "ar";
  return (
    <Button
      onClick={onhandleLocationClick}
      variant="contained"
      sx={{
        mt: 3,
        color: theme.palette.mode === "light" ? "#374151" : "#fff",
        backgroundColor: theme.palette.mode === "light" ? "#fefefe" : "#1f2937",
        ":hover": {
          backgroundColor:
            theme.palette.mode === "light" ? "#f1f3f5" : "#343a40",
        },
        ":focus": {
          outline: "none",
          border: "none",
        },
      }}
    >
      {isArabic ? (
        <>
          <PlaceIcon />
          {t("get Weather by location")}
        </>
      ) : (
        <>
          {t("get Weather by location")}
          <PlaceIcon />
        </>
      )}
    </Button>
  );
};

export default LocationButton;
