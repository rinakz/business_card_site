import stls from "../../../styles/components/AboutMe.module.sass";
import { ThemeContext } from "../../context/Theme_context";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IconArrowBottom,
  IconEmoji,
  IconGhChat,
  IconHeart,
  IconHot,
  IconPin,
  IconUser,
} from "../../icons";
import { DoggyContent } from "./Stories.helpers";
import useWindowSize from "../../hooks/useWindowSize";

function Doggy() {
  const { colors } = useContext(ThemeContext);
  const navigate = useNavigate();

  const { width } = useWindowSize();

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(width < 600);
  }, [width]);

  return (
    <div className={stls.storyPageContainer}>
      <div
        className={stls.storyTitle}
        style={{
          color: colors.zeta,
        }}
      >
        Правительница здешних цифровых земель и лисица
        <IconPin />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "wrap",
          rowGap: "40px",
        }}
      >
        <div className={stls.infoContainer}>
          <img src="/Book.jpg" alt="book" style={{ maxHeight: "300px" }} />
          <div
            style={{ display: "flex", gap: "40px", flexDirection: "column" }}
          >
            <div style={{ display: "flex", gap: "24px" }}>
              <div className={stls.cardInfo}>
                <span className={stls.textContainer}>
                  <IconHot />
                  граундхоппер:
                </span>
                <span>@rinakz</span>
              </div>
              <div className={stls.cardInfo}>
                <span className={stls.textContainer}>
                  <IconEmoji /> {mobile ? "гх" : "граундхоппинг"}:
                </span>
                <span>футбольные путешествия</span>
              </div>
            </div>{" "}
            <div style={{ display: "flex", gap: "24px" }}>
              <div className={stls.cardInfo}>
                <span className={stls.textContainer}>
                  <IconUser />
                  топ-100 россии:
                </span>
                <span>#70</span>
              </div>
              <div className={stls.cardInfo}>
                <span className={stls.textContainer}>
                  <IconGhChat /> слоган:
                </span>
                <span>Дальше - больше!</span>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/Gh.jpg"
          alt="Gh"
          style={{ maxWidth: mobile ? "300px" : "50%" }}
        />
      </div>

      <DoggyContent />

      <div className={stls.footerContainer}>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          <img src="/Stadium.jpg" alt="Stadium" style={{ height: "300px" }} />
          <img src="/Metal.jpg" alt="Metal" style={{ height: "300px" }} />
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
              onClick={() => navigate("/about_me/channel")}
            >
              С 2022 году запустила уникальний IT-канал «Что-то на джуновском»
              <IconArrowBottom />
            </div>
            <hr />
            <div
              className={stls.projectLink}
              onClick={() => navigate("/about_me/croatia")}
            >
              Основная жизненная цель — переезд в Хорватию
              <IconArrowBottom />
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doggy;
