import React from 'react'
import Hero from './Hero'
import ContactForm from './form'
import Unique from './unique'
import Card from './card'
import { NavBar } from '@/components'
import Plan2 from './plans'

const page = () => {
  return (
    <div className='mx-auto items-center justify-center'>
      <NavBar className='text-white'/>
      <div>
        <Hero/>
      </div>
      <section className='-translate-y-[150px] 2xl:-translate-y-[200px] 2xl:left-10 relative z-[20]'>  <Plan2/></section>

<div className='mx-auto item-center -translate-y-24 2xl:-translate-y-48 justify-center'>
  <Card/>

</div>

<div className='pb-0  2xl:pb-40'><Unique/></div>

    <div className='pb-10'>
<ContactForm/></div>
    </div>
  )
}

export default page