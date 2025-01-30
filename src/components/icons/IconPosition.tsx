import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

export const IconPosition = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.575 7.62002H22.095V9.14002H23.615V10.66H25.145V9.14002H26.665V7.62002H28.195V6.09002H29.715V3.04002H28.195V1.52002H26.665V3.04002H25.145V4.57002H23.615V3.04002H22.095V1.52002H20.575V3.04002H19.045V6.09002H20.575V7.62002Z"
        fill={colors.beta}
      />
      <path d="M16.005 15.23H14.475V24.38H16.005V15.23Z" fill={colors.beta} />
      <path d="M14.475 13.71H12.955V15.23H14.475V13.71Z" fill={colors.beta} />
      <path
        d="M12.955 18.28H11.425V21.33H6.85499V18.28H5.33499V24.38H3.80499V25.9H5.33499V32H8.38499V27.42H9.90499V32H12.955V25.9H14.475V24.38H12.955V18.28Z"
        fill={colors.beta}
      />
      <path d="M12.955 12.1899H11.425V13.7099H12.955V12.1899Z" fill={colors.beta} />
      <path d="M12.955 9.14001H11.425V10.66H12.955V9.14001Z" fill={colors.beta} />
      <path d="M9.90495 13.71H8.38495V18.28H9.90495V13.71Z" fill={colors.beta} />
      <path d="M11.425 10.66H6.85498V12.19H11.425V10.66Z" fill={colors.beta} />
      <path
        d="M6.85496 12.1899H5.33496V13.7099H6.85496V12.1899Z"
        fill={colors.beta}
      />
      <path
        d="M6.85496 9.14001H5.33496V10.66H6.85496V9.14001Z"
        fill={colors.beta}
      />
      <path d="M5.33499 13.71H3.80499V15.23H5.33499V13.71Z" fill={colors.beta} />
      <path
        d="M6.85499 6.09V4.57H11.425V6.09H12.955V9.14H14.475V3.04H12.955V1.52H11.425V0H6.85499V1.52H5.33499V3.04H3.80499V9.14H5.33499V6.09H6.85499Z"
        fill={colors.beta}
      />
      <path d="M3.80497 15.23H2.28497V24.38H3.80497V15.23Z" fill={colors.beta} />
    </svg>
  );
};
