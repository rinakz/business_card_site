import { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";

export const IconMountain = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32 27.3314H30.48V30.0002H32V27.3314Z" fill={colors.beta} />
      <path d="M32 11.3367H30.48V12.6667H32V11.3367Z" fill={colors.beta} />
      <path d="M30.48 24.6714H28.96V27.3314H30.48V24.6714Z" fill={colors.beta} />
      <path d="M30.48 9.99756H28.96V11.3363H30.48V9.99756Z" fill={colors.beta} />
      <path d="M28.96 22.0024H27.43V24.6712H28.96V22.0024Z" fill={colors.beta} />
      <path d="M30.48 12.6663H25.91V14.005H30.48V12.6663Z" fill={colors.beta} />
      <path d="M28.96 8.6676H27.43V9.9976H28.96V8.6676Z" fill={colors.beta} />
      <path
        d="M25.9101 19.3336L25.9101 16.6649H24.3901V14.0049H22.8601V11.3362H21.3401V9.99745H19.8101V7.33747L25.9101 7.33747V5.99873L24.3901 5.99873V4.66873H22.8601V5.99873H19.8101V3.33874H21.3401V2L18.2901 2V9.99745H16.7701V11.3362L15.2401 11.3362V14.0049H13.7201V16.6649H12.1901L12.1901 19.3336H10.6701V22.0024H13.7201V23.3324H18.2901V22.0024L22.8601 22.0024V20.6724H25.9101V22.0024H27.4301V19.3336H25.9101ZM16.7701 22.0024H15.2401V20.6724H16.7701V22.0024ZM21.3401 20.6724H19.8101V19.3336H18.2901V18.0037H19.8101L19.8101 19.3336H21.3401V20.6724ZM21.3401 15.3349H19.8101V12.6662H18.2901V11.3362H19.8101V12.6662H21.3401V15.3349ZM24.3901 19.3336H22.8601L22.8601 18.0037H24.3901L24.3901 19.3336Z"
        fill={colors.beta}
      />
      <path d="M27.43 9.99756H25.91V11.3363H27.43V9.99756Z" fill={colors.beta} />
      <path
        d="M25.9102 11.3367H24.3902V12.6667H25.9102V11.3367Z"
        fill={colors.beta}
      />
      <path
        d="M22.8601 3.33862L21.3401 3.33862V4.66861H22.8601V3.33862Z"
        fill={colors.beta}
      />
      <path
        d="M10.6699 22.0024H9.14995V24.6712H10.6699V22.0024Z"
        fill={colors.beta}
      />
      <path
        d="M10.6699 7.33765H9.14995V8.66764H10.6699V7.33765Z"
        fill={colors.beta}
      />
      <path
        d="M9.15016 24.6714H7.62016V27.3314H9.15016V24.6714Z"
        fill={colors.beta}
      />
      <path
        d="M9.15016 5.99854H7.62016V7.33728H9.15016V5.99854Z"
        fill={colors.beta}
      />
      <path
        d="M7.62014 27.3314H6.10014V30.0002H7.62014V27.3314Z"
        fill={colors.beta}
      />
      <path
        d="M7.62014 23.3324H6.10014V24.6711H7.62014V23.3324Z"
        fill={colors.beta}
      />
      <path
        d="M9.15008 8.6676L1.53008 8.6676L1.53008 9.9976L9.15008 9.9976V8.6676Z"
        fill={colors.beta}
      />
      <path
        d="M7.62012 4.66895L4.58012 4.66895V5.99894H7.62012V4.66895Z"
        fill={colors.beta}
      />
      <path
        d="M6.10012 22.0024H4.58012V23.3324H6.10012V22.0024Z"
        fill={colors.beta}
      />
      <path
        d="M4.58009 23.3324H3.05009V24.6711H4.58009V23.3324Z"
        fill={colors.beta}
      />
      <path
        d="M4.58008 5.99854L1.53008 5.99854L1.53008 7.33728H4.58008V5.99854Z"
        fill={colors.beta}
      />
      <path
        d="M3.05008 24.6714H1.53008L1.53008 27.3314H3.05008L3.05008 24.6714Z"
        fill={colors.beta}
      />
      <path
        d="M1.53005 27.3314H4.57764e-05L4.57764e-05 30.0002H1.53005L1.53005 27.3314Z"
        fill={colors.beta}
      />
      <path
        d="M1.53005 7.33765H4.57764e-05L4.57764e-05 8.66764H1.53005L1.53005 7.33765Z"
        fill={colors.beta}
      />
    </svg>
  );
};
