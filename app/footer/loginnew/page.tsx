 "use client"
import Image from 'next/image';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Perform login logic here (e.g., call an API)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] pb-40 ">
      <div className="bg-white  border border-orange-500 rounded-3xl  p-8  shadow-md w-full max-w-[1000px] absolute z-[2]">
      <div className="justify-center md:mr-0 group items-center text-center pb-8 ">
              <span className="font-semibold text-[24px] text-black inline-block transition-transform transform rotate-0 group-hover:rotate-180">H</span>
              <span className="font-semibold text-[24px] text-orange-500 inline-block transition-transform transform rotate-0 group-hover:rotate-180">o</span>
              <span className="font-semibold text-black text-[24px] inline-block transition-transform transform rotate-0 group-hover:rotate-180">s</span>
              <span className="font-semibold text-[24px] text-black inline-block transition-transform transform rotate-0 group-hover:rotate-180">t</span>
              <span className="font-semibold text-[24px] text-black inline-block transition-transform transform rotate-0 group-hover:rotate-180">Buddy</span>
            </div>
        <h2 className="text-xl font-bold mb-2 text-center">Login or Create a New Account</h2>
        <p className="text-[14px] text-[#817F9B] font-thin mb-6 text-center">If you are a returning customer, please Login if not, create a new account.</p>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
  {/* First Section: Personal Information */}
 <div className='flex flex-col space-y-6'> 
    <div className='flex flex-wrap 2xl:flex-row items-center justify-center mx-auto space-x-4'> 
    <div className='flex flex-col space-y-2'>
    <label htmlFor="firstName" className='text-[14px] font-semibold'>First Name</label>
    <input type="text" id="firstName" name="firstName" placeholder='Enter First Name'  
     className="w-full pr-52 px-4 py-4  border rounded-xl" required />
  </div>
  <div className='flex flex-col space-y-2'>
    <label htmlFor="lastName" className='text-[14px] font-semibold'>Last Name</label>
    <input type="text" id="lastName" name="lastName" placeholder='Enter Last Name'        className="w-full pr-52 px-4 py-4  border rounded-xl" required />
  </div>
  </div>
  <div className='flex flex-wrap 2xl:flex-row items-center justify-center mx-auto space-x-4'> 
  <div className='flex flex-col space-y-2'>
    <label htmlFor="firstName" className='text-[14px] font-semibold'>Email Address</label>
    <input type="email" id="email" name="email" placeholder='Enter Email Address'    className="w-full pr-52 px-4 py-4  border rounded-xl"  required />
  </div>
  <div className='flex flex-col space-y-2'>
    <label htmlFor="lastName" className='text-[14px] font-semibold'>Phone Number</label>
    <input type="tel" id="phoneNumber" name="phoneNumber" placeholder='Enter Phone Number'    className="w-full pr-52 px-4 py-4  border rounded-xl" required />
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
      <svg className='absolute 2xl:flex hidden right-10 top-10 !z-[3] w-20' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C4.02943 18 -3.8147e-06 13.9706 -3.8147e-06 9C-3.8147e-06 4.02944 4.02943 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18ZM8.99005 16.2873C4.98092 16.2873 1.73088 13.0287 1.73088 9.009C1.73088 4.98929 4.98092 1.73068 8.99005 1.73068C12.9992 1.73068 16.2492 4.98929 16.2492 9.009C16.2492 13.0287 12.9992 16.2873 8.99005 16.2873Z" fill="#FE7602"/>
</svg>
      <Image src="/login.svg" alt="" width={100} height={100}  className='w-full absolute z-[1] opacity-50'/>
   
<svg className='absolute 2xl:flex hidden  left-10 top-2 !z-[3] w-4' width="107" height="125" viewBox="0 0 107 125" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.6766 125C22.6885 125 -0.000320435 102.311 -0.000320435 74.3232C-0.000320435 46.3351 22.6885 23.6462 50.6766 23.6462C78.6647 23.6462 101.354 46.3351 101.354 74.3232C101.354 102.311 78.6647 125 50.6766 125ZM50.625 115.356C28.0505 115.356 9.75029 97.0077 9.75029 74.3737C9.75029 51.7397 28.0505 33.3911 50.625 33.3911C73.1994 33.3911 91.4997 51.7397 91.4997 74.3737C91.4997 97.0077 73.1994 115.356 50.625 115.356Z" fill="#FE7602"/>
</svg>
<svg  className='absolute 2xl:flex hidden  left-10 bottom-[800px] !z-[3] w-24' width="39" height="65" viewBox="0 0 39 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.4922 65.0001C8.55106 65.0001 0.49218 56.9413 0.49218 47.0001C0.49218 37.059 8.55106 29.0001 18.4922 29.0001C28.4333 29.0001 36.4922 37.059 36.4922 47.0001C36.4922 56.9413 28.4333 65.0001 18.4922 65.0001ZM18.4747 61.5747C10.4564 61.5747 3.95632 55.0575 3.95632 47.0181C3.95632 38.9786 10.4564 32.4614 18.4747 32.4614C26.4929 32.4614 32.993 38.9786 32.993 47.0181C32.993 55.0575 26.4929 61.5747 18.4747 61.5747Z" fill="#FE7602"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.4941 20C22.9713 20 18.4941 15.5229 18.4941 10C18.4941 4.47715 22.9713 0 28.4941 0C34.017 0 38.4941 4.47715 38.4941 10C38.4941 15.5229 34.017 20 28.4941 20ZM28.4832 18.097C24.0286 18.097 20.4174 14.4763 20.4174 10.01C20.4174 5.54367 24.0286 1.92298 28.4832 1.92298C32.9378 1.92298 36.5489 5.54367 36.5489 10.01C36.5489 14.4763 32.9378 18.097 28.4832 18.097Z" fill="#FE7602"/>
</svg>
<svg  className='absolute 2xl:flex hidden  right-10 bottom-[800px] !z-[3] w-24' width="42" height="39" viewBox="0 0 42 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.976825 0.710491L40.3856 6.53693L15.6354 37.7527L0.976825 0.710491Z" stroke="#FF7500"/>
</svg>

    </div>
  );
};

export default Login;
