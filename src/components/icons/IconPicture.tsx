import cn from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconPictureProps = any;

export const IconPicture = ({ classNames }: TypeIconPictureProps) => {
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
        <g clipPath="url(#clip0_259_7051)">
          <path
            d="M31.24 2.27979H29.71V25.1398H31.24V2.27979Z"
            fill={colors.beta}
          />
          <path
            d="M6.8493 25.1396V26.6596H8.3793V28.1896H9.8993V26.6596H12.9493V28.1896H14.4693V26.6596H17.5193V28.1896H19.0393V26.6596H22.0893V28.1896H23.6193V26.6596H25.1393V28.1896H23.6193V29.7096H20.5693V28.1896H19.0393V29.7096H15.9993V28.1896H14.4693V29.7096H11.4293V28.1896H9.8993V29.7096H6.8493V28.1896H5.3293V29.7096H2.2793V31.2396H25.1393V29.7096H26.6593V26.6596H29.7093V25.1396H6.8493Z"
            fill={colors.beta}
          />
          <path
            d="M26.6601 12.9496H23.6201V14.4696H26.6601V19.0496H28.1901V5.32959H26.6601V12.9496Z"
            fill={colors.beta}
          />
          <path
            d="M23.6194 17.5195H22.0894V19.0495H9.89941V20.5695H26.6594V19.0495H23.6194V17.5195Z"
            fill={colors.beta}
          />
          <path
            d="M25.1398 6.84961H22.0898V9.89961H25.1398V6.84961Z"
            fill={colors.beta}
          />
          <path
            d="M23.6198 14.4697H22.0898V15.9997H23.6198V14.4697Z"
            fill={colors.beta}
          />
          <path d="M22.0893 16H20.5693V17.52H22.0893V16Z" fill={colors.beta} />
          <path
            d="M20.57 14.4697H19.04V15.9997H20.57V14.4697Z"
            fill={colors.beta}
          />
          <path
            d="M19.0395 12.9497H17.5195V14.4697H19.0395V12.9497Z"
            fill={colors.beta}
          />
          <path
            d="M17.5197 11.4297H14.4697V12.9497H17.5197V11.4297Z"
            fill={colors.beta}
          />
          <path
            d="M14.4702 12.9497H12.9502V14.4697H14.4702V12.9497Z"
            fill={colors.beta}
          />
          <path
            d="M12.9497 14.4697H11.4297V15.9997H12.9497V14.4697Z"
            fill={colors.beta}
          />
          <path
            d="M26.6594 3.80957H9.89941V5.32957H26.6594V3.80957Z"
            fill={colors.beta}
          />
          <path
            d="M11.4299 17.5196V15.9996H9.89988V5.32959H8.37988V19.0496H9.89988V17.5196H11.4299Z"
            fill={colors.beta}
          />
          <path
            d="M29.7096 0.759766H6.84961V2.27977H29.7096V0.759766Z"
            fill={colors.beta}
          />
          <path
            d="M5.32957 26.6597H3.80957V28.1897H5.32957V26.6597Z"
            fill={colors.beta}
          />
          <path
            d="M3.80977 26.6598V25.1398H2.27977V22.0898H3.80977V20.5698H2.27977V17.5198H3.80977V15.9998H2.27977V12.9498H3.80977V11.4298H2.27977V8.37979H3.80977V6.84978H5.32977V8.37979H3.80977V9.89979H5.32977V12.9498H3.80977V14.4698H5.32977V17.5198H3.80977V19.0498H5.32977V22.0898H3.80977V23.6198H5.32977V25.1398H6.84977V2.27979H5.32977V5.32979H2.27977V6.84978H0.759766V29.7098H2.27977V26.6598H3.80977Z"
            fill={colors.beta}
          />
        </g>
        <defs>
          <clipPath id="clip0_259_7051">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
