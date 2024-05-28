import React from 'react'
import HeroHosting from './Hero'
import Ratingpanel from './Rating'
import Plans from './Plans'
import Unique from './unique'
import CardsComponent from './CardsComponent'
import Testimonials from './Testimonials'
import Faqs from './Faqs';
import CaseStudy from './CaseStudy'
import Uniquecpanel from './Uniquecpanel'
import Uniqueone from './Uniqueone'
import AddsResller from './Adds'
import Useoption from './Useoption'

const page = () => {
  return (
    <main className="overflow-hidden">
{/* hero page  */}
      <section>
        <HeroHosting/>
        </section>
        {/* rating panel  */}
        <section>
        <div className="space-y-24 2xl:space-y-32 ">
          <Ratingpanel/>
          <Plans/>
        </div>
        </section>

        <section className='py-40 '>
  <Useoption/>
</section>
        {/* what make hostbuddy unique section */}
        <section className=' 2xl:pt-72 bl:pt-96  sm:pt-[800px] lg:pt-[700px] pt-[800px]'>
          <Unique/>
        </section>
        <section className='pt-20 2xl:pt-40'>
          <Uniqueone/>
        </section>
        {/* cardsection */}
        <section>
          <Uniquecpanel/>
        </section>
      
        <section className='pt-12 2xl:pt-24 space-y-10 2xl:space-y-20'>
        <CardsComponent/>
  <AddsResller/>     
  </section>

        <section className='py-10 2xl:py-24'>      
          <Testimonials/>
        </section>

        {/* Question Answers */}
        <section className='pt-10 pb-40'>
<Faqs/>
        </section>
        {/* caseStudies */}
        <section className='pb-96'>
          <CaseStudy/>
        </section>
     </main>
  )
}

export default page