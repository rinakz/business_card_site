import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconProjectProps = {
  width?: string;
};

export const IconProject = ({ width }: TypeIconProjectProps) => {
  const { colors } = useContext(ThemeContext);

  return (
    <div>
      <svg
        width={width ? width : "100"}
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M88.0938 85.7188H83.3438V100H88.0938V85.7188Z"
          fill={colors.beta}
        />
        <path
          d="M83.3438 80.9688H78.5625V85.7188H83.3438V80.9688Z"
          fill={colors.beta}
        />
        <path
          d="M78.5625 85.7188H73.8125V90.4688H78.5625V85.7188Z"
          fill={colors.beta}
        />
        <path
          d="M78.5625 76.1875H73.8125V80.9688H78.5625V76.1875Z"
          fill={colors.beta}
        />
        <path
          d="M73.8125 90.4688H69.0312V95.25H73.8125V90.4688Z"
          fill={colors.beta}
        />
        <path
          d="M73.8125 71.4375H64.2812V76.1875H73.8125V71.4375Z"
          fill={colors.beta}
        />
        <path
          d="M73.8125 33.3438H69.0312V47.625H73.8125V33.3438Z"
          fill={colors.beta}
        />
        <path
          d="M69.0313 95.25H64.2812V100H69.0313V95.25Z"
          fill={colors.beta}
        />
        <path
          d="M69.0313 47.625H64.2812V52.375H69.0313V47.625Z"
          fill={colors.beta}
        />
        <path
          d="M69.0313 28.5625H59.5312V33.3437H69.0313V28.5625Z"
          fill={colors.beta}
        />
        <path
          d="M64.2813 76.1875H59.5312V80.9688H64.2813V76.1875Z"
          fill={colors.beta}
        />
        <path
          d="M64.2812 66.6562H54.75V71.4375H64.2812V66.6562Z"
          fill={colors.beta}
        />
        <path
          d="M64.2813 52.375H59.5312V57.1563H64.2813V52.375Z"
          fill={colors.beta}
        />
        <path
          d="M59.5312 80.9688H54.75V85.7188H59.5312V80.9688Z"
          fill={colors.beta}
        />
        <path
          d="M59.5312 57.1562H54.75V61.9062H59.5312V57.1562Z"
          fill={colors.beta}
        />
        <path
          d="M59.5312 33.3438H54.75V38.0937H59.5312V33.3438Z"
          fill={colors.beta}
        />
        <path d="M54.75 85.7188H50V90.4688H54.75V85.7188Z" fill={colors.beta} />
        <path d="M54.75 61.9062H50V66.6563H54.75V61.9062Z" fill={colors.beta} />
        <path d="M54.75 38.0938H50V42.8438H54.75V38.0938Z" fill={colors.beta} />
        <path d="M50 66.6562H45.25V71.4375H50V66.6562Z" fill={colors.beta} />
        <path d="M50 42.8438H45.25V47.625H50V42.8438Z" fill={colors.beta} />
        <path
          d="M45.25 71.4375H40.4688V76.1875H45.25V71.4375Z"
          fill={colors.beta}
        />
        <path
          d="M45.25 47.625H40.4688V52.375H45.25V47.625Z"
          fill={colors.beta}
        />
        <path
          d="M40.4687 52.375H35.7188V57.1563H40.4687V52.375Z"
          fill={colors.beta}
        />
        <path
          d="M40.4687 38.0938H35.7188V47.625H40.4687V38.0938Z"
          fill={colors.beta}
        />
        <path
          d="M35.7188 57.1562H30.9375V61.9062H35.7188V57.1562Z"
          fill={colors.beta}
        />
        <path
          d="M30.9375 0V4.75H26.1875V14.2813H30.9375V19.0625H35.7188V23.8125H40.4687V28.5625H45.25V23.8125H50V19.0625H54.75V14.2813H59.5312V4.75H54.75V0H45.25V4.75H40.4687V0H30.9375Z"
          fill={colors.beta}
        />
        <path
          d="M35.7188 33.3438H21.4375V38.0937H35.7188V33.3438Z"
          fill={colors.beta}
        />
        <path
          d="M26.1875 52.375H21.4375V71.4375H26.1875V66.6562H30.9375V61.9062H26.1875V52.375Z"
          fill={colors.beta}
        />
        <path
          d="M21.4375 71.4375H16.6562V76.1875H21.4375V71.4375Z"
          fill={colors.beta}
        />
        <path
          d="M21.4375 38.0938H16.6562V52.375H21.4375V38.0938Z"
          fill={colors.beta}
        />
        <path
          d="M16.6562 76.1875H11.9062V100H16.6562V76.1875Z"
          fill={colors.beta}
        />
      </svg>
    </div>
  );
};
