import { useContext } from "react";
import stls from "../../../styles/components/Projects.module.sass";
import { ThemeContext } from "../../context/Theme_context";
import { IconPeriod } from "../../icons/IconPeriod";
import { IconSphere } from "../../icons/IconSphere";
import { IconPosition } from "../../icons/IconPosition";
import { IconMountain } from "../../icons/IconMountain";

export default function FGK() {
  const { colors } = useContext(ThemeContext);

  return (
    <div className={stls.projectContainer}>
      <div className={stls.header}>
        <div className={stls.projectTitle}>Федеральная грузовая компания</div>
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
              Сфера
            </div>
            <span>Logistics</span>
          </div>
          <div className={stls.cardContainer}>
            <div className={stls.iconContainer}>
              <IconPosition /> Позиция
            </div>
            <span>Программист</span>
          </div>
          <div className={stls.cardContainer}>
            <div className={stls.iconContainer}>
              <IconPeriod /> Период
            </div>
            <span>06/2023 — 02/2024</span>
          </div>
        </div>
        <div className={stls.infoContainer}>
          <div style={{ display: "flex", gap: "12px", marginBottom: '20px' }}>
            <IconMountain /> Основные достижения и обязанности:
          </div>
          <div>
            Разработка и дизайн пользовательских интерфейсов для кабинетов
            менеджеров и клиентов, с использованием Vue.js.
          </div>
          <div>
            Реализовала адаптивный, интуитивно понятный дизайн, улучшающий
            пользовательский опыт и повышающий производительность работы
            менеджеров.
          </div>
          <div>
            Самостоятельная разработка и оптимизация бэкенда. Улучшила
            архитектуру серверной части, оптимизировала запросы к базе данных
            и API, обеспечив высокую производительность и надёжность системы.
          </div>
          <div>
            Создание интегрированной разработческой среды (IDE) с помощью
            Vue.js для внутреннего использования командой менеджеров. Эта
            платформа позволила ускорить процесс расчетов.
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img className={stls.imageMain} src="/fgk2.png" alt="FGK" />
      </div>
    </div>
  );
}
