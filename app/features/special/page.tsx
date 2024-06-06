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
import { NavBar } from '@/components'

const page = () => {
  return (
    <main className="">
      <NavBar className='text-white'/>
{/* hero page  */}
      <section>
        <HeroHosting/>
        </section>
        <section className='pt-10 pb-10 2xl:pt-0 2xl:pb-0 '>
  <Features/>
</section>
<section>
  <Support/>
</section>
        <section>
        <div className="pt-40 2xl:pt-60 pb-20 ">
          <Plans/>
        </div>
        </section>

        {/* plan page */}
        <div className='2xl:pt-28'>
          <Locationpage/>
        </div>
   
       
        <div className=' 2xl:pt-20 pb-60 2xl:pb-80'>
<ContactForm/></div>
     </main>
  )
}

export default page