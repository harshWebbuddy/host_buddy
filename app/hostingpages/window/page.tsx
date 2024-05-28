import React from 'react'
import HeroHosting from './Hero'
import Ratingpanel from './Rating'
import Plan2 from './plan2'
import Testimonials from './Testimonials'
import Faqs from './Faqs';
import CaseStudy from './CaseStudy'
import Features from './Features'
import Adds from './Adds'
import Bandwidth from './Bandwidth'

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
          <section className='pt-32'><Bandwidth/></section>
     
        {/* cardsection */}
        <section>
          <Features/>
        </section>
        <section className='pt-8'>
          <Adds/>
        </section>
       
   
        <section>
          <Testimonials/>
        </section>

     
        <section className='pb-20 pt-40'>
<Faqs/>
        </section>
        {/* caseStudies */}
        <section className='pb-60'>
          <CaseStudy/>
        </section>
     </main>
  )
}

export default page