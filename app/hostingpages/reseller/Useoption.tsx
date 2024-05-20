import React from 'react'
import OptionSelector from './optionbox'

const Useoption = () => {
  return (
    <div className="w-full hostbuddyback py-20 px-3">
   

    <div className="w-full max-w-[1320px]  mx-auto space-y-10 items-start justify-start">
      <div className="mx-auto w-full bl:flex flex-row justify-between">
        <h4 className="text-3xl md:text-4xl text-white font-semibold font-mona-sans leading-[63px]">
        All <span className="pb-4 border-b-4 border-orange-500 font-semibold normal-case "> Reseller </span>Hosting Plans Include:
        </h4>
      </div>
<div className='w-full mx-auto absolute -left-4 translate-y-6'><OptionSelector/>
    </div>    
    </div>
  </div>
  )
}

export default Useoption