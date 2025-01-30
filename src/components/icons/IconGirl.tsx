import cn from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconGirlProps = any;

export const IconGirl = ({ classNames }: TypeIconGirlProps) => {
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
        <g clipPath="url(#clip0_215_8566)">
          <path d="M32 12.1899H30.47V19.8099H32V12.1899Z" fill={colors.beta} />
          <path
            d="M30.4699 19.8101H28.95V22.8601H30.4699V19.8101Z"
            fill={colors.beta}
          />
          <path
            d="M30.4699 9.14014H28.95V12.1901H30.4699V9.14014Z"
            fill={colors.beta}
          />
          <path
            d="M28.9499 22.8599H27.4299V25.8999H28.9499V22.8599Z"
            fill={colors.beta}
          />
          <path
            d="M28.9499 6.1001H27.4299V9.1401H28.9499V6.1001Z"
            fill={colors.beta}
          />
          <path
            d="M27.4299 25.8999H25.8999V27.4299H27.4299V25.8999Z"
            fill={colors.beta}
          />
          <path
            d="M27.4299 4.56982H25.8999V6.09982H27.4299V4.56982Z"
            fill={colors.beta}
          />
          <path
            d="M6.09007 24.3801H7.62007V25.9001H10.6601V24.3801H12.1901V22.8601H10.6601V21.3301H9.14007V15.2401H10.6601V13.7101H21.3301V15.2401H22.8501V21.3301H21.3301V22.8601H19.8101V24.3801H21.3301V25.9001H24.3801V24.3801H25.9001V21.3301H27.4301V13.7101H25.9001V10.6701H24.3801V9.1401H22.8501V7.6201H21.3301V6.1001H10.6601V7.6201H9.14007V9.1401H7.62007V10.6701H6.09007V13.7101H4.57007V21.3301H6.09007V24.3801Z"
            fill={colors.beta}
          />
          <path
            d="M25.9001 27.4302H22.8501V28.9502H25.9001V27.4302Z"
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
            d="M21.3301 16.7598H19.8101V19.8098H21.3301V16.7598Z"
            fill={colors.beta}
          />
          <path
            d="M22.8501 1.52002H19.8101V3.05002H22.8501V1.52002Z"
            fill={colors.beta}
          />
          <path d="M19.8099 30.48H12.1899V32H19.8099V30.48Z" fill={colors.beta} />
          <path
            d="M19.8099 24.3799H12.1899V25.8999H19.8099V24.3799Z"
            fill={colors.beta}
          />
          <path
            d="M18.28 21.3301H13.71V22.8601H18.28V21.3301Z"
            fill={colors.beta}
          />
          <path d="M19.8099 0H12.1899V1.52H19.8099V0Z" fill={colors.beta} />
          <path
            d="M12.1899 28.9502H9.13989V30.4802H12.1899V28.9502Z"
            fill={colors.beta}
          />
          <path
            d="M12.1899 16.7598H10.6599V19.8098H12.1899V16.7598Z"
            fill={colors.beta}
          />
          <path
            d="M12.1899 1.52002H9.13989V3.05002H12.1899V1.52002Z"
            fill={colors.beta}
          />
          <path
            d="M9.14009 27.4302H6.09009V28.9502H9.14009V27.4302Z"
            fill={colors.beta}
          />
          <path
            d="M9.14009 3.0498H6.09009V4.5698H9.14009V3.0498Z"
            fill={colors.beta}
          />
          <path
            d="M6.09007 25.8999H4.57007V27.4299H6.09007V25.8999Z"
            fill={colors.beta}
          />
          <path
            d="M6.09007 4.56982H4.57007V6.09982H6.09007V4.56982Z"
            fill={colors.beta}
          />
          <path
            d="M4.57005 22.8599H3.05005V25.8999H4.57005V22.8599Z"
            fill={colors.beta}
          />
          <path
            d="M4.57005 6.1001H3.05005V9.1401H4.57005V6.1001Z"
            fill={colors.beta}
          />
          <path
            d="M3.05002 19.8101H1.52002V22.8601H3.05002V19.8101Z"
            fill={colors.beta}
          />
          <path
            d="M3.05002 9.14014H1.52002V12.1901H3.05002V9.14014Z"
            fill={colors.beta}
          />
          <path d="M1.52 12.1899H0V19.8099H1.52V12.1899Z" fill={colors.beta} />
        </g>
        <defs>
          <clipPath id="clip0_215_8566">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
