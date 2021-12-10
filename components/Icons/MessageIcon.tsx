function MessageIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox='0 0 29 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M24.7324 10.1313C24.2807 7.75868 23.1371 5.49094 21.3036 3.65517C16.4362 -1.21839 8.54399 -1.21839 3.67657 3.65517C2.19174 5.14187 0.880425 7.34256 0.306937 9.78581C-0.270024 12.2438 -0.110061 15.0049 1.44829 17.5157C1.52808 17.6442 1.57743 17.7239 1.61229 17.7835C1.62837 17.811 1.63683 17.8266 1.6404 17.8334C1.64364 17.842 1.64564 17.8479 1.64682 17.8516C1.6468 17.8561 1.64662 17.8637 1.64587 17.8752C1.64491 17.8805 1.64268 17.8921 1.63815 17.9122C1.62662 17.9632 1.60907 18.0315 1.57784 18.1521L1.56878 18.1871C1.3898 18.8785 1.2427 19.4467 1.15623 19.9058C1.06918 20.368 1.01883 20.8345 1.11141 21.29C1.37541 22.5888 2.38951 23.605 3.68841 23.8696C4.14406 23.9625 4.61054 23.9119 5.07225 23.8248C5.53092 23.7382 6.09856 23.5908 6.78899 23.4117L6.824 23.4026C6.94447 23.3713 7.01264 23.3537 7.0636 23.3422C7.08343 23.3377 7.095 23.3355 7.10036 23.3345C7.11093 23.3338 7.11815 23.3336 7.12266 23.3335C7.12638 23.3347 7.13201 23.3366 7.13987 23.3396C7.14668 23.3432 7.16249 23.3517 7.19021 23.3679C7.25024 23.4029 7.33054 23.4525 7.45979 23.5325C8.29597 24.0499 9.16627 24.4115 10.0479 24.6405C10.375 25.0961 10.7428 25.5308 11.1511 25.9396C12.3541 27.1442 14.1916 28.2374 16.2383 28.7276C18.2993 29.2213 20.6474 29.1178 22.7721 27.8032C22.8751 27.7394 22.9381 27.7006 22.9845 27.6733C23.0215 27.6821 23.0725 27.6953 23.1569 27.7172L23.1909 27.726C23.7551 27.8724 24.2275 27.995 24.6112 28.0675C24.998 28.1405 25.4098 28.1875 25.8196 28.1039C26.9596 27.8716 27.8495 26.9799 28.0812 25.8402C28.1644 25.4305 28.1177 25.0187 28.0448 24.6317C27.9724 24.2476 27.85 23.7747 27.7038 23.2098L27.6949 23.1757C27.6728 23.0903 27.6597 23.0391 27.6508 23.0019C27.678 22.9558 27.7167 22.8933 27.7805 22.7905C29.0939 20.6744 29.2261 18.35 28.7425 16.2898C28.2624 14.2444 27.1656 12.4027 25.9201 11.1556C25.5448 10.7799 25.1476 10.4384 24.7324 10.1313ZM19.872 5.08494C15.7949 1.00273 9.18522 1.00273 5.10815 5.08494C3.88072 6.31392 2.76152 8.1826 2.27669 10.2482C1.79533 12.2989 1.94923 14.4861 3.16737 16.4487C3.17889 16.4673 3.19058 16.486 3.20236 16.5049C3.31849 16.6913 3.44357 16.8921 3.51609 17.0744C3.64473 17.3978 3.68927 17.6905 3.66268 18.0376C3.64774 18.2326 3.59532 18.4336 3.54928 18.6102C3.54497 18.6268 3.54072 18.6431 3.53656 18.6592C3.34629 19.3942 3.2169 19.8962 3.14456 20.2803C3.07132 20.6692 3.08115 20.823 3.09415 20.887C3.1967 21.3915 3.59019 21.7848 4.09239 21.8871C4.15559 21.9 4.30865 21.9099 4.69686 21.8366C5.08038 21.7642 5.58162 21.6347 6.31576 21.4442C6.33183 21.44 6.34815 21.4357 6.36468 21.4314C6.54087 21.3854 6.74173 21.3329 6.93623 21.3178C7.28295 21.291 7.57376 21.335 7.89699 21.4632C8.07889 21.5353 8.28034 21.6604 8.46766 21.7767C8.48673 21.7886 8.50565 21.8003 8.52439 21.8119C8.56127 21.8347 8.59821 21.8572 8.63523 21.8792C7.41553 18.2374 8.25342 14.0569 11.1511 11.1556C14.1541 8.14884 18.53 7.35651 22.2574 8.77723C21.7498 7.43125 20.9549 6.1692 19.872 5.08494ZM23.2399 11.5532C19.9661 9.33925 15.4803 9.68411 12.5826 12.5854C9.70881 15.4629 9.34552 19.9055 11.4968 23.1772C11.8061 23.6477 12.1679 24.0947 12.5826 24.5099C13.522 25.4504 15.0273 26.3571 16.7096 26.76C18.3777 27.1595 20.1449 27.0495 21.7075 26.0826C21.723 26.073 21.7389 26.0631 21.7552 26.053C21.9056 25.9594 22.0865 25.847 22.2523 25.7812C22.5438 25.6657 22.8105 25.6253 23.1231 25.6495C23.3003 25.6632 23.4819 25.7108 23.6239 25.748C23.638 25.7517 23.6518 25.7553 23.6651 25.7588C24.2722 25.9163 24.6781 26.0211 24.9866 26.0793C25.2999 26.1385 25.3982 26.1249 25.4157 26.1214C25.7589 26.0514 26.0282 25.7825 26.0984 25.4372C26.1021 25.419 26.1155 25.3199 26.0564 25.0061C25.9982 24.6971 25.8935 24.2905 25.7362 23.6828C25.7328 23.6694 25.7292 23.6557 25.7255 23.6415C25.6883 23.4992 25.6408 23.3174 25.6272 23.1398C25.6032 22.8269 25.644 22.5586 25.76 22.267C25.8261 22.1008 25.9385 21.9205 26.0319 21.7708C26.042 21.7547 26.0519 21.7389 26.0614 21.7235C27.0346 20.1556 27.1608 18.405 26.7728 16.7521C26.3813 15.0844 25.4766 13.5748 24.4885 12.5854C24.0981 12.1945 23.6796 11.8506 23.2399 11.5532Z'
      />
      <path d='M15.8489 18.5468C15.8489 19.2917 15.245 19.8956 14.5 19.8956C13.755 19.8956 13.1511 19.2917 13.1511 18.5468C13.1511 17.8018 13.755 17.1979 14.5 17.1979C15.245 17.1979 15.8489 17.8018 15.8489 18.5468Z' />
      <path d='M19.8954 18.5468C19.8954 19.2917 19.2915 19.8956 18.5466 19.8956C17.8016 19.8956 17.1977 19.2917 17.1977 18.5468C17.1977 17.8018 17.8016 17.1979 18.5466 17.1979C19.2915 17.1979 19.8954 17.8018 19.8954 18.5468Z' />
      <path d='M23.942 18.5468C23.942 19.2917 23.3381 19.8956 22.5931 19.8956C21.8482 19.8956 21.2443 19.2917 21.2443 18.5468C21.2443 17.8018 21.8482 17.1979 22.5931 17.1979C23.3381 17.1979 23.942 17.8018 23.942 18.5468Z' />
    </svg>
  );
}

export default MessageIcon;
