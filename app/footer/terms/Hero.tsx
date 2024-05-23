import React from 'react';

const HeroHosting = () => {
  return (
    <section className="h-full min-h-[80vh] overflow-hidden relative bg-black space-y-40 flex flex-col items-center justify-center">
      
    <img src="/home.jpg" width={1920} height={1080} alt="" className="w-full absolute inset-0 h-full opacity-30 object-cover bg-blend-color-dodge !z-[1]" />
    <div className="relative z-[2] w-full h-full flex flex-col space-y-10 justify-center items-center text-white">
    <svg  className="2xl:flex hidden absolute -translate-y-96 -translate-x-[490px] justify-start "width="241" height="24" viewBox="0 0 241 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.674 17V3.878H2.204V9.926L1.952 9.674H10.394L10.142 9.926V3.878H11.672V17H10.142V10.772L10.394 11.024H1.952L2.204 10.772V17H0.674ZM18.6353 17.162C17.9513 17.162 17.3273 17.048 16.7633 16.82C16.2113 16.592 15.7313 16.262 15.3233 15.83C14.9273 15.398 14.6153 14.888 14.3873 14.3C14.1713 13.7 14.0633 13.034 14.0633 12.302C14.0633 11.33 14.2493 10.478 14.6213 9.746C14.9933 9.014 15.5213 8.444 16.2053 8.036C16.9013 7.616 17.7113 7.406 18.6353 7.406C19.3193 7.406 19.9373 7.52 20.4893 7.748C21.0533 7.964 21.5333 8.288 21.9293 8.72C22.3253 9.152 22.6313 9.668 22.8473 10.268C23.0633 10.868 23.1713 11.54 23.1713 12.284C23.1713 13.244 22.9853 14.09 22.6133 14.822C22.2533 15.554 21.7313 16.13 21.0473 16.55C20.3633 16.958 19.5593 17.162 18.6353 17.162ZM18.6353 15.902C19.2473 15.902 19.7813 15.764 20.2373 15.488C20.6933 15.2 21.0473 14.786 21.2993 14.246C21.5633 13.694 21.6953 13.04 21.6953 12.284C21.6953 11.72 21.6233 11.216 21.4793 10.772C21.3353 10.316 21.1313 9.932 20.8673 9.62C20.6033 9.296 20.2853 9.05 19.9133 8.882C19.5413 8.714 19.1153 8.63 18.6353 8.63C18.0233 8.63 17.4833 8.78 17.0153 9.08C16.5593 9.368 16.1993 9.782 15.9353 10.322C15.6833 10.862 15.5573 11.522 15.5573 12.302C15.5573 12.854 15.6233 13.358 15.7553 13.814C15.8993 14.258 16.1033 14.636 16.3673 14.948C16.6433 15.26 16.9733 15.5 17.3573 15.668C17.7413 15.824 18.1673 15.902 18.6353 15.902ZM25.241 17V7.55H26.627L26.681 9.512H26.789C27.065 8.816 27.497 8.294 28.085 7.946C28.673 7.586 29.321 7.406 30.029 7.406C30.749 7.406 31.385 7.58 31.937 7.928C32.489 8.276 32.885 8.858 33.125 9.674H33.269C33.545 8.918 33.989 8.354 34.601 7.982C35.225 7.598 35.921 7.406 36.689 7.406C37.325 7.406 37.889 7.538 38.381 7.802C38.885 8.066 39.281 8.498 39.569 9.098C39.857 9.686 40.001 10.466 40.001 11.438V17H38.561V11.726C38.561 11.018 38.471 10.436 38.291 9.98C38.123 9.524 37.865 9.188 37.517 8.972C37.181 8.744 36.737 8.63 36.185 8.63C35.621 8.63 35.123 8.774 34.691 9.062C34.271 9.35 33.941 9.74 33.701 10.232C33.473 10.712 33.359 11.264 33.359 11.888V17H31.883V11.726C31.883 11.018 31.799 10.436 31.631 9.98C31.463 9.524 31.205 9.188 30.857 8.972C30.521 8.744 30.083 8.63 29.543 8.63C28.967 8.63 28.463 8.774 28.031 9.062C27.611 9.35 27.281 9.74 27.041 10.232C26.801 10.712 26.681 11.264 26.681 11.888V17H25.241ZM46.2614 17.162C45.3614 17.162 44.5874 16.964 43.9394 16.568C43.3034 16.172 42.8174 15.608 42.4814 14.876C42.1454 14.144 41.9774 13.292 41.9774 12.32C41.9774 11.324 42.1454 10.46 42.4814 9.728C42.8174 8.984 43.2974 8.414 43.9214 8.018C44.5454 7.61 45.3074 7.406 46.2074 7.406C47.1674 7.406 47.9594 7.622 48.5834 8.054C49.2074 8.486 49.6574 9.086 49.9334 9.854C50.2214 10.622 50.3294 11.51 50.2574 12.518H43.3994C43.4114 13.298 43.5314 13.952 43.7594 14.48C43.9994 14.996 44.3294 15.386 44.7494 15.65C45.1814 15.902 45.6854 16.028 46.2614 16.028C46.9574 16.028 47.5274 15.854 47.9714 15.506C48.4154 15.158 48.6974 14.702 48.8174 14.138H50.2034C50.1314 14.774 49.9094 15.32 49.5374 15.776C49.1774 16.232 48.7094 16.58 48.1334 16.82C47.5694 17.048 46.9454 17.162 46.2614 17.162ZM43.4174 11.69L43.2554 11.474H48.9974L48.8354 11.726C48.8474 10.97 48.7454 10.364 48.5294 9.908C48.3134 9.44 48.0014 9.098 47.5934 8.882C47.1974 8.654 46.7354 8.54 46.2074 8.54C45.6554 8.54 45.1754 8.66 44.7674 8.9C44.3594 9.14 44.0354 9.494 43.7954 9.962C43.5674 10.418 43.4414 10.994 43.4174 11.69Z" fill="white"/>
<path d="M79.284 17V5.588H75.162V3.878H85.404V5.588H81.246V17H79.284ZM88.9354 17.162C88.0114 17.162 87.2134 16.964 86.5414 16.568C85.8814 16.16 85.3774 15.59 85.0294 14.858C84.6814 14.126 84.5074 13.268 84.5074 12.284C84.5074 11.276 84.6814 10.4 85.0294 9.656C85.3774 8.912 85.8754 8.342 86.5234 7.946C87.1834 7.538 87.9694 7.334 88.8814 7.334C89.8774 7.334 90.6994 7.562 91.3474 8.018C92.0074 8.462 92.4814 9.08 92.7694 9.872C93.0574 10.664 93.1654 11.576 93.0934 12.608H86.3254C86.3374 13.304 86.4514 13.886 86.6674 14.354C86.8834 14.81 87.1834 15.158 87.5674 15.398C87.9634 15.626 88.4194 15.74 88.9354 15.74C89.5714 15.74 90.0934 15.59 90.5014 15.29C90.9094 14.978 91.1674 14.576 91.2754 14.084H93.0394C92.9554 14.72 92.7274 15.272 92.3554 15.74C91.9834 16.196 91.5034 16.55 90.9154 16.802C90.3274 17.042 89.6674 17.162 88.9354 17.162ZM86.3434 11.582L86.1634 11.348H91.4554L91.2754 11.6C91.2874 10.94 91.1914 10.4 90.9874 9.98C90.7954 9.56 90.5134 9.254 90.1414 9.062C89.7814 8.858 89.3614 8.756 88.8814 8.756C88.3774 8.756 87.9394 8.864 87.5674 9.08C87.1954 9.296 86.9014 9.614 86.6854 10.034C86.4694 10.454 86.3554 10.97 86.3434 11.582ZM95.0343 17V7.478H96.6903L96.7803 9.17H96.8703C97.0743 8.558 97.4283 8.102 97.9323 7.802C98.4363 7.502 99.0003 7.352 99.6243 7.352C99.7323 7.352 99.8283 7.358 99.9123 7.37C100.008 7.37 100.098 7.376 100.182 7.388V9.134C100.11 9.122 100.02 9.116 99.9123 9.116C99.8163 9.116 99.7143 9.116 99.6063 9.116C99.0423 9.116 98.5623 9.212 98.1663 9.404C97.7703 9.596 97.4643 9.878 97.2483 10.25C97.0323 10.61 96.9063 11.048 96.8703 11.564V17H95.0343ZM101.802 17V7.478H103.566L103.638 9.368H103.746C104.01 8.696 104.424 8.192 104.988 7.856C105.564 7.508 106.2 7.334 106.896 7.334C107.592 7.334 108.216 7.502 108.768 7.838C109.332 8.174 109.734 8.75 109.974 9.566H110.118C110.382 8.822 110.814 8.264 111.414 7.892C112.026 7.52 112.71 7.334 113.466 7.334C114.09 7.334 114.648 7.466 115.14 7.73C115.644 7.994 116.04 8.42 116.328 9.008C116.616 9.596 116.76 10.376 116.76 11.348V17H114.924V11.726C114.924 11.078 114.846 10.544 114.69 10.124C114.534 9.692 114.3 9.374 113.988 9.17C113.676 8.966 113.268 8.864 112.764 8.864C112.248 8.864 111.798 8.996 111.414 9.26C111.03 9.524 110.73 9.878 110.514 10.322C110.31 10.754 110.208 11.246 110.208 11.798V17H108.354V11.726C108.354 11.078 108.276 10.544 108.12 10.124C107.964 9.692 107.73 9.374 107.418 9.17C107.106 8.966 106.704 8.864 106.212 8.864C105.684 8.864 105.228 8.996 104.844 9.26C104.46 9.524 104.16 9.878 103.944 10.322C103.74 10.754 103.638 11.246 103.638 11.798V17H101.802ZM122.587 17.18C121.759 17.18 121.045 17.048 120.445 16.784C119.845 16.52 119.383 16.154 119.059 15.686C118.747 15.206 118.591 14.648 118.591 14.012H120.427C120.427 14.636 120.631 15.098 121.039 15.398C121.447 15.686 121.975 15.83 122.623 15.83C123.283 15.83 123.781 15.71 124.117 15.47C124.465 15.218 124.639 14.87 124.639 14.426C124.639 14.09 124.561 13.832 124.405 13.652C124.249 13.46 124.009 13.31 123.685 13.202C123.373 13.094 122.953 13.004 122.425 12.932C121.621 12.812 120.955 12.656 120.427 12.464C119.899 12.26 119.503 11.978 119.239 11.618C118.975 11.246 118.843 10.766 118.843 10.178C118.843 9.602 118.999 9.104 119.311 8.684C119.635 8.252 120.079 7.916 120.643 7.676C121.207 7.424 121.861 7.298 122.605 7.298C123.373 7.298 124.033 7.424 124.585 7.676C125.137 7.928 125.563 8.276 125.863 8.72C126.163 9.164 126.319 9.686 126.331 10.286H124.513C124.501 9.902 124.411 9.596 124.243 9.368C124.087 9.128 123.865 8.954 123.577 8.846C123.301 8.726 122.965 8.666 122.569 8.666C121.981 8.666 121.519 8.786 121.183 9.026C120.859 9.266 120.697 9.59 120.697 9.998C120.697 10.31 120.781 10.562 120.949 10.754C121.117 10.934 121.375 11.078 121.723 11.186C122.083 11.282 122.539 11.372 123.091 11.456C123.643 11.528 124.129 11.63 124.549 11.762C124.981 11.882 125.341 12.05 125.629 12.266C125.929 12.482 126.151 12.752 126.295 13.076C126.439 13.4 126.511 13.796 126.511 14.264C126.511 15.2 126.151 15.92 125.431 16.424C124.711 16.928 123.763 17.18 122.587 17.18ZM136.075 17.18C135.355 17.18 134.689 17.048 134.077 16.784C133.477 16.508 132.997 16.112 132.637 15.596C132.289 15.068 132.115 14.42 132.115 13.652C132.115 13.1 132.235 12.584 132.475 12.104C132.715 11.612 133.063 11.162 133.519 10.754C133.987 10.346 134.551 10.016 135.211 9.764V9.98C134.875 9.62 134.581 9.272 134.329 8.936C134.089 8.6 133.897 8.252 133.753 7.892C133.621 7.532 133.555 7.154 133.555 6.758C133.555 6.158 133.699 5.63 133.987 5.174C134.275 4.706 134.677 4.346 135.193 4.094C135.721 3.83 136.327 3.698 137.011 3.698C137.635 3.698 138.187 3.824 138.667 4.076C139.147 4.328 139.525 4.676 139.801 5.12C140.077 5.552 140.215 6.056 140.215 6.632C140.215 7.16 140.095 7.64 139.855 8.072C139.627 8.492 139.309 8.864 138.901 9.188C138.493 9.5 138.019 9.752 137.479 9.944V10.034L140.269 13.13C140.401 12.866 140.509 12.56 140.593 12.212C140.689 11.864 140.761 11.504 140.809 11.132C140.869 10.76 140.905 10.406 140.917 10.07H143.959V11.456H142.231C142.183 11.804 142.111 12.164 142.015 12.536C141.919 12.908 141.799 13.262 141.655 13.598C141.523 13.934 141.367 14.228 141.187 14.48L141.169 14.102L143.797 17H141.565L136.003 10.826C135.571 11.006 135.205 11.228 134.905 11.492C134.605 11.756 134.371 12.056 134.203 12.392C134.047 12.716 133.969 13.07 133.969 13.454C133.969 13.934 134.071 14.336 134.275 14.66C134.491 14.972 134.779 15.212 135.139 15.38C135.511 15.548 135.925 15.632 136.381 15.632C137.041 15.632 137.611 15.494 138.091 15.218C138.571 14.942 138.943 14.576 139.207 14.12L140.269 15.254C139.813 15.902 139.213 16.388 138.469 16.712C137.725 17.024 136.927 17.18 136.075 17.18ZM136.525 9.062H136.615C137.023 8.894 137.371 8.702 137.659 8.486C137.947 8.27 138.175 8.018 138.343 7.73C138.511 7.442 138.595 7.13 138.595 6.794C138.595 6.338 138.445 5.96 138.145 5.66C137.857 5.36 137.473 5.21 136.993 5.21C136.657 5.21 136.363 5.282 136.111 5.426C135.859 5.57 135.667 5.768 135.535 6.02C135.403 6.26 135.337 6.536 135.337 6.848C135.337 7.124 135.385 7.388 135.481 7.64C135.589 7.88 135.733 8.114 135.913 8.342C136.093 8.57 136.297 8.81 136.525 9.062ZM155.324 17.162C154.352 17.162 153.47 17.006 152.678 16.694C151.898 16.382 151.22 15.938 150.644 15.362C150.08 14.774 149.648 14.066 149.348 13.238C149.048 12.41 148.898 11.48 148.898 10.448C148.898 9.404 149.048 8.468 149.348 7.64C149.648 6.812 150.086 6.11 150.662 5.534C151.238 4.946 151.916 4.502 152.696 4.202C153.476 3.89 154.352 3.734 155.324 3.734C156.404 3.734 157.364 3.92 158.204 4.292C159.056 4.664 159.752 5.192 160.292 5.876C160.832 6.548 161.162 7.346 161.282 8.27H159.302C159.182 7.718 158.942 7.232 158.582 6.812C158.234 6.38 157.784 6.044 157.232 5.804C156.68 5.552 156.044 5.426 155.324 5.426C154.424 5.426 153.638 5.624 152.966 6.02C152.306 6.416 151.796 6.986 151.436 7.73C151.088 8.474 150.914 9.38 150.914 10.448C150.914 11.24 151.016 11.948 151.22 12.572C151.424 13.196 151.718 13.724 152.102 14.156C152.486 14.576 152.948 14.9 153.488 15.128C154.04 15.356 154.652 15.47 155.324 15.47C156.032 15.47 156.662 15.35 157.214 15.11C157.778 14.87 158.24 14.534 158.6 14.102C158.96 13.658 159.194 13.142 159.302 12.554L161.282 12.572C161.174 13.496 160.85 14.306 160.31 15.002C159.782 15.686 159.086 16.22 158.222 16.604C157.37 16.976 156.404 17.162 155.324 17.162ZM167.427 17.162C166.731 17.162 166.095 17.048 165.519 16.82C164.955 16.592 164.469 16.262 164.061 15.83C163.653 15.398 163.335 14.882 163.107 14.282C162.879 13.682 162.765 13.01 162.765 12.266C162.765 11.282 162.951 10.424 163.323 9.692C163.707 8.948 164.247 8.372 164.943 7.964C165.651 7.544 166.479 7.334 167.427 7.334C168.123 7.334 168.753 7.448 169.317 7.676C169.893 7.892 170.385 8.216 170.793 8.648C171.201 9.08 171.513 9.602 171.729 10.214C171.957 10.814 172.071 11.492 172.071 12.248C172.071 13.22 171.885 14.078 171.513 14.822C171.141 15.554 170.607 16.13 169.911 16.55C169.215 16.958 168.387 17.162 167.427 17.162ZM167.427 15.614C167.979 15.614 168.459 15.488 168.867 15.236C169.287 14.972 169.611 14.588 169.839 14.084C170.067 13.58 170.181 12.968 170.181 12.248C170.181 11.708 170.115 11.234 169.983 10.826C169.863 10.406 169.683 10.052 169.443 9.764C169.203 9.464 168.915 9.242 168.579 9.098C168.243 8.942 167.859 8.864 167.427 8.864C166.875 8.864 166.389 8.996 165.969 9.26C165.561 9.524 165.237 9.908 164.997 10.412C164.769 10.904 164.655 11.522 164.655 12.266C164.655 12.794 164.715 13.268 164.835 13.688C164.967 14.096 165.153 14.444 165.393 14.732C165.645 15.02 165.939 15.242 166.275 15.398C166.623 15.542 167.007 15.614 167.427 15.614ZM174.013 17V7.478H175.777L175.849 9.368H175.957C176.233 8.696 176.665 8.192 177.253 7.856C177.841 7.508 178.483 7.334 179.179 7.334C179.671 7.334 180.121 7.406 180.529 7.55C180.949 7.694 181.309 7.928 181.609 8.252C181.921 8.564 182.161 8.978 182.329 9.494C182.497 9.998 182.581 10.616 182.581 11.348V17H180.727V11.726C180.727 11.078 180.649 10.544 180.493 10.124C180.337 9.692 180.097 9.374 179.773 9.17C179.449 8.966 179.029 8.864 178.513 8.864C177.973 8.864 177.499 8.996 177.091 9.26C176.695 9.524 176.389 9.878 176.173 10.322C175.957 10.754 175.849 11.246 175.849 11.798V17H174.013ZM188.327 17.162C187.751 17.162 187.223 17.054 186.743 16.838C186.275 16.622 185.867 16.31 185.519 15.902C185.171 15.482 184.901 14.966 184.709 14.354C184.529 13.742 184.439 13.034 184.439 12.23C184.439 11.174 184.601 10.28 184.925 9.548C185.261 8.816 185.717 8.264 186.293 7.892C186.881 7.508 187.559 7.316 188.327 7.316C188.855 7.316 189.335 7.4 189.767 7.568C190.211 7.736 190.583 7.976 190.883 8.288C191.195 8.588 191.423 8.942 191.567 9.35H191.675V3.878H193.529V17H191.747L191.675 15.11H191.567C191.339 15.722 190.943 16.22 190.379 16.604C189.815 16.976 189.131 17.162 188.327 17.162ZM188.975 15.632C189.563 15.632 190.055 15.494 190.451 15.218C190.847 14.942 191.147 14.588 191.351 14.156C191.555 13.724 191.657 13.262 191.657 12.77V11.69C191.657 11.33 191.597 10.982 191.477 10.646C191.369 10.298 191.201 9.992 190.973 9.728C190.757 9.452 190.481 9.236 190.145 9.08C189.809 8.912 189.419 8.828 188.975 8.828C188.447 8.828 187.985 8.96 187.589 9.224C187.193 9.476 186.887 9.854 186.671 10.358C186.455 10.85 186.347 11.474 186.347 12.23C186.347 12.974 186.455 13.598 186.671 14.102C186.887 14.606 187.193 14.99 187.589 15.254C187.985 15.506 188.447 15.632 188.975 15.632ZM196.126 17V7.478H197.98V17H196.126ZM196.126 6.02V3.878H197.98V6.02H196.126ZM203.274 17C202.746 17 202.332 16.928 202.032 16.784C201.732 16.628 201.522 16.4 201.402 16.1C201.282 15.8 201.222 15.44 201.222 15.02V8.99H199.422V7.478H201.222V4.724L203.076 4.508V7.478H205.182V8.99H203.076V14.678C203.076 15.002 203.136 15.218 203.256 15.326C203.376 15.422 203.586 15.47 203.886 15.47H205.182V17H203.274ZM207.025 17V7.478H208.879V17H207.025ZM207.025 6.02V3.878H208.879V6.02H207.025ZM215.468 17.162C214.772 17.162 214.136 17.048 213.56 16.82C212.996 16.592 212.51 16.262 212.102 15.83C211.694 15.398 211.376 14.882 211.148 14.282C210.92 13.682 210.806 13.01 210.806 12.266C210.806 11.282 210.992 10.424 211.364 9.692C211.748 8.948 212.288 8.372 212.984 7.964C213.692 7.544 214.52 7.334 215.468 7.334C216.164 7.334 216.794 7.448 217.358 7.676C217.934 7.892 218.426 8.216 218.834 8.648C219.242 9.08 219.554 9.602 219.77 10.214C219.998 10.814 220.112 11.492 220.112 12.248C220.112 13.22 219.926 14.078 219.554 14.822C219.182 15.554 218.648 16.13 217.952 16.55C217.256 16.958 216.428 17.162 215.468 17.162ZM215.468 15.614C216.02 15.614 216.5 15.488 216.908 15.236C217.328 14.972 217.652 14.588 217.88 14.084C218.108 13.58 218.222 12.968 218.222 12.248C218.222 11.708 218.156 11.234 218.024 10.826C217.904 10.406 217.724 10.052 217.484 9.764C217.244 9.464 216.956 9.242 216.62 9.098C216.284 8.942 215.9 8.864 215.468 8.864C214.916 8.864 214.43 8.996 214.01 9.26C213.602 9.524 213.278 9.908 213.038 10.412C212.81 10.904 212.696 11.522 212.696 12.266C212.696 12.794 212.756 13.268 212.876 13.688C213.008 14.096 213.194 14.444 213.434 14.732C213.686 15.02 213.98 15.242 214.316 15.398C214.664 15.542 215.048 15.614 215.468 15.614ZM222.054 17V7.478H223.818L223.89 9.368H223.998C224.274 8.696 224.706 8.192 225.294 7.856C225.882 7.508 226.524 7.334 227.22 7.334C227.712 7.334 228.162 7.406 228.57 7.55C228.99 7.694 229.35 7.928 229.65 8.252C229.962 8.564 230.202 8.978 230.37 9.494C230.538 9.998 230.622 10.616 230.622 11.348V17H228.768V11.726C228.768 11.078 228.69 10.544 228.534 10.124C228.378 9.692 228.138 9.374 227.814 9.17C227.49 8.966 227.07 8.864 226.554 8.864C226.014 8.864 225.54 8.996 225.132 9.26C224.736 9.524 224.43 9.878 224.214 10.322C223.998 10.754 223.89 11.246 223.89 11.798V17H222.054ZM236.458 17.18C235.63 17.18 234.916 17.048 234.316 16.784C233.716 16.52 233.254 16.154 232.93 15.686C232.618 15.206 232.462 14.648 232.462 14.012H234.298C234.298 14.636 234.502 15.098 234.91 15.398C235.318 15.686 235.846 15.83 236.494 15.83C237.154 15.83 237.652 15.71 237.988 15.47C238.336 15.218 238.51 14.87 238.51 14.426C238.51 14.09 238.432 13.832 238.276 13.652C238.12 13.46 237.88 13.31 237.556 13.202C237.244 13.094 236.824 13.004 236.296 12.932C235.492 12.812 234.826 12.656 234.298 12.464C233.77 12.26 233.374 11.978 233.11 11.618C232.846 11.246 232.714 10.766 232.714 10.178C232.714 9.602 232.87 9.104 233.182 8.684C233.506 8.252 233.95 7.916 234.514 7.676C235.078 7.424 235.732 7.298 236.476 7.298C237.244 7.298 237.904 7.424 238.456 7.676C239.008 7.928 239.434 8.276 239.734 8.72C240.034 9.164 240.19 9.686 240.202 10.286H238.384C238.372 9.902 238.282 9.596 238.114 9.368C237.958 9.128 237.736 8.954 237.448 8.846C237.172 8.726 236.836 8.666 236.44 8.666C235.852 8.666 235.39 8.786 235.054 9.026C234.73 9.266 234.568 9.59 234.568 9.998C234.568 10.31 234.652 10.562 234.82 10.754C234.988 10.934 235.246 11.078 235.594 11.186C235.954 11.282 236.41 11.372 236.962 11.456C237.514 11.528 238 11.63 238.42 11.762C238.852 11.882 239.212 12.05 239.5 12.266C239.8 12.482 240.022 12.752 240.166 13.076C240.31 13.4 240.382 13.796 240.382 14.264C240.382 15.2 240.022 15.92 239.302 16.424C238.582 16.928 237.634 17.18 236.458 17.18Z" fill="#FF7500"/>
<path d="M60 18L66 12L60 6" stroke="#FF7500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<h2 className="font-extrabold text-4xl sm:text-5xl md:text-7xl capitalize !mt-5 text-center">General Terms & Conditions</h2>
        <div className="bg-white rounded-full p-1 w-full max-w-5xl mx-auto focus-within:ring-[3px] ring-white/80 transition-all duration-500">
          <form className="flex w-full">
            <input
              type="text"
              alt=""
              className="w-full flex-1 outline-none placeholder:text-[#B8B8B8] bg-transparent rounded-full px-5 text-black text-lg"
              placeholder="Enter the domain you want to transfer"
            />
            <button className="bg-[#FF7500] h-[62px] rounded-full w-full flex-1 max-w-[182px] hover:bg-opacity-80 transition-all duration-300 text-lg">
              Search
            </button>
          </form>
        </div>
      
      </div>

  </section>
      );
    };
export default HeroHosting;
