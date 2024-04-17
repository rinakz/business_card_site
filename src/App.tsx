import { Header } from "./components/header";
import { ThemeProvider as ThemeProviderMui } from '@mui/material/styles'
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./components/context/Theme_context";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import { Main } from "./components/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutMe } from "./components/about_me";
import { Contacts } from "./components/contacts";
import { Room } from "./components/room";
import { Projects } from "./components/projects";
import { MobileFooter } from "./components/footer";
import { HeaderProvider } from "./components/context/Header_context";
import useWindowSize from "./components/hooks/useWindowSize";
import { ThemePage } from "./components/theme-page/ThemePage";
import { AppContext } from "./components/context/App_context";
import { StoryPage } from "./components/about_me/StoryPage";




export function App() {
  const { theme, themeMui } = useContext(ThemeContext)
  const { stories } = useContext(AppContext)
  
  const { width, height} = useWindowSize()


  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(width < 600)
  }, [width])

  return (
    <ThemeProviderMui theme={themeMui}>
      <ThemeProvider theme={theme}>
        <HeaderProvider>
          <BrowserRouter>
            <CssBaseline />
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/my_room" element={<Room />} />
                <Route path="/settings" element={<ThemePage />} />
                <Route path="/settings" element={<ThemePage />} />

                {stories.map((el: any) => { 
                  return  <Route key={el.id} path={el.alt} element={<StoryPage story={el}  />} />
                })}


              <Route path="/about_me" element={<AboutMe />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/projects" element={<Projects />} />

            </Routes>
        </main>
        {mobile && <MobileFooter />}
        </BrowserRouter>
        </HeaderProvider>
      </ThemeProvider>
    </ThemeProviderMui>
  );
}
