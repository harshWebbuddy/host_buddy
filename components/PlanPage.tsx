import React from 'react'
import Plans from './Plans'
import Ratingpanel from './Rating'

const PlanPage = () => {
  return (
    <div className='flex flex-col gap-[700px] 2xl:gap-48 pa:gap-48  '>
    <div>
      <Ratingpanel/>
    </div>
    <div className=' items-center justify-center  mx-auto mb-20'>
      <Plans/>
    </div>
  </div>
  
  )
}

export default PlanPage