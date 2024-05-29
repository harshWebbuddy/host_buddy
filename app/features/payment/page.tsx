import React from 'react'
import HeroHosting from './Hero'
import Ratingpanel from './Rating'
import Plans from './Plans'
import CaseStudy from './CaseStudy'
import Locationpage from './Locationpage'
import Faqs from './Faqs'

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
        <div className='pt-40 '>
          <Locationpage/>
        </div>
      <section className='pt-16'>
        <Faqs/>
      </section>
        <section className='pb-80 pt-40'>
          <CaseStudy/>
        </section>
     </main>
  )
}

export default page