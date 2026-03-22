import stls from "../../styles/components/Main.module.sass";
import { useTranslation } from "react-i18next";
import { AboutMe } from "../about_me";
import Slider from "./carousel";
import { Projects } from "../projects";
import { IconMail } from "../icons/IconMail";
import { IconTg } from "../icons/IconTg";
import { Header } from "../header";
import { ThemeContext } from "../context/Theme_context";
import { useContext } from "react";
import useWindowSize from "../hooks/useWindowSize";

export function Main() {
  const { t } = useTranslation();
  const { currentTheme } = useContext(ThemeContext);
  const { width } = useWindowSize();
  const mobile = width < 600;

  return (
    <div className={stls.appContainer}>
      <div className={stls.bgMain}>
        <div>
          <Header />

          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <img
              style={{
                marginTop: "-70px",
                maxWidth: mobile ? "280px" : undefined,
                maxHeight: mobile ? undefined : "300px",
              }}
              src="/photo.jpg"
              alt="Marchenko"
            />
          </div>
        </div>

        <div className={stls.mainContainer}>
          <div className={stls.welcome}>
            <span>{t("main.welcome")} </span>
            <span>{t("main.im")}</span>
          </div>
          <div className={stls.contactContainer}>
            <a style={{ color: "inherit" }} href="https://t.me/reenakz">
              <span className={stls.contact}>
                <IconTg />
                @reenakz
              </span>
            </a>
            <a
              style={{ color: "inherit" }}
              href="mailto:katt-marchenko@yandex.com"
            >
              <span className={stls.contact}>
                <IconMail />
                katt-marchenko@yandex.com
              </span>
            </a>
          </div>
        </div>
        <Slider />
      </div>

      <Projects />
      <AboutMe />
      <img
        src={currentTheme === "dark" ? "/DarkBanner.png" : "/LightBanner.png"}
        alt="banner"
      />
    </div>
  );
}
