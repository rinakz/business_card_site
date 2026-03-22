import { useContext, useEffect, useState } from "react";
import stls from "../../../styles/components/Projects.module.sass";
import { ThemeContext } from "../../context/Theme_context";
import { IconPeriod } from "../../icons/IconPeriod";
import { IconSphere } from "../../icons/IconSphere";
import { IconPosition } from "../../icons/IconPosition";
import { IconMountain } from "../../icons/IconMountain";
import { useTranslation } from "react-i18next";
import useWindowSize from "../../hooks/useWindowSize";

export default function Revoluterra() {
  const { colors } = useContext(ThemeContext);
  const { width } = useWindowSize();
  const { t } = useTranslation();

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const w = (window && window.innerWidth) || 1200;
    setMobile(w < 600);
  }, [width]);

  return (
    <div className={stls.projectContainer}>
      <div className={stls.header}>
        <div className={stls.projectTitle}>{t("card.revoluterra")}</div>
        <div className={stls.techContainer}>
          <div style={{ display: "flex", flexWrap: "wrap", rowGap: "10px" }}>
            {[
              "React",
              "Vue",
              "TypeScript",
              "AntDesign",
              "Tailwind",
              "Zustand",
              "Chart.js",
            ].map((el: string, idx) => (
              <span
                key={idx}
                className={stls.techChip}
                style={{
                  border: `3px solid ${colors.beta}`,
                  color: colors.beta,
                }}
              >
                {el}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={stls.info}>
        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
          <div className={stls.cardContainer}>
            <div className={stls.iconContainer}>
              <IconSphere />
              {t("work.sphere")}
            </div>
            <span>{t("work.revoluterra.sphere")}</span>
          </div>
          <div className={stls.cardContainer}>
            <div className={stls.iconContainer}>
              <IconPosition /> {t("work.position")}
            </div>
            <span>{t("work.revoluterra.position")}</span>
          </div>
          <div className={stls.cardContainer}>
            <div className={stls.iconContainer}>
              <IconPeriod /> {t("work.period")}
            </div>
            <span>{t("work.revoluterra.period")}</span>
          </div>
        </div>
        <div className={stls.infoContainer}>
          <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
            <IconMountain /> {t("work.title")}
          </div>
          <div>{t("work.revoluterra.first")}</div>
          <div>{t("work.revoluterra.second")}</div>
          <div>{t("work.revoluterra.third")}</div>
          <div>{t("work.revoluterra.fourth")}</div>
          <div>{t("work.revoluterra.fifth")}</div>
        </div>
      </div>
    </div>
  );
}
