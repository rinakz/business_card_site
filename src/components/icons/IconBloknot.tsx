import cn from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconBloknotProps = any;

export const IconBloknot = ({ classNames }: TypeIconBloknotProps) => {
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
        <g clipPath="url(#clip0_215_8619)">
          <path
            d="M12.9548 0V1.52H9.90479V3.05H12.9548V4.57H14.4748V3.05H17.5248V4.57H19.0448V3.05H22.0948V4.57H23.6248V3.05H25.1448V6.1H26.6648V4.57H28.1948V30.48H11.4348V32H29.7148V30.48H31.2348V4.57H29.7148V3.05H28.1948V1.52H23.6248V0H22.0948V1.52H19.0448V0H17.5248V1.52H14.4748V0H12.9548Z"
            fill={colors.beta}
          />
          <path
            d="M25.145 6.1001H23.625V9.1401H25.145V6.1001Z"
            fill={colors.beta}
          />
          <path
            d="M22.095 12.1901H26.665V10.6701H23.625V9.14014H22.095V12.1901Z"
            fill={colors.beta}
          />
          <path
            d="M20.5749 15.2399H19.0449V18.2899H20.5749V16.7599H26.6649V15.2399H22.0949V12.1899H20.5749V15.2399Z"
            fill={colors.beta}
          />
          <path
            d="M17.5249 21.33H26.6649V19.81H19.0449V18.29H17.5249V21.33Z"
            fill={colors.beta}
          />
          <path
            d="M17.5249 12.1899H16.0049V13.7199H17.5249V12.1899Z"
            fill={colors.beta}
          />
          <path
            d="M17.5249 9.14014H16.0049V10.6701H17.5249V9.14014Z"
            fill={colors.beta}
          />
          <path
            d="M26.6648 24.3799H12.9548V25.9099H26.6648V24.3799Z"
            fill={colors.beta}
          />
          <path
            d="M16.0048 13.7202H11.4348V15.2402H16.0048V13.7202Z"
            fill={colors.beta}
          />
          <path
            d="M12.9548 9.14014H11.4348V10.6701H12.9548V9.14014Z"
            fill={colors.beta}
          />
          <path
            d="M11.4349 22.8601H17.5249V21.3301H2.28491V22.8601H9.90491V30.4801H11.4349V22.8601Z"
            fill={colors.beta}
          />
          <path
            d="M11.4348 12.1899H9.90479V13.7199H11.4348V12.1899Z"
            fill={colors.beta}
          />
          <path
            d="M9.90501 3.0498H8.38501V6.0998H9.90501V3.0498Z"
            fill={colors.beta}
          />
          <path
            d="M8.38498 6.1001H6.85498V9.1401H8.38498V6.1001Z"
            fill={colors.beta}
          />
          <path
            d="M6.85496 9.14014H5.33496V12.1901H6.85496V9.14014Z"
            fill={colors.beta}
          />
          <path
            d="M5.33494 12.1899H3.81494V15.2399H5.33494V12.1899Z"
            fill={colors.beta}
          />
          <path
            d="M3.81491 15.2402H2.28491V18.2902H3.81491V15.2402Z"
            fill={colors.beta}
          />
          <path
            d="M2.28489 18.29H0.764893V21.33H2.28489V18.29Z"
            fill={colors.beta}
          />
        </g>
        <defs>
          <clipPath id="clip0_215_8619">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
