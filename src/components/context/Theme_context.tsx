import React, { useEffect } from "react";
import { themeLightMui, themeDarkMui } from "../theme/Theme";
import { createTheme } from "@mui/material/styles";
import useLocalStorage from "../hooks/useLocalStorage";
import colorsLight from "../../styles/config/Colors.module.sass";
import colorsDark from "../../styles/config/DarkColors.module.sass";
import colorsGreen from "../../styles/config/GreenColors.module.sass";
import colorsPink from "../../styles/config/PinkColors.module.sass";

import { itemLanguage } from "../../utils";

export type ThemeType = {
  id: number;
  name: string;
};

const ThemeContext = React.createContext<any>(null);

function ThemeProvider(props: any) {
  const themes: ThemeType[] = [
    { id: 1, name: "light" },
    { id: 2, name: "dark" },
    { id: 3, name: "pink" },
    { id: 4, name: "green" },
  ];

  const [language, setLanguage] = useLocalStorage("language", "");

  const [currentTheme, setCurrentTheme] = React.useState("dark");
  const [colors, setColors] = React.useState(colorsLight);
  const themeMui = currentTheme === "dark" ? themeDarkMui : themeLightMui;
  const toggleTheme = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem("theme", theme);
  };
  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
  };

  useEffect(() => {
    setColors(
      currentTheme === "light"
        ? colorsLight
        : currentTheme === "green"
        ? colorsGreen
        : currentTheme === "pink"
        ? colorsPink
        : colorsDark
    );
  }, [currentTheme]);

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    if (userTheme) {
      setCurrentTheme(userTheme);
    } else {
      setCurrentTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  useEffect(() => {
    const userLang = getBrowserLanguage();
    itemLanguage(language ? language : userLang);
  }, [language]);

  const getBrowserLanguage = () => {
    const cisLanguages = ["ru", "be", "uk", "kk", "az", "ky", "tg", "hy", "tt"];
    let lang =
      (navigator.languages && navigator.languages[0]) || navigator.language;
    lang = lang.split("-")[0];
    if (cisLanguages.indexOf(lang) !== -1) {
      lang = "ru";
    } else {
      lang = "en";
    }
    return String(lang);
  };

  const theme = createTheme({
    palette: {
      background: {
        default: colors.alpha,
      },
      primary: {
        main: colors.beta,
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            background: colors.alpha,
          },
        },
      },
    },
    typography: {
      body1: {
        color: colors.zeta,
      },
    },
  });

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        toggleTheme,
        toggleLanguage,
        language,
        themeMui,
        theme,
        themes,
        colors,
      }}
      {...props}
    />
  );
}

export { ThemeProvider, ThemeContext };
