import React from 'react'
import HeroHosting from './Hero'
import Unique from './Unique'


const page = () => {
  return (
    <main className="overflow-hidden">
{/* hero page  */}
      <section>
        <HeroHosting/>
        </section>
        <section className='pb-40'>
  <Unique/>
        </section>
     
     </main>
  )
}

export default page