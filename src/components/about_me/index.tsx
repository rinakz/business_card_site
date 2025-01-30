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

export function AboutMe() {
  const navigate = useNavigate();

  const { colors } = useContext(ThemeContext);

  const { width } = useWindowSize();

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
              Обо мне
            </span>
            <IconDinosaur width={mobile ? "50" : undefined} />
          </div>

          <div>
            Вспоминая начало своего пути, стоит упомянуть, что я родилась
            в Москве в пятницу 13-го и всё детство провела, занимаясь
            компьютерами вместе с братьями. Старший из нас — преподаватель
            информатики, второй — инженер по информационной безопасности.
            <br />
            В школе училась в физико-математическом классе. Высшее образование
            получила в Российском университете кооперации защитив диплом
            на отлично.
            <br />
            Также успешно прошла обучение в школе программирования, выпустившись
            с дипломом JavaScript разработчика.
            <br />
            <br />
            На текущий день занимаюсь разработкой около пяти лет.
            <br />
            С удовольствием берусь за дополнительные проекты и постоянно
            развиваюсь.
            <br />
            <br />
            Мой первый личный проект — это была электронная библиотека.
            В процессе поиска работы нужно было себя чем-то занять, и я начала
            писать. Идею подкинули подружки:
            <br /> «Хочется выкладывать свои книги онлайн и также бронировать!»…
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <IconArrow color={colors.beta} />
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
