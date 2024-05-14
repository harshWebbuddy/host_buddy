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
         
        <Planpanel/> 
        </div>
    
          <Unique/>
        </section>
        {/* cardsection */}
       
        
        <section className='pt-40 pb-16'>
        <Uniquecpanel/>
        </section>
     
    <section>
      <CardsComponent/>
    </section>

        {/* Question Answers */}
        <section className='pb-2 pt-12'>
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