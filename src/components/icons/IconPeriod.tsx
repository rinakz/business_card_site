import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconPeriodProps = any;

export const IconPeriod = ({ classNames }: TypeIconPeriodProps) => {
  const { colors } = useContext(ThemeContext);

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32 16.7599H30.48V18.2899H32V16.7599Z" fill={colors.beta} />
      <path d="M30.48 18.2899H28.95V19.8099H30.48V18.2899Z" fill={colors.beta} />
      <path d="M28.95 22.86H27.43V25.91H28.95V22.86Z" fill={colors.beta} />
      <path d="M28.95 19.8099H27.43V21.3399H28.95V19.8099Z" fill={colors.beta} />
      <path d="M27.43 21.34H25.91V22.86H27.43V21.34Z" fill={colors.beta} />
      <path d="M27.43 25.9099H22.86V27.4299H27.43V25.9099Z" fill={colors.beta} />
      <path d="M24.38 6.09998H22.86V7.61998H24.38V6.09998Z" fill={colors.beta} />
      <path d="M22.86 24.38H21.34V25.91H22.86V24.38Z" fill={colors.beta} />
      <path d="M21.34 22.86H19.81V24.38H21.34V22.86Z" fill={colors.beta} />
      <path d="M19.81 21.34H18.29V22.86H19.81V21.34Z" fill={colors.beta} />
      <path d="M22.86 4.56995H15.24V6.09995H22.86V4.56995Z" fill={colors.beta} />
      <path d="M18.29 22.86H15.24V24.38H18.29V22.86Z" fill={colors.beta} />
      <path d="M15.24 21.34H13.72V22.86H15.24V21.34Z" fill={colors.beta} />
      <path d="M13.72 22.86H12.19V24.38H13.72V22.86Z" fill={colors.beta} />
      <path d="M12.19 24.38H7.62V25.91H12.19V24.38Z" fill={colors.beta} />
      <path d="M10.67 19.8099H9.15002V21.3399H10.67V19.8099Z" fill={colors.beta} />
      <path d="M10.67 15.24H9.15002V16.76H10.67V15.24Z" fill={colors.beta} />
      <path
        d="M10.67 12.19V10.67H12.19V12.19H13.72V15.24H12.19V16.76H10.67V18.29H12.19V19.81H25.91V18.29H27.43V16.76H30.48V15.24H28.95V12.19H27.43V15.24H25.91V16.76H24.38V15.24H22.86V12.19H24.38V10.67H25.91V12.19H27.43V9.14998H25.91V7.61998H24.38V9.14998H22.86V10.67H16.76V7.61998H15.24V6.09998H12.19V7.61998H10.67V9.14998H9.15002V12.19H10.67ZM15.24 16.76H16.76V15.24H21.34V16.76H22.86V18.29H15.24V16.76Z"
        fill={colors.beta}
      />
      <path d="M9.14999 21.34H7.62V22.86H9.14999V21.34Z" fill={colors.beta} />
      <path d="M9.14999 18.2899H7.62V19.8099H9.14999V18.2899Z" fill={colors.beta} />
      <path d="M9.14999 12.1899H7.62V15.2399H9.14999V12.1899Z" fill={colors.beta} />
      <path d="M9.14999 7.62H7.62V9.14999H9.14999V7.62Z" fill={colors.beta} />
      <path d="M7.61998 22.86H6.09998V24.38H7.61998V22.86Z" fill={colors.beta} />
      <path
        d="M7.61998 16.7599H6.09998V18.2899H7.61998V16.7599Z"
        fill={colors.beta}
      />
      <path d="M6.10001 15.24H4.57001V16.76H6.10001V15.24Z" fill={colors.beta} />
      <path
        d="M7.61999 6.09998H3.04999V7.61998H7.61999V6.09998Z"
        fill={colors.beta}
      />
      <path d="M4.57003 13.72H1.53003V15.24H4.57003V13.72Z" fill={colors.beta} />
      <path
        d="M4.56999 10.6699H3.04999V12.1899H4.56999V10.6699Z"
        fill={colors.beta}
      />
      <path d="M3.05003 7.62H1.53003V9.14999H3.05003V7.62Z" fill={colors.beta} />
      <path d="M1.53 9.1499H0V13.7199H1.53V9.1499Z" fill={colors.beta} />
    </svg>
  );
};
