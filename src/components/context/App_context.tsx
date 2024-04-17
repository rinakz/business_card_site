import React, { useContext, useEffect,  } from 'react';





const AppContext = React.createContext<any>(null);

function AppProvider(props: any) {

    const stories = [
        {id: 1, ava: '/Apple.jpeg', alt: 'Work', path: '/work', text: '"Ты знаешь, что ты будешь мега сеньоркой"'},
        {id: 3, ava: '/Kanal.jpeg', alt: 'Kanal', path: '/kanal',  text: 'С 2022 году запустила уникальнейший IT-канал "Что-то на джуновском"'},
        {id: 4, ava: '/Doggy.jpeg', alt: 'Shiba', path: '/shiba',  text: 'Правительница здешних цифровых земель и лисица'},
        {id: 5, ava: '/Croatia.jpeg', alt: 'Croatia', path: '/croatia',  text: 'Основная жизненная цель — переезд в Хорватию'},
      ]







  return (
    <AppContext.Provider
      value={{
        stories,
  
      }}
      {...props}
    />
  );
}

export { AppProvider, AppContext };


