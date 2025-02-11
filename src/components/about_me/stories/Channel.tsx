import stls from "../../../styles/components/AboutMe.module.sass";
import { ThemeContext } from "../../context/Theme_context";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IconArrowBottom,
  IconEmoji,
  IconGhChat,
  IconHeart,
  IconHot,
  IconKanal,
  IconUser,
} from "../../icons";
import { ChannelContent } from "./Stories.helpers";
import useWindowSize from "../../hooks/useWindowSize";
import { useTranslation } from "react-i18next";

function Channel() {
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
        в 2022 году запустила уникальный IT-канал «Что-то на джуновском»
        <IconKanal />
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
          <img
            src="/Kanal.jpg"
            alt="kanal"
            style={{ maxHeight: mobile ? "300px" : "473px" }}
          />
          <div
            style={{ display: "flex", gap: "40px", flexDirection: "column" }}
          >
            <div style={{ display: "flex", gap: "24px" }}>
              <div className={stls.cardInfo}>
                <span className={stls.textContainer}>
                  <IconHot />
                  название:
                </span>
                <a style={{ color: "inherit" }} href="https://t.me/reenakz">
                  <span>@lonely_junior</span>
                </a>
              </div>
              <div className={stls.cardInfo}>
                <span className={stls.textContainer}>
                  <IconEmoji /> тема:
                </span>
                <span>IT образование и юмор</span>
              </div>
            </div>{" "}
            <div style={{ display: "flex", gap: "24px" }}>
              <div className={stls.cardInfo}>
                <span className={stls.textContainer}>
                  <IconUser />
                  аудитория:
                </span>
                <span>&gt; 600 человек</span>
              </div>
              <div className={stls.cardInfo}>
                <span className={stls.textContainer}>
                  <IconGhChat /> слоган:
                </span>
                <span>Терри Дэвис в юбке</span>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/Ava.jpg"
          alt="ava"
          style={{ maxWidth: mobile ? "300px" : "50%" }}
        />
      </div>

      <ChannelContent />

      <div className={stls.footerContainer}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          <img src="/Stickers.jpg" alt="stickers" style={{ height: "300px" }} />
          <img
            src="/Oski.svg"
            alt="Oski"
            style={{ height: "300px", background: colors.beta }}
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
              onClick={() => navigate("/about_me/shiba")}
            >
              Правительница здешних цифровых земель и лисица
              <IconArrowBottom />
            </div>
            <hr />
            <div
              className={stls.projectLink}
              onClick={() => navigate("/about_me/croatia")}
            >
              Основная жизненная цель — переезд в Хорватию
              <IconArrowBottom />
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Channel;
