import React from 'react';
import Address from './Address';
import Offers from './Offers';

const Cart = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex mt-8 gap-2'>
        {/* left side */}
        <div className='w-[60%] lg:w-[600px]'>
          <Address />
          <Offers />
          <div className='flex justify-between items-center gap-4 p-4 my-2'>
            <div className='flex gap-4 items-center'>
              <div class='bulkActionStrip-selectionIcon w-[16px] fill-myntraPink'>
                <svg
                  width='16px'
                  height='16px'
                  viewBox='0 0 16 16'
                  class='bulkActionStrip-activeIcon'
                >
                  <path
                    d='M827.006 389c1.1 0 1.994.893 1.994 1.994v12.012c0 1.1-.893 1.994-1.994 1.994h-12.012c-1.1 0-1.994-.893-1.994-1.994v-12.012c0-1.1.893-1.994 1.994-1.994zm-2.337 7.2h-7.394a.748.748 0 00-.518.209l-.17.163-.012.012a.519.519 0 00.01.734l.171.167c.14.136.327.212.522.212h7.388a.748.748 0 00.527-.217l.163-.162a.525.525 0 00-.002-.746l-.162-.158a.748.748 0 00-.523-.214z'
                    transform='translate(-813 -389)'
                    stroke='none'
                    stroke-width='1'
                    fill-rule='evenodd'
                  ></path>
                </svg>
              </div>
              <p className='text-[14px] font-bold uppercase'>
                2/23 Items Selected
              </p>
            </div>
            <div className='flex gap-4 text-[11px] text-gray-600 font-bold'>
              <button className='uppercase'>Remove</button>
              <span className='h-[30px] w-[1px] bg-gray-300'></span>
              <button className='uppercase'>Move to Wishlist</button>
            </div>
          </div>
        </div>
        {/* left side */}
        <span className='h-full w-[1px] bg-[#eaeaec] ml-1'></span>
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
