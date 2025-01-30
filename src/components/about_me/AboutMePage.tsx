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

export function AboutMePage() {
  const id = useMatch(PATH.aboutMe.id);
  const isAboutMeStoryMatch = !!id?.params?.id;
  const navigate = useNavigate();

  const { colors } = useContext(ThemeContext);

  const { width } = useWindowSize();

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(width < 600);
  }, [width]);

  return (
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
            Обо мне
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
                      Имя:
                    </span>
                    <span>Екатерина</span>
                  </div>
                  <div className={stls.cardInfo}>
                    <span className={stls.card}>
                      <IconSchool /> Образование:
                    </span>
                    <span> Высшее</span>
                  </div>
                  <div className={stls.cardInfo}>
                    <span className={stls.card}>
                      <IconBloknot /> Возраст:
                    </span>
                    <span>30</span>
                  </div>
                </div>
                <div className={stls.cardsContainer}>
                  <div className={stls.cardInfo}>
                    <span className={stls.card}>
                      <IconCity />
                      Город:{" "}
                    </span>
                    <span>Москва</span>
                  </div>
                  <div className={stls.cardInfo}>
                    <span className={stls.card}>
                      <IconProgrammist />
                      Специализация:{" "}
                    </span>
                    <span>Программист</span>
                  </div>
                  <div className={stls.cardInfo}>
                    <span className={stls.card}>
                      <IconZnak /> Знак зодиака:{" "}
                    </span>
                    <span>Козерог</span>
                  </div>
                </div>
              </div>

              <div style={{ minWidth: "50%", width: mobile ? "100%" : "auto" }}>
                <WithOskiAboutMe />
              </div>
            </div>
            <div className={stls.textContainer}>
              <div>
                Вспоминая начало своего пути, стоит упомянуть, что я родилась
                в Москве в пятницу 13-го и всё детство провела, занимаясь
                компьютерами вместе с братьями. информатики. В школе училась
                в физико-математическом классе. Высшее образование получила
                в Российском университете кооперации защитив диплом на отлично.
                <br />
                Также успешно прошла обучение в школе программирования,
                выпустившись с дипломом JavaScript разработчика.
                <br />
                <br />
                На текущий день занимаюсь разработкой около четырех лет.
                С удовольствием берусь за дополнительные проекты и постоянно
                развиваюсь. Мой первый личный проект — это была электронная
                библиотека. В процессе поиска работы нужно было себя
                чем-то занять, и я начала писать. Идею подкинули подружки:
                <br />
                «Хочется выкладывать свои книги электронно и также
                бронировать!».
                <br />
                <br />
                Приложение позволяло зарегистрироваться, выложить собственную
                книгу в общий доступ, найти и забронировать интересующую.
                К книге можно было написать комментарий или же просто оставить
                оценку. Самостоятельно разработала дизайн. Создала интерфейс без
                использования UI библиотек. Подключила базу данных, выкатила
                проект на heroku и вуаля.
                <br />
                <b>Первый оффер в кармане!</b>
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
                  Не остановившись на достигнутом я продолжала изучать новые
                  технологии и создавать классные штуки.
                  <br />
                  Одним из интересных и важных для меня опытов стала работа
                  в Федеральной грузовой компании.
                  <br />
                  В ФГК я разрабатывала кабинеты менеджеров и клиентов и мне
                  посчастливилось изучить PHP и Laravel и самостоятельно
                  дорабатывать бэк. Я открыла для себя Vue в коммерческой
                  разработке, написала с помощью него IDE.
                  <br />
                  <br />
                  Сейчас я вернулась к React и помимо основной работы продолжаю
                  помогать разрабатывать функционал приложений для B2B,
                  IT компании QWEP, для которой в  2023 году совместно
                  с коллегой-разработчиком мы переписали приложения с нуля
                  и успешно выкатили новую WEB-версию.
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
                  Личные проекты
                  <IconHeart width={mobile ? "50" : undefined} />
                </span>
                <div>
                  <div
                    className={stls.projectLink}
                    onClick={() => navigate("channel")}
                  >
                    С 2022 году запустила уникальний IT-канал «Что-то на
                    джуновском»
                    <IconArrowBottom />
                  </div>
                  <hr />
                  <div
                    className={stls.projectLink}
                    onClick={() => navigate("shiba")}
                  >
                    Правительница здешних цифровых земель и лисица
                    <IconArrowBottom />
                  </div>
                  <hr />
                  <div
                    className={stls.projectLink}
                    onClick={() => navigate("croatia")}
                  >
                    Основная жизненная цель — переезд в Хорватию
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
  );
}
