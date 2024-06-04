import React from 'react'
import HeroHosting from './Hero'
import Ratingpanel from './Rating'
import Plan2 from './plan2'
import Unique from './unique'
import CardsComponent from './CardsComponent'
import Testimonials from './Testimonials'
import Faqs from './Faqs';
import CaseStudy from './CaseStudy'
import Features from './Features'
import Uniquecpanel from './Uniquepanel'
import { NavBar } from '@/components'

const page = () => {
  return (
    <main className="overflow-hidden">
      <NavBar className='text-white'/>
{/* hero page  */}
      <section>
        <HeroHosting/>
        </section>
        {/* rating panel  */}
        <section className='space-y-20 2xl:space-y-40'>
        <div className="space-y-16 2xl:space-y-32 ">
          <Ratingpanel/>
          <Plan2/>
        </div>
    
          <Unique/>
        </section>
    <section className='pt-20 2xl:pt-40'>
      <Uniquecpanel/>
    </section>
        <section>
          <Features/>
        </section>
       
        
        <section className='2xl:pt-40 pt-20 pb-20 2xl:pb-96'>
          <CardsComponent/>
        </section>
      
        <section>
          <Testimonials/>
        </section>

        {/* Question Answers */}
        <section className='2xl:pt-36'>
<Faqs/>
        </section>
        {/* caseStudies */}
        <section className='pt-24 2xl:pt-40 pb-40 2xl:pb-80'>
          <CaseStudy/>
        </section>
     </main>
  )
}

export default page