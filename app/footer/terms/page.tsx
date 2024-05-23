import React from 'react'
import HeroHosting from './Hero'
import Ratingpanel from './Rating'

const page = () => {
  return (
    <main className="overflow-hidden">
{/* hero page  */}
      <section>
        <HeroHosting/>
        </section>
        {/* rating panel  */}
       
        <div className="pb-60 2xl:pb-80 pt-20 2xl:pt-40 ">
          <Ratingpanel/></div>
 
     </main>
  )
}

export default page