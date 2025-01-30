import { useContext } from "react";
import stls from "../../../styles/components/Projects.module.sass";
import { ThemeContext } from "../../context/Theme_context";
import { IconPeriod } from "../../icons/IconPeriod";
import { IconSphere } from "../../icons/IconSphere";
import { IconPosition } from "../../icons/IconPosition";
import { IconMountain } from "../../icons/IconMountain";

export default function IC8() {
  const { colors } = useContext(ThemeContext);

  return (
    <div className={stls.projectContainer}>
      <div className={stls.header}>
        <div className={stls.projectTitle}>IC8</div>
        <div className={stls.techContainer}>
          <div style={{ display: "flex", flexWrap: "wrap", rowGap: "10px" }}>
            {[
              "React",
              "Typescript",
              "mantine",
              "Zustand",
              "RTK Query",
              "Frontend",
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
              Сфера
            </div>
            <span>IT</span>
          </div>
          <div className={stls.cardContainer}>
            <div className={stls.iconContainer}>
              <IconPosition /> Позиция
            </div>
            <span>Старший программист</span>
          </div>
          <div className={stls.cardContainer}>
            <div className={stls.iconContainer}>
              <IconPeriod /> Период
            </div>
            <span>02/2024 — 02/2025</span>
          </div>
        </div>
        <div className={stls.infoContainer}>
          <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
            <IconMountain /> Основные достижения и обязанности:
          </div>
          <div>
            Разработан новый продукт "Админка" по управлению тарифами и
            online-тарификации
          </div>
          <div>Доработан продукт сервисных заявок и управления бригадами</div>
          <div>
            Разработана новая web-версия продукта по использованию тарифных
            планов широкополосного интернета с внедрением технологии Tanstack
            Query
          </div>
        </div>
      </div>
    </div>
  );
}
