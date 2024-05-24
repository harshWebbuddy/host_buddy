import React from 'react'
import HeroHosting from './Hero'
import Ratingpanel from './Rating'
import Unique from './unique'
import CardsComponent from './CardsComponent'
import Testimonials from './Testimonials'
import Faqs from './Faqs';
import CaseStudy from './CaseStudy'

const page = () => {
  return (
    <main className="overflow-hidden">
{/* hero page  */}
      <section>
        <HeroHosting/>
        </section>
        {/* rating panel  */}
      
        <div className="space-y-32 ">
          <Ratingpanel/>
          <CardsComponent/>
        </div>
        <section className='py-20 2xl:py-40'>
          <Unique/>
        </section>

        <section>
          <Testimonials/>
        </section>

        {/* Question Answers */}
        <section className='pt-12'>
<Faqs/>
        </section>
        {/* caseStudies */}
        <section className='pt-40 pb-80'>
          <CaseStudy/>
        </section>
     </main>
  )
}

export default page