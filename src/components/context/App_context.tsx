import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "./Theme_context";
import { IconComputer } from "../icons/IconComputer";
import { IconComp } from "../icons/IconComp";
import { IconPhone } from "../icons/IconPhone";
import { ProjectType } from "../../types/Projects";
import { StoriesType } from "../../types/AboutMe";

const AppContext = React.createContext<any>(null);

function AppProvider(props: any) {
  const { t } = useTranslation();
  const { colors } = useContext(ThemeContext);

  const stories: StoriesType[] = [
    {
      id: 1,
      ava: "/Apple.jpeg",
      alt: "Work",
      path: "/work",
      text: t("story.work"),
    },
    {
      id: 3,
      ava: "/Kanal.jpeg",
      alt: "Channel",
      path: "about_me/channel",
      text: t("story.kanal"),
    },
    {
      id: 4,
      ava: "/Doggy.jpeg",
      alt: "Shiba",
      path: "about_me/shiba",
      text: t("story.shiba"),
    },
    {
      id: 5,
      ava: "/Croatia.jpeg",
      alt: "Croatia",
      path: "about_me/croatia",
      text: t("story.croatia"),
    },
  ];

  const projects: ProjectType[] = [
    {
      name: t("card.ic8"),
      link: "IC8",
      color: colors.beta,
      technologies: ["React", "Typescript", "Frontend"],
      sphere: "IT",
      task: t("card.ic8Do"),
      icon: <IconPhone />,
    },
    {
      name: t("card.fgk"),
      link: "railfgk",
      color: colors.delta,
      technologies: ["Php", "Laravel", "Vue", "Backend", "Frontend"],
      sphere: "Logistic",
      task: t("card.fgkDo"),
      icon: <IconComputer />,
    },
    {
      name: t("card.qwep"),
      link: "qwep",
      color: colors.gamma,
      technologies: ["React", "Typescript", "SQL", "Frontend"],
      sphere: "IT, b2b",
      task: t("card.qwepDo"),
      icon: <IconComp />,
    },
    // {
    //   name: "Электронная библиотека",
    //   link: "library",
    //   color: colors.epsilon,
    //   technologies: ["React", "JS", "Frontend"],
    //   sphere: "pet",
    // },
  ];

  return (
    <AppContext.Provider
      value={{
        stories,
        projects,
      }}
      {...props}
    />
  );
}

export { AppProvider, AppContext };
