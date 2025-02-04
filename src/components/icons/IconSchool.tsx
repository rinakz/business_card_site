import cn from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconSchoolProps = any;

export const IconSchool = ({ classNames }: TypeIconSchoolProps) => {
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
        <g clipPath="url(#clip0_210_8402)">
          <path
            d="M30.4701 7.60986H28.9501V10.6599H25.9001V12.1899H22.8501V13.7099H25.9001V18.2799H24.3801V19.8099H25.9001V22.8499H27.4201V12.1899H28.9501V25.8999H27.4201V31.9999H32.0001V25.8999H30.4701V7.60986Z"
            fill={colors.beta}
          />
          <path
            d="M28.9499 6.08984H25.8999V7.60984H28.9499V6.08984Z"
            fill={colors.beta}
          />
          <path
            d="M25.8999 22.8501H24.3799V24.3801H25.8999V22.8501Z"
            fill={colors.beta}
          />
          <path
            d="M25.9 9.14014H19.8V10.6601H25.9V9.14014Z"
            fill={colors.beta}
          />
          <path
            d="M25.9001 4.56982H22.8501V6.08982H25.9001V4.56982Z"
            fill={colors.beta}
          />
          <path
            d="M24.3801 24.3799H21.3301V25.8999H24.3801V24.3799Z"
            fill={colors.beta}
          />
          <path
            d="M24.3801 19.8101H21.3301V21.3301H24.3801V19.8101Z"
            fill={colors.beta}
          />
          <path d="M22.85 13.71H19.8V15.23H22.85V13.71Z" fill={colors.beta} />
          <path
            d="M22.85 3.04004H19.8V4.57004H22.85V3.04004Z"
            fill={colors.beta}
          />
          <path
            d="M21.3299 25.8999H9.13989V27.4199H21.3299V25.8999Z"
            fill={colors.beta}
          />
          <path
            d="M21.3299 21.3301H9.13989V22.8501H21.3299V21.3301Z"
            fill={colors.beta}
          />
          <path d="M19.8 15.23H16.76V16.76H19.8V15.23Z" fill={colors.beta} />
          <path
            d="M19.8 7.60986H13.71V9.13986H19.8V7.60986Z"
            fill={colors.beta}
          />
          <path
            d="M19.8 1.52002H16.76V3.04002H19.8V1.52002Z"
            fill={colors.beta}
          />
          <path d="M16.76 0H13.71V1.52H16.76V0Z" fill={colors.beta} />
          <path
            d="M16.76 16.7598H13.71V18.2798H16.76V16.7598Z"
            fill={colors.beta}
          />
          <path
            d="M13.7099 1.52002H10.6599V3.04002H13.7099V1.52002Z"
            fill={colors.beta}
          />
          <path
            d="M13.7099 15.23H10.6599V16.76H13.7099V15.23Z"
            fill={colors.beta}
          />
          <path
            d="M10.6601 3.04004H7.61011V4.57004H10.6601V3.04004Z"
            fill={colors.beta}
          />
          <path
            d="M9.14009 24.3799H6.09009V25.8999H9.14009V24.3799Z"
            fill={colors.beta}
          />
          <path
            d="M9.14009 19.8101H6.09009V21.3301H9.14009V19.8101Z"
            fill={colors.beta}
          />
          <path
            d="M10.6601 13.71H7.61011V15.23H10.6601V13.71Z"
            fill={colors.beta}
          />
          <path
            d="M7.61007 4.56982H4.57007V6.08982H7.61007V4.56982Z"
            fill={colors.beta}
          />
          <path
            d="M6.09007 22.8501H4.57007V24.3801H6.09007V22.8501Z"
            fill={colors.beta}
          />
          <path
            d="M6.09002 19.8102V18.2802H4.57002V13.7102H7.61002V12.1902H4.57002V10.6602H1.52002V12.1902H3.04002V22.8502H4.57002V19.8102H6.09002Z"
            fill={colors.beta}
          />
          <path
            d="M4.57002 6.08984H1.52002V7.60984H4.57002V6.08984Z"
            fill={colors.beta}
          />
          <path d="M1.52 7.60986H0V10.6599H1.52V7.60986Z" fill={colors.beta} />
        </g>
        <defs>
          <clipPath id="clip0_210_8402">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
