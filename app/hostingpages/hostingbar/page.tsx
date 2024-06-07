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
import { NavBar } from '@/components'
import Ratingpanel2 from './Ratingpanel'
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
        <div className="space-y-10 2xl:space-y-32 ">
        <div className="2xl:flex xl:flex bl:flex lg:flex md:flex hidden"><Ratingpanel2/></div> 
        <div className="p-4 2xl:hidden xl:hidden bl:hidden lg:hidden md:hidden flex"> <Ratingpanel /></div> 
          <Plans />
        </div>
      </section>
        {/* plan page */}
        <section className='pt-20 2xl:pt-40'>
          <Plan2/>
        </section>
        {/* what make hostbuddy unique section */}
        <section className='pt-20 2xl:pt-40 pb-20 2xl:pb-40'>
          <Unique/>
        </section>
        {/* cardsection */}
        <section>
          <Features/>
        </section>
        <section className='2xl:pt-10'>
          <CardsComponent/>
        </section>

        {/* testimonials */}
        <section className='2xl:pt-10'>
          <Testimonials/>
        </section>

        {/* Question Answers */}
        <section className=' 2xl:pt-16'>
<Faqs/>
        </section>
        {/* caseStudies */}
        <section className='pt-20 2xl:pt-40 pb-40 2xl:pb-96'>
          <CaseStudy/>
        </section>
     </main>
  )
}

export default page