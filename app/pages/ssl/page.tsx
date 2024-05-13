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

const page = () => {
  return (
    <main className="overflow-hidden">
{/* hero page  */}
      <section>
        <HeroHosting/>
        </section>
        {/* rating panel  */}
        <section className='space-y-40'>
        <div className="space-y-32 ">
          <Ratingpanel/>
          <Plan2/>
        </div>
    
          <Unique/>
        </section>
    <section>
      <Uniquecpanel/>
    </section>
        <section>
          <Features/>
        </section>
       
        
        <section className='pt-40 pb-96'>
          <CardsComponent/>
        </section>
      
        <section>
          <Testimonials/>
        </section>

        {/* Question Answers */}
        <section className='pt-12'>
<Faqs/>
        </section>
        {/* caseStudies */}
        <section>
          <CaseStudy/>
        </section>
     </main>
  )
}

export default page