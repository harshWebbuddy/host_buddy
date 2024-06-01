import React from 'react'
import HeroHosting from './Hero'
import Ratingpanel from './Rating'

import Plan2 from './plan2'
import Support from './Support'
import Location from './Location'
import ContactForm from './form'
import { NavBar } from '@/components'

const page = () => {
  return (
    <main className="overflow-hidden">
      <NavBar className="text-white" />
{/* hero page  */}
      <section>
        <HeroHosting/>
        </section>
        {/* rating panel  */}
        <section className='space-y-20 2xl:space-y-40'>
        <div className="space-y-20 2xl:space-y-32 ">
          <Ratingpanel/>
         
      <Plan2/>
        </div>
  
        </section>
        <section>
      <Support/>
    </section>
        
    <div className='pt-20 2xl:pt-40'><Location/>
    </div>
       <div className='pt-20 2xl:pt-44'>
        <ContactForm/>
       </div>
     </main>
  )
}

export default page