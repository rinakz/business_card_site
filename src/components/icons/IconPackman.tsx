import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconLampProps = any;

export const IconPackman = ({ classNames }: TypeIconLampProps) => {
  const { colors } = useContext(ThemeContext);

  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 4.7979H16.4042V6.3937H13.2021V8H11.6063V9.5958H13.2021V11.1916H16.4042V12.7979H18V14.3937H16.4042V16H13.2021V17.5958H8.4042V16H5.2021V14.3937H3.6063V11.1916H2V6.3937H3.6063V3.2021H5.2021V1.5958H8.4042V0H13.2021V1.5958H16.4042V3.2021H18V4.7979ZM10 4.7979H8.4042V6.3937H10V4.7979Z"
        fill={colors.beta}
      />
    </svg>
  );
};
