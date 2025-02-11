import { useContext } from "react";
import stls from "../../../styles/components/Projects.module.sass";
import { ThemeContext } from "../../context/Theme_context";
import { IconPeriod } from "../../icons/IconPeriod";
import { IconSphere } from "../../icons/IconSphere";
import { IconPosition } from "../../icons/IconPosition";
import { IconMountain } from "../../icons/IconMountain";
import { useTranslation } from "react-i18next";

export default function FGK() {
  const { colors } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={stls.projectContainer}>
      <div className={stls.header}>
        <div className={stls.projectTitle}> {t("card.fgk")}</div>
        <div className={stls.techContainer}>
          <div style={{ display: "flex", flexWrap: "wrap", rowGap: "10px" }}>
            {["Php", "Laravel", "Vue", "Ant-design", "Backend", "Frontend"].map(
              (el: string, idx) => (
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
              )
            )}
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
            <span>Logistics</span>
          </div>
          <div className={stls.cardContainer}>
            <div className={stls.iconContainer}>
              <IconPosition /> {t("work.position")}
            </div>
            <span>{t("work.fgk.position")}</span>
          </div>
          <div className={stls.cardContainer}>
            <div className={stls.iconContainer}>
              <IconPeriod /> {t("work.period")}
            </div>
            <span>06/2023 — 02/2024</span>
          </div>
        </div>
        <div className={stls.infoContainer}>
          <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
            <IconMountain /> {t("work.title")}
          </div>
          <div>{t("work.fgk.first")}</div>
          <div>{t("work.fgk.second")}</div>
          <div>{t("work.fgk.third")}</div>
          <div>{t("work.fgk.fourth")}</div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img className={stls.imageMain} src="/fgk2.png" alt="FGK" />
      </div>
    </div>
  );
}
