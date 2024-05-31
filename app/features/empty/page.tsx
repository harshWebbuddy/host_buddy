import React from 'react'
import HeroHosting from './Hero'
import Ratingpanel from './Rating'
import Plans from './Plans'
import CaseStudy from './CaseStudy'
import Locationpage from './Locationpage'
import Faqs from './Faqs'
import Support from './plan2'
import CardsComponent from './CardsComponent'
import RootLayout from '@/app/layout'


const page = () => {
  return (    <RootLayout showFooter={false}>
    <main className="overflow-hidden">
{/* hero page  */}
      <section>
        <HeroHosting/>
        </section>
        {/* rating panel  */}
      
     </main></RootLayout>
  )
}

export default page