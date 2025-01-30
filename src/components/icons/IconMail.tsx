import cn from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconMailProps = any;

export const IconMail = ({ classNames }: TypeIconMailProps) => {
  const { colors } = useContext(ThemeContext);

  return (
    <div className={cn(classNames)}>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 3.5V4.5V5.5H19V6.5H18V7.5H17V8.5H16V9.5H15V10.5H14V11.5H13V12.5H11V11.5H10V10.5H9V9.5H8V8.5H7V7.5H6V6.5H5V5.5H4V4.5V3.5H20Z"
          fill={colors.beta}
        />
        <path
          d="M22 5.5V19.5H21.0909V20.5H2.90909V19.5H2V5.5H3.81818V6.5H4.72727V7.5H5.63636V8.5H6.54545V9.5H7.45455V10.5H8.36364V11.5H9.27273V12.5H10.1818V13.5H11.0909V14.5H12.9091V13.5H13.8182V12.5H14.7273V11.5H15.6364V10.5H16.5455V9.5H17.4545V8.5H18.3636V7.5H19.2727V6.5H20.1818V5.5H22Z"
          fill={colors.beta}
        />
        <rect x="2" y="4.5" width="1" height="1" fill={colors.beta} />
        <rect x="21" y="4.5" width="1" height="1" fill={colors.beta} />
        <rect x="22" y="5.5" width="1" height="1" fill={colors.beta} />
        <rect x="22" y="6.5" width="1" height="1" fill={colors.beta} />
        <rect x="22" y="7.5" width="1" height="1" fill={colors.beta} />
        <rect x="22" y="8.5" width="1" height="1" fill={colors.beta} />
        <rect x="22" y="9.5" width="1" height="1" fill={colors.beta} />
        <rect x="22" y="10.5" width="1" height="1" fill={colors.beta} />
        <rect x="22" y="11.5" width="1" height="1" fill={colors.beta} />
        <rect x="22" y="12.5" width="1" height="1" fill={colors.beta} />
        <rect x="22" y="13.5" width="1" height="1" fill={colors.beta} />
        <rect x="22" y="14.5" width="1" height="1" fill={colors.beta} />
        <rect x="22" y="15.5" width="1" height="1" fill={colors.beta} />
        <rect x="22" y="16.5" width="1" height="1" fill={colors.beta} />
        <rect x="22" y="17.5" width="1" height="1" fill={colors.beta} />
        <rect x="1" y="5.5" width="1" height="1" fill={colors.beta} />
        <rect x="1" y="6.5" width="1" height="1" fill={colors.beta} />
        <rect x="1" y="7.5" width="1" height="1" fill={colors.beta} />
        <rect x="1" y="8.5" width="1" height="1" fill={colors.beta} />
        <rect x="1" y="9.5" width="1" height="1" fill={colors.beta} />
        <rect x="1" y="10.5" width="1" height="1" fill={colors.beta} />
        <rect x="1" y="11.5" width="1" height="1" fill={colors.beta} />
        <rect x="1" y="12.5" width="1" height="1" fill={colors.beta} />
        <rect x="1" y="13.5" width="1" height="1" fill={colors.beta} />
        <rect x="1" y="14.5" width="1" height="1" fill={colors.beta} />
        <rect x="1" y="15.5" width="1" height="1" fill={colors.beta} />
        <rect x="1" y="16.5" width="1" height="1" fill={colors.beta} />
        <rect x="1" y="17.5" width="1" height="1" fill={colors.beta} />
      </svg>
    </div>
  );
};
