import React from 'react'
import HeroHosting from './Hero'
import Ratingpanel from './Rating'
import Plans from './Plans'
import CaseStudy from './CaseStudy'
import Locationpage from './Locationpage'
import Faqs from './Faqs'
import { NavBar } from '@/components'

const page = () => {
  return (
    <main className="overflow-hidden">
{/* hero page  */}
<NavBar className='text-white'/>
      <section>
        <HeroHosting/>
        </section>
        {/* rating panel  */}
        <section>
        <div className="space-y-16 2xl:space-y-32 ">
          <Ratingpanel/>
          <Plans/>
        </div>
        </section>

   <div className='pt-20 2xl:pt-40'>
        <section className="text-white bg-gradient-to-b from-[#292E34] to-[#16191C] pt-20 pb-20">
<Locationpage/>
    </section></div>
      <section className='2xl:pt-16'>
        <Faqs/>
      </section>
        <section className='pb-40 2xl:pb-80 pt-20 2xl:pt-40'>
          <CaseStudy/>
        </section>
     </main>
  )
}

export default page