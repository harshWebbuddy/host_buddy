import React from 'react'
import HeroHosting from './Hero'
import Ratingpanel from './Rating'
import Plans from './Plans'
import Plan2 from './plan2'
import Unique from './unique'
import CardsComponent from './CardsComponent'
import Testimonials from './Testimonials'
import { testimonials } from '../../(landing)/components/constants/testimonials';
import Faqs from './Faqs';
import CaseStudy from './CaseStudy'
import { caseStudies } from '../../(landing)/components/constants/casestudies';
import Features from './Features'
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
        <div className="space-y-10 2xl:space-y-40 ">
          <Ratingpanel/>
          <Plans/>
        </div>
        </section>

        {/* plan page */}
        <div className='pt-20 2xl:pt-40 pb-20 2xl:pb-40'>
          <Plan2/>
        </div>
        {/* what make hostbuddy unique section */}
        <section>
          <Unique/>
        </section>
        {/* cardsection */}
        <section className='2xl:pt-36'>
          <Features/>
        </section>

        <section className='2xl:pt-12 space-y-10 2xl:space-y-20'>
          <CardsComponent/>
       
          <Testimonials/>
        </section>

        {/* Question Answers */}
        <section className='2xl:pt-12'>
<Faqs/>
        </section>
        {/* caseStudies */}
        <section className='pt-20 2xl:pt-40 pb-40 2xl:pb-80'>
          <CaseStudy/>
        </section>
     </main>
  )
}

export default page