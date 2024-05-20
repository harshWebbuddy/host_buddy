// import { FiHeadphones } from "react-icons/fi";
import React from "react";
import Image from "next/image";
import { FaHeadphones, FaHeadphonesAlt } from "react-icons/fa";
const Support = () => {
  const items = [
    {
      icon: <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.34233 13.948C9.03581 13.948 8.73618 14.0389 8.48132 14.2092C8.22646 14.3794 8.02782 14.6215 7.91053 14.9047C7.79323 15.1879 7.76254 15.4995 7.82233 15.8001C7.88213 16.1007 8.02973 16.3769 8.24647 16.5936C8.46321 16.8103 8.73936 16.9579 9.03998 17.0177C9.34061 17.0775 9.65222 17.0469 9.9354 16.9296C10.2186 16.8123 10.4606 16.6136 10.6309 16.3588C10.8012 16.1039 10.8921 15.8043 10.8921 15.4977C10.8921 15.0867 10.7288 14.6925 10.4382 14.4019C10.1475 14.1113 9.75336 13.948 9.34233 13.948ZM15.5414 13.948C15.2349 13.948 14.9353 14.0389 14.6804 14.2092C14.4256 14.3794 14.2269 14.6215 14.1096 14.9047C13.9923 15.1879 13.9616 15.4995 14.0214 15.8001C14.0812 16.1007 14.2288 16.3769 14.4456 16.5936C14.6623 16.8103 14.9385 16.9579 15.2391 17.0177C15.5397 17.0775 15.8513 17.0469 16.1345 16.9296C16.4177 16.8123 16.6597 16.6136 16.83 16.3588C17.0003 16.1039 17.0912 15.8043 17.0912 15.4977C17.0912 15.0867 16.9279 14.6925 16.6373 14.4019C16.3466 14.1113 15.9525 13.948 15.5414 13.948ZM21.7405 13.948C21.434 13.948 21.1344 14.0389 20.8795 14.2092C20.6247 14.3794 20.426 14.6215 20.3087 14.9047C20.1914 15.1879 20.1607 15.4995 20.2205 15.8001C20.2803 16.1007 20.4279 16.3769 20.6447 16.5936C20.8614 16.8103 21.1376 16.9579 21.4382 17.0177C21.7388 17.0775 22.0504 17.0469 22.3336 16.9296C22.6168 16.8123 22.8588 16.6136 23.0291 16.3588C23.1994 16.1039 23.2903 15.8043 23.2903 15.4977C23.2903 15.0867 23.127 14.6925 22.8364 14.4019C22.5457 14.1113 22.1516 13.948 21.7405 13.948ZM15.5414 0C13.5062 0 11.491 0.400861 9.6107 1.1797C7.73042 1.95853 6.02197 3.10009 4.58287 4.53919C1.67648 7.44558 0.0436825 11.3875 0.0436825 15.4977C0.0301341 19.0764 1.26923 22.547 3.54617 25.3078L0.446624 28.4074C0.231581 28.6253 0.0859078 28.9021 0.0279864 29.2027C-0.0299351 29.5033 0.00249033 29.8144 0.121171 30.0966C0.249892 30.3755 0.458564 30.6098 0.720697 30.7698C0.98283 30.9299 1.2866 31.0084 1.59346 30.9955H15.5414C19.6517 30.9955 23.5936 29.3627 26.5 26.4563C29.4064 23.5499 31.0392 19.608 31.0392 15.4977C31.0392 11.3875 29.4064 7.44558 26.5 4.53919C23.5936 1.63279 19.6517 0 15.5414 0ZM15.5414 27.8959H5.32841L6.7697 26.4547C6.91614 26.3111 7.03264 26.14 7.11244 25.9511C7.19225 25.7622 7.23379 25.5594 7.23464 25.3543C7.22881 24.9455 7.0617 24.5556 6.7697 24.2695C4.74041 22.2424 3.4767 19.5745 3.1939 16.7202C2.91109 13.8659 3.62667 11.0019 5.21873 8.61601C6.81079 6.23015 9.18083 4.47011 11.9251 3.63573C14.6693 2.80135 17.6179 2.94427 20.2686 4.04013C22.9192 5.13599 25.108 7.11699 26.4618 9.64563C27.8157 12.1743 28.2509 15.0941 27.6934 17.9077C27.1359 20.7212 25.6201 23.2544 23.4043 25.0757C21.1884 26.897 18.4097 27.8937 15.5414 27.8959Z" fill="#FF7500"/>
      </svg>
      
      ,
      title: "General Enquiries",
      description: "Lorem ipsum dolor sit amet consectetur. Sit mi eget sit tempor nisi. Non morbi vestibulum tellus ullamcorper. Integer vitae egestas justo nisl nulla hac risus. Non lectus viverra eget fusce ultrices maecenas. Enim."
    },
    {
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14.1667" cy="14.1667" r="1.66667" fill="#FF7500" stroke="#FF7500" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66406 11.6666V18.0983C6.66406 18.9933 7.01906 19.8516 7.6524 20.485L21.1791 34.0116C21.812 34.6447 22.6705 35.0003 23.5657 35.0003C24.4609 35.0003 25.3194 34.6447 25.9524 34.0116L34.0091 25.955C34.6421 25.322 34.9978 24.4635 34.9978 23.5683C34.9978 22.6731 34.6421 21.8146 34.0091 21.1816L20.4807 7.65496C19.8481 7.02245 18.9903 6.66697 18.0957 6.66663H11.6641C8.90264 6.66663 6.66406 8.9052 6.66406 11.6666Z" stroke="#FF7500" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,      
      title: "Sale",
      description: "Lorem ipsum dolor sit amet consectetur. Sit mi eget sit tempor nisi. Non morbi vestibulum tellus ullamcorper. Integer vitae egestas justo nisl nulla hac risus. Non lectus viverra eget fusce ultrices maecenas. Enim."
    },
    // {
      {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.33333 6.66663H15L18.3333 15L14.1667 17.5C15.9516 21.1192 18.8808 24.0484 22.5 25.8333L25 21.6666L33.3333 25V31.6666C33.3333 33.5076 31.841 35 30 35C16.5461 34.1824 5.8176 23.4539 5 9.99996C5 8.15901 6.49238 6.66663 8.33333 6.66663" stroke="#FF7500" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M25 11.6666C26.8409 11.6666 28.3333 13.159 28.3333 15" stroke="#FF7500" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M25 5C30.5228 5 35 9.47715 35 15" stroke="#FF7500" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>        
        ,
        title: "Support",
        description: "Lorem ipsum dolor sit amet consectetur. Sit mi eget sit tempor nisi. Non morbi vestibulum tellus ullamcorper. Integer vitae egestas justo nisl nulla hac risus. Non lectus viverra eget fusce ultrices maecenas. Enim."
      },
  ];
  return (
    <div className=""   >
      <div className="w-full max-w-[1200px] mx-auto">
     
      <div className="flex flex-col md:flex-row gap-x-8 gap-y-14 
      bl:items-center justify-center mx-auto">
  {items.map((item, index) => (
    <div key={index} className="relative flex-1 w-full  group">
      <div className="absolute 
      left-9 top-4 flex justify-center items-center rounded-xl transition-all duration-300 ">
        {item.icon}
      </div>
      <div className="bg-[#F5F5F5] shadow-solid-orange rounded-2xl group featuresvg20  text-[#16191C] pt-12 pb-4 px-10 transition-all duration-300 cursor-pointer">
        <h2 className="text-xl font-bold mt-4 opacity-1 mb-4">{item.title}</h2>
        <p className=" opacity-70 font-mona-sans text-[12px] font-normal leading-normal w-full text-left">
          {item.description}
        </p>

        <h2 className="text-xl font-bold mt-4 opacity-1 mb-4 flex flex-row group-hover:text-orange-500 ">Learn More<svg className="item-center justify-center translate-y-1.5 translate-x-2" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 6.99683C0.447715 6.99683 -4.82823e-08 7.44454 0 7.99683C4.82823e-08 8.54911 0.447715 8.99683 1 8.99683L1 6.99683ZM19.7071 8.70393C20.0976 8.31341 20.0976 7.68024 19.7071 7.28972L13.3431 0.925757C12.9526 0.535233 12.3195 0.535233 11.9289 0.925757C11.5384 1.31628 11.5384 1.94945 11.9289 2.33997L17.5858 7.99682L11.9289 13.6537C11.5384 14.0442 11.5384 14.6774 11.9289 15.0679C12.3195 15.4584 12.9526 15.4584 13.3431 15.0679L19.7071 8.70393ZM1 8.99683L19 8.99682L19 6.99682L1 6.99683L1 8.99683Z" fill="black"/>
</svg>
</h2>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};
export default Support;











