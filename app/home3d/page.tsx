import React from 'react'
import PlanPage from '@/components/PlanPage'
import Unique3D from './unique'
import CaseStudy3D from './casestudy3'
import Balancing from './balancing'

const page = () => {
  return (
    <div>
        <div>
            <PlanPage/>
        </div>
        <div>
           <Balancing/>
        </div>
        <div>
            <Unique3D/>
        </div>
        <div>
           <CaseStudy3D/>
        </div>
    </div>
  )
}

export default page