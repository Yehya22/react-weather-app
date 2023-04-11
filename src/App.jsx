import "./App.css";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Weather from "./components/Weather";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n";
import SearchBar from "./components/SearchBar";
import { WeatherDataProvider } from "./components/WeatherContext";
import Header from "./components/Header";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    background: {
      ...(mode === "dark" && {
        default: "#101827",
        paper: "#121212",
      }),
      ...(mode === "light" && {
        default: "#dddddd",
        paper: "#fff",
      }),
    },
    text: {
      ...(mode === "dark" && {
        primary: "#fff",
        secondary: "#fff",
      }),
      ...(mode === "light" && {
        primary: "#374151",
        secondary: "#374151",
      }),
    },
  },
  typography: {
    fontFamily: "Ubuntu, Noto Sans Arabic, sans-serif",
  },
});
const App = () => {
  const colorMode = React.useContext(ColorModeContext);

  return (
    <WeatherDataProvider>
      <ColorModeContext.Provider value={colorMode}>
      <Header />
      <SearchBar />
      <Weather />
      </ColorModeContext.Provider>
    </WeatherDataProvider>
  );
};
export default function ToggleColorMode() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const isBrowserDefaultThemeDark =
    prefersDarkMode ||
    (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const [mode, setMode] = React.useState(
    isBrowserDefaultThemeDark ? "dark" : "light"
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [isBrowserDefaultThemeDark]
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
