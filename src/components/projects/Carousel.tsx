import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import { useContext } from "react";
import { AppContext } from "../context/App_context";
import stls from "../../styles/components/Projects.module.sass";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/Theme_context";
import { IconArrow } from "../icons/IconArrow";
import { ProjectType } from "../../types/Projects";
import { PATH } from "../../constants/common";

const ProjectSlider = () => {
  const { responsive, projects } = useContext(AppContext);
  const { colors } = useContext(ThemeContext);

  const navigate = useNavigate();

  const handleClick = (link: string) => {
    navigate(PATH.projects.projectsId(link));
  };

  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={false}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
      >
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
                <div
                  style={{
                    gap: "40px",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
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
                    <b>Сфера:</b>
                    <span>{el.sphere}</span>
                  </div>
                  <div className={stls.info}>
                    <b>Что делала:</b>
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
      </Carousel>
    </div>
  );
};
export default ProjectSlider;
