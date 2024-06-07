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
import { NavBar } from '@/components'
import Ratingpanel2 from '../dedicatedserver/Ratingpanel'

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
          <Plan2 />
        </div><Unique/>
      </section>
          
        {/* cardsection */}
       
        
        <section className='pt-20 2xl:pt-40 2xl:pb-28'>
          <CardsComponent/>
        </section>
        <section className='pt-20'>
          <Features/>
        </section>
        <section >
          <Testimonials/>
        </section>

        {/* Question Answers */}
        <section className='pt-20'>
<Faqs/>
        </section>
        {/* caseStudies */}
        <section className='pb-40 2xl:pb-60'>
          <CaseStudy/>
        </section>
     </main>
  )
}

export default page