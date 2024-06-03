import React from 'react'
import HeroHosting from './Hero'
import Ratingpanel from './Rating'
import Plan2 from './plan2'
import Testimonials from './Testimonials'
import Faqs from './Faqs';
import CaseStudy from './CaseStudy'
import Features from './Features'
import Bandwidth from './Bandwidth'
import { NavBar } from '@/components'
import Adds from './adds'

const page = () => {
  return (
    <main className="overflow-hidden">
      <NavBar className='text-white'/>
{/* hero page  */}
      <section>
        <HeroHosting/>
        </section>
        {/* rating panel  */}
        <section>
        <div className="space-y-16 2xl:space-y-32 ">
          <Ratingpanel/>
          <Plan2/>
        </div>
        </section>   
          <section className='pt-20 2xl:pb-0 pb-20 2xl:pt-32'><Bandwidth/></section>
     
        {/* cardsection */}
        <section>
          <Features/>
        </section>
        <section className='2xl:pt-8'>
          <Adds/>
        </section>
       
   
        <section>
          <Testimonials/>
        </section>

     
        <section className='pb-0 2xl:pb-10 pt-20 2xl:pt-40'>
<Faqs/>
        </section>
        {/* caseStudies */}
        <section className='pb-40 2xl:pb-60'>
          <CaseStudy/>
        </section>
     </main>
  )
}

export default page;