import React from 'react'
import CustomPage from './hero'
import Plan from './plan'
import Support from '@/components/Support'
import Location from './Location'
import Form from './form'
import { NavBar } from '@/components'
import Ratingpanel2 from './Ratingpanel'
import Ratingpanel from './rating'

const page = () => {
  return (
    <div>
      <NavBar className='text-white'/>
        <div><CustomPage/></div>
        <section>
        <div className="space-y-10 2xl:space-y-32 ">
        <div className="2xl:flex xl:flex bl:flex lg:flex md:flex hidden"><Ratingpanel2/></div> 
        <div className="p-4 2xl:hidden xl:hidden bl:hidden lg:hidden md:hidden flex"> <Ratingpanel /></div> 
          <Plan />
        </div>
      </section>
        <div className='pt-12'><Support/></div>
        <div className='pt-20 2xl:pt-52'><Location/></div>
       <div className='pt-20 2xl:pt-52'>
        <Form/>
       </div>
       
         </div>
  )
}

export default page