import React from 'react'
import Hero from './Hero'
import Rating from '../phone/rating'
import Plan from '../phone/plan'
import Support from './Support'
import Features from './Features'
import Specs from './specs'
import Help from './Help'

const page = () => {
  return (
    <div>
    <div><Hero/></div>
    <div className=''><Rating/></div>
    <div><Plan/></div>
    <div className='pt-[40px] pb-[40px] 2xl:pt-[100px] xl:pt-[100px] xl:pb-[100px] 2xl:pb-[130px]  bl:pt-[70px] bl:pb-[70px]  md:pt-[70px] md:pb-[70px]  lg:pt-[40px] lg:pb-[40px]  sm:pt-[40px] sm:pb-[40px]'><Support/></div>
<div className='xl:pb-[100px] 2xl:pb-[130px]  bl:pb-[70px]  md:pb-[70px]   lg:pb-[40px]   sm:pb-[40px] pb-[40px] '><Features/></div>
<div className='2xl:pb-[130px] xl:pb-[100px]  bl:pb-[70px]  md:pb-[70px]   lg:pb-[40px]  sm:pb-[40px]  pb-[40px]'>
  <Specs/>
</div>
<div className='pb-[260px]'>
  <Help/>
</div>
    </div>
  )
}

export default page