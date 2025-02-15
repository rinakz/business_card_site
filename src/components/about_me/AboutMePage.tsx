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
  WithOskiAboutMe,
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
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", gap: "24px" }}>
                  <div className={stls.cardsContainer}>
                    <div className={stls.cardInfo}>
                      <span className={stls.card}>
                        <IconGirl />
                        {t("aboutMe.name")}
                      </span>
                      <span>{t("aboutMe.Ekaterina")}</span>
                    </div>
                    <div className={stls.cardInfo}>
                      <span className={stls.card}>
                        <IconSchool /> {t("aboutMe.education")}
                      </span>
                      <span> {t("aboutMe.higher")}</span>
                    </div>
                    <div className={stls.cardInfo}>
                      <span className={stls.card}>
                        <IconBloknot /> {t("aboutMe.years")}
                      </span>
                      <span>30</span>
                    </div>
                  </div>
                  <div className={stls.cardsContainer}>
                    <div className={stls.cardInfo}>
                      <span className={stls.card}>
                        <IconCity />
                        {t("aboutMe.city")}
                      </span>
                      <span>{t("aboutMe.Moscow")}</span>
                    </div>
                    <div className={stls.cardInfo}>
                      <span className={stls.card}>
                        <IconProgrammist />
                        {t("aboutMe.spec")}
                      </span>
                      <span>{t("aboutMe.programer")}</span>
                    </div>
                    <div className={stls.cardInfo}>
                      <span className={stls.card}>
                        <IconZnak /> {t("aboutMe.zodiac")}
                      </span>
                      <span>{t("aboutMe.capricorn")}</span>
                    </div>
                  </div>
                </div>

                <div
                  style={{ minWidth: "50%", width: mobile ? "100%" : "auto" }}
                >
                  <WithOskiAboutMe />
                </div>
              </div>
              <div className={stls.textContainer}>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `${t("story.Work.start")} ${t(
                        "story.Work.education"
                      )} `,
                    }}
                  />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `${t("story.Work.js")}`,
                    }}
                  />
                  <br />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `${t("story.Work.frontend")} ${t(
                        "story.Work.lib"
                      )} ${t("story.Work.friend")}`,
                    }}
                  />
                  <p>{t("story.Work.whantLib")}</p>
                  <br />
                  <p>
                    {t("story.Work.app")} {t("story.Work.deploy")}
                  </p>
                  <b> {t("story.Work.offer")}</b>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    minWidth: "50%",
                  }}
                >
                  <div>
                    <p>{t("story.Work.dontStop")}</p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `${t("story.Work.fgk")} `,
                      }}
                    />
                    <br />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `${t("story.Work.backend")} ${t(
                          "story.Work.vue"
                        )}`,
                      }}
                    />
                    <br />
                    <p>
                      {t("story.Work.qwep")} {t("story.Work.newWeb")}
                    </p>
                  </div>
                  <div className={stls.mother}>
                    « mother of react »<span>©</span>{" "}
                  </div>
                </div>
                <div></div>
              </div>
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
                    <hr />
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
