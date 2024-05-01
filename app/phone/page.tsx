import React from 'react'
import CustomPage from './hero'
import Rating from './rating'
import Plan from './plan'
import Support from '@/components/Support'
import Location from './Location'
import Form from './form'

const page = () => {
  return (
    <div>
        <div><CustomPage/></div>
        <div><Rating/></div>   
        <div><Plan/></div>
        <div className='pt-[40px] pb-[250px] 2xl:pt-[100px] xl:pt-[100px] xl:pb-[100px] 2xl:pb-[130px]  bl:pt-[70px] bl:pb-[70px]  md:pt-[70px] md:pb-[100px]  lg:pt-[40px] lg:pb-[140px]  sm:pt-[40px] sm:pb-[200px]'><Support/></div>
        <div className='xl:pb-[100px] 2xl:pb-[130px]  bl:pb-[70px]  md:pb-[70px] mx-auto   lg:pb-[40px]   sm:pb-[40px] pb-[40px] '><Location/></div>
       <div>
        <Form/>
       </div>
       
         </div>
  )
}

export default page