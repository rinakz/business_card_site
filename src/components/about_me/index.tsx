import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/Theme_context'
import { LayoutPage } from '../general/LayoutPage'
import useWindowSize from '../hooks/useWindowSize'
import stls from '../../styles/components/AboutMe.module.sass'
import { CardAboutMe } from './CardAboutMe'
import { Avatar, Card, ListItem, ListItemAvatar } from '@mui/material'
import { AppContext } from '../context/App_context'


export function AboutMe() {

  const navigate = useNavigate();

  
  const { width, height} = useWindowSize()

  const { colors } = useContext(ThemeContext)
  const { stories } = useContext(AppContext)


  const [mobile, setMobile] = useState(false);



  useEffect(() => {
    setMobile(width < 1000)
  }, [width])

  return (
    <LayoutPage>
    <div id='aboutme' style={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: 'column'}}>
      <div className={stls.contentAboutMe}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <img 
          style={{borderBottom: `10px solid ${colors.theta}`, borderRight: `10px solid ${colors.theta}`}}
          className={stls.photoMarchenko} src="/MarchenkoAbout.jpeg" alt="Марченко"/>
          <CardAboutMe />
        </div>
        <div className={stls.historyAboutMe}>
                  {/* <h1 style={{color: colors.theta, fontSize: '42px', margin: 0}}>ОБО МНЕ</h1> */}

          {stories.map((el:any) => (
            <div className={stls.containerList}>
            <ListItem style={{background: colors.beta}} onClick={() => navigate(el.path)} className={stls.listItemStory}>
                <img alt={el.alt} src={el.ava} />
                <div style={{padding: '10px 15px'}}><span className={stls.cardDetailsText}>{el.text}</span>
                  <div style={{background: colors.delta}} className={stls.listSlide}> <span style={{color: colors.iota}}>Узнать</span> <span style={{color: colors.iota}}>больше</span> </div>
                </div>

            </ListItem>
            </div>
          ))
          }

          {/* <p>Родилась в Москве в пятницу 13. Все детство провела в окружении братьев, постоянно ковыряющихся в компьютерах. Старший из нас — преподаватель информатики. В школе училась в физико-математическом классе. 
            <br />
            <br />
            Высшее образование получила в Российском университете кооперации по специальности "Управление предприятием".
            Защитила диплом на отлично.
            <br />
            Успешно завершила буткэмп с квалификацией JavaScript Developer. 
            <br />
            <br />
            Занимаюсь разработкой уже около четырех лет. С удовольствием берусь за дополнительные проекты и постоянно развиваюсь. 
            <br /> 
            <br />
            В 2022 году запустила свой телеграм-канал "Что-то на джуновском", который на текущий день имеет ~700 подписчиков.
            <br /> 
            <br />
            Помимо работы и развития в сфере IT провожу время в путешествиях со своей собакой.
            <br /> 
            <br />
            Основная жизненная цель — переезд в Хорватию.
          </p> */}
        </div>
      </div>
    </div>
    </LayoutPage>
  )
}
