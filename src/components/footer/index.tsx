import { Box, Card } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { HeaderContext } from "../context/Header_context";
import { ThemeContext } from "../context/Theme_context";
import { HeaderType } from "../../types/Header";
import stls from "../../styles/components/Footer.module.sass";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH } from "../../constants/common";

export function MobileFooter() {
  const { navItems } = useContext(HeaderContext);
  const { colors } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [showCard, setShowCard] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop) {
      setShowCard(false);
    } else {
      setShowCard(currentScrollTop === 0 || currentScrollTop < lastScrollTop);
    }
    setLastScrollTop(currentScrollTop);
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

  return (
    <Card
      style={{
        ...{
          zIndex: 1000,
          position: "fixed",
          bottom: 0,
          left: 0,
          height: "70px",
          width: "100%",
          padding: "20px",
        },
        bottom: showCard ? "0" : "-50px",
        opacity: showCard ? 1 : 0.5,
        transition: "bottom 0.3s ease-in-out",
      }}
      onMouseEnter={() => setShowCard(true)}
      onMouseLeave={() => setShowCard(false)}
    >
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <div className={stls.buttonHome}>
          {navItems.map((item: HeaderType) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.link)}
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
      </Box>
    </Card>
  );
}
