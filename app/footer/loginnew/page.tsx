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
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white  rounded-3xl  p-8  shadow-md w-full max-w-xl absolute z-[2]">
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
  <div>
    <label htmlFor="firstName">First Name:</label>
    <input type="text" id="firstName" name="firstName" required />
  </div>
  <div>
    <label htmlFor="lastName">Last Name:</label>
    <input type="text" id="lastName" name="lastName" required />
  </div>
  <div>
    <label htmlFor="email">Email Address:</label>
    <input type="email" id="email" name="email" required />
  </div>
  <div>
    <label htmlFor="phoneNumber">Phone Number:</label>
    <input type="tel" id="phoneNumber" name="phoneNumber" required />
  </div>

  {/* Second Section: Billing Address */}
  <div>
    <h2>Billing Address</h2>
    <div>
      <label htmlFor="companyName">Company Name (Optional):</label>
      <input type="text" id="companyName" name="companyName" />
    </div>
    <div>
      <label htmlFor="streetAddress1">Street Address:</label>
      <input type="text" id="streetAddress1" name="streetAddress1" required />
    </div>
    <div>
      <label htmlFor="streetAddress2">Street Address 2:</label>
      <input type="text" id="streetAddress2" name="streetAddress2" />
    </div>
    <div>
      <label htmlFor="city">City:</label>
      <input type="text" id="city" name="city" required />
    </div>
    <div>
      <label htmlFor="state">State:</label>
      <input type="text" id="state" name="state" required />
    </div>
    <div>
      <label htmlFor="postalCode">Postal Code:</label>
      <input type="text" id="postalCode" name="postalCode" required />
    </div>
    <div>
      <label htmlFor="country">Country:</label>
      <select id="country" name="country" required>
        {/* You can populate options dynamically or hardcode them */}
        <option value="">Select Country</option>
        <option value="USA">United States</option>
        <option value="Canada">Canada</option>
        {/* Add more options as needed */}
      </select>
    </div>
  </div>

  {/* Submit Button */}
  <button type="submit">Submit</button>
 
        </form>
      </div>


    </div>
  );
};

export default Login;
