import React, { useContext } from "react";
import { ThemeContext, ThemeType } from "../context/Theme_context";
import stls from "../../styles/components/Main.module.sass";
import cn from "classnames";
import { useTranslation } from "react-i18next";

export function ThemePage() {
  const { t } = useTranslation();

  const { colors, toggleTheme, themes } = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: colors.theta }}>{t("drawer.changeTheme")}</h1>
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {themes.map((el: ThemeType) => (
          <div
            id={el.name}
            onClick={() => toggleTheme(el.name)}
            className={cn(stls.themeCard, stls[el.name])}
            style={{
              display: "flex",
              textAlign: "center",
              flexDirection: "column",
            }}
            key={el.id}
          >
            <div className={stls.header}>{el.name}</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className={stls.photo}></div>
              <div style={{ textJustify: "inter-word", margin: "5px" }}>
                <h6>Lorem Ipsum</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent massa arcu, tincidunt eu nisl vitae, posuere maximus
                  lorem. Pellentesque interdum eros eu velit iaculis, nec
                  finibus felis maximus. Cras risus erat, sagittis a feugiat at,
                  laoreet vel leo. Donec vel quam et eros placerat molestie sit
                  amet eget felis.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
