import cn from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconComputerProps = any;

export const IconComputer = ({ classNames }: TypeIconComputerProps) => {
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
        <g clipPath="url(#clip0_604_669)">
          <path
            d="M95.25 90.4688H90.5V95.25H57.1563V85.7188H85.7188V52.375H90.5V47.625H80.9688V9.53125H76.2188V42.8438H71.4375V47.625H33.3438V42.8438H28.5937V47.625H0V90.4688H4.78125V85.7188H42.875V90.4688H47.625V85.7188H52.4062V90.4688H47.625V95.25H9.53125V100H100V57.1563H95.25V90.4688ZM38.125 80.9375H4.78125V52.375H38.125V80.9375ZM47.625 80.9375V52.375H80.9688V80.9375H47.625Z"
            fill={colors.alpha}
          />
          <path
            d="M95.25 52.375H90.5V57.1563H95.25V52.375Z"
            fill={colors.alpha}
          />
          <path
            d="M90.5 85.7188H85.7188V90.4688H90.5V85.7188Z"
            fill={colors.alpha}
          />
          <path
            d="M76.2187 4.75H71.4375V9.53125H76.2187V4.75Z"
            fill={colors.alpha}
          />
          <path
            d="M71.4375 61.9062H66.6875V66.6563H71.4375V61.9062Z"
            fill={colors.alpha}
          />
          <path
            d="M71.4375 38.0938H66.6875V42.8438H71.4375V38.0938Z"
            fill={colors.alpha}
          />
          <path
            d="M66.6875 57.1562H61.9062V61.9062H66.6875V57.1562Z"
            fill={colors.alpha}
          />
          <path
            d="M71.4375 71.4375H57.1563V66.6562H52.4062V76.1875H76.2187V66.6562H71.4375V71.4375Z"
            fill={colors.alpha}
          />
          <path
            d="M61.9062 61.9062H57.1562V66.6563H61.9062V61.9062Z"
            fill={colors.alpha}
          />
          <path
            d="M52.4063 9.53125H47.625V14.2813H42.875V9.53125H38.125V14.2813H33.3438V19.0625H38.125V23.8125H42.875V28.5625H47.625V23.8125H52.4063V19.0625H57.1563V14.2813H52.4063V9.53125Z"
            fill={colors.alpha}
          />
          <path
            d="M66.6875 38.0938V4.75H71.4375V0H23.8125V42.8438H28.5937V38.0938H66.6875ZM28.5937 4.75H61.9062V33.3438H28.5937V4.75Z"
            fill={colors.alpha}
          />
          <path
            d="M28.5937 61.9062H23.8125V71.4375H28.5937V61.9062Z"
            fill={colors.alpha}
          />
          <path
            d="M23.8125 57.1562H14.3125V61.9062H23.8125V57.1562Z"
            fill={colors.alpha}
          />
          <path
            d="M23.8125 71.4375H14.3125V76.1875H23.8125V71.4375Z"
            fill={colors.alpha}
          />
          <path
            d="M14.3125 61.9062H9.53125V71.4375H14.3125V61.9062Z"
            fill={colors.alpha}
          />
          <path
            d="M9.53125 90.4688H4.78125V95.25H9.53125V90.4688Z"
            fill={colors.alpha}
          />
        </g>
        <defs>
          <clipPath id="clip0_604_669">
            <rect width="100" height="100" fill={colors.alpha} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
