import React from 'react'
import HeroHosting from './Hero'
import Ratingpanel from './Rating'
import Plans from './Plans'
import CaseStudy from './CaseStudy'
import Locationpage from './Locationpage'
import Faqs from './Faqs'
import ContactForm from '@/components/Form'
import Features from './box'
import Support from './plan2'

const page = () => {
  return (
    <main className="overflow-hidden">
{/* hero page  */}
      <section>
        <HeroHosting/>
        </section>
        <section className=''>
  <Features/>
</section>
<section>
  <Support/>
</section>
        <section>
        <div className="pt-60 pb-20 ">
          <Plans/>
        </div>
        </section>

        {/* plan page */}
        <div className='pt-28'>
          <Locationpage/>
        </div>
   
       
        <div className='pt-20 pb-10'>
<ContactForm/></div>
     </main>
  )
}

export default page