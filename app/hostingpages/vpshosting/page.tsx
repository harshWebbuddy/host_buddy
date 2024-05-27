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
import Adds from './adds'
import Table from './Table'

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
          <Plans/>
        </div>
        </section>

        {/* plan page */}
        <div className='pt-48 pb-0'>
          <Plan2/>
        </div>
        {/* what make hostbuddy unique section */}
        <section>
          <Unique/>
        </section>
        {/* cardsection */}
        <section>
          <Features/>
        </section>
        {/* <Table/> */}
        <section>
          <Adds/>
        </section>
        <section>
          <CardsComponent/>
        </section>

        {/* testimonials */}
        <section>
          <Testimonials/>
        </section>

        {/* Question Answers */}
        <section className='pt-20 '>
<Faqs/>
        </section>
        {/* caseStudies */}
        <section className='pt-52 pb-96'>
          <CaseStudy/>
        </section>
     </main>
  )
}

export default page