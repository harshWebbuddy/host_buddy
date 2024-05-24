import Image from 'next/image';
import React from 'react';

const HeroHosting = () => {
  return (
    <section className="h-full min-h-[60vh] overflow-hidden relative bg-black flex items-center justify-center">
    <img src="/home.jpg" width={1920} height={1080} alt="" className="w-full absolute inset-0 h-full opacity-30 object-cover bg-blend-color-dodge !z-[1]" />
   
    <div className="max-w-[1300px] mx-auto text-white  px-10 pt-40 pb-10 ">
      <div className="h-full flex items-center relative !z-[2] flex-col 2xl:flex-row justify-center gap-20">
        
        <div className="relative w-full flex flex-col justify-start items-start 2xl:justify-start space-y-0 2xl:space-y-2">
          <div className='relative w-full flex flex-col justify-start items-start 2xl:justify-start space-y-0'>
          <svg  className="absolute -top-20 2xl:-top-32" width="209" height="24" viewBox="0 0 209 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.674 17V3.878H2.204V9.926L1.952 9.674H10.394L10.142 9.926V3.878H11.672V17H10.142V10.772L10.394 11.024H1.952L2.204 10.772V17H0.674ZM18.6353 17.162C17.9513 17.162 17.3273 17.048 16.7633 16.82C16.2113 16.592 15.7313 16.262 15.3233 15.83C14.9273 15.398 14.6153 14.888 14.3873 14.3C14.1713 13.7 14.0633 13.034 14.0633 12.302C14.0633 11.33 14.2493 10.478 14.6213 9.746C14.9933 9.014 15.5213 8.444 16.2053 8.036C16.9013 7.616 17.7113 7.406 18.6353 7.406C19.3193 7.406 19.9373 7.52 20.4893 7.748C21.0533 7.964 21.5333 8.288 21.9293 8.72C22.3253 9.152 22.6313 9.668 22.8473 10.268C23.0633 10.868 23.1713 11.54 23.1713 12.284C23.1713 13.244 22.9853 14.09 22.6133 14.822C22.2533 15.554 21.7313 16.13 21.0473 16.55C20.3633 16.958 19.5593 17.162 18.6353 17.162ZM18.6353 15.902C19.2473 15.902 19.7813 15.764 20.2373 15.488C20.6933 15.2 21.0473 14.786 21.2993 14.246C21.5633 13.694 21.6953 13.04 21.6953 12.284C21.6953 11.72 21.6233 11.216 21.4793 10.772C21.3353 10.316 21.1313 9.932 20.8673 9.62C20.6033 9.296 20.2853 9.05 19.9133 8.882C19.5413 8.714 19.1153 8.63 18.6353 8.63C18.0233 8.63 17.4833 8.78 17.0153 9.08C16.5593 9.368 16.1993 9.782 15.9353 10.322C15.6833 10.862 15.5573 11.522 15.5573 12.302C15.5573 12.854 15.6233 13.358 15.7553 13.814C15.8993 14.258 16.1033 14.636 16.3673 14.948C16.6433 15.26 16.9733 15.5 17.3573 15.668C17.7413 15.824 18.1673 15.902 18.6353 15.902ZM25.241 17V7.55H26.627L26.681 9.512H26.789C27.065 8.816 27.497 8.294 28.085 7.946C28.673 7.586 29.321 7.406 30.029 7.406C30.749 7.406 31.385 7.58 31.937 7.928C32.489 8.276 32.885 8.858 33.125 9.674H33.269C33.545 8.918 33.989 8.354 34.601 7.982C35.225 7.598 35.921 7.406 36.689 7.406C37.325 7.406 37.889 7.538 38.381 7.802C38.885 8.066 39.281 8.498 39.569 9.098C39.857 9.686 40.001 10.466 40.001 11.438V17H38.561V11.726C38.561 11.018 38.471 10.436 38.291 9.98C38.123 9.524 37.865 9.188 37.517 8.972C37.181 8.744 36.737 8.63 36.185 8.63C35.621 8.63 35.123 8.774 34.691 9.062C34.271 9.35 33.941 9.74 33.701 10.232C33.473 10.712 33.359 11.264 33.359 11.888V17H31.883V11.726C31.883 11.018 31.799 10.436 31.631 9.98C31.463 9.524 31.205 9.188 30.857 8.972C30.521 8.744 30.083 8.63 29.543 8.63C28.967 8.63 28.463 8.774 28.031 9.062C27.611 9.35 27.281 9.74 27.041 10.232C26.801 10.712 26.681 11.264 26.681 11.888V17H25.241ZM46.2614 17.162C45.3614 17.162 44.5874 16.964 43.9394 16.568C43.3034 16.172 42.8174 15.608 42.4814 14.876C42.1454 14.144 41.9774 13.292 41.9774 12.32C41.9774 11.324 42.1454 10.46 42.4814 9.728C42.8174 8.984 43.2974 8.414 43.9214 8.018C44.5454 7.61 45.3074 7.406 46.2074 7.406C47.1674 7.406 47.9594 7.622 48.5834 8.054C49.2074 8.486 49.6574 9.086 49.9334 9.854C50.2214 10.622 50.3294 11.51 50.2574 12.518H43.3994C43.4114 13.298 43.5314 13.952 43.7594 14.48C43.9994 14.996 44.3294 15.386 44.7494 15.65C45.1814 15.902 45.6854 16.028 46.2614 16.028C46.9574 16.028 47.5274 15.854 47.9714 15.506C48.4154 15.158 48.6974 14.702 48.8174 14.138H50.2034C50.1314 14.774 49.9094 15.32 49.5374 15.776C49.1774 16.232 48.7094 16.58 48.1334 16.82C47.5694 17.048 46.9454 17.162 46.2614 17.162ZM43.4174 11.69L43.2554 11.474H48.9974L48.8354 11.726C48.8474 10.97 48.7454 10.364 48.5294 9.908C48.3134 9.44 48.0014 9.098 47.5934 8.882C47.1974 8.654 46.7354 8.54 46.2074 8.54C45.6554 8.54 45.1754 8.66 44.7674 8.9C44.3594 9.14 44.0354 9.494 43.7954 9.962C43.5674 10.418 43.4414 10.994 43.4174 11.69Z" fill="white"/>
<path d="M80.976 17.162C79.812 17.162 78.846 16.982 78.078 16.622C77.31 16.262 76.734 15.764 76.35 15.128C75.966 14.48 75.768 13.736 75.756 12.896H77.772C77.784 13.448 77.904 13.934 78.132 14.354C78.372 14.762 78.726 15.074 79.194 15.29C79.662 15.506 80.268 15.614 81.012 15.614C81.936 15.614 82.674 15.446 83.226 15.11C83.79 14.774 84.072 14.258 84.072 13.562C84.072 13.166 84.012 12.836 83.892 12.572C83.772 12.308 83.574 12.092 83.298 11.924C83.034 11.744 82.68 11.594 82.236 11.474C81.792 11.354 81.252 11.24 80.616 11.132C79.86 11 79.194 10.844 78.618 10.664C78.054 10.472 77.58 10.238 77.196 9.962C76.824 9.674 76.542 9.326 76.35 8.918C76.158 8.51 76.062 8.03 76.062 7.478C76.062 6.71 76.254 6.044 76.638 5.48C77.022 4.916 77.574 4.484 78.294 4.184C79.014 3.884 79.878 3.734 80.886 3.734C81.894 3.734 82.752 3.896 83.46 4.22C84.168 4.532 84.714 4.976 85.098 5.552C85.482 6.116 85.68 6.788 85.692 7.568H83.694C83.682 7.04 83.55 6.608 83.298 6.272C83.058 5.924 82.722 5.666 82.29 5.498C81.87 5.33 81.378 5.246 80.814 5.246C80.238 5.246 79.746 5.33 79.338 5.498C78.942 5.654 78.636 5.882 78.42 6.182C78.204 6.47 78.096 6.812 78.096 7.208C78.096 7.688 78.21 8.06 78.438 8.324C78.678 8.588 79.056 8.798 79.572 8.954C80.088 9.098 80.766 9.248 81.606 9.404C82.194 9.488 82.752 9.608 83.28 9.764C83.82 9.92 84.3 10.136 84.72 10.412C85.152 10.688 85.488 11.066 85.728 11.546C85.98 12.014 86.106 12.626 86.106 13.382C86.106 14.126 85.908 14.786 85.512 15.362C85.128 15.926 84.552 16.37 83.784 16.694C83.028 17.006 82.092 17.162 80.976 17.162ZM91.5264 17.162C90.8184 17.162 90.2064 17.024 89.6904 16.748C89.1744 16.46 88.7784 16.034 88.5024 15.47C88.2384 14.894 88.1064 14.186 88.1064 13.346V7.478H89.9604V12.878C89.9604 13.466 90.0324 13.964 90.1764 14.372C90.3324 14.78 90.5784 15.092 90.9144 15.308C91.2504 15.512 91.6824 15.614 92.2104 15.614C92.7384 15.614 93.1944 15.488 93.5784 15.236C93.9744 14.984 94.2804 14.63 94.4964 14.174C94.7124 13.718 94.8204 13.202 94.8204 12.626V7.478H96.6744V17H94.9104L94.8204 15.074H94.7124C94.4724 15.722 94.0644 16.232 93.4884 16.604C92.9124 16.976 92.2584 17.162 91.5264 17.162ZM99.1827 20.006V7.478H100.965L101.037 9.35H101.145C101.373 8.738 101.769 8.246 102.333 7.874C102.909 7.502 103.593 7.316 104.385 7.316C104.961 7.316 105.483 7.424 105.951 7.64C106.431 7.856 106.845 8.174 107.193 8.594C107.541 9.014 107.805 9.53 107.985 10.142C108.177 10.754 108.273 11.456 108.273 12.248C108.273 13.304 108.111 14.198 107.787 14.93C107.463 15.662 107.007 16.22 106.419 16.604C105.843 16.976 105.165 17.162 104.385 17.162C103.869 17.162 103.389 17.078 102.945 16.91C102.513 16.742 102.141 16.508 101.829 16.208C101.529 15.896 101.301 15.536 101.145 15.128H101.037V20.006H99.1827ZM103.737 15.632C104.265 15.632 104.727 15.506 105.123 15.254C105.519 15.002 105.825 14.624 106.041 14.12C106.269 13.616 106.383 12.992 106.383 12.248C106.383 11.492 106.269 10.868 106.041 10.376C105.825 9.872 105.519 9.494 105.123 9.242C104.727 8.978 104.265 8.846 103.737 8.846C103.161 8.846 102.669 8.984 102.261 9.26C101.865 9.524 101.565 9.878 101.361 10.322C101.157 10.754 101.055 11.216 101.055 11.708V12.77C101.055 13.142 101.109 13.502 101.217 13.85C101.337 14.186 101.511 14.492 101.739 14.768C101.967 15.032 102.249 15.242 102.585 15.398C102.921 15.554 103.305 15.632 103.737 15.632ZM110.239 20.006V7.478H112.021L112.093 9.35H112.201C112.429 8.738 112.825 8.246 113.389 7.874C113.965 7.502 114.649 7.316 115.441 7.316C116.017 7.316 116.539 7.424 117.007 7.64C117.487 7.856 117.901 8.174 118.249 8.594C118.597 9.014 118.861 9.53 119.041 10.142C119.233 10.754 119.329 11.456 119.329 12.248C119.329 13.304 119.167 14.198 118.843 14.93C118.519 15.662 118.063 16.22 117.475 16.604C116.899 16.976 116.221 17.162 115.441 17.162C114.925 17.162 114.445 17.078 114.001 16.91C113.569 16.742 113.197 16.508 112.885 16.208C112.585 15.896 112.357 15.536 112.201 15.128H112.093V20.006H110.239ZM114.793 15.632C115.321 15.632 115.783 15.506 116.179 15.254C116.575 15.002 116.881 14.624 117.097 14.12C117.325 13.616 117.439 12.992 117.439 12.248C117.439 11.492 117.325 10.868 117.097 10.376C116.881 9.872 116.575 9.494 116.179 9.242C115.783 8.978 115.321 8.846 114.793 8.846C114.217 8.846 113.725 8.984 113.317 9.26C112.921 9.524 112.621 9.878 112.417 10.322C112.213 10.754 112.111 11.216 112.111 11.708V12.77C112.111 13.142 112.165 13.502 112.273 13.85C112.393 14.186 112.567 14.492 112.795 14.768C113.023 15.032 113.305 15.242 113.641 15.398C113.977 15.554 114.361 15.632 114.793 15.632ZM125.486 17.162C124.79 17.162 124.154 17.048 123.578 16.82C123.014 16.592 122.528 16.262 122.12 15.83C121.712 15.398 121.394 14.882 121.166 14.282C120.938 13.682 120.824 13.01 120.824 12.266C120.824 11.282 121.01 10.424 121.382 9.692C121.766 8.948 122.306 8.372 123.002 7.964C123.71 7.544 124.538 7.334 125.486 7.334C126.182 7.334 126.812 7.448 127.376 7.676C127.952 7.892 128.444 8.216 128.852 8.648C129.26 9.08 129.572 9.602 129.788 10.214C130.016 10.814 130.13 11.492 130.13 12.248C130.13 13.22 129.944 14.078 129.572 14.822C129.2 15.554 128.666 16.13 127.97 16.55C127.274 16.958 126.446 17.162 125.486 17.162ZM125.486 15.614C126.038 15.614 126.518 15.488 126.926 15.236C127.346 14.972 127.67 14.588 127.898 14.084C128.126 13.58 128.24 12.968 128.24 12.248C128.24 11.708 128.174 11.234 128.042 10.826C127.922 10.406 127.742 10.052 127.502 9.764C127.262 9.464 126.974 9.242 126.638 9.098C126.302 8.942 125.918 8.864 125.486 8.864C124.934 8.864 124.448 8.996 124.028 9.26C123.62 9.524 123.296 9.908 123.056 10.412C122.828 10.904 122.714 11.522 122.714 12.266C122.714 12.794 122.774 13.268 122.894 13.688C123.026 14.096 123.212 14.444 123.452 14.732C123.704 15.02 123.998 15.242 124.334 15.398C124.682 15.542 125.066 15.614 125.486 15.614ZM132.071 17V7.478H133.727L133.817 9.17H133.907C134.111 8.558 134.465 8.102 134.969 7.802C135.473 7.502 136.037 7.352 136.661 7.352C136.769 7.352 136.865 7.358 136.949 7.37C137.045 7.37 137.135 7.376 137.219 7.388V9.134C137.147 9.122 137.057 9.116 136.949 9.116C136.853 9.116 136.751 9.116 136.643 9.116C136.079 9.116 135.599 9.212 135.203 9.404C134.807 9.596 134.501 9.878 134.285 10.25C134.069 10.61 133.943 11.048 133.907 11.564V17H132.071ZM141.961 17C141.433 17 141.019 16.928 140.719 16.784C140.419 16.628 140.209 16.4 140.089 16.1C139.969 15.8 139.909 15.44 139.909 15.02V8.99H138.109V7.478H139.909V4.724L141.763 4.508V7.478H143.869V8.99H141.763V14.678C141.763 15.002 141.823 15.218 141.943 15.326C142.063 15.422 142.273 15.47 142.573 15.47H143.869V17H141.961ZM152.725 17V5.588H148.603V3.878H158.845V5.588H154.687V17H152.725ZM160.319 17V7.478H162.173V17H160.319ZM160.319 6.02V3.878H162.173V6.02H160.319ZM168.727 17.162C168.031 17.162 167.395 17.048 166.819 16.82C166.255 16.58 165.769 16.244 165.361 15.812C164.965 15.38 164.653 14.864 164.425 14.264C164.209 13.664 164.101 12.992 164.101 12.248C164.101 11.264 164.293 10.406 164.677 9.674C165.061 8.93 165.607 8.354 166.315 7.946C167.023 7.538 167.851 7.334 168.799 7.334C169.567 7.334 170.251 7.478 170.851 7.766C171.463 8.054 171.949 8.456 172.309 8.972C172.681 9.488 172.891 10.088 172.939 10.772H171.139C171.067 10.352 170.917 10.004 170.689 9.728C170.461 9.452 170.179 9.242 169.843 9.098C169.519 8.954 169.153 8.882 168.745 8.882C168.157 8.882 167.659 9.026 167.251 9.314C166.843 9.59 166.531 9.98 166.315 10.484C166.099 10.988 165.991 11.582 165.991 12.266C165.991 12.974 166.105 13.58 166.333 14.084C166.561 14.576 166.879 14.954 167.287 15.218C167.695 15.482 168.175 15.614 168.727 15.614C169.195 15.614 169.603 15.53 169.951 15.362C170.299 15.194 170.575 14.96 170.779 14.66C170.995 14.348 171.127 13.994 171.175 13.598H172.975C172.927 14.318 172.717 14.948 172.345 15.488C171.973 16.016 171.475 16.43 170.851 16.73C170.227 17.018 169.519 17.162 168.727 17.162ZM174.857 17V3.878H176.729V12.032L177.557 11.132L181.103 7.478H183.407L179.717 11.186L183.551 17H181.373L178.997 13.4L178.421 12.446L176.729 14.084V17H174.857ZM188.322 17.162C187.398 17.162 186.6 16.964 185.928 16.568C185.268 16.16 184.764 15.59 184.416 14.858C184.068 14.126 183.894 13.268 183.894 12.284C183.894 11.276 184.068 10.4 184.416 9.656C184.764 8.912 185.262 8.342 185.91 7.946C186.57 7.538 187.356 7.334 188.268 7.334C189.264 7.334 190.086 7.562 190.734 8.018C191.394 8.462 191.868 9.08 192.156 9.872C192.444 10.664 192.552 11.576 192.48 12.608H185.712C185.724 13.304 185.838 13.886 186.054 14.354C186.27 14.81 186.57 15.158 186.954 15.398C187.35 15.626 187.806 15.74 188.322 15.74C188.958 15.74 189.48 15.59 189.888 15.29C190.296 14.978 190.554 14.576 190.662 14.084H192.426C192.342 14.72 192.114 15.272 191.742 15.74C191.37 16.196 190.89 16.55 190.302 16.802C189.714 17.042 189.054 17.162 188.322 17.162ZM185.73 11.582L185.55 11.348H190.842L190.662 11.6C190.674 10.94 190.578 10.4 190.374 9.98C190.182 9.56 189.9 9.254 189.528 9.062C189.168 8.858 188.748 8.756 188.268 8.756C187.764 8.756 187.326 8.864 186.954 9.08C186.582 9.296 186.288 9.614 186.072 10.034C185.856 10.454 185.742 10.97 185.73 11.582ZM197.139 17C196.611 17 196.197 16.928 195.897 16.784C195.597 16.628 195.387 16.4 195.267 16.1C195.147 15.8 195.087 15.44 195.087 15.02V8.99H193.287V7.478H195.087V4.724L196.941 4.508V7.478H199.047V8.99H196.941V14.678C196.941 15.002 197.001 15.218 197.121 15.326C197.241 15.422 197.451 15.47 197.751 15.47H199.047V17H197.139ZM204.22 17.18C203.392 17.18 202.678 17.048 202.078 16.784C201.478 16.52 201.016 16.154 200.692 15.686C200.38 15.206 200.224 14.648 200.224 14.012H202.06C202.06 14.636 202.264 15.098 202.672 15.398C203.08 15.686 203.608 15.83 204.256 15.83C204.916 15.83 205.414 15.71 205.75 15.47C206.098 15.218 206.272 14.87 206.272 14.426C206.272 14.09 206.194 13.832 206.038 13.652C205.882 13.46 205.642 13.31 205.318 13.202C205.006 13.094 204.586 13.004 204.058 12.932C203.254 12.812 202.588 12.656 202.06 12.464C201.532 12.26 201.136 11.978 200.872 11.618C200.608 11.246 200.476 10.766 200.476 10.178C200.476 9.602 200.632 9.104 200.944 8.684C201.268 8.252 201.712 7.916 202.276 7.676C202.84 7.424 203.494 7.298 204.238 7.298C205.006 7.298 205.666 7.424 206.218 7.676C206.77 7.928 207.196 8.276 207.496 8.72C207.796 9.164 207.952 9.686 207.964 10.286H206.146C206.134 9.902 206.044 9.596 205.876 9.368C205.72 9.128 205.498 8.954 205.21 8.846C204.934 8.726 204.598 8.666 204.202 8.666C203.614 8.666 203.152 8.786 202.816 9.026C202.492 9.266 202.33 9.59 202.33 9.998C202.33 10.31 202.414 10.562 202.582 10.754C202.75 10.934 203.008 11.078 203.356 11.186C203.716 11.282 204.172 11.372 204.724 11.456C205.276 11.528 205.762 11.63 206.182 11.762C206.614 11.882 206.974 12.05 207.262 12.266C207.562 12.482 207.784 12.752 207.928 13.076C208.072 13.4 208.144 13.796 208.144 14.264C208.144 15.2 207.784 15.92 207.064 16.424C206.344 16.928 205.396 17.18 204.22 17.18Z" fill="#FF7500"/>
<path d="M60 18L66 12L60 6" stroke="#FF7500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>




            <h2 className="font-mono-sans text-sm 2xl:text-xl pb-2 font-light italic leading-relaxed text-center 2xl:text-left">
            <span className="text-orange-500 font-bold">Submit Tickets</span>
          </h2>
          <h1 className="font-mono-sans font-medium text-[61px] leading-[84px] text-left 2xl:text-left ">Open A Ticket</h1>

</div>
          <p className="font-mono-sans text-[10px] 2xl:text-[16px] font-light leading-loose text-left 2xl:text-left text-[#EBEBEB]">
          Lorem ipsum dolor sit amet consectetur. Morbi neque ultricies at faucibus nibh. Lorem donec quam malesuada ultrices id enim etiam suspendisse nunc. Arcu volutpat purus vitae dictum dapibus mi est. Et aliquet in et hendrerit. Velit sagittis urna vitae lectus cras. Enim augue ullamcorper quis.</p>
          <div className="flex flex-row justify-start 2xl:justify-start !mt-10 ">
         
          </div>
       
        </div>

        
      </div>
    </div>
  </section>
      );
    };
export default HeroHosting;