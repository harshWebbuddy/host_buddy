import React from 'react'
import HeroHosting from './Hero'
import Ratingpanel from './Rating'
import Plans from './Plans'
import Plan2 from './plan2'
import Unique from './unique'

const page = () => {
  return (
    <div><div>
        <HeroHosting/></div>
        <section>
        <div className="space-y-32 ">
          <Ratingpanel/>
          <Plans/>
        </div>
        {/* <div>
          <Plan2/>
        </div> */}
        <div>
          <Unique/>
        </div>
      </section></div>
  )
}

export default page