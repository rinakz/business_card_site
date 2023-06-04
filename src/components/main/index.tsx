import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/Theme_context'
import stls from '../styles/components/Main.module.sass'
import { useTranslation } from 'react-i18next';
import { AboutMe } from '../about_me';
import { Projects } from '../projects';
import { Contacts } from '../contacts';
import cn from 'classnames'
import Joyride from 'react-joyride';
import { IconTehnology } from '../icons/iconTehnology';


export function Main() {

  const [tehnology, setTehnology] = useState([
    {name: 'Typescript', margin: 0}, 
    {name: 'React', margin: '100px'}, 
    {name: 'Joyride', margin: '50px'},  
    {name: 'Material-UI', margin: '140px'}, 
    {name: 'i18next', margin: '250px'}
  ])


    const { t } = useTranslation();
    
    const { colors, toggleTheme, themes} = useContext(ThemeContext)

    const [currentStep, setCurrentStep] = useState(0);


    const [steps, setSteps] = useState<any>([
      {
        target: '#header_buttons1',
        content: 'Для комфортной работы с приложением Вы можете переключаться между дневной и ночной темами.',
        disableBeacon: true,
      },
      {
        target: '#header_buttons2',
        content: 'Также Вы можете переключить язык интерфейса.',
        disableBeacon: true,
      },
      {
        target: '#Kaspersky',
        content: 'Вы можете подобрать себе тему из расширенного перечня тем.',
        disableBeacon: true,
        placement: 'top',
      },
      {
        target: '#header_pages1',
        content: 'После настройки внешнего вида интерфейса предлагаю познакомиться. Здесь, в верхней панели, Вы сможете найти информацию обо мне.',
        disableBeacon: true,
      },
      {
        target: '#appbar',
        content: 'Также не забудь заглянуть в мои приложения :)',
        disableBeacon: true,
      },
    ]);

    const locale = {
      back: 'Назад',
      close: `Далее (${currentStep + 1} из ${steps.length})`,
      last: 'Завершить',
      next: `Далее (${currentStep + 1} из ${steps.length})`,
      skip: 'Пропустить',
    };

    const [run, setRun] = useState(false);

    useEffect(() => {
      setRun(true)
    }, [])

    const handleJoyrideCallback = (data: any) => {
      const { action, index, status, type } = data;
  
      if (type === 'step:after' && action === 'close') {
        setCurrentStep(index + 1);
      }
    };






  return (
    <div>
    <Joyride 
      steps={steps} 
      run={run} 
      disableOverlayClose={true}
      showProgress={true}
      showSkipButton={true}
      locale={locale}
      callback={handleJoyrideCallback}
      styles={{
        options: {
          arrowColor: colors.alpha,
          backgroundColor: colors.alpha,
          overlayColor: 'rgba(0, 0, 0, 0.5)',
          primaryColor: colors.delta,
          textColor: colors.iota,
        },
        buttonBack: {
          color: colors.zeta,
        },
        buttonNext: {
          backgroundColor: colors.theta,
          color: colors.alpha,
        },
        buttonSkip: {
          color: colors.delta,
        },
        tooltip: {
          padding: '10px',
        },
        tooltipContent: {
          padding: '20px 10px 10px 10px',
        },
      }}
       />
    <div className={stls.bgMain}>
      <div className={stls.welcome}>
        <h1 style={{display: 'flex'}}>{t('main.hello')}<div style={{color: colors.theta}}> &nbsp;{t('main.katya')}</div>!</h1>
        <h1>{t('main.frontendDeveloper')}</h1>
      </div>
      <div className={stls.message}>
        {tehnology.map((el: any) => 
          <div style={{left: el.margin}} className={stls.elemMess}>
            <IconTehnology />
            <span>{el.name}</span>
          </div>
        )}
      </div>
        
        {/* <div style={{marginTop: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{cursor: 'pointer', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          {themes.map((el: any) => 
            <div id={el.name} onClick={() => toggleTheme(el.name)} className={cn(stls.themeCard, stls[el.name])} style={{ display: 'flex', textAlign: 'center', flexDirection: 'column'}} key={el.id}>
              <div className={stls.header}>{el.name}</div> 
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div className={stls.photo}></div>
                <div style={{textJustify: 'inter-word', margin: '5px'}}>
                  <h6>Lorem Ipsum</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent massa arcu, tincidunt eu nisl vitae, posuere maximus lorem. Pellentesque interdum eros eu velit iaculis, nec finibus felis maximus. Cras risus erat, sagittis a feugiat at, laoreet vel leo. Donec vel quam et eros placerat molestie sit amet eget felis.</p>
                </div>
              </div>
            </div>
          )}
          </div>
          <h2 style={{color: colors.theta}}>
            Выберите тему 
          </h2>
        </div> */}
    </div>
    <hr style={{margin: '45px', border: `0.5px solid ${colors.epsilon}`}} />
    <AboutMe />
    <Projects />
    <Contacts />
    </div>

  )
}
