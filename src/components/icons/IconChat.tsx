import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconChatProps = {
  width?: string;
};

export const IconChat = ({ width }: TypeIconChatProps) => {
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
        <g clipPath="url(#clip0_91_5533)">
          <path d="M100 47.625H95.25V80.9688H100V47.625Z" fill={colors.beta} />
          <path
            d="M95.25 80.9688H90.5V85.7188H95.25V80.9688Z"
            fill={colors.beta}
          />
          <path
            d="M95.25 42.875H90.5V47.625H95.25V42.875Z"
            fill={colors.beta}
          />
          <path
            d="M85.7188 95.25H80.9688V100H90.5V85.7188H85.7188V95.25Z"
            fill={colors.beta}
          />
          <path
            d="M80.9687 38.0937H61.9062V33.3438H57.1563V38.0937H47.625V42.875H90.5V38.0937H85.7188V23.8125H80.9687V38.0937Z"
            fill={colors.beta}
          />
          <path
            d="M80.9688 90.5H76.1875V95.25H80.9688V90.5Z"
            fill={colors.beta}
          />
          <path
            d="M80.9687 47.625H71.4375V52.4063H66.6875V47.625H57.1563V52.4063H52.375V61.9062H57.1563V66.6875H61.9062V71.4375H66.6875V76.2187H71.4375V71.4375H76.1875V66.6875H80.9687V61.9062H85.7188V52.4063H80.9687V47.625Z"
            fill={colors.beta}
          />
          <path
            d="M80.9688 19.0625H76.1875V23.8125H80.9688V19.0625Z"
            fill={colors.beta}
          />
          <path
            d="M76.1875 85.7188H71.4375V90.5H76.1875V85.7188Z"
            fill={colors.beta}
          />
          <path
            d="M76.1875 14.3125H71.4375V19.0625H76.1875V14.3125Z"
            fill={colors.beta}
          />
          <path
            d="M71.4375 80.9688H47.625V85.7188H71.4375V80.9688Z"
            fill={colors.beta}
          />
          <path
            d="M71.4375 9.53125H61.9062V14.3125H71.4375V9.53125Z"
            fill={colors.beta}
          />
          <path
            d="M61.9062 4.78125H52.375V9.53125H61.9062V4.78125Z"
            fill={colors.beta}
          />
          <path
            d="M61.9062 28.5937V33.3438H66.6875V23.8125H52.375V19.0625H47.625V28.5937H61.9062Z"
            fill={colors.beta}
          />
          <path
            d="M47.625 76.2188H42.875V80.9688H47.625V76.2188Z"
            fill={colors.beta}
          />
          <path
            d="M47.625 42.875H42.875V47.625H47.625V42.875Z"
            fill={colors.beta}
          />
          <path
            d="M47.625 14.3125H42.875V19.0625H47.625V14.3125Z"
            fill={colors.beta}
          />
          <path
            d="M42.875 47.625H33.3438V52.4063H38.0937V71.4375H23.8125V76.2187H42.875V47.625Z"
            fill={colors.beta}
          />
          <path
            d="M42.875 9.53125H38.0938V14.3125H42.875V9.53125Z"
            fill={colors.beta}
          />
          <path d="M52.375 0H33.3438V4.78125H52.375V0Z" fill={colors.beta} />
          <path
            d="M38.0937 14.3125H33.3438V19.0625H38.0937V14.3125Z"
            fill={colors.beta}
          />
          <path
            d="M33.3438 52.4062H28.5938V57.1563H33.3438V52.4062Z"
            fill={colors.beta}
          />
          <path
            d="M33.3438 4.78125H23.8125V9.53125H33.3438V4.78125Z"
            fill={colors.beta}
          />
          <path
            d="M28.5937 57.1562H23.8125V61.9062H28.5937V57.1562Z"
            fill={colors.beta}
          />
          <path
            d="M28.5937 38.0938H23.8125V47.625H28.5937V38.0938Z"
            fill={colors.beta}
          />
          <path
            d="M23.8125 47.625H19.0625V57.1563H23.8125V47.625Z"
            fill={colors.beta}
          />
          <path
            d="M23.8125 33.3438H19.0625V38.0937H23.8125V33.3438Z"
            fill={colors.beta}
          />
          <path
            d="M33.3438 28.5937V19.0625H28.5937V23.8125H14.2812V33.3438H19.0625V28.5937H33.3438Z"
            fill={colors.beta}
          />
          <path
            d="M23.8125 9.53125H14.2812V14.3125H23.8125V9.53125Z"
            fill={colors.beta}
          />
          <path
            d="M9.53125 76.2187V71.4375H4.78125V76.2187H0V80.9687H23.8125V76.2187H9.53125Z"
            fill={colors.beta}
          />
          <path
            d="M14.2813 61.9062H9.53125V71.4375H14.2813V61.9062Z"
            fill={colors.beta}
          />
          <path
            d="M14.2813 14.3125H9.53125V19.0625H14.2813V14.3125Z"
            fill={colors.beta}
          />
          <path
            d="M9.53125 57.1562H4.78125V61.9062H9.53125V57.1562Z"
            fill={colors.beta}
          />
          <path
            d="M9.53125 19.0625H4.78125V23.8125H9.53125V19.0625Z"
            fill={colors.beta}
          />
          <path
            d="M4.78125 23.8125H0V57.1563H4.78125V23.8125Z"
            fill={colors.beta}
          />
        </g>
        <defs>
          <clipPath id="clip0_91_5533">
            <rect width="100" height="100" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
