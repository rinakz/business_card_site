import cn from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconPinProps = any;

export const IconPin = ({ classNames }: TypeIconPinProps) => {
  const { colors } = useContext(ThemeContext);

  return (
    <div className={cn(classNames)}>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M85.7031 23.7812H80.9531V47.5937H85.7031V23.7812Z"
          fill={colors.zeta}
        />
        <path
          d="M80.9531 47.5938H76.2031V61.875H80.9531V47.5938Z"
          fill={colors.zeta}
        />
        <path
          d="M80.9531 14.2812H76.2031V23.7812H80.9531V14.2812Z"
          fill={colors.zeta}
        />
        <path
          d="M76.2031 61.875H71.4219V71.4063H76.2031V61.875Z"
          fill={colors.zeta}
        />
        <path d="M76.2031 9.5H71.4219V14.2813H76.2031V9.5Z" fill={colors.zeta} />
        <path
          d="M71.4219 71.4062H66.6719V80.9375H71.4219V71.4062Z"
          fill={colors.zeta}
        />
        <path
          d="M66.6719 38.0937H61.9219V28.5625H57.1406V23.7812H52.3906V19.0312H57.1406V14.2812H42.8594V19.0312H38.1094V23.7812H33.3281V28.5625H28.5781V42.8437H33.3281V47.5938H38.1094V52.375H42.8594V57.125H57.1406V52.375H61.9219V47.5938H66.6719V42.8437H71.4219V28.5625H66.6719V38.0937Z"
          fill={colors.zeta}
        />
        <path
          d="M66.6719 80.9375H61.9219V85.6875H66.6719V80.9375Z"
          fill={colors.zeta}
        />
        <path
          d="M66.6719 23.7812H61.9219V28.5625H66.6719V23.7812Z"
          fill={colors.zeta}
        />
        <path d="M71.4219 4.75H61.9219V9.5H71.4219V4.75Z" fill={colors.zeta} />
        <path
          d="M61.9219 85.6875H57.1406V90.4688H61.9219V85.6875Z"
          fill={colors.zeta}
        />
        <path
          d="M61.9219 19.0312H57.1406V23.7812H61.9219V19.0312Z"
          fill={colors.zeta}
        />
        <path
          d="M57.1406 90.4688H52.3906V95.2187H57.1406V90.4688Z"
          fill={colors.zeta}
        />
        <path
          d="M52.3906 95.2188H47.6094V100H52.3906V95.2188Z"
          fill={colors.zeta}
        />
        <path
          d="M47.6094 90.4688H42.8594V95.2187H47.6094V90.4688Z"
          fill={colors.zeta}
        />
        <path d="M61.9219 0H38.1094V4.75H61.9219V0Z" fill={colors.zeta} />
        <path
          d="M42.8594 85.6875H38.1094V90.4688H42.8594V85.6875Z"
          fill={colors.zeta}
        />
        <path
          d="M38.1094 80.9375H33.3281V85.6875H38.1094V80.9375Z"
          fill={colors.zeta}
        />
        <path d="M38.1094 4.75H28.5781V9.5H38.1094V4.75Z" fill={colors.zeta} />
        <path
          d="M33.3281 71.4062H28.5781V80.9375H33.3281V71.4062Z"
          fill={colors.zeta}
        />
        <path
          d="M28.5781 61.875H23.7969V71.4063H28.5781V61.875Z"
          fill={colors.zeta}
        />
        <path d="M28.5781 9.5H23.7969V14.2813H28.5781V9.5Z" fill={colors.zeta} />
        <path
          d="M23.7969 47.5938H19.0469V61.875H23.7969V47.5938Z"
          fill={colors.zeta}
        />
        <path
          d="M23.7969 14.2812H19.0469V23.7812H23.7969V14.2812Z"
          fill={colors.zeta}
        />
        <path
          d="M19.0469 23.7812H14.2969V47.5937H19.0469V23.7812Z"
          fill={colors.zeta}
        />
      </svg>
    </div>
  );
};
