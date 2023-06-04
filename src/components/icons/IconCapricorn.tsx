import cn from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../context/Theme_context';

type TypeIconCapricornProps = any;

export const IconCapricorn = ({ classNames }: TypeIconCapricornProps) => {
  const { colors } = useContext(ThemeContext)

  return (
    // <div className={cn(classNames)}>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="24px" height="24px" viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill={colors.zeta}>
<path stroke={colors.zeta} strokeWidth="250" d="M1423 3999 c-293 -34 -527 -262 -536 -522 -2 -57 1 -69 22 -91 17
-18 35 -26 58 -26 66 0 86 27 98 129 9 76 41 137 105 202 65 65 143 105 251
127 182 38 375 -36 463 -176 53 -86 51 -41 56 -1010 l5 -904 28 -24 c38 -33
86 -32 118 2 l24 26 5 901 c5 888 5 903 26 947 32 69 114 152 186 188 265 135
578 30 652 -218 23 -79 24 -1809 1 -1922 -21 -98 -65 -186 -131 -257 -126
-136 -295 -201 -570 -220 -111 -7 -119 -9 -141 -35 -30 -35 -29 -77 1 -113 24
-28 25 -28 133 -25 367 8 642 143 792 389 l32 51 82 -82 c50 -49 106 -94 144
-114 133 -70 300 -90 448 -52 207 53 378 222 441 435 24 81 24 239 0 320 -64
216 -238 386 -451 440 -69 18 -202 20 -277 4 -75 -15 -205 -80 -261 -129 l-47
-42 0 644 c0 527 -3 656 -15 713 -61 292 -344 482 -664 445 -168 -19 -282 -72
-391 -180 l-76 -75 -79 80 c-59 59 -98 89 -148 113 -118 57 -246 77 -384 61z
m2317 -1811 c69 -20 152 -72 200 -125 202 -221 135 -567 -135 -694 -239 -113
-527 15 -605 269 -47 152 -9 311 102 429 114 120 283 167 438 121z"/>
</g>
</svg>
    // </div>
  );
};
