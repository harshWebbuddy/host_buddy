import React from 'react'

const Innerfooter = () => {
  return (
    <div className='innerfooter mx-auto'>
        <div className='innerfooter1'>
<h4 className=' text-white font-inter text-base italic font-light leading-9 text-left'>
Newsletter
</h4>
<h2>
Don't miss Any News & offers From Us.
</h2>
        </div>
        <div className='innerfooter2'>
<p>Metus sed Disse aliquet amet ultrices faucibus mauris sito diattis morbi suspendisse pellentesque pulvinar interdum justo suspendisse.</p>

<div className='footernimg'><div className="input-container">
    <input type="text" placeholder="Your email address" className="inputfooter" />
    <img src="/subscribe.svg" alt="Subscribe" className='imagefooter'/>
  </div></div>
        </div>
    </div>
  )
}

export default Innerfooter