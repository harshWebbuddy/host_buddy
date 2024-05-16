// import { FiHeadphones } from "react-icons/fi";
import React from "react";
import Image from "next/image";
import { FaHeadphones, FaHeadphonesAlt } from "react-icons/fa";
const Black = () => {
 const items = [
  {
    icon: (
      <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.6875" y="0.894653" width="62.0702" height="62.0702" rx="8.80136" fill="#FF7500"/>
      <path d="M23.4619 44.2401C21.9984 44.2401 20.6835 43.9543 19.5172 43.3826C18.3739 42.788 17.3906 41.9419 16.5673 40.8443C15.767 39.7238 15.1495 38.386 14.7151 36.831C14.3034 35.276 14.0976 33.5152 14.0976 31.5486C14.0976 29.5134 14.3149 27.7183 14.7494 26.1633C15.2067 24.6083 15.847 23.2935 16.6702 22.2187C17.5163 21.1439 18.5225 20.3321 19.6887 19.7833C20.855 19.2345 22.147 18.9601 23.5648 18.9601C25.0283 18.9601 26.3318 19.2573 27.4751 19.8519C28.6185 20.4236 29.5904 21.2583 30.3907 22.3559C31.214 23.4535 31.8314 24.7799 32.243 26.3348C32.6546 27.8898 32.8604 29.6506 32.8604 31.6172C32.8604 33.6296 32.6318 35.4247 32.1744 37.0025C31.7399 38.5804 31.0996 39.9067 30.2535 40.9815C29.4303 42.0563 28.447 42.8681 27.3036 43.4169C26.1603 43.9657 24.8797 44.2401 23.4619 44.2401ZM23.4962 39.9868C24.1365 39.9868 24.7196 39.861 25.2456 39.6094C25.7715 39.335 26.2289 38.8777 26.6176 38.2374C27.0064 37.5971 27.3036 36.7396 27.5094 35.6648C27.7381 34.5672 27.8525 33.2065 27.8525 31.5829C27.8525 29.9593 27.7381 28.6102 27.5094 27.5354C27.3036 26.4377 27.0064 25.5802 26.6176 24.9628C26.2289 24.3225 25.7715 23.8766 25.2456 23.625C24.7196 23.3506 24.1365 23.2134 23.4962 23.2134C22.8559 23.2134 22.2613 23.3506 21.7125 23.625C21.1866 23.8766 20.7292 24.3225 20.3405 24.9628C19.9517 25.5802 19.6544 26.4263 19.4486 27.5011C19.2428 28.5759 19.1399 29.9365 19.1399 31.5829C19.1399 33.2065 19.2428 34.5672 19.4486 35.6648C19.6544 36.7396 19.9517 37.5971 20.3405 38.2374C20.7292 38.8777 21.1866 39.335 21.7125 39.6094C22.2613 39.861 22.8559 39.9868 23.4962 39.9868ZM40.9333 44V27.3982H34.6905V23.5564H35.7195C37.366 23.5564 38.658 23.1677 39.5955 22.3902C40.556 21.5898 41.0934 20.5494 41.2077 19.2688H45.9756V44H40.9333Z" fill="white"/>
      </svg>
      
      

    ),

    title: "Instant sign up",
    description:
      "Sign up in less than a minute. Completely free. Get verified and gain access to your affiliate dashboard.",
  },
  {
    icon: (
      <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.6875" y="0.894653" width="62.0702" height="62.0702" rx="8.80136" fill="#FF7500"/>
      <path d="M21.4619 44.2401C19.9984 44.2401 18.6835 43.9543 17.5172 43.3826C16.3739 42.788 15.3906 41.9419 14.5673 40.8443C13.767 39.7238 13.1495 38.386 12.7151 36.831C12.3034 35.276 12.0976 33.5152 12.0976 31.5486C12.0976 29.5134 12.3149 27.7183 12.7494 26.1633C13.2067 24.6083 13.847 23.2935 14.6702 22.2187C15.5163 21.1439 16.5225 20.3321 17.6887 19.7833C18.855 19.2345 20.147 18.9601 21.5648 18.9601C23.0283 18.9601 24.3318 19.2573 25.4751 19.8519C26.6185 20.4236 27.5904 21.2583 28.3907 22.3559C29.214 23.4535 29.8314 24.7799 30.243 26.3348C30.6546 27.8898 30.8604 29.6506 30.8604 31.6172C30.8604 33.6296 30.6318 35.4247 30.1744 37.0025C29.7399 38.5804 29.0996 39.9067 28.2535 40.9815C27.4303 42.0563 26.447 42.8681 25.3036 43.4169C24.1603 43.9657 22.8797 44.2401 21.4619 44.2401ZM21.4962 39.9868C22.1365 39.9868 22.7196 39.861 23.2456 39.6094C23.7715 39.335 24.2289 38.8777 24.6176 38.2374C25.0064 37.5971 25.3036 36.7396 25.5094 35.6648C25.7381 34.5672 25.8525 33.2065 25.8525 31.5829C25.8525 29.9593 25.7381 28.6102 25.5094 27.5354C25.3036 26.4377 25.0064 25.5802 24.6176 24.9628C24.2289 24.3225 23.7715 23.8766 23.2456 23.625C22.7196 23.3506 22.1365 23.2134 21.4962 23.2134C20.8559 23.2134 20.2613 23.3506 19.7125 23.625C19.1866 23.8766 18.7292 24.3225 18.3405 24.9628C17.9517 25.5802 17.6544 26.4263 17.4486 27.5011C17.2428 28.5759 17.1399 29.9365 17.1399 31.5829C17.1399 33.2065 17.2428 34.5672 17.4486 35.6648C17.6544 36.7396 17.9517 37.5971 18.3405 38.2374C18.7292 38.8777 19.1866 39.335 19.7125 39.6094C20.2613 39.861 20.8559 39.9868 21.4962 39.9868ZM33.3079 44V43.2797C33.3079 41.8162 33.5251 40.5241 33.9596 39.4036C34.3941 38.2831 34.9658 37.2998 35.6747 36.4537C36.4064 35.5848 37.1954 34.8187 38.0415 34.1555C38.9104 33.4695 39.768 32.8407 40.6141 32.269C41.483 31.6744 42.2719 31.0913 42.9808 30.5196C43.7126 29.9479 44.2957 29.3534 44.7302 28.7359C45.1647 28.0956 45.3819 27.3868 45.3819 26.6093C45.3819 25.9232 45.2333 25.3287 44.936 24.8256C44.6387 24.3225 44.2271 23.9452 43.7012 23.6936C43.1981 23.4192 42.5921 23.282 41.8832 23.282C41.1514 23.282 40.4997 23.4421 39.928 23.7622C39.3792 24.0595 38.9676 24.5169 38.6932 25.1343C38.4188 25.7289 38.3159 26.4606 38.3845 27.3296H33.3765C33.3308 25.6374 33.6623 24.1624 34.3712 22.9047C35.103 21.647 36.132 20.6751 37.4583 19.9891C38.8075 19.3031 40.3854 18.9601 42.1919 18.9601C43.8841 18.9601 45.3591 19.2573 46.6168 19.8519C47.8745 20.4465 48.8464 21.304 49.5324 22.4245C50.2413 23.5221 50.5957 24.837 50.5957 26.3691C50.5957 27.4211 50.4242 28.3586 50.0812 29.1819C49.7611 30.0051 49.3266 30.7597 48.7778 31.4457C48.2289 32.1318 47.6115 32.7606 46.9255 33.3323C46.2395 33.8811 45.5306 34.4071 44.7988 34.9102C44.0899 35.4132 43.3925 35.9163 42.7064 36.4194C42.0433 36.8996 41.4487 37.4027 40.9228 37.9287C40.3968 38.4318 39.9966 38.9806 39.7222 39.5751H50.8358V44H33.3079Z" fill="white"/>
      </svg>
      
      
    ),
    title: "Track your performance",
    description:
      "Access one of the best affiliate control panels in the industry. Easily track and optimize your campaigns.",
  },
  // {
  {
    icon: (
      <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.6875" y="0.894653" width="62.0702" height="62.0702" rx="8.80136" fill="#FF7500"/>
      <path d="M20.4619 44.2401C18.9984 44.2401 17.6835 43.9543 16.5172 43.3826C15.3739 42.788 14.3906 41.9419 13.5673 40.8443C12.767 39.7238 12.1495 38.386 11.7151 36.831C11.3034 35.276 11.0976 33.5152 11.0976 31.5486C11.0976 29.5134 11.3149 27.7183 11.7494 26.1633C12.2067 24.6083 12.847 23.2935 13.6702 22.2187C14.5163 21.1439 15.5225 20.3321 16.6887 19.7833C17.855 19.2345 19.147 18.9601 20.5648 18.9601C22.0283 18.9601 23.3318 19.2573 24.4751 19.8519C25.6185 20.4236 26.5904 21.2583 27.3907 22.3559C28.214 23.4535 28.8314 24.7799 29.243 26.3348C29.6546 27.8898 29.8604 29.6506 29.8604 31.6172C29.8604 33.6296 29.6318 35.4247 29.1744 37.0025C28.7399 38.5804 28.0996 39.9067 27.2535 40.9815C26.4303 42.0563 25.447 42.8681 24.3036 43.4169C23.1603 43.9657 21.8797 44.2401 20.4619 44.2401ZM20.4962 39.9868C21.1365 39.9868 21.7196 39.861 22.2456 39.6094C22.7715 39.335 23.2289 38.8777 23.6176 38.2374C24.0064 37.5971 24.3036 36.7396 24.5094 35.6648C24.7381 34.5672 24.8525 33.2065 24.8525 31.5829C24.8525 29.9593 24.7381 28.6102 24.5094 27.5354C24.3036 26.4377 24.0064 25.5802 23.6176 24.9628C23.2289 24.3225 22.7715 23.8766 22.2456 23.625C21.7196 23.3506 21.1365 23.2134 20.4962 23.2134C19.8559 23.2134 19.2613 23.3506 18.7125 23.625C18.1866 23.8766 17.7292 24.3225 17.3405 24.9628C16.9517 25.5802 16.6544 26.4263 16.4486 27.5011C16.2428 28.5759 16.1399 29.9365 16.1399 31.5829C16.1399 33.2065 16.2428 34.5672 16.4486 35.6648C16.6544 36.7396 16.9517 37.5971 17.3405 38.2374C17.7292 38.8777 18.1866 39.335 18.7125 39.6094C19.2613 39.861 19.8559 39.9868 20.4962 39.9868ZM41.1233 44.3087C39.2482 44.3087 37.636 43.9771 36.2868 43.314C34.9605 42.6508 33.9315 41.7247 33.1997 40.5356C32.4908 39.3236 32.1135 37.9172 32.0678 36.3165H37.0758C37.0758 37.0711 37.2358 37.7229 37.556 38.2717C37.899 38.8205 38.3678 39.255 38.9623 39.5751C39.5798 39.8724 40.3001 40.0211 41.1233 40.0211C41.9465 40.0211 42.6554 39.8724 43.25 39.5751C43.8445 39.2779 44.3019 38.8662 44.622 38.3403C44.9651 37.8143 45.1366 37.1855 45.1366 36.4537C45.1366 35.9278 45.0451 35.4704 44.8621 35.0817C44.7021 34.6929 44.462 34.3613 44.1418 34.0869C43.8445 33.8125 43.4787 33.6067 43.0442 33.4695C42.6326 33.3323 42.1638 33.2637 41.6378 33.2637H38.5507V29.4906H41.2262C42.0037 29.4906 42.6554 29.3534 43.1814 29.0789C43.7073 28.8045 44.0961 28.4272 44.3476 27.947C44.622 27.4668 44.7592 26.9294 44.7592 26.3348C44.7592 25.6717 44.6106 25.1114 44.3133 24.6541C44.0161 24.1967 43.593 23.8537 43.0442 23.625C42.5182 23.3735 41.8894 23.2477 41.1576 23.2477C40.3801 23.2477 39.7055 23.3964 39.1338 23.6936C38.5621 23.9909 38.1162 24.4025 37.7961 24.9285C37.4988 25.4544 37.3387 26.0947 37.3159 26.8494H32.2736C32.3193 25.2258 32.7195 23.8309 33.4741 22.6646C34.2288 21.4984 35.2807 20.5951 36.6298 19.9548C37.979 19.2917 39.5683 18.9601 41.3977 18.9601C42.6783 18.9601 43.8331 19.1201 44.8621 19.4403C45.9141 19.7376 46.8059 20.1835 47.5376 20.778C48.2923 21.3497 48.8754 22.0472 49.287 22.8704C49.6986 23.6936 49.9044 24.6083 49.9044 25.6145C49.9044 26.4835 49.7558 27.2838 49.4585 28.0156C49.1612 28.7474 48.7496 29.3762 48.2237 29.9022C47.6977 30.4281 47.0803 30.8283 46.3714 31.1027V31.3085C47.2175 31.5372 47.9264 31.9145 48.4981 32.4405C49.0698 32.9664 49.5043 33.6181 49.8015 34.3956C50.1217 35.1503 50.2817 35.9964 50.2817 36.9339C50.2817 38.4203 49.893 39.7238 49.1155 40.8443C48.338 41.9419 47.2632 42.7995 45.8912 43.4169C44.5191 44.0114 42.9298 44.3087 41.1233 44.3087Z" fill="white"/>
      </svg>
      
      

      
    ),
    title: "Use Affiliate Banners",
    description:
      "Never be empty handed. Marketing materials in one place, tailored to your style.handed.handed.",
  },
  {
    icon: (
      <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.6875" y="0.894653" width="62.0702" height="62.0702" rx="8.80136" fill="#FF7500"/>
      <path d="M20.4619 44.2401C18.9984 44.2401 17.6835 43.9543 16.5172 43.3826C15.3739 42.788 14.3906 41.9419 13.5673 40.8443C12.767 39.7238 12.1495 38.386 11.7151 36.831C11.3034 35.276 11.0976 33.5152 11.0976 31.5486C11.0976 29.5134 11.3149 27.7183 11.7494 26.1633C12.2067 24.6083 12.847 23.2935 13.6702 22.2187C14.5163 21.1439 15.5225 20.3321 16.6887 19.7833C17.855 19.2345 19.147 18.9601 20.5648 18.9601C22.0283 18.9601 23.3318 19.2573 24.4751 19.8519C25.6185 20.4236 26.5904 21.2583 27.3907 22.3559C28.214 23.4535 28.8314 24.7799 29.243 26.3348C29.6546 27.8898 29.8604 29.6506 29.8604 31.6172C29.8604 33.6296 29.6318 35.4247 29.1744 37.0025C28.7399 38.5804 28.0996 39.9067 27.2535 40.9815C26.4303 42.0563 25.447 42.8681 24.3036 43.4169C23.1603 43.9657 21.8797 44.2401 20.4619 44.2401ZM20.4962 39.9868C21.1365 39.9868 21.7196 39.861 22.2456 39.6094C22.7715 39.335 23.2289 38.8777 23.6176 38.2374C24.0064 37.5971 24.3036 36.7396 24.5094 35.6648C24.7381 34.5672 24.8525 33.2065 24.8525 31.5829C24.8525 29.9593 24.7381 28.6102 24.5094 27.5354C24.3036 26.4377 24.0064 25.5802 23.6176 24.9628C23.2289 24.3225 22.7715 23.8766 22.2456 23.625C21.7196 23.3506 21.1365 23.2134 20.4962 23.2134C19.8559 23.2134 19.2613 23.3506 18.7125 23.625C18.1866 23.8766 17.7292 24.3225 17.3405 24.9628C16.9517 25.5802 16.6544 26.4263 16.4486 27.5011C16.2428 28.5759 16.1399 29.9365 16.1399 31.5829C16.1399 33.2065 16.2428 34.5672 16.4486 35.6648C16.6544 36.7396 16.9517 37.5971 17.3405 38.2374C17.7292 38.8777 18.1866 39.335 18.7125 39.6094C19.2613 39.861 19.8559 39.9868 20.4962 39.9868ZM43.7988 44L43.7645 38.3403H32.205V34.5672L42.564 19.2688H48.8411V34.2241H52.0654L52.0311 38.3403H48.8411V44H43.7988ZM37.213 34.2241H43.7988V24.6541L37.213 34.2241Z" fill="white"/>
      </svg>
      
      
    ),
    title: "Get your payout",
    description:
      "We share revenue fairly. Every eligible sale made earns you at least 60% commissions. And that's just the start.",
  },
];
  return (
    <div className="w-full bg-gradient-to-b from-[#292E34] to-[#16191C]   px-3 py-20">

      <div className="w-full max-w-[1220px] mx-auto">
      <div className="flex flex-col bl:flex-row justify-between gap-y-10 gap-x-30 items-center  pb-16">
        <div className="relative w-full items-center justify-center">
          <h2 className=" capitalize font-mona-sans text-white font-semibold 2xl:fomt-bold text-[42px] leading-relaxed w-full 2xl:text-center ">
          Join the Program in <span className="text-orange-500">Four Easy Steps</span>
  {/* <span className="pb-4 border-b-4 border-orange-500">Shared </span>Hosting  */}
          </h2>
      
        </div>
      
      </div>
        <div className="flex flex-col md:flex-row gap-x-8 gap-y-14 bl:items-center justify-center mx-auto ">
  {items.map((item, index) => (
    <div key={index} className="relative flex-1 w-full gap-10 group">
      <div className="absolute -top-7 left-9 w-16 h-16 flex justify-center items-center rounded-xl transition-all duration-300 ">
        {item.icon}
      </div>
      <div className="  rounded-2xl group hover:bg-[#F9EFE4] bg-transparent border text-[#16191C] p-4 pl-8 pt-10 transition-all duration-300 cursor-pointer">
        <h2 className="text-[18px] font-bold mt-4 leading-[26px] opacity-1 mb-4 text-white group-hover:text-black">{item.title}</h2>
        <p className="w-full opacity-70 font-mona-sans text-[16px] font-normal leading-normal text-left text-white group-hover:text-black">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};
export default Black;











