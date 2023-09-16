import React, { useState } from 'react';
// import ProductRating from '../ProductRating/ProductRating';
import Link from 'next/link';
import Image from 'next/image';
import { discountCalcultor } from '@/utils/discountCalculator';
import { RxCross1 } from 'react-icons/rx';

const SingleItem = ({ product, handleItemDelete }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className='w-[48%] sm:w-[210px] h-[360px] relative mb-12 md:mb-8 cursor-pointer'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className='flex items-center justify-center itemcard-removeIcon'
          onClick={handleItemDelete}
        >
          <RxCross1 size={13} />
        </div>
        <Link href={`/product-detail/${product.id}`} target='_blank'>
          {/* image */}
          <div className='image-wrapper h-[280px]'>
            <Image
              width={210}
              height={255}
              src={product.image}
              alt=''
              className='h-[255px] sm:h-[100%] w-auto'
            />
          </div>
          {/* image */}

          <div className='h-auto border-[1px] border-[#e9e9eb]'>
            <div className='product-info mt-2 px-2 mb-2'>
              {/* product info */}
              <p className='text-[14px] overflow-hidden text-ellipsis whitespace-nowrap mt-1'>
                Typography Print T-Shirt To Be Used Always
              </p>
              {/* product info */}
            </div>

            {/* products pricing details */}
            <div className='product-pricing mt-1 flex gap-1 items-center justify-center px-2'>
              <p className='text-[13px] font-bold'>
                Rs.{' '}
                {product.price -
                  discountCalcultor(product.price, product.discount) * 100}
              </p>
              <p className='text-[11px] line-through text-gray-600/100'>
                Rs. {product.price}
              </p>
              <p className='text-[11px] text-red-600/100'>
                ({product.discount * 100}% OFF)
              </p>
            </div>
            {/* products pricing details */}

            <button className='flex justify-center w-full py-3 px-2 mt-6 text-[13px] text-myntraPink font-bold uppercase rounded-sm border-t-[1px] border-[#e9e9eb]'>
              Move to Bag
            </button>
          </div>
        </Link>
      </div>
      {/* Show Wishlist, Size & Other Info When Hovered */}
    </>
  );
};

export default SingleItem;

const hello = [
  'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18450010/2022/5/27/6eb26ad8-a5ef-465f-9581-33087ea4555e1653640514139Jeans1.jpg',
  'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18450010/2022/5/27/4020bdec-e17a-45ba-9d3b-654e87f7f5ab1653640514152Jeans2.jpg',
  'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18450010/2022/5/27/90dbc1dc-6027-4655-af50-37da86331dbd1653640514100Jeans3.jpg',
  'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18450010/2022/5/27/12b216b3-4023-43b6-8978-da69895b8bf51653640514125Jeans5.jpg',
];
