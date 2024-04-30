import React from 'react'
import Hero from './Hero'
import Rating from '../phone/rating'
import Plan from '../phone/plan'
import Support from './Support'
import Features from './Features'
import Specs from './specs'

const page = () => {
  return (
    <div>
    <div><Hero/></div>
    <div><Rating/></div>
    <div><Plan/></div>
    {/* <div><Support/></div> */}
<div><Features/></div>
<div>
  <Specs/>
</div>
    </div>
  )
}

export default page