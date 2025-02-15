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
  IconPin,
  IconUser,
} from "../../icons";
import { DoggyContent } from "./Stories.helpers";
import useWindowSize from "../../hooks/useWindowSize";
import { useTranslation } from "react-i18next";

function Doggy() {
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
        {t("story.shiba")}
        <IconPin />
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
          <img src="/Book.jpg" alt="book" style={{ maxHeight: "300px" }} />
          <div
            style={{ display: "flex", gap: "40px", flexDirection: "column" }}
          >
            <div style={{ display: "flex", gap: "24px" }}>
              <div className={stls.cardInfo}>
                <span className={stls.textContainer}>
                  <IconHot />
                  {t("story.Doggy.name")}:
                </span>
                <span>@rinakz</span>
              </div>
              <div className={stls.cardInfo}>
                <span className={stls.textContainer}>
                  <IconEmoji /> {mobile ? "gh" : t("story.Doggy.groundhopping")}:
                </span>
                <span> {t("story.Doggy.description")}:</span>
              </div>
            </div>{" "}
            <div style={{ display: "flex", gap: "24px" }}>
              <div className={stls.cardInfo}>
                <span className={stls.textContainer}>
                  <IconUser />
                  {t("story.Doggy.top")}:
                </span>
                <span>#70</span>
              </div>
              <div className={stls.cardInfo}>
                <span className={stls.textContainer}>
                  <IconGhChat /> {t("story.Doggy.slogan")}:
                </span>
                <span>{t("story.Doggy.more")}</span>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/Gh.jpg"
          alt="Gh"
          style={{ maxWidth: mobile ? "300px" : "50%" }}
        />
      </div>

      <DoggyContent />

      <div className={stls.footerContainer}>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          <img src="/Stadium.jpg" alt="Stadium" style={{ height: "300px" }} />
          <img src="/Metal.jpg" alt="Metal" style={{ height: "300px" }} />
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
              {t("story.kanal")}
              <IconArrowBottom />
            </div>
            <hr />
            <div
              className={stls.projectLink}
              onClick={() => navigate("/about_me/croatia")}
            >
              {t("story.croatia")}
              <IconArrowBottom />
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doggy;
