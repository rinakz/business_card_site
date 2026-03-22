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
        {t("story.kanal")} <IconKanal />
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
          <div
            style={{ display: "flex", gap: "40px", flexDirection: "column" }}
          >
            <div style={{ display: "flex", gap: "24px" }}>
              <div className={stls.cardInfo}>
                <span className={stls.textContainer}>
                  <IconHot />
                  {t("story.Kanal.name")}:
                </span>
                <a style={{ color: "inherit" }} href="https://t.me/reenakz">
                  <span>@lonely_junior</span>
                </a>
              </div>
              <div className={stls.cardInfo}>
                <span className={stls.textContainer}>
                  <IconEmoji /> {t("story.Kanal.theme")}:
                </span>
                <span> {t("story.Kanal.it")}</span>
              </div>
            </div>{" "}
            <div style={{ display: "flex", gap: "24px" }}>
              <div className={stls.cardInfo}>
                <span className={stls.textContainer}>
                  <IconUser />
                  {t("story.Kanal.audience")}:
                </span>
                <span> {t("story.Kanal.quantity")} </span>
              </div>
              <div className={stls.cardInfo}>
                <span className={stls.textContainer}>
                  <IconGhChat /> {t("story.Kanal.slogan")} :
                </span>
                <span> {t("story.Kanal.devis")} </span>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/Ava.jpg"
          alt="ava"
          style={{
            maxHeight: "600px",
            maxWidth: mobile ? "100%" : "50%",
            width: mobile ? "100%" : undefined,
          }}
        />
      </div>

      <ChannelContent />

      <div className={stls.footerContainer}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          <img
            src="/Stickers.jpg"
            alt="stickers"
            style={{ height: mobile ? "auto" : "300px", width: mobile ? "100%" : undefined }}
          />
          <img
            src="/Oski.svg"
            alt="Oski"
            style={{
              height: "300px",
              background: colors.beta,
            }}
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
              onClick={() => navigate("/about_me")}
            >
              {t("header.aboutMe")}
              <IconArrowBottom />
            </div>
            <hr />
            {/* Hidden for business-card focus, can be restored later.
            <div
              className={stls.projectLink}
              onClick={() => navigate("/about_me/croatia")}
            >
              {t("story.croatia")}
              <IconArrowBottom />
            </div>
            <hr /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Channel;
