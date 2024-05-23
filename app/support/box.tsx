import React from 'react'

const box = () => {
  return (
    <div className="mx-auto w-full max-w-[1300px] flex items-center justify-center  ">
     
    

        <form >
  {/* First Section: Personal Information */}
 <div className='flex flex-col space-y-6'> 
    <div className='flex flex-wrap 2xl:flex-row items-center justify-center mx-auto space-x-4'> 
    <div className='flex flex-col space-y-2'>
    <label htmlFor="firstName" className='text-[14px] font-semibold'>Name</label>
    <input type="text" id="firstName" name="firstName" placeholder='Enter the Name'  
     className="w-full pr-52 px-4 py-4  border rounded-xl" required />
  </div>
  <div className='flex flex-col space-y-2'>
    <label htmlFor="lastName" className='text-[14px] font-semibold'>Email Address</label>
    <input type="text" id="lastName" name="lastName" placeholder='Enter Email Address'        className="w-full pr-52 px-4 py-4  border rounded-xl" required />
  </div>
  <div className='flex flex-col space-y-2'>
    <label htmlFor="firstName" className='text-[14px] font-semibold'>Subject</label>
    <input type="text" id="firstName" name="firstName" placeholder='Add Subject Here...'  
     className="w-full pr-52 px-4 py-4  border rounded-xl" required />
  </div>
  </div>
  <div className='flex flex-wrap 2xl:flex-row items-center justify-center mx-auto space-x-4'> 
  <div className='flex flex-col space-y-2'>
      <label htmlFor="country" className='text-[14px] font-semibold'>Department</label>
      <select id="country" name="country" required  className="w-full pr-64 px-4 py-[20px] border rounded-xl">
        {/* You can populate options dynamically or hardcode them */}
        <option value="">General Enquiries</option>
        <option value="USA">United States</option>
        <option value="Canada">Canada</option>
      
      </select>
    </div>
    <div className='flex flex-col space-y-2'>
      <label htmlFor="country" className='text-[14px] font-semibold'>Related Service</label>
      <select id="country" name="country" required  className="w-full pr-64 px-4 py-[20px] border rounded-xl">
        {/* You can populate options dynamically or hardcode them */}
        <option value="">None</option>
        <option value="USA">United States</option>
        <option value="Canada">Canada</option>
      
      </select>
    </div>
    <div className='flex flex-col space-y-2'>
      <label htmlFor="country" className='text-[14px] font-semibold'>Priority</label>
      <select id="country" name="country" required  className="w-full pr-64 px-4 py-[20px] border rounded-xl">
        {/* You can populate options dynamically or hardcode them */}
        <option value="">Medium</option>
        <option value="USA">United States</option>
        <option value="Canada">Canada</option>
      
      </select>
    </div>
  </div>
  </div>
<div className='items-start justify-start capitalize mx-auto pl-12 py-8 '>
    <h2 className='text-[14px] text-orange-500 font-bold capitalize text-center 2xl:text-left'>BiILLING ADDRESS</h2>
</div>
<div className='flex flex-col space-y-6'> 
<div className='flex flex-wrap 2xl:flex-row items-center justify-center mx-auto space-x-4'> 

    <div className='flex flex-col space-y-2'>
    <label htmlFor="firstName" className='text-[14px] font-semibold'>Company Name (Optional)</label>
    <input type="text" id="firstName" name="firstName" placeholder='Enter Company Name'  
     className="w-full pr-52 px-4 py-4  border rounded-xl" required />
  </div>
  <div className='flex flex-col space-y-2'>
    <label htmlFor="lastName" className='text-[14px] font-semibold'>Street Address</label>
    <input type="text" id="lastName" name="lastName" placeholder='Enter Street Address'        className="w-full pr-52 px-4 py-4  border rounded-xl" required />
  </div>
  </div>
  <div className='flex flex-wrap 2xl:flex-row items-center justify-center mx-auto space-x-4'> 
  <div className='flex flex-col space-y-2'>
    <label htmlFor="firstName" className='text-[14px] font-semibold'>Street Address 2</label>
    <input type="email" id="email" name="email" placeholder='Enter Street Address 2'    className="w-full pr-52 px-4 py-4  border rounded-xl"  required />
  </div>
  <div className='flex flex-col space-y-2'>
    <label htmlFor="lastName" className='text-[14px] font-semibold'>City</label>
    <input type="tel" id="phoneNumber" name="phoneNumber" placeholder='Enter City Name'    className="w-full pr-52 px-4 py-4  border rounded-xl" required />
  </div>
  </div>
  </div>
  <div className='flex flex-col space-y-6 pt-8'> 
  <div className='flex flex-wrap 2xl:flex-row items-center justify-center mx-auto space-x-4'> 
    <div className='flex flex-col space-y-2'>
    <label htmlFor="firstName" className='text-[14px] font-semibold'>Date</label>
    <input type="text" id="firstName" name="firstName" placeholder='Select Date'  
     className="w-full pr-20 px-4 py-4  border rounded-xl" required />
  </div>
  <div className='flex flex-col space-y-2'>
    <label htmlFor="lastName" className='text-[14px] font-semibold'>Post Code</label>
    <input type="text" id="lastName" name="lastName" placeholder='Enter Post Code'        className="w-full pr-20 px-4 py-4  border rounded-xl" required />
  </div>
  <div className='flex flex-col space-y-2'>
      <label htmlFor="country" className='text-[14px] font-semibold'>Country:</label>
      <select id="country" name="country" required  className="w-full pr-20 px-4 py-[20px] border rounded-xl">
        {/* You can populate options dynamically or hardcode them */}
        <option value="">Select Country</option>
        <option value="USA">United States</option>
        <option value="Canada">Canada</option>
      
      </select>
    </div>
  </div>
 
  </div>

        </form>
    
   

    </div>
  )
}

export default box