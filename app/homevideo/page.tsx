import React from 'react'
import HeroHosting from './Hero'
import Ratingpanel from './Rating'

import Plan2 from './plan2'
import Support from './Support'
import Location from './Location'
import ContactForm from './form'

const page = () => {
  return (
    <main className="overflow-hidden">
{/* hero page  */}
      <section>
        <HeroHosting/>
        </section>
        {/* rating panel  */}
        <section className='space-y-40'>
        <div className="space-y-32 ">
          <Ratingpanel/>
         
      <Plan2/>
        </div>
  
        </section>
        <section>
      <Support/>
    </section>
        
    <div className='pt-56'><Location/>
    </div>
       <div className='pt-56'>
        <ContactForm/>
       </div>
     </main>
  )
}

export default page