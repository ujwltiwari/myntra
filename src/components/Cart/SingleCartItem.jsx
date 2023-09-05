import Image from 'next/image';
import React from 'react';
import Cross from '../../../public/icons/Cross';
import DownArrow from '../../../public/icons/DownArrow';
import Returns from '../../../public/icons/Returns';

const SingleCartItem = ({ product }) => {
  const image = product.image;
  console.log('singlecartitem', product);

  return (
    <div className='flex gap-3 border border-bg-[#eaeaec] p-4'>
      {/* Product Image */}
      <div
        className='h-[150px] w-[120px] bg-contain bg-no-repeat p-2'
        style={{ backgroundImage: `url(${image})` }}
      >
        <div class='bulkActionStrip-selectionIcon w-[16px] fill-myntraPink absolute'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            class='itemComponents-base-activeProduct '
          >
            <path
              fill-rule='evenodd'
              d='M11.83 6.11l-4.751 4.583a.604.604 0 0 1-.425.164h-.003a.608.608 0 0 1-.424-.16L4.176 8.74a.55.55 0 0 1 0-.805.62.62 0 0 1 .846 0l1.57 1.506c.03.028.078.027.107-.001l4.274-4.124a.62.62 0 0 1 .847-.01c.236.22.24.58.01.805M14.285 0H1.714C.77 0 0 .77 0 1.714v12.572C0 15.23.77 16 1.714 16h12.572C15.23 16 16 15.23 16 14.286V1.714C16 .77 15.23 0 14.286 0'
            ></path>
          </svg>
        </div>
      </div>
      {/* Product Image */}

      {/* Product Details */}
      <div className='w-[70%] text-[14px]'>
        <p className='font-semibold'>Flying Machine</p>
        <p className='text-[13px] md:truncate text-gray-600'>{product.name}</p>
        <p className='text-[12px] truncate text-gray-400'>
          Sold By: {product.seller}
        </p>
        <div className='flex gap-3 mt-1'>
          <button className='flex gap-2 items-center bg-gray-100 text-[13px] font-semibold px-[6px] py-[2px]'>
            Size: 42 <DownArrow />
          </button>
          <button className='flex gap-2 items-center bg-gray-100 text-[13px] font-semibold px-[6px] py-[2px]'>
            Qty: 1 <DownArrow />
          </button>
        </div>

        {/* Pricing Information */}
        <div className='flex mt-2 gap-3'>
          <p className='text-[13px] font-semibold'>₹{product?.price}</p>
          <p className='text-[13px] text-[#535665] line-through'>
            ₹{product?.price}
          </p>
          <p className='text-[13px] text-[#f16565]'>
            ({product?.discount * 100}% OFF)
          </p>
        </div>
        {/* Pricing Information */}
        <div className='flex gap-2 items-center mt-2 text-[12px]'>
          <Returns /> <span className='font-bold'>14 Days</span> Returns
          Available
        </div>
      </div>
      {/* Product Details */}
      <div className='ml-auto cursor-pointer'>
        <Cross />
      </div>
    </div>
  );
};

export default SingleCartItem;
