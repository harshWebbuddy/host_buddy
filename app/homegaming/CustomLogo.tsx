import React from 'react';

interface CustomLogoProps {
  fill: string;
}

const CustomLogo: React.FC<CustomLogoProps> = ({ fill }) => {
  return (
    <svg
      viewBox="0 0 105 91"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:fill-red"
    >
      <g fill={fill}>
        <path d="M88.0193 49.1002C90.1703 49.1246 90.0888 44.1857 87.7386 28.052C85.2396 10.9753 84.067 7.29926 81.6309 8.15175C78.2952 9.3653 84.5417 48.9712 88.0193 49.1002Z" />
        <path d="M13.7523 66.178C14.138 72.6033 15.289 73.3634 29.6458 76.7086C44.4707 80.1791 47.3023 80.2854 48.1827 77.561C49.759 72.6147 46.1277 70.4374 28.005 65.2303C14.6322 61.3962 13.4677 61.4355 13.7523 66.178Z" />
        <path d="M33.7112 29.3298C33.9273 33.9535 34.9463 35.5812 40.7501 40.6989C58.0242 55.8139 69.1641 67.981 68.563 58.9892C68.3426 55.3176 65.4211 52.1764 45.8032 33.8243C34.9104 23.7305 33.4626 23.1418 33.7112 29.3298Z"/>
      </g>
    </svg>
  );
};

export default CustomLogo;
