import React from 'react';
import Address from './Address';

const Cart = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex mt-8 gap-2'>
        {/* left side */}
        <div className='w-[60%] lg:w-[600px]'>
          <Address />
        </div>
        {/* left side */}
        <span className='h-full w-[1px] bg-[#eaeaec]'></span>
        {/* right side */}
        <div className='lg:w-[300px]'>
          <h1 className='text-[25px] font-semibold'>Right Side</h1>
        </div>
        {/* right side */}
      </div>
    </div>
  );
};

export default Cart;
