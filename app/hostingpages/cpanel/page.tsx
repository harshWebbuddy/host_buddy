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
import Uniquecpanel from './Uniquecpanel'

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
        <div className='pt-36'>
          <Plan2/>
        </div>
        {/* what make hostbuddy unique section */}
        <section>
          <Unique/>
        </section>
        {/* cardsection */}
        <section>
          <Uniquecpanel/>
        </section>
        <section>
          <Features/>
        </section>

        <section>
          <CardsComponent/>
       
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