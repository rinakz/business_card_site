import { useContext, useEffect, useState } from "react";
import { LayoutPage } from "../general/LayoutPage";
import { IconProject } from "../icons/IconProjects";
import { AppContext } from "../context/App_context";
import { IconArrow } from "../icons/IconArrow";
import { ThemeContext } from "../context/Theme_context";
import stls from "../../styles/components/Projects.module.sass";
import { ProjectType } from "../../types/Projects";
import { Outlet, useMatch, useNavigate } from "react-router-dom";
import { PATH } from "../../constants/common";
import useWindowSize from "../hooks/useWindowSize";

export function ProjectsPage() {
  const { projects } = useContext(AppContext);
  const { colors } = useContext(ThemeContext);
  const navigate = useNavigate();

  const id = useMatch(PATH.projects.id);
  const isProjectMatch = !!id?.params?.id;

  const { width } = useWindowSize();

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(width < 600);
  }, [width]);

  return (
    <div id="projects">
      <LayoutPage>
        {isProjectMatch ? (
          <Outlet />
        ) : (
          <>
            <div
              className={stls.projectsTitle}
              style={{
                color: colors.beta,
              }}
            >
              Проекты <IconProject width={mobile ? "50" : undefined} />
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "80px" }}
            >
              {projects.map((el: ProjectType, idx: number) => (
                <div
                  key={idx}
                  onClick={() => navigate(PATH.projects.projectsId(el.link))}
                  className={stls.projectInfo}
                  style={{ borderBottom: `1px solid ${colors.zeta}` }}
                >
                  <div className={stls.card}>
                    {el.name} <IconArrow color={colors.beta} />
                  </div>
                  <div className={stls.cardInfo}>
                    <div>{el.task}</div>
                    <div
                      style={{
                        display: "flex",
                        rowGap: "10px",
                        flexWrap: "wrap",
                      }}
                    >
                      {el.technologies.map((el: string, idx) => (
                        <span
                          key={idx}
                          className={stls.data}
                          style={{
                            border: `3px solid ${colors.beta}`,
                            color: colors.beta,
                          }}
                        >
                          {el}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </LayoutPage>
    </div>
  );
}
