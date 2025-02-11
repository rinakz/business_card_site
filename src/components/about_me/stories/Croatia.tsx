import stls from "../../../styles/components/AboutMe.module.sass";
import { IconLife } from "../../icons/IconLife";
import { ThemeContext } from "../../context/Theme_context";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CroatiaContent } from "./Stories.helpers";
import {
  IconArrowBottom,
  IconFinder,
  IconHeart,
  IconPicture,
} from "../../icons";
import useWindowSize from "../../hooks/useWindowSize";
import { useTranslation } from "react-i18next";

function Croatia() {
  const { colors } = useContext(ThemeContext);
  const navigate = useNavigate();

  const { width } = useWindowSize();
  const { t } = useTranslation();

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(width < 600);
  }, [width]);

  return (
    <div className={stls.storyPageContainer}>
      <div
        className={stls.storyTitle}
        style={{
          color: colors.zeta,
        }}
      >
        Основная жизненная цель — переезд в Хорватию
        <IconLife />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "wrap",
          rowGap: "40px",
        }}
      >
        <div className={stls.infoContainer}>
          <img src="/Scarf.svg" alt="scarf" style={{ maxHeight: "300px" }} />
          <div style={{ display: "flex", gap: "24px" }}>
            <div className={stls.cardInfo}>
              <span className={stls.textContainer}>
                <IconFinder />
                Цель
              </span>
              <span>Переезд в Хорватию</span>
            </div>
            <div className={stls.cardInfo}>
              <span className={stls.textContainer}>
                <IconPicture /> Нравится
              </span>
              <span>Климат, люди, футбол</span>
            </div>
          </div>
        </div>
        <img
          src="/Croatia.svg"
          alt="Croatia"
          style={{ maxWidth: mobile ? "300px" : "500px" }}
        />
      </div>

      <CroatiaContent />

      <div className={stls.footerContainer}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          <img src="/Teach.svg" alt="Teach" style={{ height: "300px" }} />
          <img
            src="/Lokomotiva.svg"
            alt="Lokomotiva"
            style={{ height: "300px" }}
          />
        </div>

        <div className={stls.projectsContainer}>
          <span
            className={stls.projectsTitle}
            style={{
              color: colors.beta,
            }}
          >
            {t("header.pet")}
            <IconHeart width={mobile ? "50" : undefined} />
          </span>
          <div>
            <div
              className={stls.projectLink}
              onClick={() => navigate("/about_me/channel")}
            >
              С 2022 году запустила уникальний IT-канал «Что-то на джуновском»
              <IconArrowBottom />
            </div>
            <hr />
            <div
              className={stls.projectLink}
              onClick={() => navigate("/about_me/shiba")}
            >
              Правительница здешних цифровых земель и лисица
              <IconArrowBottom />
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Croatia;
