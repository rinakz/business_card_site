import cn from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconCompProps = any;

export const IconComp = ({ classNames }: TypeIconCompProps) => {
  const { colors } = useContext(ThemeContext);

  return (
    <div className={cn(classNames)}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M95.2344 71.4375H80.9531V66.6563H85.7031V61.9062H14.2969V66.6563H19.0625V71.4375H4.76562V100H95.2344V71.4375ZM23.7969 66.6563H76.1719V71.4375H23.7969V66.6563ZM90.4844 95.25H9.51563V76.1875H90.4844V95.25Z"
          fill={colors.alpha}
        />
        <path
          d="M90.4844 4.75H85.7031V61.9062H90.4844V4.75Z"
          fill={colors.alpha}
        />
        <path
          d="M80.9531 80.9375H57.1406V85.7188H80.9531V80.9375Z"
          fill={colors.alpha}
        />
        <path
          d="M61.8906 33.3438H57.1406V38.0937H61.8906V33.3438Z"
          fill={colors.alpha}
        />
        <path
          d="M61.8906 23.8125H57.1406V28.5625H61.8906V23.8125Z"
          fill={colors.alpha}
        />
        <path
          d="M57.1406 38.0938H42.8594V42.8438H57.1406V38.0938Z"
          fill={colors.alpha}
        />
        <path
          d="M42.8594 33.3438H38.0781V38.0937H42.8594V33.3438Z"
          fill={colors.alpha}
        />
        <path
          d="M42.8594 23.8125H38.0781V28.5625H42.8594V23.8125Z"
          fill={colors.alpha}
        />
        <path
          d="M19.0625 57.1563H80.9688V9.53125H19.0625V57.1563ZM23.7969 14.2813H76.1719V52.375H23.7969V14.2813Z"
          fill={colors.alpha}
        />
        <path
          d="M28.5781 80.9375H19.0469V90.4688H28.5781V80.9375Z"
          fill={colors.alpha}
        />
        <path d="M85.7031 0H14.2969V4.75H85.7031V0Z" fill={colors.alpha} />
        <path
          d="M14.2969 4.75H9.51562V61.9062H14.2969V4.75Z"
          fill={colors.alpha}
        />
      </svg>
    </div>
  );
};
