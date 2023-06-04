import React from 'react'
import { IconCat } from '../icons/IconCat'
import { IconLamp } from '../icons/IconLamp'
import { IconSofa } from '../icons/IconSofa'

export function Room () {
  return (
    <div>
        <div style={{marginTop: '5%'}}>
            <IconLamp />
        </div>
        <div style={{marginTop: '10%', display: 'flex', justifyContent: 'start', alignItems: 'end'}}>
            <IconSofa />
            <div style={{margin: '0 30px'}} />
            <IconCat />
        </div>
    </div>
  )
}
