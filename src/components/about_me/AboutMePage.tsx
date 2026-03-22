import { useContext, useEffect, useState } from "react";
import { Outlet, useMatch, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/Theme_context";
import { LayoutPage } from "../general/LayoutPage";
import stls from "../../styles/components/AboutMe.module.sass";
import {
  IconArrowBottom,
  IconBloknot,
  IconCity,
  IconDinosaur,
  IconGirl,
  IconHeart,
  IconProgrammist,
  IconSchool,
  IconZnak,
} from "../icons";
import { PATH } from "../../constants/common";
import useWindowSize from "../hooks/useWindowSize";
import { Header } from "../header";
import { useTranslation } from "react-i18next";

export function AboutMePage() {
  const id = useMatch(PATH.aboutMe.id);
  const isAboutMeStoryMatch = !!id?.params?.id;
  const navigate = useNavigate();

  const { colors } = useContext(ThemeContext);
  const { t } = useTranslation();
  const { width } = useWindowSize();

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(width < 600);
  }, [width]);

  return (
    <div>
      <Header />
      <LayoutPage>
        {isAboutMeStoryMatch ? (
          <Outlet />
        ) : (
          <div className={stls.aboutMeContainer}>
            <span
              className={stls.titleContainer}
              style={{
                color: colors.beta,
              }}
            >
              {t("header.aboutMe")}
              <IconDinosaur width={mobile ? "50" : undefined} />
            </span>
            <div className={stls.content}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: mobile ? "wrap" : "nowrap",
                  gap: "24px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "24px",
                    flexWrap: mobile ? "wrap" : "nowrap",
                    width: mobile ? "100%" : "auto",
                    flex: 1,
                  }}
                >
                  <div className={stls.cardsContainer}>
                    <div className={stls.cardInfo}>
                      <span className={stls.card}>
                        <IconGirl />
                        {t("aboutMe.profileNameLabel")}
                      </span>
                      <span>{t("aboutMe.profileNameValue")}</span>
                    </div>
                    <div className={stls.cardInfo}>
                      <span className={stls.card}>
                        <IconProgrammist />
                        {t("aboutMe.profileSpecLabel")}
                      </span>
                      <span>{t("aboutMe.profileSpecValue")}</span>
                    </div>
                    <div className={stls.cardInfo}>
                      <span className={stls.card}>
                        <IconBloknot /> {t("aboutMe.profileExpLabel")}
                      </span>
                      <span>{t("aboutMe.profileExpValue")}</span>
                    </div>
                  </div>
                  <div className={stls.cardsContainer}>
                    <div className={stls.cardInfo}>
                      <span className={stls.card}>
                        <IconCity />
                        {t("aboutMe.profileCityLabel")}
                      </span>
                      <span>{t("aboutMe.profileCityValue")}</span>
                    </div>
                    <div className={stls.cardInfo}>
                      <span className={stls.card}>
                        <IconSchool /> {t("aboutMe.profileAwardLabel")}
                      </span>
                      <span>{t("aboutMe.profileAwardValue")}</span>
                    </div>
                    <div className={stls.cardInfo}>
                      <span className={stls.card}>
                        <IconZnak /> {t("aboutMe.profileAiLabel")}
                      </span>
                      <span>{t("aboutMe.profileAiValue")}</span>
                    </div>
                  </div>
                </div>

                <div style={{ width: mobile ? "100%" : "40%", flexShrink: 0 }}>
                  <img
                    src="/aboutMe.jpeg"
                    alt="aboutMe"
                    style={{ width: "100%", maxHeight: "800px" }}
                  />
                </div>
              </div>
              <div className={stls.textContainer}>
                <div
                  className={stls.expSection}
                  style={{ borderColor: colors.zeta, width: "100%" }}
                >
                  <div className={stls.expGrid}>
                    <article
                      className={stls.expCard}
                      style={{ borderColor: colors.zeta }}
                    >
                      <div className={stls.featureHeader}>
                        <h3 className={stls.card}>{t("aboutMe.featureLogicTitle")}</h3>
                        <span className={stls.featureIcon} style={{ color: colors.beta }}>
                          <IconSchool />
                        </span>
                      </div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: `${t("aboutMe.featureLogicText")}`,
                        }}
                      />
                    </article>

                    <article
                      className={stls.expCard}
                      style={{ borderColor: colors.zeta }}
                    >
                      <div className={stls.featureHeader}>
                        <h3 className={stls.card}>{t("aboutMe.featureProductTitle")}</h3>
                        <span className={stls.featureIcon} style={{ color: colors.beta }}>
                          <IconProgrammist />
                        </span>
                      </div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: `${t("aboutMe.featureProductText")}`,
                        }}
                      />
                    </article>

                    <article
                      className={stls.expCard}
                      style={{ borderColor: colors.zeta }}
                    >
                      <div className={stls.featureHeader}>
                        <h3 className={stls.card}>{t("aboutMe.featureFutureTitle")}</h3>
                        <span className={stls.featureIcon} style={{ color: colors.beta }}>
                          <IconZnak />
                        </span>
                      </div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: `${t("aboutMe.featureFutureText")}`,
                        }}
                      />
                    </article>
                  </div>
                  <p className={stls.quoteLarge}>{t("aboutMe.quote")}</p>
                </div>
              </div>
              {/* Experience grid moved to Projects per request */}
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                  <img
                    style={{
                      maxHeight: "280px",
                      height: "auto",
                      width: mobile ? "100%" : "auto",
                    }}
                    alt="OskiAboutMe"
                    src="/OskiAboutMe.svg"
                  />
                  <img
                    style={{
                      maxHeight: "280px",
                      height: "auto",
                      width: mobile ? "100%" : "auto",
                    }}
                    alt="OskiHappy"
                    src="/OskiHappy.svg"
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
                      onClick={() => navigate("channel")}
                    >
                      {t("story.kanal")}
                      <IconArrowBottom />
                    </div>
                    <hr />
                    {/* Hidden for business-card focus, can be restored later.
                    <div
                      className={stls.projectLink}
                      onClick={() => navigate("shiba")}
                    >
                      {t("story.shiba")}
                      <IconArrowBottom />
                    </div>
                    <hr />
                    <div
                      className={stls.projectLink}
                      onClick={() => navigate("croatia")}
                    >
                      {t("story.croatia")}
                      <IconArrowBottom />
                    </div>
                    <hr /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </LayoutPage>
    </div>
  );
}
