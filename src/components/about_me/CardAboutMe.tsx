import React, { useContext } from 'react'
import { Card, CardContent } from '@mui/material'
import { ThemeContext } from '../context/Theme_context'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import stls from '../styles/components/AboutMe.module.sass'
import { IconCapricorn } from '../icons/IconCapricorn';



export function CardAboutMe() {

    const { colors } = useContext(ThemeContext)

  return (
    <Card className={stls.cardAboutMe} sx={{background: colors.beta, color: colors.zeta}}>
        <div className={stls.cardContent}>
            <div className={stls.info}>
                <BadgeOutlinedIcon />
                <p style={{color: colors.iota}}>Имя: Екатерина</p>
            </div>
            <div className={stls.info}>
                <LocationOnOutlinedIcon />
                <p style={{color: colors.iota}}>Город: Москва</p>
            </div>
            <div className={stls.info}>
                <SchoolOutlinedIcon />
                <p style={{color: colors.iota}}>Образование: Высшее</p>
            </div>
        </div>
        <div className={stls.cardContent}>
            <div className={stls.info}>
                <TimerOutlinedIcon />
                <p style={{color: colors.iota}}>Возраст: 28</p>
            </div>
            <div className={stls.info}>
                <IconCapricorn />
                <p style={{color: colors.iota}}>Знак зодиака: Козерог</p>
            </div>
            <div className={stls.info}>
                <EngineeringOutlinedIcon />
                <p style={{color: colors.iota}}>Специализация: Программист</p>
            </div>
        </div>
    </Card>
  )
}
