import React from 'react'
import Hero from './Hero'
import ContactForm from './form'
import Unique from './unique'
import Card from './card'
import { NavBar } from '@/components'

const page = () => {
  return (
    <div className='mx-auto items-center justify-center'>
      <NavBar className='text-white'/>
      <div>
        <Hero/>
      </div>
     
<div className='py-20 2xl:py-40 mx-auto item-center justify-center'>
  <Card/>
</div>
<div className='pt-10 pb-20 2xl:pt-20 2xl:pb-40'><Unique/></div>

    <div className='pb-10'>
<ContactForm/></div>
    </div>
  )
}

export default page