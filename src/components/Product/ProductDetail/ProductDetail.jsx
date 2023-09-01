/* eslint-disable react/no-unescaped-entities */
import DefaultBreadcrumb from '@/components/BreadCrumb/BreadCrumb';
import React, { useEffect, useState } from 'react';
import ProductGallery from './ProductGallery';
import GET_POST_QUERY from './SingleProductQuery.gql';
import { useQuery } from '@apollo/client';
import Loader from '@/components/Loader/Loader';
import ProductRating from '../ProductRating/ProductRating';
import { useSelector } from 'react-redux';
import { Button, Tooltip } from 'flowbite-react';
import Bag from '../../../../public/icons/Bag';
import Heart from '../../../../public/icons/Heart';
import RightArrow from '../../../../public/icons/RightArrow';
import DeliveryVehicle from '../../../../public/icons/DeliveryVehicle';
import ProductOffers from './ProductOffers';
import Detail from '../../../../public/icons/Detail';
import Stars from '../../../../public/icons/Stars';
import ProductReviews from './ProductReviews';

const ProductDetail = () => {
  const sizes = useSelector((state) => state.size.value);
  console.log('sizes', sizes);
  const { loading, error, data } = useQuery(GET_POST_QUERY);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!loading) {
      setProduct(data.products[0]);
    }
  }, [data, loading]);

  return (
    <div className='2xl:px-[150px]'>
      <DefaultBreadcrumb
        category={'Shirts'}
        name={'Product.name'}
        url={'url'}
      />

      {/* Product Details */}

      {!data ? (
        <div className='flex items-center justify-center h-[500px]'>
          <Loader />
        </div>
      ) : (
        <div className='product-details-wrapper flex gap-5 mt-6'>
          <ProductGallery images={product?.image_gallery} />
          <div className='product-details text-[40px] w-[40%] flex flex-col gap-1'>
            <h1 className='text-[24px] font-bold'>HRX by Hrithik Roshan</h1>
            <p className='text-[18px] text-[#535665]'>{product?.name}</p>
            <ProductRating stars={4} rating={60.1} source={'product-detail'} />
            <hr className='h-[1px] my-2 bg-[#535665] border-5 dark:bg-[#535665]' />
            {/* Pricing Information */}
            <div>
              <div className='flex gap-3 items-center'>
                <p className='text-[22px] font-medium'>₹{product?.price}</p>
                <p className='text-[22px] text-[#535665] line-through'>
                  MRP ₹{product?.price}
                </p>
                <p className='text-[18px] font-bold text-[#ff905a]'>
                  ({product?.discount * 100}% OFF)
                </p>
              </div>
              <p className='text-[14px] font-bold text-[#03a685]'>
                inclusive of all taxes
              </p>
            </div>
            {/* Pricing Information */}
            {/* Select Sizes */}
            <div className='flex gap-4 mt-5'>
              <p className='text-[14px] font-bold uppercase'>Select Size</p>
              <p className='flex items-center text-[14px] font-bold uppercase text-[#ff3e6c]'>
                <span>Size Chart</span>
                <span>
                  <RightArrow />
                </span>
              </p>
            </div>
            <div className='mt-5 flex gap-3'>
              {sizes.map((size, idx) => (
                <Tooltip
                  content='Garment Measurement: 42 inch'
                  style='light'
                  key={idx}
                >
                  <button
                    className='flex items-center justify-center rounded-full ring-1 ring-gray-300 hover:ring-[#ff3e6c] text-[14px] font-bold cursor-pointer'
                    style={{ width: '50px', height: '50px' }}
                  >
                    {size}
                  </button>
                </Tooltip>
              ))}
            </div>
            {/* Select Sizes */}
            {/* Add to Cart & Wishlist */}
            <div className='flex gap-4 mt-6 mb-3'>
              <Button className='add-cart flex justify-center items-center h-[54px] w-[60%] rounded-[4px] text-[16px] uppercase font-semibold bg-[#FF3E6C] hover:bg-pink-500!important'>
                <Bag />
                &nbsp;&nbsp;
                <p>Add to Bag</p>
              </Button>
              <Button className='add-wishlist flex justify-center items-center h-[54px] w-[35%] rounded-[4px] text-[16px] text-gray-950 uppercase font-semibold bg-[#fff] border-[1px] border-gray-300 hover:border-gray-950'>
                <Heart />
                &nbsp;&nbsp;
                <p>Wishlist</p>
              </Button>
            </div>
            {/* Add to Cart & Wishlist */}
            <hr className='h-[1px] my-2 bg-[#535665] border-5 dark:bg-[#535665]' />
            {/* Pricing Information */}
            <div className='p-1'>
              <div className='flex gap-3 items-center'>
                <p className='text-[14px] font-medium'>₹{product?.price}</p>
                <p className='text-[14px] text-[#535665] line-through'>
                  MRP ₹{product?.price}
                </p>
                <p className='text-[14px] font-bold text-[#ff905a]'>
                  ({product?.discount * 100}% OFF)
                </p>
              </div>
              <p className='text-[14px]'>
                Seller:{' '}
                <span className='text-[#FF3E6C] font-bold'>
                  {product?.seller.replace('Seller Y', 'Omnitech Retail')}
                </span>
              </p>
            </div>
            {/* Pricing Information */}
            <hr className='h-[1px] my-2 bg-[#535665] border-5 dark:bg-[#535665]' />
            {/* Delivery Options */}
            <div className='text-[16px] uppercase font-semibold flex gap-2 items-center mt-3'>
              <span>Delivery Options</span>
              <span>
                <DeliveryVehicle />
              </span>
            </div>
            <div className='relative'>
              <input
                type='text'
                placeholder='Enter Pincode'
                className='h-[40px] w-[250px] max-w-[50%] text-[14px] border-[1px] border-gray-200 rounded-[4px] focus:ring-gray-200 focus:border-gray-200'
              />
              <button className='text-[12px] text-pink-500 font-bold absolute inset-y-0 left-[35%] top-4'>
                Check
              </button>
            </div>
            <p className='text-[12px] mt-1'>
              Please enter PIN code to check delivery time & Pay on Delivery
              Availability
            </p>
            {/* Delivery Options */}

            {/* Delivery Info */}
            <p className='text-[15px] mt-4'>100% Original Products</p>
            <p className='text-[15px]'>Pay on delivery might be available</p>
            <p className='text-[15px]'>Easy 14 days returns and exchanges</p>
            <p className='text-[15px]'>Try & Buy might be available</p>
            {/* Delivery Info */}

            <ProductOffers initialStyle={{ marginTop: 20 }} />

            <hr className='h-[1px] my-2 bg-[#535665] border-5 dark:bg-[#535665]' />

            {/* Product Description & In Depth Detail */}
            <div className='product-desc'>
              <div className='flex gap-2 items-center mt-2'>
                <span className='text-[15px] uppercase font-semibold'>
                  Product Details
                </span>
                <span>
                  <Detail />
                </span>
              </div>
              <p className='text-[14px] mt-2'>
                Strike a pose with the HRX Men's Athleisure T-shirt. It's just
                what you need to amp up your style without compromising on
                comfort.
              </p>

              <p className='text-[15px] font-semibold mt-8'>Features</p>
              <ul className='text-[14px] leading-6'>
                <li>
                  Athleisure T-shirt can be paired with tracks, khakis or jeans
                </li>
                <li>Style: Round Neck</li>
                <li>Sleeve: Short Sleeves</li>
                <li>Colour: White</li>
                <li>Print: Geometric</li>
                <li>Fit: Regular</li>
              </ul>

              <p className='text-[15px] font-semibold mt-8'>Size & Fit</p>
              <p className='text-[14px]'>
                The model height 6' is wearing a size M
              </p>

              <p className='text-[15px] font-semibold mt-8'>Material & Care</p>
              <p className='text-[14px]'>100% cotton</p>
              <p className='text-[14px]'>Machine Wash</p>

              <p className='text-[15px] font-semibold mt-8 mb-2'>
                Specifications
              </p>
              <ul className='text-gray-700 text-[15px] flex flex-wrap gap-12'>
                <li className='flex flex-col w-[45%] h-[10px]'>
                  <span className='text-[12px] text-gray-500'>Fit</span>
                  <span>Regular Fit</span>
                  <hr className='h-[1px] my-2 bg-[#535665] border-5 dark:bg-[#535665]' />
                </li>
                <li className='flex flex-col w-[45%] h-[10px]'>
                  <span className='text-[12px] text-gray-500'>Length</span>
                  <span>Regular</span>
                  <hr className='h-[1px] my-2 bg-[#535665] border-5 dark:bg-[#535665]' />
                </li>
                <li className='flex flex-col w-[45%] h-[10px]'>
                  <span className='text-[12px] text-gray-500'>Main Trend</span>
                  <span>Geometric Print</span>
                  <hr className='h-[1px] my-2 bg-[#535665] border-5 dark:bg-[#535665]' />
                </li>
                <li className='flex flex-col w-[45%] h-[10px]'>
                  <span className='text-[12px] text-gray-500'>
                    Multipack Set
                  </span>
                  <span>Single</span>
                  <hr className='h-[1px] my-2 bg-[#535665] border-5 dark:bg-[#535665]' />
                </li>
                <li className='flex flex-col w-[45%] h-[10px]'>
                  <span className='text-[12px] text-gray-500'>Neck</span>
                  <span>Round Neck</span>
                  <hr className='h-[1px] my-2 bg-[#535665] border-5 dark:bg-[#535665]' />
                </li>
                <li className='flex flex-col w-[45%] h-[10px]'>
                  <span className='text-[12px] text-gray-500'>Occasion</span>
                  <span>Casual</span>
                  <hr className='h-[1px] my-2 bg-[#535665] border-5 dark:bg-[#535665]' />
                </li>
                <li className='flex flex-col w-[45%] h-[10px]'>
                  <span className='text-[12px] text-gray-500'>Pattern</span>
                  <span>Printed</span>
                  <hr className='h-[1px] my-2 bg-[#535665] border-5 dark:bg-[#535665]' />
                </li>
                <li className='flex flex-col w-[45%] h-[10px]'>
                  <span className='text-[12px] text-gray-500'>
                    Pattern Coverage{' '}
                  </span>
                  <span>Chest</span>
                  <hr className='h-[1px] my-2 bg-[#535665] border-5 dark:bg-[#535665]' />
                </li>
              </ul>
              {/* Product Description & In Depth Detail */}

              {/* Ratings & Product Review  */}
              <ProductReviews />
              {/* Ratings & Product Review */}
            </div>
          </div>
        </div>
      )}
      {/* Product Details */}
    </div>
  );
};

export default ProductDetail;
