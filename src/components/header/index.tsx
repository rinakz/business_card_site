import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";
import stls from "../../styles/components/Headers.module.sass";
import {
  ClickAwayListener,
  Grow,
  List,
  ListItem,
  ListItemButton,
  Popper,
} from "@mui/material";
import { HeaderContext } from "../context/Header_context";
import { IconPackman } from "../icons/IconPackman";
import { IconDarkDots } from "../icons/IconDarkDots";
import { IconGhost } from "../icons/IconGhost";
import { IconLightDots } from "../icons/IconLightDots";
import { Logo } from "../icons/Logo";
import { HeaderType } from "../../types/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH } from "../../constants/common";
import { IconRinakzSmall } from "../icons/IconRinakzSmall";

export function Header() {
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  const { colors, toggleLanguage, currentTheme, toggleTheme, language } =
    useContext(ThemeContext);
  const { navItemsRightPage, navItemsLeftPage } = useContext(HeaderContext);

  const navigate = useNavigate();

  const langs = [
    { sysname: "ru", name: "RU" },
    { sysname: "en", name: "EN" },
    { sysname: "hr", name: "HR" },
  ];

  const [lang, setLang] = React.useState(
    langs.filter((el) => el.sysname === language)[0] || {
      sysname: "ru",
      name: "RU",
    }
  );
  const [open, setOpen] = React.useState(false);

  const isMainPage = pathname === PATH.main;

  React.useEffect(() => {
    if (language) {
      setLang(langs.filter((el) => el.sysname === language)[0]);
    }
  }, [language]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Toolbar sx={{ position: "absolute", width: "100%", flexWrap: "wrap" }}>
        <div className={stls.buttonHome}>
          {navItemsLeftPage.map((item: HeaderType) => (
            <button
              key={item.id}
              onClick={() => navigate(item.link)}
              className={stls.navigationButton}
              id={`header_pages${item.id}`}
              style={{
                border: `4px solid ${colors.beta}`,
                color: colors.beta,
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItemsRightPage.map((item: HeaderType) => (
            <a key={item.id} href={item.link ? `../${item.link}` : ""}>
              <button
                className={stls.navigationButton}
                id={`header_pages${item.id}`}
                style={{
                  border: `4px solid ${colors.beta}`,
                  color: colors.beta,
                }}
              >
                {item.name}
              </button>
            </a>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            className={stls.navigationIcon}
            style={{
              border: `4px solid ${colors.beta}`,
              color: colors.beta,
            }}
          >
            {currentTheme === "dark" ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={() => toggleTheme("light")}
              >
                <IconPackman />
                <IconDarkDots />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={() => toggleTheme("dark")}
              >
                <IconLightDots />
                <IconGhost />
              </div>
            )}
          </button>

          <div ref={anchorRef}>
            <button
              className={stls.navigationButton}
              onClick={handleToggle}
              style={{
                border: `4px solid ${colors.beta}`,
                color: colors.beta,
              }}
            >
              {lang.name}
            </button>
          </div>
          <Popper
            style={{ zIndex: 1000 }}
            onClick={() => setOpen(false)}
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <List component="nav">
                  <div>
                    <ClickAwayListener onClickAway={handleClose}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                          padding: "12px",
                        }}
                      >
                        {langs.map((el) => (
                          <ListItem key={el.sysname} disablePadding>
                            <ListItemButton
                              onClick={() => {
                                setLang(el);
                                toggleLanguage(el.sysname);
                              }}
                            >
                              {el.name}
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </div>
                    </ClickAwayListener>
                  </div>
                </List>
              </Grow>
            )}
          </Popper>
        </Box>
      </Toolbar>
      <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        {isMainPage ? <Logo /> : <IconRinakzSmall />}
      </div>
    </div>
  );
}
