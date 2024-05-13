import Image from "next/image";

const Uniquecpanel = () => {
  return (
    <section className="relative b">
      <div className="p-4 w-full max-w-[1300px] mx-auto ">
        <div className="flex flex-col 2xl:flex-row mx-auto items-center ">
          <div className="w-full flex flex-col space-y-20">
            <div>
              <h2 className="text-[42px] leading-[63px] font-semibold text-black w-full 2xl:max-w-full">
              How HostBuddy<span className="pb-4 border-b-4 border-orange-500">  Works</span>
              </h2>
            </div>
            <div className="w-full flex flex-col xl:flex-row justify-start gap-20 xl:gap-10 2xl:gap-20">
              <Image src="/google/uniqueorangepic.jpeg" alt="" width={600} height={582} className="rounded-3xl object-cover h-[700px]" />
              <div className="w-full">
                <div className="flex">
                  <Image draggable={false} src="/line-svg.svg" alt="" width={7} height={404} className="h-[700px] object-cover select-none" />
                  <div className="space-y-4 flex flex-col justify-between">
                    <div className="flex items-start mt-20 gap-1 min-[400px]:gap-4">
                      <Image draggable={false} src="/mini-line-svg.svg" alt="" width={50} height={40} className="-translate-x-[6px] select-none" />
                     
                      <div className="space-y-0 -translate-y-[85px]">
                      <div className="flex flex-row justify-between items-center"><svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.9822 26.3771C29.1104 26.3771 25.9619 29.5254 25.9619 33.3969C25.9619 37.2684 29.1104 40.4167 32.9822 40.4167C36.854 40.4167 40.0026 37.2684 40.0026 33.3969C40.0026 29.5254 36.854 26.3771 32.9822 26.3771ZM36.6753 31.2527L32.8971 36.7409C32.7525 36.9536 32.5227 37.0812 32.2759 37.1068C32.2504 37.1068 32.2249 37.1068 32.1993 37.1068C31.9781 37.1068 31.7569 37.0217 31.5952 36.86L28.8551 34.1202C28.5232 33.7883 28.5232 33.2523 28.8551 32.9204C29.187 32.5886 29.7231 32.5886 30.055 32.9204L32.0717 34.937L35.2713 30.2912C35.5351 29.8998 36.0712 29.8062 36.4541 30.07C36.837 30.3337 36.9391 30.8698 36.6753 31.2527ZM34.4714 21.1442V18.1406C34.4714 16.4303 33.0758 15.0349 31.3654 15.0349H24.3195C22.6091 15.0349 21.2136 16.4303 21.2136 18.1406V18.7872H18.7969V18.1406C18.7969 16.4303 17.4013 15.0349 15.6909 15.0349H8.64503C6.93462 15.0349 5.53906 16.4303 5.53906 18.1406V21.1442C5.53906 22.8545 6.93462 24.2499 8.64503 24.2499H15.6909C17.4013 24.2499 18.7969 22.8545 18.7969 21.1442V20.4975H21.2136V21.1442C21.2136 22.8545 22.6091 24.2499 24.3195 24.2499H31.3654C33.0758 24.2584 34.4714 22.863 34.4714 21.1442ZM17.095 18.7958H14.8144C14.3464 18.7958 13.9635 19.1787 13.9635 19.6466C13.9635 20.1146 14.3464 20.4975 14.8144 20.4975H17.095V21.1442C17.095 21.9185 16.4653 22.5482 15.6909 22.5482H8.64503C7.87067 22.5567 7.24096 21.9185 7.24096 21.1442V18.1406C7.24096 17.3663 7.87067 16.7366 8.64503 16.7366H15.6909C16.4653 16.7366 17.095 17.3663 17.095 18.1406V18.7958ZM22.9155 21.1442V20.4975H25.196C25.664 20.4975 26.047 20.1146 26.047 19.6466C26.047 19.1787 25.664 18.7958 25.196 18.7958H22.9155V18.1491C22.9155 17.3748 23.5452 16.7451 24.3195 16.7451H31.3654C32.1398 16.7451 32.7695 17.3748 32.7695 18.1491V21.1527C32.7695 21.927 32.1398 22.5567 31.3654 22.5567H24.3195C23.5452 22.5567 22.9155 21.9185 22.9155 21.1442Z" fill="#FF7500"/>
<path d="M24.2606 33.3884C24.2606 33.1757 24.2776 32.963 24.2946 32.7503H2.90174C2.24651 32.7503 1.7019 32.2142 1.7019 31.5505V8.24481H38.2928V26.4963C38.9395 26.9983 39.5096 27.5854 39.9947 28.2406V7.39393V3.3182C39.9947 1.71854 38.6927 0.416687 37.0929 0.416687H2.90174C1.30195 0.416687 0 1.71854 0 3.3182V7.39393V31.559C0 33.1587 1.30195 34.4605 2.90174 34.4605H24.3372C24.2861 34.1032 24.2606 33.7543 24.2606 33.3884ZM12.1516 3.83724C12.2111 3.68408 12.3047 3.54794 12.4324 3.42881C12.7217 3.131 13.1557 2.99486 13.5812 3.07995C13.6578 3.08846 13.7429 3.1225 13.8194 3.13951C13.9045 3.19057 13.9811 3.2246 14.0407 3.26715C14.1088 3.3182 14.1768 3.36925 14.2279 3.42881C14.4662 3.66706 14.6023 3.9904 14.6023 4.33075C14.6023 4.66259 14.4747 4.97742 14.2279 5.22418C13.9896 5.46243 13.6663 5.59857 13.3344 5.59857C12.9855 5.59857 12.6707 5.47093 12.4324 5.22418C12.1941 4.97742 12.0495 4.66259 12.0495 4.33075C12.0495 4.16057 12.092 4.00741 12.1516 3.83724ZM8.10105 3.83724C8.16062 3.68408 8.25422 3.54794 8.36485 3.42881C8.49249 3.3182 8.62864 3.21609 8.79032 3.14802C9.26685 2.96083 9.82848 3.07144 10.1774 3.42881C10.2965 3.53943 10.3816 3.68408 10.4582 3.83724C10.5177 4.00741 10.5433 4.16057 10.5433 4.33926C10.5433 4.6711 10.4156 4.98593 10.1689 5.23269C10.0412 5.36032 9.91358 5.44541 9.74339 5.51348C9.59021 5.57304 9.42002 5.60708 9.25834 5.60708C8.90945 5.60708 8.5946 5.47944 8.35634 5.23269C8.1436 4.98593 7.99894 4.6711 7.99894 4.33926C7.99894 4.16057 8.04148 4.00741 8.10105 3.83724ZM4.05053 3.83724C4.11009 3.68408 4.2037 3.54794 4.31432 3.42881C4.3824 3.36925 4.45047 3.3182 4.51004 3.26715C4.58662 3.2246 4.66321 3.19057 4.7398 3.14802C4.81638 3.1225 4.89297 3.09697 4.96955 3.08846C5.39503 3.00337 5.82901 3.13951 6.13535 3.43732C6.24598 3.54794 6.33958 3.69259 6.39915 3.84575C6.46723 4.00741 6.50126 4.16057 6.50126 4.33926C6.50126 4.6711 6.37362 4.98593 6.12684 5.23269C5.88858 5.47093 5.57373 5.59857 5.22484 5.59857C4.87595 5.59857 4.5611 5.47093 4.32283 5.23269C4.07605 4.98593 3.94841 4.6711 3.94841 4.33926C3.94841 4.16057 3.97394 4.00741 4.05053 3.83724Z" fill="#FF7500"/>
</svg>
<svg width="31" height="73" viewBox="0 0 31 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.03" d="M18.4 73V22.7H0.6V13.2H3.5C8.3 13.2 12 12.0667 14.6 9.8C17.2 7.53333 18.6667 4.56667 19 0.899998H30.9V73H18.4Z" fill="#16191C"/>
</svg>

                            
                            </div>
                        <h1 className="text-3xl font-semibold">Connect Your Website</h1>
                        <p className="leading-loose pt-4">
                          Lorem ipsum dolor sit amet consectetur. Lobortis ultrices nec tincidunt eget tempor tempus risus enim. Fames rhoncus sed mattis elit
                          consectetur. Elit congue convallis quisque amet sit.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start mt-20 gap-1 min-[400px]:gap-4">
                      <Image draggable={false} src="/mini-line-svg.svg" alt="" width={50} height={40} className="-translate-x-[6px] select-none" />
                      <div className="space-y-0 -translate-y-[85px]">
                      <div className="flex flex-row justify-between items-center"><svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.07812 12.9466C8.07812 20.0797 13.8686 25.8932 20.9913 25.8932C28.1073 25.8932 33.9053 20.0797 33.9053 12.9466C33.9053 5.80509 28.1073 0 20.9913 0C13.8686 0 8.07812 5.80509 8.07812 12.9466ZM28.7997 16.661C27.3741 19.6671 24.3072 21.6099 20.9888 21.6099C16.9846 21.6099 13.617 18.8628 12.6397 15.1517L12.4414 15.4323C12.2789 15.6629 12.0215 15.7856 11.7607 15.7856C11.5941 15.7856 11.4266 15.7364 11.28 15.6328C10.905 15.3655 10.8159 14.8443 11.0808 14.4684L12.4972 12.4621C12.5105 12.4429 12.5322 12.4329 12.5472 12.4145C12.5839 12.3702 12.6247 12.3344 12.6688 12.2984C12.7097 12.2667 12.7488 12.2383 12.7947 12.214C12.8438 12.1881 12.8946 12.1706 12.9496 12.1556C12.9796 12.1464 13.0063 12.1264 13.0379 12.1214C13.0613 12.1172 13.0846 12.1247 13.1088 12.1222C13.1321 12.1214 13.1529 12.1088 13.1779 12.1088C13.2087 12.1088 13.2354 12.123 13.2662 12.1264C13.3229 12.1322 13.377 12.1422 13.432 12.1597C13.4845 12.1773 13.5311 12.199 13.5786 12.2258C13.6045 12.2408 13.6353 12.245 13.6603 12.2625L15.6632 13.69C16.0381 13.9581 16.1265 14.4793 15.859 14.8552C15.5932 15.231 15.0725 15.3212 14.6976 15.0523L14.251 14.7341C15.0425 17.7251 17.7586 19.9394 20.9888 19.9394C23.6682 19.9394 26.1435 18.3708 27.2941 15.9435C27.4916 15.5276 27.989 15.3521 28.4039 15.5476C28.8196 15.7456 28.9963 16.2442 28.7997 16.661ZM29.337 10.7357L29.5353 10.455C29.8011 10.0783 30.3218 9.9889 30.6967 10.2554C31.0725 10.5218 31.1616 11.043 30.8959 11.4197L29.4795 13.426C29.4662 13.4444 29.4445 13.4553 29.4295 13.4736C29.3929 13.5171 29.3529 13.553 29.3079 13.5889C29.2679 13.6206 29.2279 13.6499 29.1829 13.6741C29.1329 13.7 29.0821 13.7176 29.0279 13.7325C28.9971 13.7418 28.9704 13.7609 28.9388 13.7668C28.8921 13.7752 28.8455 13.7793 28.7997 13.7793C28.6988 13.7793 28.6005 13.7559 28.5063 13.7201C28.4764 13.7083 28.4506 13.6925 28.4214 13.6783C28.3864 13.6591 28.3489 13.6482 28.3164 13.6248L26.3135 12.1974C25.9386 11.9301 25.8511 11.4089 26.1177 11.033C26.3835 10.6572 26.9042 10.5677 27.2791 10.835L27.7257 11.1533C26.9342 8.16222 24.2181 5.94875 20.9888 5.94875C18.2135 5.94875 15.7016 7.59675 14.5909 10.146C14.4068 10.5694 13.9144 10.7632 13.4937 10.577C13.0721 10.3924 12.8796 9.89953 13.0638 9.4769C14.4401 6.31877 17.5511 4.27823 20.9888 4.27823C24.9921 4.27823 28.3597 7.02541 29.337 10.7357Z" fill="#FF7500"/>
<path d="M40.9682 10.9838C40.9682 8.82881 39.2186 7.07391 37.069 7.07391H34.328C34.5696 7.61767 34.7779 8.16892 34.9445 8.74444H37.069C38.3022 8.74444 39.3019 9.74758 39.3019 10.9838V28.0399H2.64288V10.9746C2.64288 9.74758 3.64268 8.74444 4.86745 8.74444H7.01697C7.18361 8.16892 7.3919 7.61767 7.63355 7.07391H4.86745C2.72623 7.07391 0.976562 8.81959 0.976562 10.9746V31.2966C0.976562 31.431 0.993242 31.5563 1.00158 31.6983C1.05157 32.232 1.20987 32.7248 1.45147 33.1683C1.45981 33.1851 1.49312 33.2268 1.5098 33.2603C1.57646 33.3689 1.64313 33.4774 1.72643 33.586C1.73477 33.6027 1.75139 33.6194 1.75973 33.6353C1.85971 33.7781 1.9847 33.9109 2.13467 34.078C2.40962 34.3461 2.70121 34.5549 3.00947 34.7303C3.24278 34.864 3.50106 34.9642 3.70935 35.0218C3.80933 35.0552 3.90096 35.0811 4.00928 35.1062C4.29257 35.1638 4.58416 35.1972 4.87574 35.1972H15.4069L14.0988 38.3295H11.1244C10.6662 38.3295 10.2913 38.6978 10.2913 39.1647C10.2913 39.625 10.6662 40 11.1244 40H27.3044H27.3128H30.837C31.2953 40 31.6702 39.625 31.6702 39.1647C31.6702 38.6978 31.2953 38.3295 30.837 38.3295H27.8543L26.5546 35.1972H37.069C37.5606 35.1972 38.0522 35.1062 38.5187 34.9308C38.627 34.8798 38.7437 34.8306 38.852 34.7796C38.8853 34.7637 38.9187 34.7462 38.9436 34.7303C39.1103 34.6376 39.2519 34.5374 39.4186 34.4212C39.5685 34.2951 39.7185 34.179 39.8102 34.078C40.0185 33.8775 40.1934 33.6687 40.3017 33.4774C40.4267 33.2937 40.5434 33.0848 40.6683 32.8092C40.7516 32.6087 40.8016 32.4333 40.8433 32.2579C40.8516 32.2245 40.8599 32.1911 40.8682 32.1577C40.8766 32.1494 40.8933 32.0742 40.8933 32.0742C40.9182 31.9648 40.9349 31.8562 40.9349 31.7735C40.9599 31.614 40.9682 31.4644 40.9682 31.2966V28.891C40.9682 28.8834 40.9766 28.8834 40.9766 28.8751C40.9766 28.8751 40.9682 28.8659 40.9682 28.8576V10.9838ZM21.589 32.4584H20.3725C19.9143 32.4584 19.5394 32.0909 19.5394 31.6231C19.5394 31.1629 19.9143 30.7879 20.3725 30.7879H21.589C22.0472 30.7879 22.4221 31.1629 22.4221 31.6231C22.4221 32.0909 22.0472 32.4584 21.589 32.4584Z" fill="#FF7500"/>
</svg>

<svg width="50" height="73" viewBox="0 0 50 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.03" d="M0.2 73V71.1C0.2 66.9 0.833334 63.2333 2.1 60.1C3.43333 56.9 5.16667 54.0667 7.3 51.6C9.43333 49.1333 11.7667 46.9 14.3 44.9C16.9 42.9 19.4667 41.0333 22 39.3C24.6 37.5667 26.9667 35.8333 29.1 34.1C31.2333 32.3 32.9333 30.4333 34.2 28.5C35.5333 26.5 36.2 24.3 36.2 21.9C36.2 19.5667 35.7 17.5667 34.7 15.9C33.7667 14.2333 32.4333 12.9667 30.7 12.1C28.9667 11.2333 26.9 10.8 24.5 10.8C22.1 10.8 19.9667 11.3 18.1 12.3C16.2333 13.3 14.8 14.8 13.8 16.8C12.8667 18.7333 12.5 21.0667 12.7 23.8H0.4C0.266667 19 1.2 14.8333 3.2 11.3C5.26667 7.7 8.2 4.93333 12 3C15.8 0.999997 20.2333 -1.90735e-06 25.3 -1.90735e-06C30.1 -1.90735e-06 34.2667 0.866664 37.8 2.59999C41.4 4.33333 44.1667 6.8 46.1 9.99999C48.1 13.1333 49.1 16.8667 49.1 21.2C49.1 24.3333 48.5667 27.1333 47.5 29.6C46.5 32.0667 45.1333 34.3333 43.4 36.4C41.6667 38.4 39.7 40.2667 37.5 42C35.3667 43.7333 33.1667 45.4 30.9 47C28.7 48.5333 26.5667 50.1 24.5 51.7C22.5 53.2333 20.7333 54.8333 19.2 56.5C17.6667 58.1667 16.5667 60 15.9 62H49.9V73H0.2Z" fill="#16191C"/>
</svg>

                            
                            </div>
                        <h1 className="text-3xl font-semibold">Get Regular Backup</h1>
                        <p className="leading-loose pt-4">
                          Lorem ipsum dolor sit amet consectetur. Lobortis ultrices nec tincidunt eget tempor tempus risus enim. Fames rhoncus sed mattis elit
                          consectetur. Elit congue convallis quisque amet sit.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start mt-10 gap-1 min-[400px]:gap-4">
                      <Image draggable={false} src="/mini-line-svg.svg" alt="" width={50} height={40} className="-translate-x-[6px] select-none" />
                      <div className="space-y-0 -translate-y-[85px]">
                      <div className="flex flex-row justify-between items-center"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0006 5.71423C16.2404 5.71423 13.0457 8.15111 11.8934 11.526C8.41399 12.0024 5.71484 14.9632 5.71484 18.5714C5.71484 22.5097 8.91936 25.7142 12.8577 25.7142H27.1434C31.0818 25.7142 34.2863 22.5097 34.2863 18.5714C34.2863 14.9632 31.5871 12.0024 28.1077 11.526C26.9554 8.15111 23.7608 5.71423 20.0006 5.71423ZM31.4291 18.5714C31.4291 20.9347 29.5067 22.8571 27.1434 22.8571H12.8577C10.4944 22.8571 8.57199 20.9347 8.57199 18.5714C8.57199 16.6931 9.79417 15.1108 11.4791 14.5333C11.6003 15.1999 12.1566 15.7142 12.8577 15.7142C13.6466 15.7142 14.2863 15.0753 14.2863 14.2857C14.2863 11.1342 16.8497 8.57138 20.0006 8.57138C23.1514 8.57138 25.7148 11.1342 25.7148 14.2857C25.7148 15.0753 26.3545 15.7142 27.1434 15.7142C27.8445 15.7142 28.4009 15.1999 28.522 14.5333C30.2069 15.1108 31.4291 16.6931 31.4291 18.5714Z" fill="#FF7500"/>
<path d="M34.286 35.7143C35.075 35.7143 35.7146 35.0747 35.7146 34.2857C35.7146 33.4968 35.075 32.8572 34.286 32.8572C33.497 32.8572 32.8574 33.4968 32.8574 34.2857C32.8574 35.0747 33.497 35.7143 34.286 35.7143Z" fill="#FF7500"/>
<path d="M30.0008 35.7143C30.7898 35.7143 31.4294 35.0747 31.4294 34.2857C31.4294 33.4968 30.7898 32.8572 30.0008 32.8572C29.2119 32.8572 28.5723 33.4968 28.5723 34.2857C28.5723 35.0747 29.2119 35.7143 30.0008 35.7143Z" fill="#FF7500"/>
<path d="M21.4291 32.8572H17.1434C16.3545 32.8572 15.7148 33.4961 15.7148 34.2857C15.7148 35.0754 16.3545 35.7143 17.1434 35.7143H21.4291C22.2181 35.7143 22.8577 35.0754 22.8577 34.2857C22.8577 33.4961 22.2181 32.8572 21.4291 32.8572Z" fill="#FF7500"/>
<path d="M35.7134 28.5714H15.7134C13.3502 28.5714 11.4277 30.4938 11.4277 32.8571V35.7143C11.4277 38.0775 13.3502 40 15.7134 40H35.7134C38.0767 40 39.9992 38.0775 39.9992 35.7143V32.8571C39.9992 30.4938 38.0767 28.5714 35.7134 28.5714ZM37.142 35.7143C37.142 36.5025 36.501 37.1428 35.7134 37.1428H15.7134C14.9259 37.1428 14.2849 36.5025 14.2849 35.7143V32.8571C14.2849 32.0689 14.9259 31.4286 15.7134 31.4286H35.7134C36.501 31.4286 37.142 32.0689 37.142 32.8571V35.7143Z" fill="#FF7500"/>
<path d="M7.14286 27.1429C6.35393 27.1429 5.71429 27.7818 5.71429 28.5714V29.4652C3.86169 26.6783 2.85714 23.4096 2.85714 20C2.85714 10.5469 10.5476 2.85714 20 2.85714C29.4524 2.85714 37.1429 10.5469 37.1429 20C37.1429 20.7896 37.7825 21.4286 38.5714 21.4286C39.3604 21.4286 40 20.7896 40 20C40 8.97182 31.0282 0 20 0C8.97182 0 0 8.97182 0 20C0 24.1384 1.2772 28.0941 3.60936 31.4286H2.85714C2.06822 31.4286 1.42857 32.0675 1.42857 32.8571C1.42857 33.6468 2.06822 34.2857 2.85714 34.2857H7.14286C7.93178 34.2857 8.57143 33.6468 8.57143 32.8571V28.5714C8.57143 27.7818 7.93178 27.1429 7.14286 27.1429Z" fill="#FF7500"/>
</svg>

<svg width="53" height="74" viewBox="0 0 53 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.03" d="M26.1 73.9C20.8333 73.9 16.3 72.9333 12.5 71C8.7 69.0667 5.76667 66.3667 3.7 62.9C1.7 59.3667 0.666667 55.3 0.6 50.7H13C12.9333 53.2333 13.4333 55.4333 14.5 57.3C15.5667 59.1667 17.1 60.6333 19.1 61.7C21.1 62.7 23.4333 63.2 26.1 63.2C28.7667 63.2 31.0667 62.7333 33 61.8C35 60.8 36.5333 59.4333 37.6 57.7C38.7333 55.9667 39.3 53.9 39.3 51.5C39.3 49.7 39 48.1667 38.4 46.9C37.8667 45.5667 37.0667 44.4667 36 43.6C35 42.6667 33.7667 41.9667 32.3 41.5C30.9 41.0333 29.3333 40.8 27.6 40.8H19.1V31.3H26.7C29.2333 31.3 31.3333 30.8667 33 30C34.7333 29.0667 36.0333 27.8 36.9 26.2C37.7667 24.6 38.2 22.8333 38.2 20.9C38.2 18.7 37.7 16.8667 36.7 15.4C35.7 13.8667 34.3 12.7 32.5 11.9C30.7667 11.1 28.7 10.7 26.3 10.7C23.7 10.7 21.4333 11.2 19.5 12.2C17.6333 13.2 16.2 14.6 15.2 16.4C14.2 18.2 13.6667 20.3667 13.6 22.9H1.2C1.26667 18.2333 2.33333 14.2 4.4 10.8C6.53333 7.4 9.5 4.76666 13.3 2.9C17.1667 0.966664 21.6667 -1.90735e-06 26.8 -1.90735e-06C30.4667 -1.90735e-06 33.7667 0.466665 36.7 1.4C39.7 2.26667 42.2333 3.53333 44.3 5.2C46.4333 6.86666 48.0667 8.89999 49.2 11.3C50.4 13.6333 51 16.2667 51 19.2C51 21.8 50.5333 24.2 49.6 26.4C48.7333 28.5333 47.4667 30.3667 45.8 31.9C44.2 33.4333 42.3333 34.6 40.2 35.4V35.9C42.7333 36.5667 44.8667 37.7 46.6 39.3C48.4 40.8333 49.7667 42.7333 50.7 45C51.6333 47.2667 52.1 49.8 52.1 52.6C52.1 56.8667 51 60.6 48.8 63.8C46.6 67 43.5333 69.5 39.6 71.3C35.7333 73.0333 31.2333 73.9 26.1 73.9Z" fill="#16191C"/>
</svg>


                            
                            </div>
                        <h1 className="text-3xl font-semibold">Automatic Backup </h1>
                        <p className="leading-loose pt-4">
                          Lorem ipsum dolor sit amet consectetur. Lobortis ultrices nec tincidunt eget tempor tempus risus enim. Fames rhoncus sed mattis elit
                          consectetur. Elit congue convallis quisque amet sit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uniquecpanel;
