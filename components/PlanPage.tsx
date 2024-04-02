import React from 'react'
import Plan1 from './Plans'
import Ratingpanel from './Rating'

const PlanPage = () => {
  return (
    <div className='flex flex-col gap-40'>
<div>
   <Ratingpanel/>
</div>
    <div className='w-8/12 items-center justify-center mx-auto'><Plan1/></div>
    </div>
  )
}

export default PlanPage