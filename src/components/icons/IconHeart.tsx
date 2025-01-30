import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconHeartProps = {
  width?: string;
};

export const IconHeart = ({ width }: TypeIconHeartProps) => {
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
        <g clipPath="url(#clip0_203_8098)">
          <path
            d="M100 38.0938H95.2188V61.9062H100V38.0938Z"
            fill={colors.beta}
          />
          <path
            d="M95.2187 61.9062H90.4688V71.4375H95.2187V61.9062Z"
            fill={colors.beta}
          />
          <path
            d="M95.2187 28.5625H90.4688V38.0937H95.2187V28.5625Z"
            fill={colors.beta}
          />
          <path
            d="M90.4688 71.4375H85.7188V80.9375H90.4688V71.4375Z"
            fill={colors.beta}
          />
          <path
            d="M90.4688 19.0312H85.7188V28.5625H90.4688V19.0312Z"
            fill={colors.beta}
          />
          <path
            d="M85.7188 80.9375H80.9375V85.7188H85.7188V80.9375Z"
            fill={colors.beta}
          />
          <path
            d="M85.7188 14.2812H80.9375V19.0312H85.7188V14.2812Z"
            fill={colors.beta}
          />
          <path
            d="M80.9375 85.7188H71.4062V90.4688H80.9375V85.7188Z"
            fill={colors.beta}
          />
          <path
            d="M76.1875 33.3437H71.4062V28.5625H57.125V33.3437H52.375V38.0937H47.5937V33.3437H42.8438V28.5625H28.5625V33.3437H23.8125V38.0937H19.0312V52.375H23.8125V57.1563H28.5625V61.9062H33.3125V66.6562H38.0937V71.4375H42.8438V76.1875H47.5937V80.9375H52.375V76.1875H57.125V71.4375H61.9062V66.6562H66.6562V61.9062H71.4062V57.1563H76.1875V52.375H80.9375V38.0937H76.1875V33.3437ZM71.4062 52.375H66.6562V42.8437H57.125V38.0937H66.6562V42.8437H71.4062V52.375Z"
            fill={colors.beta}
          />
          <path
            d="M80.9375 9.53125H71.4062V14.2813H80.9375V9.53125Z"
            fill={colors.beta}
          />
          <path
            d="M71.4063 90.4688H61.9062V95.25H71.4063V90.4688Z"
            fill={colors.beta}
          />
          <path
            d="M71.4063 4.75H61.9062V9.53125H71.4063V4.75Z"
            fill={colors.beta}
          />
          <path
            d="M61.9062 95.25H38.0938V100H61.9062V95.25Z"
            fill={colors.beta}
          />
          <path d="M61.9062 0H38.0938V4.75H61.9062V0Z" fill={colors.beta} />
          <path
            d="M38.0937 90.4688H28.5625V95.25H38.0937V90.4688Z"
            fill={colors.beta}
          />
          <path
            d="M38.0937 4.75H28.5625V9.53125H38.0937V4.75Z"
            fill={colors.beta}
          />
          <path
            d="M28.5625 85.7188H19.0312V90.4688H28.5625V85.7188Z"
            fill={colors.beta}
          />
          <path
            d="M28.5625 9.53125H19.0312V14.2813H28.5625V9.53125Z"
            fill={colors.beta}
          />
          <path
            d="M19.0312 80.9375H14.2812V85.7188H19.0312V80.9375Z"
            fill={colors.beta}
          />
          <path
            d="M19.0312 14.2812H14.2812V19.0312H19.0312V14.2812Z"
            fill={colors.beta}
          />
          <path
            d="M14.2813 71.4375H9.5V80.9375H14.2813V71.4375Z"
            fill={colors.beta}
          />
          <path
            d="M14.2813 19.0312H9.5V28.5625H14.2813V19.0312Z"
            fill={colors.beta}
          />
          <path d="M9.5 61.9062H4.75V71.4375H9.5V61.9062Z" fill={colors.beta} />
          <path d="M9.5 28.5625H4.75V38.0937H9.5V28.5625Z" fill={colors.beta} />
          <path d="M4.75 38.0938H0V61.9062H4.75V38.0938Z" fill={colors.beta} />
        </g>
        <defs>
          <clipPath id="clip0_203_8098">
            <rect width="100" height="100" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
