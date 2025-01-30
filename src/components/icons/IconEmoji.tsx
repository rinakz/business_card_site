import cn from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

type TypeIconEmojiProps = any;

export const IconEmoji = ({ classNames }: TypeIconEmojiProps) => {
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
        <g clipPath="url(#clip0_244_6363)">
          <path
            d="M32.0005 12.1899H30.4805V19.8099H32.0005V12.1899Z"
            fill={colors.beta}
          />
          <path
            d="M30.4802 19.8101H28.9502V22.8501H30.4802V19.8101Z"
            fill={colors.beta}
          />
          <path
            d="M28.9497 22.8501H27.4297V25.9001H28.9497V22.8501Z"
            fill={colors.beta}
          />
          <path
            d="M28.9497 6.08984H27.4297V9.13984H28.9497V6.08984Z"
            fill={colors.beta}
          />
          <path
            d="M27.4302 25.8999H25.9102V27.4199H27.4302V25.8999Z"
            fill={colors.beta}
          />
          <path
            d="M27.4302 4.56982H25.9102V6.08982H27.4302V4.56982Z"
            fill={colors.beta}
          />
          <path
            d="M25.9104 27.4199H22.8604V28.9499H25.9104V27.4199Z"
            fill={colors.beta}
          />
          <path
            d="M25.9104 3.04004H22.8604V4.57004H25.9104V3.04004Z"
            fill={colors.beta}
          />
          <path
            d="M22.8596 28.9502H19.8096V30.4702H22.8596V28.9502Z"
            fill={colors.beta}
          />
          <path
            d="M22.8596 1.52002H19.8096V3.04002H22.8596V1.52002Z"
            fill={colors.beta}
          />
          <path
            d="M19.8104 30.4702H12.1904V32.0002H19.8104V30.4702Z"
            fill={colors.beta}
          />
          <path
            d="M19.8097 22.8501H13.7197V24.3801H19.8097V22.8501Z"
            fill={colors.beta}
          />
          <path d="M19.8104 0H12.1904V1.52H19.8104V0Z" fill={colors.beta} />
          <path
            d="M13.7204 21.3301H12.1904V22.8501H13.7204V21.3301Z"
            fill={colors.beta}
          />
          <path
            d="M12.1896 28.9502H9.13965V30.4702H12.1896V28.9502Z"
            fill={colors.beta}
          />
          <path
            d="M12.1896 1.52002H9.13965V3.04002H12.1896V1.52002Z"
            fill={colors.beta}
          />
          <path
            d="M9.13961 27.4199H6.09961V28.9499H9.13961V27.4199Z"
            fill={colors.beta}
          />
          <path
            d="M9.13961 3.04004H6.09961V4.57004H9.13961V3.04004Z"
            fill={colors.beta}
          />
          <path
            d="M6.10031 25.8999H4.57031V27.4199H6.10031V25.8999Z"
            fill={colors.beta}
          />
          <path
            d="M6.10031 4.56982H4.57031V6.08982H6.10031V4.56982Z"
            fill={colors.beta}
          />
          <path
            d="M4.5698 22.8501H3.0498V25.9001H4.5698V22.8501Z"
            fill={colors.beta}
          />
          <path
            d="M3.04979 15.2301H4.56979V16.7601H6.09978V18.2801H12.1898V16.7601H13.7198V15.2301H15.2398V13.7101H18.2898V15.2301H19.8098V16.7601H21.3298V18.2801H27.4298V16.7601H28.9498V12.1901H30.4798V9.14014H28.9498V10.6601H3.04979V9.14014H1.52979V12.1901H3.04979V15.2301Z"
            fill={colors.beta}
          />
          <path
            d="M4.5698 6.08984H3.0498V9.13984H4.5698V6.08984Z"
            fill={colors.beta}
          />
          <path
            d="M3.04979 19.8101H1.52979V22.8501H3.04979V19.8101Z"
            fill={colors.beta}
          />
          <path d="M1.53 12.1899H0V19.8099H1.53V12.1899Z" fill={colors.beta} />
        </g>
        <defs>
          <clipPath id="clip0_244_6363">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
