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
import Adds from './adds'

const page = () => {
  return (
    <main className="overflow-hidden">
{/* hero page  */}
      <section>
        <HeroHosting/>
       
        </section>
        {/* rating panel  */}
        <section>
        <div className="space-y-32 ">
          <Ratingpanel/>
          <Plan2/>
        </div>
        </section>

        {/* plan page */}
    
        {/* cardsection */}
        <section className='pt-40'>
          <Features/>
        </section>
        <section className='pt-20'>
          <Adds/>
        </section>
        <section className='pt-40 2xl:pt-60'> 
          {/* <CardsComponent/> */}
      
          <Testimonials/>
        </section>

        {/* Question Answers */}
        <section className="pt-20">
<Faqs/>
        </section>
        {/* caseStudies */}
        <section className="pt-20">
          <CaseStudy/>
        </section>
     </main>
  )
}

export default page