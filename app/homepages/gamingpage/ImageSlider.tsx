    import React, { useState } from 'react';

    interface ImageSliderProps {
    images: string[];
    }

    const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full xl:w-[500px] 2xl:w-[622px] h-full mp:h-[333px] 2xl:h-[444px] border-solid border-orange-500 border rounded-3xl flex items-center justify-center mp:-ml-2">
        {/* Previous button */}
        <div
        className="absolute top-160 left-24 transform p-2 rounded-full pa:mt-10 2xl:mt-0"
        onClick={prevImage}
      >
           <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
<path d="M36.2461 43.5L21.7461 29L36.2461 14.5" stroke="white" stroke-width="4.22917" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.2461 43.5L21.7461 29L36.2461 14.5" stroke="white" stroke-opacity="0.2" stroke-width="4.22917" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
        
        {/* Image */}
        <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
            className="w-[600px] h-[418px] "
            style={{ maxWidth: '100%', maxHeight: '100%'  }}

        />
        
        {/* Next button */}
        <div
            className="absolute top-160 -right-28 transform -translate-y-1/2  p-2 rounded-full"
            onClick={nextImage}
        >
          <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.7461 14.5L36.2461 29L21.7461 43.5" stroke="white" stroke-width="4.22917" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.7461 14.5L36.2461 29L21.7461 43.5" stroke="white" stroke-opacity="0.2" stroke-width="4.22917" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
        
        {/* Orange rectangle bar */}
        <div className="absolute bottom-4 2xl:flex hidden 2xl:left-96 transform  flex gap-2">
            {images.map((_, index) => (
            <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                index === currentImageIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
            ></div>
            ))}
        </div>
        </div>
    );
    };

    export default ImageSlider;
        