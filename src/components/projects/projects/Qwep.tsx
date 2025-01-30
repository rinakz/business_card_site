import { useContext } from "react";
import stls from "../../../styles/components/Projects.module.sass";
import { ThemeContext } from "../../context/Theme_context";
import { IconPeriod } from "../../icons/IconPeriod";
import { IconSphere } from "../../icons/IconSphere";
import { IconPosition } from "../../icons/IconPosition";
import { IconMountain } from "../../icons/IconMountain";

export default function Qwep() {
  const { colors } = useContext(ThemeContext);

  return (
    <div className={stls.projectContainer}>
      <div className={stls.header}>
        <div className={stls.projectTitle}>QWEP</div>
        <div className={stls.techContainer}>
          <div style={{ display: "flex", flexWrap: "wrap", rowGap: "10px" }}>
            {["React", "Typescript", "Material-UI", "SQL", "Frontend"].map(
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
              Сфера
            </div>
            <span>IT, b2b</span>
          </div>
          <div className={stls.cardContainer}>
            <div className={stls.iconContainer}>
              <IconPosition /> Позиция
            </div>
            <span>Frontend-разработчик</span>
          </div>
          <div className={stls.cardContainer}>
            <div className={stls.iconContainer}>
              <IconPeriod /> Период
            </div>
            <span>09/2022 — 06/2024</span>
          </div>
        </div>
        <div className={stls.infoContainer}>
          <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
            <IconMountain /> Основные достижения и обязанности:
          </div>
          <div>
            Полная переработка и запуск новой веб-версии платформенных
            приложений, выполненная в команде с коллегой-разработчиком. Проект
            включал переписывание приложений с нуля, что обеспечило улучшенную
            производительность, современный пользовательский интерфейс и более
            высокую масштабируемость системы.
          </div>
          <div>
            Разработка дополнительного функционала для приложений в качестве
            продолжающейся.
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img className={stls.imageMain} src="/qwep1.png" alt="Qwep" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div>
          <img className={stls.imageSecond} src="/qwep4.png" alt="Qwep" />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <img className={stls.imageSecond} src="/qwep2.png" alt="Qwep" />
          <img className={stls.imageSecond} src="/qwep3.png" alt="Qwep" />
        </div>
      </div>
    </div>
  );
}
