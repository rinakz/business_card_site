import cn from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconLampProps = any;

export const IconDarkDots = ({ classNames }: TypeIconLampProps) => {
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
        d="M-5.06639e-05 5.23975H1.50586V6.75974H-5.06639e-05V5.23975Z"
        fill={colors.beta}
      />
      <path d="M4.498 5.23975H6.00391V6.75974H4.498V5.23975Z" fill={colors.beta} />
      <path
        d="M9.00589 9.81006H10.502V11.3301H9.00589V9.81006Z"
        fill={colors.beta}
      />
      <path
        d="M9.00589 5.23975H10.502V6.75974H9.00589V5.23975Z"
        fill={colors.beta}
      />
      <path
        d="M9.00589 0.669922H10.502V2.18992H9.00589V0.669922Z"
        fill={colors.beta}
      />
      <path d="M13.5039 5.23975H15V6.75974H13.5039V5.23975Z" fill={colors.beta} />
    </svg>
  );
};
