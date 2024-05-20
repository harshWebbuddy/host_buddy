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
    <div className='pt-12 pb-32'><Rating/></div>   
        <div><Plan/></div>
    <div className='pt-10 '><Support/></div>
<div className='pt-40'><Features/></div>
<div className='pt-28'>
  <Specs/>
</div>
<div className='pt-36 pb-[300px]'>
  <Help/>
</div>
    </div>
  )
}

export default page