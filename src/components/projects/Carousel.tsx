import { useContext } from "react";
import { AppContext } from "../context/App_context";
import stls from "../../styles/components/Projects.module.sass";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/Theme_context";
import { IconArrow } from "../icons/IconArrow";
import { ProjectType } from "../../types/Projects";
import { PATH } from "../../constants/common";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";

const ProjectSlider = () => {
  const { projects } = useContext(AppContext);
  const { colors } = useContext(ThemeContext);
  const { t } = useTranslation();

  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const navigate = useNavigate();

  const handleClick = (link: string) => {
    navigate(PATH.projects.projectsId(link));
  };

  return (
    <div ref={emblaRef} style={{ overflow: "hidden" }}>
      <div style={{ display: "flex" }}>
        {projects.map((el: ProjectType, index: number) => {
          return (
            <div
              key={index}
              className={stls.projectCarousel}
              style={{
                cursor: "pointer",
                background: el.color,
              }}
            >
              <div
                onClick={() => handleClick(el.link)}
                className={stls.projectCard}
                style={{
                  background: el.color,
                  border: `5px solid ${colors.alpha}`,
                }}
              >
                <div className={stls.carouselHeader}>
                  <div className={stls.carouselTitle}>
                    <span>{el.name}</span>
                    {el.icon}
                  </div>
                  <div className={stls.techContainer}>
                    {el.technologies.map((el: string, index: number) => (
                      <span
                        key={index}
                        className={stls.title}
                        style={{
                          border: `3px solid ${colors.alpha}`,
                          color: colors.alpha,
                        }}
                      >
                        {el}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <div className={stls.info}>
                    <b>{t("card.sphere")}</b>
                    <span>{el.sphere}</span>
                  </div>
                  <div className={stls.info}>
                    <b>{t("card.whatDoing")}</b>
                    <span>{el.task}</span>
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <IconArrow />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProjectSlider;
