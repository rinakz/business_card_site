import stls from "../../styles/components/Main.module.sass";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const technology = [
  { name: "Typescript", link: "https://www.typescriptlang.org/" },
  { name: "React", link: "https://react.dev/" },
  { name: "MUI", link: "https://mui.com/" },
  { name: "i18next", link: "https://react.i18next.com/" },
];

const Slider = () => {
  const { colors } = useContext(ThemeContext);

  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div ref={emblaRef} style={{ overflow: "hidden" }}>
      <div style={{ display: "flex" }}>
        {technology.map((el, idx) => (
          <div
            className={stls.tech}
            style={{ background: colors.beta, color: colors.alpha }}
            key={idx}
          >
            <span>{el.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Slider;
