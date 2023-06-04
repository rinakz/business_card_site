import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/Theme_context'
import { LayoutPage } from '../general/LayoutPage'
import useWindowSize from '../hooks/useWindowSize'
import stls from '../styles/components/AboutMe.module.sass'
import { CardAboutMe } from './CardAboutMe'


export function AboutMe() {
  
  const { width, height} = useWindowSize()

  const { colors } = useContext(ThemeContext)

  const [mobile, setMobile] = useState(false);


  useEffect(() => {
    setMobile(width < 1000)
  }, [width])

  return (
    <LayoutPage>
    <div id='aboutme' style={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: 'column'}}>
      <h1 style={{color: colors.theta}}>Екатерина Марченко</h1>
      <div className={stls.contentAboutMe}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <img 
          style={{borderBottom: `10px solid ${colors.theta}`, borderRight: `10px solid ${colors.theta}`}}
          className={stls.photoMarchenko} src="/Marchenko.jpeg" alt="Марченко"/>
          {mobile && <CardAboutMe />}
        </div>
        <div className={stls.historyAboutMe}>
          <p>Родилась в пятницу 13 января 1995 года в Москве. Все детство провела в окружении братьев, постоянно ковыряющихся в компьютерах. Старший из нас — преподаватель информатики. 
            <br />
            <br />
            Училась в школе в физико-математическом классе. Окончив школу приняла решение продолжать работать с цифрами и поступила в Коммерческо-банковский колледж на специальность "Бухгалтерский учет", несмотря на высокую успеваемость по информатике. О чем в дальнейшем сильно пожалела. 
            <br />
            <br />
            Высшее образование пошла получать в Российский университет кооперации на специальность "Управление предприятием". На втором курсе наконец-то пришло осознание, что совершила ошибку и написала заявление на перевод на факультет информационных технологий.
            В тот период времени, к моему несчатью, в университете проиходили какие-то передвижения в руководстве, и мое заявление просто не дошло до нужной кафедры. Когда спохватилась, оказалось поздно. Приняла поражение и, как бы то ни было, защитила диплом на отлично (цифры!).
          </p>
          {!mobile && <CardAboutMe />}
        </div>
      </div>
    </div>
    </LayoutPage>
  )
}
