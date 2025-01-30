import cn from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconCityProps = any;

export const IconCity = ({ classNames }: TypeIconCityProps) => {
  const { colors } = useContext(ThemeContext);

  return (
    <div className={cn(classNames)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_210_8486)">
          <path
            d="M22.85 7.6201V10.6701H21.33V15.2401H22.85V16.7601H24.38V18.2901H19.81V19.8101H18.28V21.3301H22.85V24.3801H21.33V27.4301H22.85V28.9501H25.9V27.4301H27.43V25.9001H28.95V22.8601H30.47V19.8101H32V12.1901H30.47V9.1401H28.95V6.1001H27.43V7.6201H22.85Z"
            fill={colors.beta}
          />
          <path
            d="M27.4299 4.56982H25.8999V6.09982H27.4299V4.56982Z"
            fill={colors.beta}
          />
          <path
            d="M25.9001 3.0498H22.8501V4.5698H25.9001V3.0498Z"
            fill={colors.beta}
          />
          <path
            d="M22.8501 28.9502H19.8101V30.4802H22.8501V28.9502Z"
            fill={colors.beta}
          />
          <path
            d="M22.8501 1.52002H19.8101V3.05002H22.8501V1.52002Z"
            fill={colors.beta}
          />
          <path
            d="M16.7599 28.9502H15.2399V27.4302H10.6599V28.9502H9.13989V30.4802H12.1899V32.0002H19.8099V30.4802H16.7599V28.9502Z"
            fill={colors.beta}
          />
          <path d="M19.8099 0H12.1899V1.52H19.8099V0Z" fill={colors.beta} />
          <path
            d="M10.6599 16.76H12.1899V18.29H13.7099V13.71H10.6599V16.76Z"
            fill={colors.beta}
          />
          <path
            d="M9.14009 27.4302H6.09009V28.9502H9.14009V27.4302Z"
            fill={colors.beta}
          />
          <path
            d="M6.09007 25.8999H4.57007V27.4299H6.09007V25.8999Z"
            fill={colors.beta}
          />
          <path
            d="M3.05 22.86V25.9H4.57V24.38H6.09V22.86H7.62V18.29H6.09V16.76H4.57V15.24H3.05V13.71H4.57V12.19H9.14V10.67H10.66V9.14002H12.19V10.67H13.71V9.14002H15.24V6.10002H13.71V4.57002H10.66V3.05002H12.19V1.52002H9.14V3.05002H6.09V4.57002H4.57V6.10002H3.05V9.14002H1.52V12.19H0V19.81H1.52V22.86H3.05Z"
            fill={colors.beta}
          />
        </g>
        <defs>
          <clipPath id="clip0_210_8486">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
