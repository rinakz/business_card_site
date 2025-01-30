import cn from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconFinderProps = any;

export const IconFinder = ({ classNames }: TypeIconFinderProps) => {
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
          d="M24.3799 18.29V19.81H27.4299V24.38H28.9499V13.71H27.4299V18.29H24.3799Z"
          fill={colors.beta}
        />
        <path
          d="M25.9101 27.4299H10.6701V25.9099H9.14012V27.4299H7.62012V31.9999H28.9501V27.4299H27.4301V24.3799H25.9101V27.4299ZM25.9101 30.4799H22.8601V28.9499H25.9101V30.4799Z"
          fill={colors.beta}
        />
        <path
          d="M22.8594 18.2899H24.3794V13.7099H27.4294V12.1899H22.8594V18.2899Z"
          fill={colors.beta}
        />
        <path
          d="M24.3794 1.52002H22.8594V6.10002H24.3794V1.52002Z"
          fill={colors.beta}
        />
        <path
          d="M22.8601 6.1001H21.3301V9.1401H22.8601V6.1001Z"
          fill={colors.beta}
        />
        <path d="M22.8596 18.29H19.8096V19.81H22.8596V18.29Z" fill={colors.beta} />
        <path
          d="M19.8096 12.1901H22.8596V10.6701H21.3296V9.14014H19.8096V12.1901Z"
          fill={colors.beta}
        />
        <path d="M22.86 0H18.29V1.52H22.86V0Z" fill={colors.beta} />
        <path
          d="M18.2898 19.8099V18.2899H19.8098V12.1899H18.2898V16.7599H16.7598V19.8099H18.2898Z"
          fill={colors.beta}
        />
        <path
          d="M18.2898 1.52002H16.7598V6.10002H18.2898V1.52002Z"
          fill={colors.beta}
        />
        <path
          d="M16.7602 15.2402H15.2402V16.7602H16.7602V15.2402Z"
          fill={colors.beta}
        />
        <path
          d="M16.7602 6.1001H15.2402V9.1401H16.7602V6.1001Z"
          fill={colors.beta}
        />
        <path
          d="M16.7595 19.8101H12.1895V21.3301H16.7595V19.8101Z"
          fill={colors.beta}
        />
        <path d="M15.2395 13.71H12.1895V15.24H15.2395V13.71Z" fill={colors.beta} />
        <path
          d="M13.7195 10.6701V12.1901H15.2395V9.14014H12.1895V10.6701H13.7195Z"
          fill={colors.beta}
        />
        <path d="M12.1899 18.29H10.6699V19.81H12.1899V18.29Z" fill={colors.beta} />
        <path
          d="M12.1899 6.1001H10.6699V9.1401H12.1899V6.1001Z"
          fill={colors.beta}
        />
        <path
          d="M12.1901 12.1899H7.62012V13.7099H12.1901V12.1899Z"
          fill={colors.beta}
        />
        <path
          d="M10.6696 1.52002H9.13965V6.10002H10.6696V1.52002Z"
          fill={colors.beta}
        />
        <path
          d="M9.14012 24.3799H7.62012V25.9099H9.14012V24.3799Z"
          fill={colors.beta}
        />
        <path
          d="M7.61961 21.3301H6.09961V24.3801H7.61961V21.3301Z"
          fill={colors.beta}
        />
        <path d="M7.61961 13.71H6.09961V15.24H7.61961V13.71Z" fill={colors.beta} />
        <path
          d="M7.61961 9.14014H6.09961V12.1901H7.61961V9.14014Z"
          fill={colors.beta}
        />
        <path d="M9.13934 0H4.56934V1.52H9.13934V0Z" fill={colors.beta} />
        <path
          d="M6.09934 15.2402H4.56934V21.3302H6.09934V15.2402Z"
          fill={colors.beta}
        />
        <path
          d="M6.09934 6.1001H4.56934V9.1401H6.09934V6.1001Z"
          fill={colors.beta}
        />
        <path
          d="M4.5698 1.52002H3.0498V6.10002H4.5698V1.52002Z"
          fill={colors.beta}
        />
      </svg>
    </div>
  );
};
