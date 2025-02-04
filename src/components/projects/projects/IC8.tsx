import { useContext, useEffect, useState } from "react";
import stls from "../../../styles/components/Projects.module.sass";
import { ThemeContext } from "../../context/Theme_context";
import { IconPeriod } from "../../icons/IconPeriod";
import { IconSphere } from "../../icons/IconSphere";
import { IconPosition } from "../../icons/IconPosition";
import { IconMountain } from "../../icons/IconMountain";
import useWindowSize from "../../hooks/useWindowSize";

export default function IC8() {
  const { colors, currentTheme } = useContext(ThemeContext);
  const { width } = useWindowSize();

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(width < 600);
  }, [width]);

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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          className={stls.imageMain}
          src={currentTheme === "dark" ? "/Ic8Dark.png" : "/Ic8Light.png"}
          alt="Ic8"
        />{" "}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "80px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <img
            className={stls.imageSecond}
            src={currentTheme === "dark" ? "/Ic82Dark.png" : "/Ic82Light.png"}
            alt="Ic8"
            style={{ maxWidth: mobile ? "100%" : "500px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            maxWidth: mobile ? "100%" : "50%",
          }}
        >
          <img
            className={stls.imageSecond}
            src={currentTheme === "dark" ? "/Ic83Dark.png" : "/Ic83Light.png"}
            alt="Ic8"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <img
      className={stls.banner}
        src={
          currentTheme === "dark" ? "/Ic8BannerDark.png" : "/Ic8BannerLight.png"
        }
        alt="Ic8Banner"
      />
    </div>
  );
}
