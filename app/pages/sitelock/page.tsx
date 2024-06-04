import React from 'react'
import HeroHosting from './Hero'
import Ratingpanel from './Rating'
import Plans from './Plans'
import Plan2 from './plan2'
import Unique from './unique'
import CardsComponent from './CardsComponent'
import Testimonials from './Testimonials'
import Faqs from './Faqs';
import CaseStudy from './CaseStudy'
import Features from './Features'
import Unique2 from './unique2'
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
        <section>
        <div className="space-y-16 2xl:space-y-32 ">
          <Ratingpanel/>
          <Plan2/>
        </div>
        </section>

        {/* plan page */}
        {/* <div>
          <Plan2/>
        </div> */}
        {/* what make hostbuddy unique section */}
        <section className='pt-20 2xl:pt-40 space-y-16'>
          <Unique/>
          <Unique2/>
        </section>
        {/* cardsection */}
    
       
        {/* testimonials */}
        <section className='pt-20'>
          <Testimonials/>
        </section>

        {/* Question Answers */}
        <section className='2xl:pt-20'>
<Faqs/>
        </section>
        {/* caseStudies */}
        <section className='2xl:pt-40 pb-40 pt-20 2xl:pb-80'>
          <CaseStudy/>
        </section>
     </main>
  )
}

export default page