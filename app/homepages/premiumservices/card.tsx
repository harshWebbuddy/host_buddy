import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className='mx-auto gapping space-y-16 2xl:space-y-0'>
        <div className='slide-reveal wholecard1 mx-auto'>
            
           <div className='cardiv'>
           <img src="/ps/design2.2.svg" className='dottedcard'/> 
              <img src="/ps/2.svg" className='cardimage1'/> 
             
 
            </div>
          
            <div className="card">
          <div className="text-[42px] font-semibold">
          <h2 className=''>Full <span className='text-orange-500'>HD Quality</span></h2>
          <div className='flex flex-row'><h2>Streams</h2> <Image src="/ps/watch.svg" alt="watch" width={60} height={100} className='ml-4 '/></div> 
            <p className='text-[16px] font-normal'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <a>All Specs</a></p>
         
          </div>
          <div className="bg-white border-orange-500 border flex flex-row w-44 rounded-xl p-3  items-center justify-center">
              <h2 className="font-medium text-[20px]  leading-normal ">All Specs</h2> <img src="/hosting/ArrowIcon.svg" className="pl-4 -mt-0.5 "/>
          </div>
          
        </div>
            
        </div>
        <div className='slide-reveal wholecard1 mx-auto'>
            
        
           
             <div className="card">
             <div className="text-[42px] font-semibold">
       <div className=''>      <h2 className=''>Work on all

</h2>
<span>devices </span></div>
             <p className='text-[16px] font-normal'>Lorem ipsum dolor sit amet consectetur. Amet eu non dignissim commodo convallis mauris. Dui est mauris dictum aliquet justo sodales nulla. At ac vel morbi vestibulum eget lectus faucibus diam.
           </p>
          
           </div>
           <div>
            <img src="/ps/card1.svg"/>
           </div>
           <div className="bg-white border-orange-500 border flex flex-row w-44 rounded-xl p-3  items-center justify-center">
              <h2 className="font-medium text-[20px]  leading-normal ">Devices</h2> <img src="/hosting/ArrowIcon.svg" className="pl-4 -mt-0.5 "/>
          </div>
           
         </div>
         <div className='cardiv2'>
            <img src="/ps/design2.1.svg" className='dottedcard2'/> 
               <img src="/ps/3.svg" className='cardimage2'/> 
              
  
             </div>
             
         </div>
    </div>
  )
}

export default Card