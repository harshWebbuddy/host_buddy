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
        <div className="relative w-full 2xl:w-[622px] h-full 2xl:h-[444px] border-solid border-orange-500 border rounded-3xl ">
        {/* Previous button */}
        <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2  p-2 rounded-full pa:mt-10 2xl:mt-0"
            onClick={prevImage}
        >
            <img src="./homegaming/leftarrow.svg" alt="Previous" className="w-[90.5px] h-[40px] -rotate-1" />
        </button>
        
        {/* Image */}
        <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
            className="w-[590px]"
        />
        
        {/* Next button */}
        <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2  p-2 rounded-full pa:mt-10 2xl:mt-0"
            onClick={nextImage}
        >
            <img src="./homegaming/rightarrow.svg" alt="Next"  className="w-[90.5px] h-[40px] "  />
        </button>
        
        {/* Orange rectangle bar */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2  ">
            {images.map((_, index) => (
            <div
                key={index}
                className={`h-2 w-2 rounded-full pa:mt-20  ${
                index === currentImageIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
            ></div>
            ))}
        </div>
        </div>
    );
    };

    export default ImageSlider;
        