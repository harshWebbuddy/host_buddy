"use client"

import React, { useState } from "react";

const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

const OptionSelector = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const renderContent = (option: string) => {
    switch (option) {
      case "Option 1":
        return <div className="option-content">
            <div>
                <li>Custom Branding</li>
                <li>Custom Branding</li>
                <li>Custom Branding</li>
                <li>Custom Branding</li>
                <li>Custom Branding</li>
                <li>Custom Branding</li>
                <li>Custom Branding</li>
                <li>Custom Branding</li>


            </div>
        </div>;
      case "Option 2":
        return <div className="option-content">Content for Option 2</div>;
      case "Option 3":
        return <div className="option-content">Content for Option 3</div>;
      case "Option 4":
        return <div className="option-content">Content for Option 4</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex w-full max-w-4xl mx-auto p-4 border rounded-lg shadow-md">
      <div className="w-1/3 p-4 border-r">
        <ul className="space-y-4">
          {options.map((option, index) => (
            <li
              key={index}
              className={`cursor-pointer p-2 rounded ${
                selectedOption === option ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 p-4">
        <h2 className="text-2xl font-bold mb-4">Selected Option</h2>
        <div className="text-xl">
          {renderContent(selectedOption)}
        </div>
      </div>
    </div>
  );
};

export default OptionSelector;
