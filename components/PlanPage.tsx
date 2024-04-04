import React from 'react'
import Plans from './Plans'
import Ratingpanel from './Rating'

const PlanPage = () => {
  return (
    <div className='flex flex-col gap-40'>
<div>
   {/* <Ratingpanel/> */}
</div>
    <div className=' items-center justify-center mx-auto mb-20'><Plans/></div>
    </div>
  )
}

export default PlanPage