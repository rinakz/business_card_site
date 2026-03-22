import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";
import stls from "../../styles/components/Headers.module.sass";
import { ClickAwayListener, Grow, Popper } from "@mui/material";
import { HeaderContext } from "../context/Header_context";
import { IconPackman } from "../icons/IconPackman";
import { IconDarkDots } from "../icons/IconDarkDots";
import { IconGhost } from "../icons/IconGhost";
import { IconLightDots } from "../icons/IconLightDots";
import { Logo } from "../icons/Logo";
import { HeaderType } from "../../types/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH } from "../../constants/common";
import useWindowSize from "../hooks/useWindowSize";

export function Header() {
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const { width } = useWindowSize();
  const mobile = width < 600;

  const { colors, toggleLanguage, currentTheme, toggleTheme, language } =
    useContext(ThemeContext);
  const { navItems } = useContext(HeaderContext);

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

  const goToContacts = () => {
    const scroll = () => {
      const el = document.getElementById("contacts");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    if (pathname !== PATH.main) {
      navigate(PATH.main);
      setTimeout(scroll, 120);
      return;
    }
    scroll();
  };

  const handleNavClick = (link: string) => {
    if (link === "#contacts") {
      goToContacts();
      return;
    }
    navigate(link);
  };

  const isNavItemActive = (link: string) => {
    if (link === "#contacts") return false;
    return pathname.startsWith(link);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Toolbar
        sx={{
          position: "absolute",
          width: "100%",
          flexWrap: "nowrap",
          gap: mobile ? "4px" : "8px",
          px: { xs: 1, sm: 2 },
        }}
      >
        <div className={stls.navContainer}>
          {navItems.map((item: HeaderType) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.link)}
              className={
                isNavItemActive(item.link)
                  ? stls.navigationButtonActive
                  : stls.navigationButton
              }
              id={`header_pages${item.id}`}
              style={{
                border: `${mobile ? 2 : 4}px solid ${colors.beta}`,
                color: isNavItemActive(item.link) ? colors.alpha : colors.beta,
                background: isNavItemActive(item.link)
                  ? colors.beta
                  : "transparent",
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: mobile ? "6px" : "10px",
            marginLeft: "auto",
          }}
        >
          <button
            className={stls.navigationIcon}
            style={{
              border: `${mobile ? 2 : 4}px solid ${colors.beta}`,
              color: colors.beta,
            }}
          >
            {currentTheme === "dark" ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: mobile ? "4px" : "10px",
                }}
                onClick={() => toggleTheme("light")}
              >
                <IconPackman />
                {!mobile && <IconDarkDots />}
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: mobile ? "4px" : "10px",
                }}
                onClick={() => toggleTheme("dark")}
              >
                {!mobile && <IconLightDots />}
                <IconGhost />
              </div>
            )}
          </button>

          <div ref={anchorRef}>
            <button
              className={stls.navigationButton}
              onClick={handleToggle}
              style={{
                border: `${mobile ? 2 : 4}px solid ${colors.beta}`,
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
                <div>
                  <ClickAwayListener onClickAway={handleClose}>
                    <div
                      className={stls.langList}
                      style={{
                        background: colors.beta,
                      }}
                    >
                      {langs.map((el) => (
                        <div
                          className={stls.listItem}
                          style={{
                            color: colors.alpha,
                            cursor: "pointer",
                            background: colors.beta,
                          }}
                          key={el.sysname}
                        >
                          <span
                            onClick={() => {
                              setLang(el);
                              toggleLanguage(el.sysname);
                            }}
                          >
                            {el.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </ClickAwayListener>
                </div>
              </Grow>
            )}
          </Popper>
        </Box>
      </Toolbar>
      <div
        style={{
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <Logo width={isMainPage ? "60vw" : "40vw"} />
      </div>
    </div>
  );
}
