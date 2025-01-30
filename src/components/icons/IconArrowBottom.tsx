import cn from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconArrowBottomProps = any;

export const IconArrowBottom = ({ classNames }: TypeIconArrowBottomProps) => {
  const { colors } = useContext(ThemeContext);

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_203_8126)">
        <path d="M-0.149371 0H3.41504V3.54778H-0.149371V0Z" fill={colors.beta} />
        <path
          d="M3.41409 3.54785H7.00195V7.09564H3.41409V3.54785Z"
          fill={colors.beta}
        />
        <path d="M7.002 7.0957H10.5664V10.6668H7.002V7.0957Z" fill={colors.beta} />
        <path
          d="M10.5669 10.666H14.1548V14.2138H10.5669V10.666Z"
          fill={colors.beta}
        />
        <path
          d="M14.1553 14.2144H17.7197V17.7621H14.1553V14.2144Z"
          fill={colors.beta}
        />
        <path
          d="M17.7193 17.7622H21.2837V21.3333H17.7193V17.7622Z"
          fill={colors.beta}
        />
        <path
          d="M21.2832 21.334H24.8711V24.8818H21.2832V21.334Z"
          fill={colors.beta}
        />
        <path
          d="M10.5666 28.4516H24.8712V24.8805H28.4356V10.666H32V31.9994H10.5666V28.4516Z"
          fill={colors.beta}
        />
      </g>
      <defs>
        <clipPath id="clip0_203_8126">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="matrix(-1 0 0 1 32 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
