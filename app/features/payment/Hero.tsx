import Image from 'next/image';
import React from 'react';

const HeroHosting = () => {
  return (
    <section className="h-full min-h-[80vh] overflow-hidden relative bg-black flex items-center justify-center">
    <img src="/home.jpg" width={1920} height={1080} alt="" className="w-full absolute inset-0 h-full opacity-30 object-cover bg-blend-color-dodge !z-[1]" />
   
    <div className="max-w-[1300px] mx-auto text-white  px-10 pt-40 pb-10 ">
      <div className="h-full flex items-center relative !z-[2] flex-col 2xl:flex-row justify-center gap-20">
        
        <div className="relative w-full flex flex-col justify-start items-start 2xl:justify-start space-y-5 2xl:space-y-8">
          <div className='relative w-full flex flex-col justify-start items-start 2xl:justify-start space-y-0'>
          <svg className='absolute -top-20 2xl:-top-32' width="232" height="27" viewBox="0 0 232 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.674 19V5.878H3.204V11.926L2.952 11.674H11.394L11.142 11.926V5.878H12.672V19H11.142V12.772L11.394 13.024H2.952L3.204 12.772V19H1.674ZM19.6353 19.162C18.9513 19.162 18.3273 19.048 17.7633 18.82C17.2113 18.592 16.7313 18.262 16.3233 17.83C15.9273 17.398 15.6153 16.888 15.3873 16.3C15.1713 15.7 15.0633 15.034 15.0633 14.302C15.0633 13.33 15.2493 12.478 15.6213 11.746C15.9933 11.014 16.5213 10.444 17.2053 10.036C17.9013 9.616 18.7113 9.406 19.6353 9.406C20.3193 9.406 20.9373 9.52 21.4893 9.748C22.0533 9.964 22.5333 10.288 22.9293 10.72C23.3253 11.152 23.6313 11.668 23.8473 12.268C24.0633 12.868 24.1713 13.54 24.1713 14.284C24.1713 15.244 23.9853 16.09 23.6133 16.822C23.2533 17.554 22.7313 18.13 22.0473 18.55C21.3633 18.958 20.5593 19.162 19.6353 19.162ZM19.6353 17.902C20.2473 17.902 20.7813 17.764 21.2373 17.488C21.6933 17.2 22.0473 16.786 22.2993 16.246C22.5633 15.694 22.6953 15.04 22.6953 14.284C22.6953 13.72 22.6233 13.216 22.4793 12.772C22.3353 12.316 22.1313 11.932 21.8673 11.62C21.6033 11.296 21.2853 11.05 20.9133 10.882C20.5413 10.714 20.1153 10.63 19.6353 10.63C19.0233 10.63 18.4833 10.78 18.0153 11.08C17.5593 11.368 17.1993 11.782 16.9353 12.322C16.6833 12.862 16.5573 13.522 16.5573 14.302C16.5573 14.854 16.6233 15.358 16.7553 15.814C16.8993 16.258 17.1033 16.636 17.3673 16.948C17.6433 17.26 17.9733 17.5 18.3573 17.668C18.7413 17.824 19.1673 17.902 19.6353 17.902ZM26.241 19V9.55H27.627L27.681 11.512H27.789C28.065 10.816 28.497 10.294 29.085 9.946C29.673 9.586 30.321 9.406 31.029 9.406C31.749 9.406 32.385 9.58 32.937 9.928C33.489 10.276 33.885 10.858 34.125 11.674H34.269C34.545 10.918 34.989 10.354 35.601 9.982C36.225 9.598 36.921 9.406 37.689 9.406C38.325 9.406 38.889 9.538 39.381 9.802C39.885 10.066 40.281 10.498 40.569 11.098C40.857 11.686 41.001 12.466 41.001 13.438V19H39.561V13.726C39.561 13.018 39.471 12.436 39.291 11.98C39.123 11.524 38.865 11.188 38.517 10.972C38.181 10.744 37.737 10.63 37.185 10.63C36.621 10.63 36.123 10.774 35.691 11.062C35.271 11.35 34.941 11.74 34.701 12.232C34.473 12.712 34.359 13.264 34.359 13.888V19H32.883V13.726C32.883 13.018 32.799 12.436 32.631 11.98C32.463 11.524 32.205 11.188 31.857 10.972C31.521 10.744 31.083 10.63 30.543 10.63C29.967 10.63 29.463 10.774 29.031 11.062C28.611 11.35 28.281 11.74 28.041 12.232C27.801 12.712 27.681 13.264 27.681 13.888V19H26.241ZM47.2614 19.162C46.3614 19.162 45.5874 18.964 44.9394 18.568C44.3034 18.172 43.8174 17.608 43.4814 16.876C43.1454 16.144 42.9774 15.292 42.9774 14.32C42.9774 13.324 43.1454 12.46 43.4814 11.728C43.8174 10.984 44.2974 10.414 44.9214 10.018C45.5454 9.61 46.3074 9.406 47.2074 9.406C48.1674 9.406 48.9594 9.622 49.5834 10.054C50.2074 10.486 50.6574 11.086 50.9334 11.854C51.2214 12.622 51.3294 13.51 51.2574 14.518H44.3994C44.4114 15.298 44.5314 15.952 44.7594 16.48C44.9994 16.996 45.3294 17.386 45.7494 17.65C46.1814 17.902 46.6854 18.028 47.2614 18.028C47.9574 18.028 48.5274 17.854 48.9714 17.506C49.4154 17.158 49.6974 16.702 49.8174 16.138H51.2034C51.1314 16.774 50.9094 17.32 50.5374 17.776C50.1774 18.232 49.7094 18.58 49.1334 18.82C48.5694 19.048 47.9454 19.162 47.2614 19.162ZM44.4174 13.69L44.2554 13.474H49.9974L49.8354 13.726C49.8474 12.97 49.7454 12.364 49.5294 11.908C49.3134 11.44 49.0014 11.098 48.5934 10.882C48.1974 10.654 47.7354 10.54 47.2074 10.54C46.6554 10.54 46.1754 10.66 45.7674 10.9C45.3594 11.14 45.0354 11.494 44.7954 11.962C44.5674 12.418 44.4414 12.994 44.4174 13.69Z" fill="white"/>
<path d="M77.584 21V7.878H82.894C83.59 7.878 84.22 7.974 84.784 8.166C85.348 8.346 85.828 8.616 86.224 8.976C86.632 9.324 86.938 9.756 87.142 10.272C87.358 10.788 87.466 11.382 87.466 12.054C87.466 12.894 87.28 13.632 86.908 14.268C86.548 14.892 86.026 15.378 85.342 15.726C84.658 16.062 83.836 16.23 82.876 16.23H79.33V14.664H82.588C83.152 14.664 83.65 14.574 84.082 14.394C84.514 14.214 84.85 13.932 85.09 13.548C85.342 13.164 85.468 12.684 85.468 12.108C85.468 11.52 85.342 11.04 85.09 10.668C84.85 10.296 84.514 10.02 84.082 9.84C83.65 9.66 83.152 9.57 82.588 9.57H79.24L79.546 9.264V21H77.584ZM92.3661 21.162C91.7901 21.162 91.2621 21.054 90.7821 20.838C90.3141 20.622 89.9061 20.31 89.5581 19.902C89.2101 19.482 88.9401 18.966 88.7481 18.354C88.5681 17.742 88.4781 17.034 88.4781 16.23C88.4781 15.174 88.6401 14.28 88.9641 13.548C89.3001 12.816 89.7561 12.264 90.3321 11.892C90.9201 11.508 91.5981 11.316 92.3661 11.316C92.8941 11.316 93.3741 11.4 93.8061 11.568C94.2501 11.736 94.6221 11.976 94.9221 12.288C95.2341 12.588 95.4621 12.942 95.6061 13.35H95.7141L95.7861 11.478H97.5681V21H95.7141V19.11H95.6061C95.3781 19.722 94.9821 20.22 94.4181 20.604C93.8541 20.976 93.1701 21.162 92.3661 21.162ZM93.0141 19.632C93.6021 19.632 94.0941 19.494 94.4901 19.218C94.8861 18.942 95.1861 18.588 95.3901 18.156C95.5941 17.724 95.6961 17.262 95.6961 16.77V15.69C95.6961 15.198 95.5941 14.736 95.3901 14.304C95.1861 13.872 94.8861 13.518 94.4901 13.242C94.0941 12.966 93.6021 12.828 93.0141 12.828C92.4861 12.828 92.0241 12.96 91.6281 13.224C91.2321 13.476 90.9261 13.854 90.7101 14.358C90.4941 14.85 90.3861 15.474 90.3861 16.23C90.3861 16.974 90.4941 17.598 90.7101 18.102C90.9261 18.606 91.2321 18.99 91.6281 19.254C92.0241 19.506 92.4861 19.632 93.0141 19.632ZM99.5351 24.006V22.476H100.561C100.837 22.476 101.071 22.434 101.263 22.35C101.467 22.278 101.641 22.158 101.785 21.99C101.929 21.834 102.049 21.63 102.145 21.378L102.721 19.902V20.712L98.8151 11.478H100.849L103.027 17.274L103.423 18.408H103.495L103.873 17.274L105.925 11.478H107.887L103.927 21.828C103.723 22.368 103.477 22.794 103.189 23.106C102.913 23.43 102.583 23.658 102.199 23.79C101.815 23.934 101.371 24.006 100.867 24.006H99.5351ZM109.13 21V11.478H110.894L110.966 13.368H111.074C111.338 12.696 111.752 12.192 112.316 11.856C112.892 11.508 113.528 11.334 114.224 11.334C114.92 11.334 115.544 11.502 116.096 11.838C116.66 12.174 117.062 12.75 117.302 13.566H117.446C117.71 12.822 118.142 12.264 118.742 11.892C119.354 11.52 120.038 11.334 120.794 11.334C121.418 11.334 121.976 11.466 122.468 11.73C122.972 11.994 123.368 12.42 123.656 13.008C123.944 13.596 124.088 14.376 124.088 15.348V21H122.252V15.726C122.252 15.078 122.174 14.544 122.018 14.124C121.862 13.692 121.628 13.374 121.316 13.17C121.004 12.966 120.596 12.864 120.092 12.864C119.576 12.864 119.126 12.996 118.742 13.26C118.358 13.524 118.058 13.878 117.842 14.322C117.638 14.754 117.536 15.246 117.536 15.798V21H115.682V15.726C115.682 15.078 115.604 14.544 115.448 14.124C115.292 13.692 115.058 13.374 114.746 13.17C114.434 12.966 114.032 12.864 113.54 12.864C113.012 12.864 112.556 12.996 112.172 13.26C111.788 13.524 111.488 13.878 111.272 14.322C111.068 14.754 110.966 15.246 110.966 15.798V21H109.13ZM130.365 21.162C129.441 21.162 128.643 20.964 127.971 20.568C127.311 20.16 126.807 19.59 126.459 18.858C126.111 18.126 125.937 17.268 125.937 16.284C125.937 15.276 126.111 14.4 126.459 13.656C126.807 12.912 127.305 12.342 127.953 11.946C128.613 11.538 129.399 11.334 130.311 11.334C131.307 11.334 132.129 11.562 132.777 12.018C133.437 12.462 133.911 13.08 134.199 13.872C134.487 14.664 134.595 15.576 134.523 16.608H127.755C127.767 17.304 127.881 17.886 128.097 18.354C128.313 18.81 128.613 19.158 128.997 19.398C129.393 19.626 129.849 19.74 130.365 19.74C131.001 19.74 131.523 19.59 131.931 19.29C132.339 18.978 132.597 18.576 132.705 18.084H134.469C134.385 18.72 134.157 19.272 133.785 19.74C133.413 20.196 132.933 20.55 132.345 20.802C131.757 21.042 131.097 21.162 130.365 21.162ZM127.773 15.582L127.593 15.348H132.885L132.705 15.6C132.717 14.94 132.621 14.4 132.417 13.98C132.225 13.56 131.943 13.254 131.571 13.062C131.211 12.858 130.791 12.756 130.311 12.756C129.807 12.756 129.369 12.864 128.997 13.08C128.625 13.296 128.331 13.614 128.115 14.034C127.899 14.454 127.785 14.97 127.773 15.582ZM136.464 21V11.478H138.228L138.3 13.368H138.408C138.684 12.696 139.116 12.192 139.704 11.856C140.292 11.508 140.934 11.334 141.63 11.334C142.122 11.334 142.572 11.406 142.98 11.55C143.4 11.694 143.76 11.928 144.06 12.252C144.372 12.564 144.612 12.978 144.78 13.494C144.948 13.998 145.032 14.616 145.032 15.348V21H143.178V15.726C143.178 15.078 143.1 14.544 142.944 14.124C142.788 13.692 142.548 13.374 142.224 13.17C141.9 12.966 141.48 12.864 140.964 12.864C140.424 12.864 139.95 12.996 139.542 13.26C139.146 13.524 138.84 13.878 138.624 14.322C138.408 14.754 138.3 15.246 138.3 15.798V21H136.464ZM150.028 21C149.5 21 149.086 20.928 148.786 20.784C148.486 20.628 148.276 20.4 148.156 20.1C148.036 19.8 147.976 19.44 147.976 19.02V12.99H146.176V11.478H147.976V8.724L149.83 8.508V11.478H151.936V12.99H149.83V18.678C149.83 19.002 149.89 19.218 150.01 19.326C150.13 19.422 150.34 19.47 150.64 19.47H151.936V21H150.028ZM158.092 21V7.878H161.152L164.752 17.922H164.824L168.424 7.878H171.466V21H169.558V14.862L169.612 9.948H169.486L165.616 21H163.942L160.108 9.948H159.982L160.018 14.88V21H158.092ZM178.142 21.162C177.218 21.162 176.42 20.964 175.748 20.568C175.088 20.16 174.584 19.59 174.236 18.858C173.888 18.126 173.714 17.268 173.714 16.284C173.714 15.276 173.888 14.4 174.236 13.656C174.584 12.912 175.082 12.342 175.73 11.946C176.39 11.538 177.176 11.334 178.088 11.334C179.084 11.334 179.906 11.562 180.554 12.018C181.214 12.462 181.688 13.08 181.976 13.872C182.264 14.664 182.372 15.576 182.3 16.608H175.532C175.544 17.304 175.658 17.886 175.874 18.354C176.09 18.81 176.39 19.158 176.774 19.398C177.17 19.626 177.626 19.74 178.142 19.74C178.778 19.74 179.3 19.59 179.708 19.29C180.116 18.978 180.374 18.576 180.482 18.084H182.246C182.162 18.72 181.934 19.272 181.562 19.74C181.19 20.196 180.71 20.55 180.122 20.802C179.534 21.042 178.874 21.162 178.142 21.162ZM175.55 15.582L175.37 15.348H180.662L180.482 15.6C180.494 14.94 180.398 14.4 180.194 13.98C180.002 13.56 179.72 13.254 179.348 13.062C178.988 12.858 178.568 12.756 178.088 12.756C177.584 12.756 177.146 12.864 176.774 13.08C176.402 13.296 176.108 13.614 175.892 14.034C175.676 14.454 175.562 14.97 175.55 15.582ZM186.959 21C186.431 21 186.017 20.928 185.717 20.784C185.417 20.628 185.207 20.4 185.087 20.1C184.967 19.8 184.907 19.44 184.907 19.02V12.99H183.107V11.478H184.907V8.724L186.761 8.508V11.478H188.867V12.99H186.761V18.678C186.761 19.002 186.821 19.218 186.941 19.326C187.061 19.422 187.271 19.47 187.571 19.47H188.867V21H186.959ZM190.71 21V7.878H192.546V13.368H192.654C192.93 12.696 193.362 12.192 193.95 11.856C194.538 11.508 195.18 11.334 195.876 11.334C196.368 11.334 196.818 11.406 197.226 11.55C197.646 11.694 198.006 11.928 198.306 12.252C198.618 12.564 198.858 12.978 199.026 13.494C199.194 13.998 199.278 14.616 199.278 15.348V21H197.424V15.726C197.424 15.078 197.346 14.544 197.19 14.124C197.034 13.692 196.794 13.374 196.47 13.17C196.146 12.966 195.726 12.864 195.21 12.864C194.67 12.864 194.196 12.996 193.788 13.26C193.392 13.524 193.086 13.878 192.87 14.322C192.654 14.754 192.546 15.246 192.546 15.798V21H190.71ZM205.798 21.162C205.102 21.162 204.466 21.048 203.89 20.82C203.326 20.592 202.84 20.262 202.432 19.83C202.024 19.398 201.706 18.882 201.478 18.282C201.25 17.682 201.136 17.01 201.136 16.266C201.136 15.282 201.322 14.424 201.694 13.692C202.078 12.948 202.618 12.372 203.314 11.964C204.022 11.544 204.85 11.334 205.798 11.334C206.494 11.334 207.124 11.448 207.688 11.676C208.264 11.892 208.756 12.216 209.164 12.648C209.572 13.08 209.884 13.602 210.1 14.214C210.328 14.814 210.442 15.492 210.442 16.248C210.442 17.22 210.256 18.078 209.884 18.822C209.512 19.554 208.978 20.13 208.282 20.55C207.586 20.958 206.758 21.162 205.798 21.162ZM205.798 19.614C206.35 19.614 206.83 19.488 207.238 19.236C207.658 18.972 207.982 18.588 208.21 18.084C208.438 17.58 208.552 16.968 208.552 16.248C208.552 15.708 208.486 15.234 208.354 14.826C208.234 14.406 208.054 14.052 207.814 13.764C207.574 13.464 207.286 13.242 206.95 13.098C206.614 12.942 206.23 12.864 205.798 12.864C205.246 12.864 204.76 12.996 204.34 13.26C203.932 13.524 203.608 13.908 203.368 14.412C203.14 14.904 203.026 15.522 203.026 16.266C203.026 16.794 203.086 17.268 203.206 17.688C203.338 18.096 203.524 18.444 203.764 18.732C204.016 19.02 204.31 19.242 204.646 19.398C204.994 19.542 205.378 19.614 205.798 19.614ZM215.8 21.162C215.224 21.162 214.696 21.054 214.216 20.838C213.748 20.622 213.34 20.31 212.992 19.902C212.644 19.482 212.374 18.966 212.182 18.354C212.002 17.742 211.912 17.034 211.912 16.23C211.912 15.174 212.074 14.28 212.398 13.548C212.734 12.816 213.19 12.264 213.766 11.892C214.354 11.508 215.032 11.316 215.8 11.316C216.328 11.316 216.808 11.4 217.24 11.568C217.684 11.736 218.056 11.976 218.356 12.288C218.668 12.588 218.896 12.942 219.04 13.35H219.148V7.878H221.002V21H219.22L219.148 19.11H219.04C218.812 19.722 218.416 20.22 217.852 20.604C217.288 20.976 216.604 21.162 215.8 21.162ZM216.448 19.632C217.036 19.632 217.528 19.494 217.924 19.218C218.32 18.942 218.62 18.588 218.824 18.156C219.028 17.724 219.13 17.262 219.13 16.77V15.69C219.13 15.33 219.07 14.982 218.95 14.646C218.842 14.298 218.674 13.992 218.446 13.728C218.23 13.452 217.954 13.236 217.618 13.08C217.282 12.912 216.892 12.828 216.448 12.828C215.92 12.828 215.458 12.96 215.062 13.224C214.666 13.476 214.36 13.854 214.144 14.358C213.928 14.85 213.82 15.474 213.82 16.23C213.82 16.974 213.928 17.598 214.144 18.102C214.36 18.606 214.666 18.99 215.062 19.254C215.458 19.506 215.92 19.632 216.448 19.632ZM226.929 21.18C226.101 21.18 225.387 21.048 224.787 20.784C224.187 20.52 223.725 20.154 223.401 19.686C223.089 19.206 222.933 18.648 222.933 18.012H224.769C224.769 18.636 224.973 19.098 225.381 19.398C225.789 19.686 226.317 19.83 226.965 19.83C227.625 19.83 228.123 19.71 228.459 19.47C228.807 19.218 228.981 18.87 228.981 18.426C228.981 18.09 228.903 17.832 228.747 17.652C228.591 17.46 228.351 17.31 228.027 17.202C227.715 17.094 227.295 17.004 226.767 16.932C225.963 16.812 225.297 16.656 224.769 16.464C224.241 16.26 223.845 15.978 223.581 15.618C223.317 15.246 223.185 14.766 223.185 14.178C223.185 13.602 223.341 13.104 223.653 12.684C223.977 12.252 224.421 11.916 224.985 11.676C225.549 11.424 226.203 11.298 226.947 11.298C227.715 11.298 228.375 11.424 228.927 11.676C229.479 11.928 229.905 12.276 230.205 12.72C230.505 13.164 230.661 13.686 230.673 14.286H228.855C228.843 13.902 228.753 13.596 228.585 13.368C228.429 13.128 228.207 12.954 227.919 12.846C227.643 12.726 227.307 12.666 226.911 12.666C226.323 12.666 225.861 12.786 225.525 13.026C225.201 13.266 225.039 13.59 225.039 13.998C225.039 14.31 225.123 14.562 225.291 14.754C225.459 14.934 225.717 15.078 226.065 15.186C226.425 15.282 226.881 15.372 227.433 15.456C227.985 15.528 228.471 15.63 228.891 15.762C229.323 15.882 229.683 16.05 229.971 16.266C230.271 16.482 230.493 16.752 230.637 17.076C230.781 17.4 230.853 17.796 230.853 18.264C230.853 19.2 230.493 19.92 229.773 20.424C229.053 20.928 228.105 21.18 226.929 21.18Z" fill="#FF7500"/>
<path d="M61 20L67 14L61 8" stroke="#FF7500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            <h2 className="font-mono-sans text-sm 2xl:text-xl font-light italic leading-relaxed text-center 2xl:text-left">
            <span className="text-orange-500 font-bold">Methods for the Payments</span>
          </h2>
          <h1 className="font-mono-sans font-medium text-[61px] 2xl:text-[63px] 2xl:font-bold leading-[84px] text-left 2xl:text-left ">Payment Methods</h1>

</div>
          <p className="font-mono-sans text-[18px] font-light leading-loose text-left 2xl:text-left text-[#EBEBEB]">
          As your business expands into local regions where alternative payments are popular, you don’t want to risk losing sales by saying no. Antler gives you the ability to accept more payment types without hesitation, so you can keep on growing.</p>
          <div className="flex flex-row justify-start 2xl:justify-start !mt-10 ">
         
          </div>
       
        </div>

        <div className="w-full item-center justify-center">
          <Image src="/features/hero1.svg" alt="" width={500} height={500} className="item-center 2xl:w-[600px] justify-center mx-auto" />
        </div>
      </div>
    </div>
  </section>
      );
    };
export default HeroHosting;
