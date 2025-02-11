import React, { useContext, useEffect, useState } from "react";
import { LayoutPage } from "../general/LayoutPage";
import { IconProject } from "../icons/IconProjects";
import ProjectSlider from "./Carousel";
import { ThemeContext } from "../context/Theme_context";
import stls from "../../styles/components/Projects.module.sass";
import useWindowSize from "../hooks/useWindowSize";
import { useTranslation } from "react-i18next";

export function Projects() {
  const { colors } = useContext(ThemeContext);
  const { t } = useTranslation();
  const { width } = useWindowSize();

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(width < 600);
  }, [width]);

  return (
    <div id="projects">
      <LayoutPage>
        <div className={stls.projectsPageTitleContainer}>
          <div style={{ minWidth: "50%" }} />
          <div
            className={stls.projectsPageTitle}
            style={{
              color: colors.beta,
            }}
          >
            {t("header.projects")}
            <IconProject width={mobile ? "50" : undefined} />
          </div>
        </div>
        <ProjectSlider />
      </LayoutPage>
    </div>
  );
}
