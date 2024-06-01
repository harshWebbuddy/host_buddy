import React from 'react'
import CustomPage from './hero'
import Rating from './rating'
import Plan from './plan'
import Support from '@/components/Support'
import Location from './Location'
import Form from './form'
import { NavBar } from '@/components'

const page = () => {
  return (
    <div>
      <NavBar className='text-white'/>
        <div><CustomPage/></div>
        <div className=''><Rating/></div>   
        <div className='pt-20 2xl:pt-40'><Plan/></div>
        <div className='pt-12'><Support/></div>
        <div className='pt-20 2xl:pt-52'><Location/></div>
       <div className='pt-20 2xl:pt-52'>
        <Form/>
       </div>
       
         </div>
  )
}

export default page