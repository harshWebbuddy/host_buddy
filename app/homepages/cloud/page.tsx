import React from 'react'
import Hero from './Hero'
import Rating from '../phone/rating'
import Plan from '../phone/plan'
import Support from './Support'
import Features from './Features'
import Specs from './specs'
import Help from './Help'
import { NavBar } from '@/components'

const page = () => {
  return (
    <div>
      <NavBar className='text-white'/>
    <div><Hero/></div>
    <div className=''><Rating/></div>   
        <div className='pt-20 2xl:pt-40'><Plan/></div>
    <div className='pt-10 '><Support/></div>
<div className='pt-20 2xl:pt-40'><Features/></div>
<div className='pt-10 2xl:pt-28'>
  <Specs/>
</div>
<div className='2xl:pt-28  2xl:pb-20'>
  <Help/>
</div>
    </div>
  )
}

export default page