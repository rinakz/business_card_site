import cn from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconGhChatProps = any;

export const IconGhChat = ({ classNames }: TypeIconGhChatProps) => {
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
        <g clipPath="url(#clip0_244_6394)">
          <path
            d="M2.28977 31.235H3.80977V29.715H5.32977V28.195H3.80977V26.665H2.28977V28.195H0.759766V29.715H2.28977V31.235Z"
            fill={colors.beta}
          />
          <path
            d="M6.86008 9.90527H5.33008V16.0053H6.86008V9.90527Z"
            fill={colors.beta}
          />
          <path
            d="M8.37957 26.6652V25.1452H9.89957V22.0952H8.37957V20.5752H5.32957V22.0952H3.80957V25.1452H5.32957V26.6652H8.37957Z"
            fill={colors.beta}
          />
          <path
            d="M8.37937 16.0054H6.85938V17.5254H8.37937V16.0054Z"
            fill={colors.beta}
          />
          <path
            d="M8.37937 6.85498H6.85938V9.90498H8.37937V6.85498Z"
            fill={colors.beta}
          />
          <path
            d="M9.89988 17.5249H8.37988V19.0449H9.89988V17.5249Z"
            fill={colors.beta}
          />
          <path
            d="M9.89988 3.80518H8.37988V6.85518H9.89988V3.80518Z"
            fill={colors.beta}
          />
          <path
            d="M12.9494 19.0449H9.89941V20.5749H12.9494V19.0449Z"
            fill={colors.beta}
          />
          <path
            d="M12.9497 11.4253H11.4297V12.9553H12.9497V11.4253Z"
            fill={colors.beta}
          />
          <path
            d="M12.9494 2.28516H9.89941V3.80516H12.9494V2.28516Z"
            fill={colors.beta}
          />
          <path
            d="M23.6202 0.765137H12.9502V2.28514H23.6202V0.765137Z"
            fill={colors.beta}
          />
          <path
            d="M19.0495 11.4253H17.5195V12.9553H19.0495V11.4253Z"
            fill={colors.beta}
          />
          <path
            d="M23.6202 20.5752H12.9502V22.0952H23.6202V20.5752Z"
            fill={colors.beta}
          />
          <path
            d="M26.6701 19.0449H23.6201V20.5749H26.6701V19.0449Z"
            fill={colors.beta}
          />
          <path
            d="M25.1401 11.4253H23.6201V12.9553H25.1401V11.4253Z"
            fill={colors.beta}
          />
          <path
            d="M26.6701 2.28516H23.6201V3.80516H26.6701V2.28516Z"
            fill={colors.beta}
          />
          <path
            d="M28.1899 17.5249H26.6699V19.0449H28.1899V17.5249Z"
            fill={colors.beta}
          />
          <path
            d="M28.1899 3.80518H26.6699V5.33518H28.1899V3.80518Z"
            fill={colors.beta}
          />
          <path
            d="M29.7095 14.4751H28.1895V17.5251H29.7095V14.4751Z"
            fill={colors.beta}
          />
          <path
            d="M29.7095 5.33496H28.1895V8.38496H29.7095V5.33496Z"
            fill={colors.beta}
          />
          <path
            d="M31.24 8.38525H29.71V14.4753H31.24V8.38525Z"
            fill={colors.beta}
          />
        </g>
        <defs>
          <clipPath id="clip0_244_6394">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
