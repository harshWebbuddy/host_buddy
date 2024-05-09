import React from 'react'
import HeroHosting from './Hero'
import Ratingpanel from './Rating'
import Plan2 from './plan2'
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
        <section className=''>
        <div className="space-y-32 ">
          <Ratingpanel/>
          <Plan2/>
        </div>
        </section>
        {/* cardsection */}
       
        
        <section className='pt-40 '>
          <CardsComponent/>
        </section>
       
        <section>
          <Testimonials/>
        </section>

        {/* Question Answers */}
        <section>
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