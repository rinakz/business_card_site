import cn from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconLampProps = any;

export const IconLightDots = ({ classNames }: TypeIconLampProps) => {
  const { colors } = useContext(ThemeContext);

  return (
    <svg
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0001 5.23976H13.4941V6.75976H15.0001V5.23976Z"
        fill={colors.beta}
      />
      <path
        d="M10.5022 5.23976H8.99634V6.75976H10.5022V5.23976Z"
        fill={colors.beta}
      />
      <path
        d="M5.99387 9.81007H4.4978V11.3301H5.99387V9.81007Z"
        fill={colors.beta}
      />
      <path
        d="M5.99387 5.23976H4.4978V6.75976H5.99387V5.23976Z"
        fill={colors.beta}
      />
      <path
        d="M5.99387 0.669937H4.4978V2.18994H5.99387V0.669937Z"
        fill={colors.beta}
      />
      <path
        d="M1.49607 5.23976H0V6.75976H1.49607V5.23976Z"
        fill={colors.beta}
      />
    </svg>
  );
};
