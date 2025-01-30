import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconArrowProps = {
  color?: string;
};

export const IconArrow = ({ color }: TypeIconArrowProps) => {
  const { colors } = useContext(ThemeContext);

  return (
    <svg
      width="42"
      height="32"
      viewBox="0 0 84 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="80"
        height="60.0008"
        rx="18"
        stroke={color ?? colors.alpha}
        strokeWidth="4"
      />
      <rect
        width="5.71438"
        height="5.71438"
        transform="matrix(-1 0 0 1 29.7144 12)"
        fill={color ?? colors.alpha}
      />
      <rect
        width="5.71438"
        height="5.71438"
        transform="matrix(-1 0 0 1 46.8591 12)"
        fill={color ?? colors.alpha}
      />
      <rect
        width="5.71438"
        height="5.71438"
        transform="matrix(-1 0 0 1 35.4285 17.7128)"
        fill={color ?? colors.alpha}
      />
      <rect
        width="5.71438"
        height="5.71438"
        transform="matrix(-1 0 0 1 52.5747 17.7128)"
        fill={color ?? colors.alpha}
      />
      <rect
        width="5.71438"
        height="5.71438"
        transform="matrix(-1 0 0 1 41.1425 23.4288)"
        fill={color ?? colors.alpha}
      />
      <rect
        width="5.71438"
        height="5.71438"
        transform="matrix(-1 0 0 1 58.2872 23.4288)"
        fill={color ?? colors.alpha}
      />
      <rect
        width="5.71438"
        height="5.71438"
        transform="matrix(-1 0 0 1 46.8591 29.1436)"
        fill={color ?? colors.alpha}
      />
      <rect
        width="5.71438"
        height="5.71438"
        transform="matrix(-1 0 0 1 64 29.1436)"
        fill={color ?? colors.alpha}
      />
      <rect
        width="5.71438"
        height="5.71438"
        transform="matrix(-1 0 0 1 41.1425 34.8591)"
        fill={color ?? colors.alpha}
      />
      <rect
        width="5.71438"
        height="5.71438"
        transform="matrix(-1 0 0 1 58.2872 34.8591)"
        fill={color ?? colors.alpha}
      />
      <rect
        width="5.71438"
        height="5.71438"
        transform="matrix(-1 0 0 1 35.4285 40.5724)"
        fill={color ?? colors.alpha}
      />
      <rect
        width="5.71438"
        height="5.71438"
        transform="matrix(-1 0 0 1 52.5747 40.5724)"
        fill={color ?? colors.alpha}
      />
      <rect
        width="5.71438"
        height="5.71438"
        transform="matrix(-1 0 0 1 29.7144 46.2864)"
        fill={color ?? colors.alpha}
      />
      <rect
        width="5.71438"
        height="5.71438"
        transform="matrix(-1 0 0 1 46.8591 46.2864)"
        fill={color ?? colors.alpha}
      />
    </svg>
  );
};
