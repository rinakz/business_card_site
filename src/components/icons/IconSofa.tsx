import cn from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../context/Theme_context';

type TypeIconSofaProps = any;

export const IconSofa = ({ classNames }: TypeIconSofaProps) => {
  const { colors } = useContext(ThemeContext)

  return (
    <div className={cn(classNames)}>
        <svg fill={colors.zeta} height="250px" width="250px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 512 350" >
	        <path d="M512,204.8c0-12.896-10.46-23.355-23.363-23.355h-47.723v98.895H71.078v-98.895H23.363
		        C10.459,181.445,0,191.904,0,204.8v146.618h34.257v37.864h33.988v-37.864h375.502v37.864h34.004v-37.864H512V204.8z"/>
	        <path d="M245.703,140.241c0-9.676-7.848-17.524-17.524-17.524H126.728c-19.352,0-35.041,15.688-35.041,35.048v101.973
		        h154.015V140.241z"/>
	        <path d="M420.312,157.766c0-19.36-15.69-35.048-35.041-35.048h-101.45c-9.676,0-17.516,7.848-17.516,17.524v119.497
		        h154.008V157.766z"/>
        </svg>
    </div>
  );
};