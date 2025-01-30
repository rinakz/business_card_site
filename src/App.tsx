import { Header } from "./components/header";
import { ThemeProvider as ThemeProviderMui } from "@mui/material/styles";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./components/context/Theme_context";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Main } from "./components/main";
import { Routes, Route, HashRouter } from "react-router-dom";
import { MobileFooter } from "./components/footer";
import { HeaderProvider } from "./components/context/Header_context";
import useWindowSize from "./components/hooks/useWindowSize";
import { StoryPage } from "./components/about_me/StoryPage";
import FooterContacts from "./components/footer/FooterContacts";
import { AboutMePage } from "./components/about_me/AboutMePage";
import { ProjectsPage } from "./components/projects/ProjectsPage";
import { PATH } from "./constants/common";
import { ProjectPage } from "./components/projects/ProjectPage";

export function MainRouter() {
  const { theme, themeMui } = useContext(ThemeContext);

  const { width } = useWindowSize();

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(width < 600);
  }, [width]);

  return (
    <ThemeProviderMui theme={themeMui}>
      <ThemeProvider theme={theme}>
        <HeaderProvider>
          <CssBaseline />
          <main>
            <Header />

            <Routes>
              <Route path={PATH.main} element={<Main />} />
              {/* <Route path="/settings" element={<ThemePage />} /> */}

              <Route path={PATH.aboutMe.root} element={<AboutMePage />}>
                <Route path={PATH.aboutMe.id} element={<StoryPage />} />
              </Route>

              <Route path={PATH.projects.root} element={<ProjectsPage />}>
                <Route path={PATH.projects.id} element={<ProjectPage />} />
              </Route>
            </Routes>
            {mobile && <MobileFooter />}
            <FooterContacts />
          </main>
        </HeaderProvider>
      </ThemeProvider>
    </ThemeProviderMui>
  );
}

export const App = () => (
  <HashRouter>
    <MainRouter />
  </HashRouter>
);
