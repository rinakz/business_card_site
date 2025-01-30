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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1101 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1100, min: 968 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    laptop: {
      breakpoint: { max: 967, min: 568 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 300, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const projects: ProjectType[] = [
    {
      name: "Айси Эйт",
      link: "IC8",
      color: colors.beta,
      technologies: ["React", "Typescript", "Frontend"],
      sphere: "IT",
      task: "в 2024 году разрабатывала приложение для технических специалистов по упавлению бригадами, запустили новую web-версию продукта по использованию широкополосного интернета",
      icon: <IconPhone />,
    },
    {
      name: "Федеральная грузовая компания",
      link: "railfgk",
      color: colors.delta,
      technologies: ["Php", "Laravel", "Vue", "Backend", "Frontend"],
      sphere: "Logistic",
      task: "разрабатывала кабинеты менеджеров и клиентов, самостоятельно дорабатывала бэк. Я открыла для себя Vue в коммерческой разработке, написала с помощью него IDE.",
      icon: <IconComputer />,
    },
    {
      name: "КВЭП",
      link: "qwep",
      color: colors.gamma,
      technologies: ["React", "Typescript", "SQL", "Frontend"],
      sphere: "IT, b2b",
      task: "в 2023 году мы переписали приложения платформы с нуля и успешно запустили новую web-версию. продолжаю разрабатывать функционал приложений QWEP в дополнение к основной работе.",
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
        responsive,
        projects,
      }}
      {...props}
    />
  );
}

export { AppProvider, AppContext };
