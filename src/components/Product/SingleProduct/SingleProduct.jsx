import React, { useState } from 'react';
import ProductRating from '../ProductRating/ProductRating';
import Link from 'next/link';
import Image from 'next/image';

const SingleProduct = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className='w-[48%] sm:w-[210px] h-[360px] relative mb-12 md:mb-8 cursor-pointer'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={`/product-detail/${product.id}`} target='_blank'>
          {/* is product new  */}
          {product.is_new && (
            <div className='text-[7px] uppercase font-bold bg-[rgba(255,63,108,.8)] product-tag'>
              New Season
            </div>
          )}
          {/* is product new  */}

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

          {!isHovered && (
            <>
              <div className='product-info mt-2 px-2'>
                {/* product info */}
                <p className='text-[14px] font-bold'>Huetrap</p>
                <p className='text-[13px] overflow-hidden text-ellipsis whitespace-nowrap mt-1'>
                  Typography Print T-Shirt To Be Used Always
                </p>
                {/* product info */}
              </div>

              {/* products pricing details */}
              <div className='product-pricing mt-1 flex gap-1 items-center px-2'>
                <p className='text-[13px] font-bold'>Rs. 395</p>
                <p className='text-[11px] line-through text-gray-600/100'>
                  Rs. 1099
                </p>
                <p className='text-[11px] text-red-600/100'>(64% OFF)</p>
              </div>
              {/* products pricing details */}
            </>
          )}

          {/* Product Rating */}
          {!isHovered && (
            <div
              className={`product-rating ${
                isHovered
                  ? 'opacity-0 transition-opacity duration-300 ease-in-out'
                  : ''
              }`}
            >
              <ProductRating
                stars={4}
                rating={'22.5k'}
                source={'singleProduct'}
                isHovered={isHovered}
              />
            </div>
          )}
          {/* Product Rating */}

          {/* Show Wishlist, Size & Other Info When Hovered */}
          {isHovered && (
            <div className='absolute w-full h-[30%] shadow-lg flex flex-col items-center mt-0 md:mt-3 px-2 gap-2 rounded'>
              {/* Add to Wishlist */}
              <button className='w-full h-[35px] text-[11px] font-bold uppercase flex items-center justify-center gap-1 border-solid border-[1px] border-#535766 hover:border-gray-950'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 256 256'
                >
                  <path
                    fill='currentColor'
                    d='M178 34c-21 0-39.26 9.47-50 25.34C117.26 43.47 99 34 78 34a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.68 334.68 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.68 334.68 0 0 0 53.06-37C219.8 153.59 238 123.2 238 94a60.07 60.07 0 0 0-60-60Zm-50 175.11C111.59 199.64 30 149.72 30 94a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 56.83 157.72 46 178 46a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11Z'
                  />
                </svg>
                Wishlist
              </button>
              {/* Add to Wishlist */}

              {/* Size Info */}
              <p className='text-[13px] self-start'>Sizes: M</p>
              {/* Size Info */}

              {/* products pricing details */}
              <div className='product-pricing flex gap-1 w-full items-center'>
                <p className='text-[13px] font-bold'>Rs. 395</p>
                <p className='text-[11px] line-through text-gray-600/100'>
                  Rs. 1099
                </p>
                <p className='text-[11px] text-red-600/100'>(64% OFF)</p>
              </div>
              {/* products pricing details */}
            </div>
          )}
        </Link>
      </div>
      {/* Show Wishlist, Size & Other Info When Hovered */}
    </>
  );
};

export default SingleProduct;

const hello = [
  'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18450010/2022/5/27/6eb26ad8-a5ef-465f-9581-33087ea4555e1653640514139Jeans1.jpg',
  'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18450010/2022/5/27/4020bdec-e17a-45ba-9d3b-654e87f7f5ab1653640514152Jeans2.jpg',
  'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18450010/2022/5/27/90dbc1dc-6027-4655-af50-37da86331dbd1653640514100Jeans3.jpg',
  'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18450010/2022/5/27/12b216b3-4023-43b6-8978-da69895b8bf51653640514125Jeans5.jpg',
];
