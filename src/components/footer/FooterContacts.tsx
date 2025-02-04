import { useContext, useEffect, useState } from "react";
import { IconTg } from "../icons/IconTg";
import { IconMail } from "../icons/IconMail";
import { LayoutPage } from "../general/LayoutPage";
import { ThemeContext } from "../context/Theme_context";
import { IconChat } from "../icons/IconChat";
import stls from "../../styles/components/Footer.module.sass";
import useWindowSize from "../hooks/useWindowSize";

function FooterContacts() {
  const { colors } = useContext(ThemeContext);

  const { width } = useWindowSize();

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(width < 600);
  }, [width]);

  return (
    <LayoutPage>
      <div id="contacts" className={stls.footerContainer}>
        <div className={stls.footerTitleContainer}>
          <div style={{ minWidth: "50%" }} />
          <div
            className={stls.footerTitle}
            style={{
              color: colors.beta,
            }}
          >
            Поболтаем?
            <IconChat width={mobile ? "50" : undefined} />
          </div>
        </div>
        <div className={stls.footerInfo}>
          <div style={{ minWidth: "50%" }}>
            <p>
              Я работаю в сфере разработки уже более четырех лет и с каждым
              проектом я стараюсь внедрять новые технологии и следить
              за актуальными трендами в индустрии, что помогает мне оставаться
              на передовой инновационных решений.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              flexWrap: "wrap",
              rowGap: "40px",
            }}
          >
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <a
                style={{ color: "inherit" }}
                href="https://www.linkedin.com/in/rinakz"
              >
                <button
                  className={stls.button}
                  style={{
                    background: colors.beta,
                    color: colors.alpha,
                  }}
                >
                  linkedin
                </button>
              </a>
              <a
                style={{ color: "inherit" }}
                href="https://www.github.com/rinakz"
              >
                <button
                  className={stls.button}
                  style={{
                    background: colors.beta,
                    color: colors.alpha,
                  }}
                >
                  github
                </button>
              </a>
              <a
                style={{ color: "inherit" }}
                href="https://www.gitlab.com/in/rinakz"
              >
                <button
                  className={stls.button}
                  style={{
                    background: colors.beta,
                    color: colors.alpha,
                  }}
                >
                  gitlab
                </button>
              </a>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                minWidth: "300px",
              }}
            >
              <a style={{ color: "inherit" }} href="https://t.me/reenakz">
                <span className={stls.contacts}>
                  <IconTg />
                  @reenakz
                </span>
              </a>
              <a
                style={{ color: "inherit" }}
                href="mailto:katt-marchenko@yandex.com"
              >
                <span className={stls.contacts}>
                  <IconMail />
                  katt-marchenko@yandex.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}

export default FooterContacts;
