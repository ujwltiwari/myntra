import { useState } from 'react';
import React from 'react';
import Cross from '../../../public/icons/Cross';
import DownArrow from '../../../public/icons/DownArrow';
import Returns from '../../../public/icons/Returns';
import NotSelected from '../../../public/icons/NotSelected';
import Selected from '../../../public/icons/Selected';
import Link from 'next/link';

const SingleCartItem = ({
  product,
  isSelected,
  handleSelected,
  handleItemDelete,
}) => {
  const image = product.image;
  console.log('singlecartitem', product);

  return (
    <div className='flex gap-3 border border-bg-[#eaeaec] p-4 my-2'>
      {/* Product Image */}
      <div
        className='h-[150px] w-[120px] bg-contain bg-no-repeat p-2'
        style={{ backgroundImage: `url(${image})` }}
      >
        {isSelected ? (
          <div onClick={handleSelected}>
            <Selected />
          </div>
        ) : (
          <div onClick={handleSelected}>
            <NotSelected />
          </div>
        )}
      </div>
      {/* Product Image */}

      {/* Product Details */}
      <div className='w-[70%] text-[14px]'>
        <p className='text-[20px]'>{product.id}</p>
        <Link href={`/product-detail/${product.id}`}>
          <p className='font-semibold'>Flying Machine</p>
          <p className='text-[13px] md:truncate text-gray-600'>
            {product.name}
          </p>
        </Link>
        <p className='text-[12px] truncate text-gray-400'>
          Sold By: {product.seller}
        </p>
        <div className='flex gap-3 mt-1'>
          <button className='flex gap-2 items-center bg-gray-100 text-[13px] font-semibold px-[6px] py-[2px]'>
            Size: 42 <DownArrow />
          </button>
          <button className='flex gap-2 items-center bg-gray-100 text-[13px] font-semibold px-[6px] py-[2px]'>
            Qty: {product.quantity} <DownArrow />
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
      <div className='ml-auto cursor-pointer' onClick={handleItemDelete}>
        <Cross />
      </div>
    </div>
  );
};

export default SingleCartItem;
