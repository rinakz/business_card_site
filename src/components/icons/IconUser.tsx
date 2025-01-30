import cn from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconUserProps = any;

export const IconUser = ({ classNames }: TypeIconUserProps) => {
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
        <path d="M32 18.2847H30.48V19.8147H32V18.2847Z" fill={colors.beta} />
        <path
          d="M30.4802 16.7651H27.4302V18.2851H30.4802V16.7651Z"
          fill={colors.beta}
        />
        <path
          d="M28.9502 13.7148H27.4302V15.2448H28.9502V13.7148Z"
          fill={colors.beta}
        />
        <path
          d="M22.8598 15.2449V12.1949H21.3398V10.6649H19.8098V7.6249H21.3398V6.0949H27.4298V7.6249H28.9498V13.7149H30.4798V4.5749H28.9498V3.0449H27.4298V1.5249H21.3398V3.0449H19.8098V4.5749H18.2898V9.1449H13.7198V4.5749H12.1898V3.0449H10.6698V1.5249H4.56979V3.0449H3.04979V4.5749H1.52979V13.7149H3.04979V7.6249H4.56979V6.0949H10.6698V7.6249H12.1898V10.6649H10.6698V12.1949H9.14979V15.2449H4.56979V16.7649H9.14979V22.8549H10.6698V15.2449H12.1898V13.7149H19.8098V15.2449H21.3398V22.8549H22.8598V16.7649H27.4298V15.2449H22.8598Z"
          fill={colors.beta}
        />
        <path
          d="M25.9099 28.9551H24.3799V30.4751H25.9099V28.9551Z"
          fill={colors.beta}
        />
        <path
          d="M24.3799 27.4351H22.8599V28.9551H24.3799V27.4351Z"
          fill={colors.beta}
        />
        <path
          d="M22.8601 25.9048H19.8101V27.4348H22.8601V25.9048Z"
          fill={colors.beta}
        />
        <path
          d="M21.3401 22.855H19.8101V24.385H21.3401V22.855Z"
          fill={colors.beta}
        />
        <path d="M19.81 16.7651H18.29V19.8151H19.81V16.7651Z" fill={colors.beta} />
        <path
          d="M19.8099 24.3848H12.1899V25.9048H19.8099V24.3848Z"
          fill={colors.beta}
        />
        <path
          d="M18.2902 21.335H13.7202V22.855H18.2902V21.335Z"
          fill={colors.beta}
        />
        <path
          d="M13.7199 16.7651H12.1899V19.8151H13.7199V16.7651Z"
          fill={colors.beta}
        />
        <path
          d="M12.1899 22.855H10.6699V24.385H12.1899V22.855Z"
          fill={colors.beta}
        />
        <path
          d="M12.1899 25.9048H9.1499V27.4348H12.1899V25.9048Z"
          fill={colors.beta}
        />
        <path
          d="M9.15012 27.4351H7.62012V28.9551H9.15012V27.4351Z"
          fill={colors.beta}
        />
        <path
          d="M7.6201 28.9551H6.1001V30.4751H7.6201V28.9551Z"
          fill={colors.beta}
        />
        <path
          d="M4.5698 13.7148H3.0498V15.2448H4.5698V13.7148Z"
          fill={colors.beta}
        />
        <path
          d="M4.56979 16.7651H1.52979V18.2851H4.56979V16.7651Z"
          fill={colors.beta}
        />
        <path d="M1.53 18.2847H0V19.8147H1.53V18.2847Z" fill={colors.beta} />
      </svg>
    </div>
  );
};
