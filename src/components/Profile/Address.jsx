import React from 'react';

const Index = () => {
  return (
    <div className='max-w-screen-md	w-[640px] mt-2'>
      <div className='flex justify-between'>
        <h6 className='font-semibold text-gray-900 text-[16px] mx-4 my-3'>
          Saved Addresses
        </h6>
        <button className='border-[1px] border-gray-200 rounded text-[13px] font-semibold text-[#516CCF] h-[40px] w-[180px]'>
          + Add New Address
        </button>
      </div>
    </div>
  );
};

export default Index;
