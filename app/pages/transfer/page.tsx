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
        <section className='space-y-16 2xl:space-y-40'>
        <div className="space-y-10 2xl:space-y-32 ">
          <Ratingpanel/>
         
        <Planpanel/> 
        </div>
    
          <Unique/>
        </section>
        {/* cardsection */}
       
        
        <section className='pt-20 2xl:pt-40 pb-16'>
        <Uniquecpanel/>
        </section>
     
    <section className='2xl:pt-20'>
      <CardsComponent/>
    </section>

        {/* Question Answers */}
        <section className='2xl:pt-40'>
<Faqs/>
        </section>
        {/* caseStudies */}
        <section className='pb-40 2xl:pb-80 pt-20 2xl:pt-40'>
          <CaseStudy/>
        </section>
     </main>
  )
}

export default page