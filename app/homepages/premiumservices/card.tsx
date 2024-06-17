import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className='mx-auto flex flex-col space-y-20 2xl:space-y-32 '>
        <div className='slide-reveal relative z-[20]  flex flex-col  xl:flex-row 2xl:flex-row gap-y-20 2xl:gap-y-0  gap-x-80 mx-auto'>
            
           <div className='2xl:flex hidden'>
           <img src="/ps/design2.2.svg" className='relative -translate-y-40'/> 
              <img src="/ps/2.svg" className=''/> 
             
 
            </div>
          
            <div className="flex flex-col space-y-10">
          <div className="text-[22px] xl:text-[32px] 2xl:text-[42px] font-semibold">
          <h2 className=''>Full <span className='text-orange-500'>HD Quality</span></h2>
          <div className='flex flex-row'>
            <h2>Streams</h2> <Image src="/ps/watch.svg" alt="watch" width={60} height={100} className='ml-4 '/></div> 
          <div className='w-96'>  <p className='text-[10px] pt-4  xl:text-[12px] 2xl:text-[16px] font-normal'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         <a>All Specs</a></p> </div> 
         
          </div>
          <div className="bg-white cursor-pointer border-orange-500 border flex flex-row w-44 rounded-xl p-3  items-center justify-center">
              <h2 className="font-medium text-[12px] 2xl:text-[20px]  leading-normal ">All Specs</h2> <img src="/hosting/ArrowIcon.svg" className="pl-4 -mt-0.5 "/>
          </div>
          
        </div>
        <div className='2xl:hidden flex '>
           <img src="/ps/design2.2.svg" className='2xl:flex hidden '/> 
              <img src="/ps/2.svg" className='w-full'/> 
             
 
            </div>
        </div>        
         <img src="/ps/design2.1.svg" className='2xl:flex hidden absolute -translate-y-72 z-[0] translate-x-[1600px] '/> 

        <div className='slide-reveal  relative z-[20] flex flex-col  xl:flex-row 2xl:flex-row gap-y-20 2xl:gap-y-0  gap-x-40 mx-auto'>
            
        
           
             <div className="flex flex-col space-y-6">
             <div className="flex flex-col space-y-4 text-[22px] xl:text-[32px] 2xl:text-[42px] font-semibold">
       <div className=''>      <h2 className=''>Work on all

</h2>
<span className='text-orange-500'>Devices </span></div>
<p className='text-[10px] xl:text-[12px] w-96 2xl:text-[16px] font-normal'>Lorem ipsum dolor sit amet consectetur. Amet eu non dignissim commodo convallis mauris. Dui est mauris dictum aliquet justo sodales nulla. At ac vel morbi vestibulum eget lectus faucibus diam.
           </p>
          
           </div>
           <div>
            <img src="/ps/card1.svg"/>
           </div>
           <div className="bg-white  cursor-pointer border-orange-500 border flex flex-row w-44 rounded-xl p-3  items-center justify-center">
           <h2 className="font-medium text-[12px] 2xl:text-[20px]  leading-normal ">Devices</h2> <img src="/hosting/ArrowIcon.svg" className="pl-4 -mt-0.5 "/>
          </div>
           
         </div>
         <div className=''>
               <img src="/ps/3.svg" className='w-full'/> 
        
              
  
             </div>
             
         </div>

    </div>
  )
}

export default Card