
import React from 'react'
import RootLayout from '@/app/layout'
import HeroHosting from './Hero'


const page = () => {
  return (    
  <RootLayout  showFooter={false}>
    <main className="">
      <section>
        <HeroHosting/>
        </section>      
     </main>
     </RootLayout>
  )
}

export default page