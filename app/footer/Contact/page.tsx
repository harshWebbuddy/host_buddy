import React from 'react'
import HeroHosting from './Hero'
import Unique from './Unique'
import Faqs from './Faqs'


const page = () => {
  return (
    <main className="overflow-hidden">
{/* hero page  */}
      <section>
        <HeroHosting/>
        </section>
        <section className='pb-80'>
<Faqs/>
        </section>
     
     </main>
  )
}

export default page