"use client"
import React, { useState } from 'react'

const Features = () => {
    const boxesData = [
        {
          id: 1,
          heading: 'Reseller API Automation',
          paragraph: 'But I must explain to you  idea of denouncing pleasureand praising pain was born ',
        },
        {
          id: 2,
          heading: 'High Websites Performance',
          paragraph: 'Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.',
        },
        {
          id: 3,
          heading: 'Easy 1-click-installer',
          paragraph: 'Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.',
        },
      ];
     
interface BoxProps {
    heading: string;
    paragraph: string;
  }
  
  const Box: React.FC<BoxProps> = ({ heading, paragraph }) => (
    <div>  
      <div className="box">
          <div className="boxinside">
            <h2>{heading}</h2>
            <p>{paragraph}</p>
            
          </div>
          <div className="button">Go API</div>
          
        </div>
       
        </div>  
      );
      
      const Boxes = () => (
        <div className="box-container">
        {boxesData.map((box, index) => (
          <React.Fragment key={box.id}>
            <Box heading={box.heading} paragraph={box.paragraph} />
            {index !== boxesData.length - 1 && ( // Check if it's not the last box
              <div className='separateline'>
                <svg width="497" height="1" viewBox="0 0 497 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="0.5" x2="497" y2="0.5" stroke="#16191C" strokeOpacity="0.2" strokeDasharray="4 4"/>
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      );      
  return (
   <div className='mx-auto'>
     <div className='cloudfeatures mx-auto slide-reveal'>
       <div className='cloudheadings mx-auto'> 
       <div className='cloudfeatures1'>
            <h2>Top-Notch Features</h2>
            <div className="cloudorangeline"><svg width="177" height="4" viewBox="0 0 177 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="2" x2="177" y2="2" stroke="#FF7500" stroke-width="4"/>
</svg>
</div>
        </div>
        <div className='cloudfeatures2'>
<p>Lorem ipsum dolor sit amet consectetur. Ornare et amet lobortis ornare. Ullamcorper accumsan donec eu condimentum diam a augue arcu. Erat nibh nisl lacinia egestas mauris facilisi aliquam sit mauris. </p>
        </div>
        </div>
        <div className='imagenoption'>
<div className="option">
<Boxes/>
</div>
<div className='image'>

<img src="/cloudhosting/feature.svg" alt="" className='2xl:flex xl:flex lg:flex sm:flex bl:flex md:flex hidden w-auto h-auto'/>

</div>
         </div>
    </div></div>
  )
}

export default Features