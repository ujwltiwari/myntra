import React from 'react';

const NotSelected = () => {
  return (
    <div className='itemComponents-base-animationContainer w-[16px] fill-black absolute cursor-pointer'>
      <svg width='16px' height='16px' viewBox='0 0 16 16'>
        <rect
          stroke='#282C3F'
          strokeWidth='1.14'
          fill='#FFF'
          x='0.57'
          y='0.57'
          width='14.86'
          height='14.86'
          rx='1.7'
          fillRule='evenodd'
          fillOpacity='0.5'
          className='itemComponents-base-inactiveProduct itemComponents-base-reduceOpacity'
        ></rect>
      </svg>
    </div>
  );
};

export default NotSelected;
