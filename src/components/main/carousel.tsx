import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import stls from "../../styles/components/Main.module.sass";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";
import { AppContext } from "../context/App_context";

const technology = [
  { name: "Typescript", link: "https://www.typescriptlang.org/" },
  { name: "React", link: "https://react.dev/" },
  { name: "MUI", link: "https://mui.com/" },
  { name: "i18next", link: "https://react.i18next.com/" },
];

const Slider = () => {
  const { colors } = useContext(ThemeContext);
  const { responsive } = useContext(AppContext);

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
        {technology.map((el, index) => {
          return (
            <a key={index} href={el.link} >
              <div
                className={stls.tech}
                style={{ background: colors.beta, color: colors.alpha }}
              >
                <span>{el.name}</span>
              </div>
            </a>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
