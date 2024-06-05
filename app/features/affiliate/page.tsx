import React from 'react'
import HeroHosting from './Hero'
import Ratingpanel from './Rating'
import Plans from './Plans'
import CaseStudy from './CaseStudy'
import Locationpage from './Locationpage'
import Faqs from './Faqs'
import Support from './plan2'
import CardsComponent from './CardsComponent'
import { NavBar } from '@/components'

const page = () => {
  return (
    <main className="overflow-hidden">
{/* hero page  */}<NavBar className='text-white'/>
      <section>
        <HeroHosting/>
        </section>
        {/* rating panel  */}
        <section>
        <div className="space-y-10 2xl:space-y-32 ">
          <Ratingpanel/>
          <Plans/>
        </div>
        </section>

        {/* plan page */}
        <div className='pt-16 2xl:pt-40'>  
      <Support/>
        </div>
        <section className='pt-16 2xl:pt-40 pb-80'>
  <CardsComponent/>
</section>
     
     </main>
  )
}

export default page