import React, { useContext, useEffect, useState } from "react";
import { LayoutPage } from "../general/LayoutPage";
import { IconProject } from "../icons/IconProjects";
import ProjectSlider from "./Carousel";
import { ThemeContext } from "../context/Theme_context";
import stls from "../../styles/components/Projects.module.sass";
import useWindowSize from "../hooks/useWindowSize";

export function Projects() {
  const { colors } = useContext(ThemeContext);

  const { width } = useWindowSize();

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(width < 600);
  }, [width]);

  return (
    <div id="projects">
      <LayoutPage>
        <div
          className={stls.projectsPageTitle}
          style={{
            color: colors.beta,
          }}
        >
          Проекты <IconProject width={mobile ? "50" : undefined} />
        </div>
        <ProjectSlider />
      </LayoutPage>
    </div>
  );
}
