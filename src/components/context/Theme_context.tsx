import React, { useContext, useEffect } from 'react';
import { themeLightMui, themeDarkMui } from '../theme/Theme'
import { createTheme, styled } from '@mui/material/styles'
import useLocalStorage from '../hooks/useLocalStorage';
import colorsLight from '../styles/config/Colors.module.sass'
import colorsDark from  '../styles/config/DarkColors.module.sass'
import colorsKaspersky from  '../styles/config/Kaspersky.module.sass'

import { itemLanguage } from "../../utils";





const ThemeContext = React.createContext<any>(null);

function ThemeProvider(props: any) {

const themes = [
  {id: 1, name: 'light'}, 
  {id: 2, name: 'dark'}, 
  {id: 3, name: 'Kaspersky'}, 
  {id: 4, name: 'Sber'}, 
  {id: 5, name: 'Yandex'}, 
  {id: 6, name: 'Orthodox'}]

const [colorTheme, setColorTheme] = useLocalStorage('colorTheme', '')
const [language, setLanguage] = useLocalStorage('language', '')



  
  const [currentTheme, setCurrentTheme] = React.useState(colorTheme);
  const [colors, setColors] = React.useState(colorsLight)
  const themeMui = currentTheme === 'dark'  ? themeDarkMui : themeLightMui
  const toggleTheme = ( theme: string ) => {
    setCurrentTheme( theme )
    setColorTheme( theme )
  }
  const toggleLanguage = ( lang: string ) => {
    setLanguage( lang )
  }


  useEffect(() => {
    setColors(currentTheme == 'light' ? colorsLight : currentTheme == 'Kaspersky' ? colorsKaspersky : colorsDark)
  }, [currentTheme]);

  useEffect(() => {
    setCurrentTheme(colorTheme)
  }, [colorTheme])


  useEffect(() => {
    const userLang= getBrowserLanguage()
    itemLanguage(
      language ? language : userLang
    );
  }, [language]);

  const getBrowserLanguage = () => {
    const cisLanguages = ['ru', 'be', 'uk', 'kk', 'az', 'ky', 'tg', 'hy', 'tt'];
    let lang = (navigator.languages && navigator.languages[0]) || navigator.language
    lang = lang.split('-')[0];
    if (cisLanguages.indexOf(lang) !== -1) {
      lang = 'ru';
    } else {
      lang = 'en';
    }
    return (String(lang));
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
        }
      }
    }
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


