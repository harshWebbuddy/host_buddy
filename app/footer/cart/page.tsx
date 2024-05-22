import React from 'react'
import HeroHosting from './Hero'
import PageSecond from './scondpage'

const page = () => {
  return (
    <div className='bg-[#F5F5F5]'>  
<div><HeroHosting/></div>
    <div className='pb-80  '>
        <PageSecond/>
    </div>
    </div>

  )
}

export default page