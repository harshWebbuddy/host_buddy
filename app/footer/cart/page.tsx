import React from 'react'
import HeroHosting from './Hero'
import PageSecond from './scondpage'
import Account from './Acount'

const page = () => {
  return (
    <div className=''>  
<div className=''><HeroHosting/></div>
<div className='pt-10'>
  <Account/>
</div>
    <div className='pb-80'>
        <PageSecond/>
    </div>
    </div>

  )
}

export default page