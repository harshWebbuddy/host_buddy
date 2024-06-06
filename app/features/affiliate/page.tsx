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
import Ratingpanel2 from './Ratingpanel'

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
        <div className="2xl:flex xl:flex bl:flex lg:flex md:flex hidden"><Ratingpanel2/></div> 
        <div className="p-4 2xl:hidden xl:hidden bl:hidden lg:hidden md:hidden flex"> <Ratingpanel /></div> 
          <Plans />
        </div>
      </section>

        {/* plan page */}
        <div className='pt-16 2xl:pt-40'>  
      <Support/>
        </div>
        <section className='pt-0 2xl:pt-40 pb-56 2xl:pb-80'>
  <CardsComponent/>
</section>
     
     </main>
  )
}

export default page