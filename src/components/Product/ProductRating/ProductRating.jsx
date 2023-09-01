import React from 'react';
import { HiStar } from 'react-icons/hi';

const ProductRating = ({ stars, rating, source }) => {
  return (
    <>
      {source === 'singleProduct' ? (
        <div
          className={`w-[80px] bg-gray-100 flex gap-1 items-center p-1 rounded-sm absolute top-[225px] sm:top-[248px] left-2`}
        >
          <p className='text-[11px] font-bold'>{stars}</p>
          <HiStar color='green' />
          <span className='h-[9px] w-[1px] bg-neutral-950'></span>
          <p className='text-[11px] font-bold'>{rating}</p>
        </div>
      ) : (
        <div
          className={`max-w-[150px] w-auto flex gap-1 p-1 px-2 items-center rounded-sm border-solid border-[1px] border-#535766 hover:border-gray-950 cursor-pointer`}
        >
          <p className='text-[14px] font-bold'>{stars}</p>
          <HiStar color='green' size={20} />
          <span className='h-[14px] w-[1px] bg-neutral-950'></span>
          <p className='text-[14px] text-[#535665]'>{rating}K Ratings</p>
        </div>
      )}
    </>
  );
};

export default ProductRating;
