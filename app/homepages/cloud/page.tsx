import React from 'react'
import Hero from './Hero'

import Plan from '../phone/plan'
import Support from './Support'
import Features from './Features'
import Specs from './specs'
import Help from './Help'
import { NavBar } from '@/components'
import RatingPanel3 from './rating'
import Ratingpanel2 from './Ratingpanel'

const page = () => {
  return (
    <div>
      <NavBar className='text-white'/>
    <div><Hero/></div>
    <section>
        <div className="space-y-10 2xl:space-y-32 ">
        <div className="2xl:flex xl:flex bl:flex lg:flex md:flex hidden"><Ratingpanel2/></div> 
        <div className="p-4 2xl:hidden xl:hidden bl:hidden lg:hidden md:hidden flex"> <RatingPanel3/></div> 
          <Plan />
        </div>
      </section>
    <div className='pt-10 '><Support/></div>
<div className='pt-20 2xl:pt-40'><Features/></div>
<div className='pt-10 2xl:pt-28'>
  <Specs/>
</div>
<div className='2xl:pt-28 p-4 2xl:p-0 2xl:pb-20'>
  <Help/>
</div>
    </div>
  )
}

export default page