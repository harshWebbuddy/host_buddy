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
        <div className='pt-20 pb-40'> <Support/></div>
       <div className='mx-auto'><Location/></div>
       <div>
        <Form/>
       </div>
         </div>
  )
}

export default page