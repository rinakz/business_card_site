import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconSphereProps = any;

export const IconSphere = ({ classNames }: TypeIconSphereProps) => {
  const { colors } = useContext(ThemeContext);

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_501_3341)">
        <path
          d="M30.4799 23.6201H28.95V25.14H32V19.05H30.4799V23.6201Z"
          fill={colors.beta}
        />
        <path d="M32 14.47H30.48V16H32V14.47Z" fill={colors.beta} />
        <path
          d="M0 0.76001V25.14H15.24V23.62H1.52V2.28001H30.48V11.43H32V0.76001H0Z"
          fill={colors.beta}
        />
        <path d="M30.4799 16H28.95V17.52H30.4799V16Z" fill={colors.beta} />
        <path
          d="M30.4799 12.95H28.95V14.47H30.4799V12.95Z"
          fill={colors.beta}
        />
        <path
          d="M27.43 20.57H24.38V22.09H22.86V23.62H21.33V22.09H19.81V20.57H16.76V17.52H15.24V22.09H16.76V31.24H19.81V29.71H21.33V28.19H22.86V29.71H24.38V31.24H27.43V22.09H28.95V17.52H27.43V20.57Z"
          fill={colors.beta}
        />
        <path
          d="M28.95 6.86006V3.81006H24.38V5.33006H27.43V6.86006H28.95Z"
          fill={colors.beta}
        />
        <path d="M27.43 12.95H25.9V17.52H27.43V12.95Z" fill={colors.beta} />
        <path d="M25.9 17.52H24.38V19.05H25.9V17.52Z" fill={colors.beta} />
        <path
          d="M25.9 11.4301H24.38V12.9501H25.9V11.4301Z"
          fill={colors.beta}
        />
        <path
          d="M27.43 9.9V12.95H28.95V8.38H24.38V9.9H27.43Z"
          fill={colors.beta}
        />
        <path
          d="M24.3801 19.05H19.8101V20.57H24.3801V19.05Z"
          fill={colors.beta}
        />
        <path
          d="M24.38 6.85999H22.86V8.37999H24.38V6.85999Z"
          fill={colors.beta}
        />
        <path
          d="M22.86 5.32996H21.33V6.85996H22.86V5.32996Z"
          fill={colors.beta}
        />
        <path
          d="M24.3801 9.90002H19.8101V11.43H24.3801V9.90002Z"
          fill={colors.beta}
        />
        <path
          d="M21.3301 6.85999H19.8101V8.37999H21.3301V6.85999Z"
          fill={colors.beta}
        />
        <path d="M19.81 17.52H18.29V19.05H19.81V17.52Z" fill={colors.beta} />
        <path
          d="M19.81 11.4301H18.29V12.9501H19.81V11.4301Z"
          fill={colors.beta}
        />
        <path d="M18.29 12.95H16.76V17.52H18.29V12.95Z" fill={colors.beta} />
        <path
          d="M16.76 9.9H19.81V8.38H15.24V12.95H16.76V9.9Z"
          fill={colors.beta}
        />
        <path d="M15.24 16H13.71V17.52H15.24V16Z" fill={colors.beta} />
        <path d="M15.24 12.95H13.71V14.47H15.24V12.95Z" fill={colors.beta} />
        <path d="M13.7099 14.47H12.1899V16H13.7099V14.47Z" fill={colors.beta} />
        <path
          d="M19.81 5.33006V3.81006H3.05005V22.0901H13.71V20.5701H4.57005V5.33006H19.81Z"
          fill={colors.beta}
        />
        <path d="M10.67 12.95H6.09998V14.47H10.67V12.95Z" fill={colors.beta} />
        <path
          d="M10.67 6.85999H6.09998V11.43H10.67V6.85999Z"
          fill={colors.beta}
        />
        <path d="M10.67 16H6.09998V17.52H10.67V16Z" fill={colors.beta} />
      </g>
      <defs>
        <clipPath id="clip0_501_3341">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
