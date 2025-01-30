import cn from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconHotProps = any;

export const IconHot = ({ classNames }: TypeIconHotProps) => {
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
        <path
          d="M20.5653 19.8101H17.5253V21.3301H15.9953V19.8101H12.9453V21.3301H11.4253V24.3801H12.9453V25.9001H14.4753V27.4301H15.9953V28.9501H17.5253V27.4301H19.0453V25.9001H20.5653V24.3801H22.0953V21.3301H20.5653V19.8101Z"
          fill={colors.beta}
        />
        <path
          d="M29.7151 10.6602H28.1851V22.8502H29.7151V10.6602Z"
          fill={colors.beta}
        />
        <path
          d="M28.185 22.8501H26.665V25.9001H28.185V22.8501Z"
          fill={colors.beta}
        />
        <path
          d="M28.185 9.14014H26.665V10.6601H28.185V9.14014Z"
          fill={colors.beta}
        />
        <path
          d="M26.6653 25.8999H25.1353V27.4299H26.6653V25.8999Z"
          fill={colors.beta}
        />
        <path
          d="M26.6653 7.62012H25.1353V9.14012H26.6653V7.62012Z"
          fill={colors.beta}
        />
        <path
          d="M25.1352 27.4302H23.6152V28.9502H25.1352V27.4302Z"
          fill={colors.beta}
        />
        <path
          d="M25.1352 6.08984H23.6152V7.61984H25.1352V6.08984Z"
          fill={colors.beta}
        />
        <path
          d="M23.6152 28.9502H22.0952V30.4702H23.6152V28.9502Z"
          fill={colors.beta}
        />
        <path
          d="M23.6152 4.56982H22.0952V6.08982H23.6152V4.56982Z"
          fill={colors.beta}
        />
        <path
          d="M22.0949 3.04004H20.5649V4.57004H22.0949V3.04004Z"
          fill={colors.beta}
        />
        <path
          d="M22.0953 30.4702H9.90527V32.0002H22.0953V30.4702Z"
          fill={colors.beta}
        />
        <path
          d="M20.5654 1.52002H17.5254V3.04002H20.5654V1.52002Z"
          fill={colors.beta}
        />
        <path
          d="M15.9951 9.14014H14.4751V15.2301H15.9951V9.14014Z"
          fill={colors.beta}
        />
        <path
          d="M14.4753 4.56982H12.9453V9.13982H14.4753V4.56982Z"
          fill={colors.beta}
        />
        <path
          d="M12.9453 3.04004H11.4253V4.57004H12.9453V3.04004Z"
          fill={colors.beta}
        />
        <path
          d="M17.525 1.52V0H8.375V1.52H9.905V3.04H11.425V1.52H17.525Z"
          fill={colors.beta}
        />
        <path d="M14.4753 15.23H9.90527V16.76H14.4753V15.23Z" fill={colors.beta} />
        <path d="M9.905 28.9502H8.375V30.4702H9.905V28.9502Z" fill={colors.beta} />
        <path d="M9.905 13.71H8.375V15.23H9.905V13.71Z" fill={colors.beta} />
        <path
          d="M8.37496 27.4302H5.33496V28.9502H8.37496V27.4302Z"
          fill={colors.beta}
        />
        <path
          d="M8.37496 10.6602H6.85496V12.1902H5.33496V13.7102H8.37496V10.6602Z"
          fill={colors.beta}
        />
        <path
          d="M5.33518 25.8999H3.80518V27.4299H5.33518V25.8999Z"
          fill={colors.beta}
        />
        <path d="M5.33518 13.71H3.80518V18.28H5.33518V13.71Z" fill={colors.beta} />
        <path
          d="M3.80516 18.2798H2.28516V25.8998H3.80516V18.2798Z"
          fill={colors.beta}
        />
      </svg>
    </div>
  );
};
