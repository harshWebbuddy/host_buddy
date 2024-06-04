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
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <main className="overflow-hidden">
      <Navbar className="text-white"/>
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
        {/* cardsection */}
       
        
        <section className='pt-20 2xl:pt-40 pb-16 2xl:pb-28'>
          <CardsComponent/>
        </section>
        <section>
          <Features/>
        </section>
        <section>
          <Testimonials/>
        </section>

        {/* Question Answers */}
        <section className='pt-20'>
<Faqs/>
        </section>
        {/* caseStudies */}
        <section className='pb-40 2xl:pb-52'>
          <CaseStudy/>
        </section>
     </main>
  )
}

export default page