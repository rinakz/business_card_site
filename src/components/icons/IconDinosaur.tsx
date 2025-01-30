import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconDinosaurProps = {
  width?: string;
};

export const IconDinosaur = ({ width }: TypeIconDinosaurProps) => {
  const { colors } = useContext(ThemeContext);

  return (
    <div>
      <svg
        width={width ? width : "100"}
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100 78.5781H95.25V83.3281H100V78.5781Z" fill={colors.beta} />
        <path
          d="M100 45.2344V35.7031H95.25V40.4844H90.4688V30.9531H85.7188V50.0156H80.9375V45.2344H76.1875V54.7656H85.7188V69.0469H61.9062V73.8281H100V69.0469H90.4688V45.2344H100Z"
          fill={colors.beta}
        />
        <path
          d="M100 2.39062H90.4688V7.14063H100V2.39062Z"
          fill={colors.beta}
        />
        <path
          d="M85.7188 78.5781H80.9375V83.3281H85.7188V78.5781Z"
          fill={colors.beta}
        />
        <path
          d="M85.7188 11.9219H76.1875V16.6719H85.7188V11.9219Z"
          fill={colors.beta}
        />
        <path
          d="M66.6563 78.5781H61.9062V83.3281H66.6563V78.5781Z"
          fill={colors.beta}
        />
        <path
          d="M61.9062 30.9531H47.625V35.7031H61.9062V40.4844H66.6562V16.6719H61.9062V30.9531Z"
          fill={colors.beta}
        />
        <path
          d="M42.8437 50.0156H33.3438V54.7656H42.8437V59.5156H33.3438V54.7656H28.5625V73.8281H42.8437V78.5781H28.5625V83.3281H14.2812V88.125H19.0625V97.625H28.5625V92.875H23.8125V88.125H38.0937V83.3438H42.8437V88.125H52.375V83.3438H47.625V64.3125H52.375V69.0625H57.1563V59.5312H47.625V45.25H61.9062V40.5H42.8437V50.0156ZM42.8437 69.0469H33.3438V64.2969H42.8437V69.0469Z"
          fill={colors.beta}
        />
        <path
          d="M42.8438 2.39062H33.3438V7.14063H42.8438V2.39062Z"
          fill={colors.beta}
        />
        <path
          d="M33.3437 21.4219H28.5625V30.9531H33.3437V21.4219Z"
          fill={colors.beta}
        />
        <path
          d="M61.9062 11.9219H23.8125V16.6719H61.9062V11.9219Z"
          fill={colors.beta}
        />
        <path
          d="M28.5625 73.8281H23.8125V78.5781H28.5625V73.8281Z"
          fill={colors.beta}
        />
        <path
          d="M23.8125 16.6719H19.0625V50.0156H23.8125V16.6719Z"
          fill={colors.beta}
        />
        <path
          d="M19.0625 50.0156H14.2812V64.2969H19.0625V50.0156Z"
          fill={colors.beta}
        />
        <path
          d="M14.2813 78.5781H9.53125V83.3281H14.2813V78.5781Z"
          fill={colors.beta}
        />
        <path
          d="M14.2813 64.2969H9.53125V69.0469H14.2813V64.2969Z"
          fill={colors.beta}
        />
        <path
          d="M9.53125 73.8281H4.75V78.5781H9.53125V73.8281Z"
          fill={colors.beta}
        />
        <path
          d="M9.53125 16.6719H0V21.4219H9.53125V16.6719Z"
          fill={colors.beta}
        />
        <path
          d="M4.75 64.2969H9.53125V59.5156H4.75V54.7656H0V73.8281H4.75V64.2969Z"
          fill={colors.beta}
        />
      </svg>
    </div>
  );
};
