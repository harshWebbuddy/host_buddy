import React from "react";

const Rating = () => {
  return (
    <div className="mx-auto w-full justify-center items-center bg-white">
      <div className="mx-auto  rating_whole">
        <div className="bg-[#F5F5F5] rating rounded-2xl mx-auto">
          <div className="customer_happiness">
            <h1 className="">Customer Happiness</h1>
          </div>
          <div className="rating_flex">
            <div className="column">
            <div>
              <img src="./phone/trustpilot1.svg" />
            </div>
            <div className="ratingopacity">
              <img src="./phone/ratingline1.svg" />
            </div>
            
            <div>
              <img src="./phone/rating1.svg" />
            </div>
            <div className="ratingopacity">
              <img src="./phone/ratingline1.svg" />
            </div>
            </div>
            <div className="column">
            <div>
              <img src="./phone/rating2.svg" />
            </div>
            <div className="ratingopacity">
              <img src="./phone/ratingline1.svg" />
            </div>
            <div>
              <img src="./phone/rating3.svg" />
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
