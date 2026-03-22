import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/Theme_context";
import { LayoutPage } from "../general/LayoutPage";
import stls from "../../styles/components/AboutMe.module.sass";
import { Apple } from "../icons/Apple";
import { IconDinosaur } from "../icons/IconDinosaur";
import { IconArrow } from "../icons/IconArrow";
import { PATH } from "../../constants/common";
import useWindowSize from "../hooks/useWindowSize";
import { useTranslation } from "react-i18next";

export function AboutMe() {
  const navigate = useNavigate();

  const { colors } = useContext(ThemeContext);
  const { width } = useWindowSize();
  const { t } = useTranslation();

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(width < 600);
  }, [width]);

  const handleClick = () => {
    navigate(PATH.aboutMe.root);
  };

  return (
    <LayoutPage>
      <div className={stls.storiesOnMainPage}>
        <div className={stls.storiesOnMain}>
          <Apple />
        </div>
        <div
          className={stls.aboutMe}
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        >
          <div style={{ display: "flex", gap: "16px", alignItems: "end" }}>
            <span className={stls.aboutMeTitle} style={{ color: colors.beta }}>
              {t("header.aboutMe")}
            </span>
            <IconDinosaur width={mobile ? "50" : undefined} />
          </div>

          <div>
            <div className={stls.aboutMePreviewText}>
              <p>{t("aboutMe.mainPreview1")}</p>
              <p>{t("aboutMe.mainPreview2")}</p>
              <p>{t("aboutMe.mainPreview3")}</p>
            </div>
          </div>
          <div className={stls.moreRow}>
            <span>{t("aboutMe.mainPreviewMore")}</span>
            <IconArrow color={colors.beta} />
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
