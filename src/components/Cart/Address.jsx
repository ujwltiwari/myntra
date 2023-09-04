import React from 'react';

const Address = () => {
  return (
    <div className='flex gap-4 justify-between items-center p-4 border border-bg-[#eaeaec]'>
      <div className='text-[13px] text-gray-500 leading-[22px]'>
        <p>
          Deliver to:{' '}
          <span className='text-black font-semibold'>
            Ujjwal Tiwari, 173205
          </span>
        </p>
        <p className='text-[12px]'>
          Room No 2, Chandel Colony, Abbott Healthcare, Bhatoli Kalan, Baddi
        </p>
      </div>
      <button className='text-[11px] h-[35px] py-[8px] px-[16px] text-myntraPink uppercase font-bold border-[1px] border-myntraPink rounded-sm cursor-pointer'>
        Change Address
      </button>
    </div>
  );
};

export default Address;
