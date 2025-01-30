import stls from "../../styles/components/Main.module.sass";
import { useTranslation } from "react-i18next";
import { AboutMe } from "../about_me";
import Slider from "./carousel";
import { Projects } from "../projects";
import { IconMail } from "../icons/IconMail";
import { IconTg } from "../icons/IconTg";

export function Main() {
  const { t } = useTranslation();

  return (
    <div>
      <div className={stls.bgMain}>
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
    </div>
  );
}
