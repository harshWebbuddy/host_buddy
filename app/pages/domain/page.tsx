import React from 'react'
import HeroHosting from './Hero'
import Ratingpanel from './Rating'
import Unique from './unique'
import CardsComponent from './CardsComponent'
import Faqs from './Faqs';
import CaseStudy from './CaseStudy'
import Uniquecpanel from './unique2'
import Uniquepanel from './unique2'
import Planpanel from './planpage'
import Testimonials from './Testimonials'
import { NavBar } from '@/components'

const page = () => {
  return (
    <main className="overflow-hidden">
      <NavBar className='text-white'/>
{/* hero page  */}
      <section>
        <HeroHosting/>
        </section>
        {/* rating panel  */}
        <section className='space-y-4 2xl:space-y-40'>
        <div className="space-y-16 2xl:space-y-32 ">
          <Ratingpanel/>
         
        <Planpanel/> 
        </div>
    
          <Unique/>
        </section>
       
    <section>
      <CardsComponent/>
    </section>
<section>
  <Testimonials/>
</section>
        {/* Question Answers */}
        <section className=' 2xl:pt-16'>
<Faqs/>
        </section>
        {/* caseStudies */}
        <section className='2xl:pb-80 pb-40 pt-20 2xl:pt-40'>
          <CaseStudy/>
        </section>
     </main>
  )
}

export default page