import React, { useContext, useEffect,  } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from './Theme_context';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';






const HeaderContext = React.createContext<any>(null);

function HeaderProvider(props: any) {

    const { t } = useTranslation();

    const { currentTheme, colors, toggleTheme, toggleLanguage, language} = useContext(ThemeContext)



    const navItemsPage = [ 
        {id: 1, name: t('header.aboutMe'), link: '#aboutme'},
        // {id: 2, name: t('header.projects'), link: '#projects'},
        {id: 3, name: t('header.contacts'), link: '#contacts'},
      ];
    
      const navItems = [ 
        {id: 1, name: currentTheme == 'dark' ? <Brightness4OutlinedIcon onClick={() => toggleTheme('light')}/> : <Brightness7OutlinedIcon onClick={() => toggleTheme('dark')}/>},
        {id: 2, name: language == 'en' ? <div onClick={() => toggleLanguage('ru')}>EN</div> : <div onClick={() => toggleLanguage('en')}>RU</div>}
      ];






  return (
    <HeaderContext.Provider
      value={{
        navItemsPage,
        navItems
  
      }}
      {...props}
    />
  );
}

export { HeaderProvider, HeaderContext };


